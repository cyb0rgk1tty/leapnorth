import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Check for SMTP configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.warn("SMTP configuration incomplete. Email will not be sent.");

      // In development/testing, return success without sending email
      if (process.env.NODE_ENV === "development") {
        console.log("📧 Contact form submission (dev mode):", validatedData);
        return NextResponse.json(
          {
            success: true,
            message: "Form received (development mode - no email sent)",
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error: "Email service not configured. Please contact us directly.",
        },
        { status: 500 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Optional: Add these for better compatibility
      tls: {
        rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== "false",
      },
    });

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: #0a0f1e;
              color: #fff;
              padding: 30px;
              border-radius: 8px 8px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              color: #DC143C;
            }
            .content {
              background: #f5f5f5;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: 600;
              color: #555;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .value {
              background: #fff;
              padding: 12px;
              border-radius: 4px;
              border-left: 3px solid #DC143C;
            }
            .message-box {
              background: #fff;
              padding: 20px;
              border-radius: 4px;
              border-left: 3px solid #DC143C;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              font-size: 12px;
              color: #777;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${validatedData.name}</div>
            </div>

            <div class="field">
              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${validatedData.email}" style="color: #DC143C; text-decoration: none;">
                  ${validatedData.email}
                </a>
              </div>
            </div>

            ${
              validatedData.company
                ? `
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${validatedData.company}</div>
            </div>
            `
                : ""
            }

            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${validatedData.message}</div>
            </div>

            <div class="footer">
              <p>This message was sent from the Leap North website contact form.</p>
              <p>Reply directly to this email to respond to ${validatedData.name}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using SMTP
    const info = await transporter.sendMail({
      from: emailFrom || `"Leap North Contact Form" <${smtpUser}>`,
      to: emailTo || smtpUser,
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: emailHtml,
      text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.company ? `Company: ${validatedData.company}\n` : ""}
Message:
${validatedData.message}

---
This message was sent from the Leap North website contact form.
Reply directly to this email to respond to ${validatedData.name}.
      `.trim(),
    });

    // Log successful submission
    console.log("✅ Contact form email sent successfully:", {
      messageId: info.messageId,
      from: validatedData.email,
      name: validatedData.name,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation error
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: error.issues,
        },
        { status: 400 }
      );
    }

    // Unexpected error
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
