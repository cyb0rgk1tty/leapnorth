# Contact Form SMTP Setup Guide

## Overview

The Leap North contact form has been configured to use **your own SMTP mail server** instead of third-party services like Resend. This gives you complete control over email delivery.

## What's Already Done

✅ **nodemailer** package installed for SMTP support
✅ **TypeScript types** installed (@types/nodemailer)
✅ **API route updated** to use SMTP instead of Resend API
✅ **Professional email template** with Leap North branding
✅ **Development mode** - works without SMTP config for testing
✅ **Error handling** and validation
✅ **Plain text fallback** for email clients that don't support HTML

---

## SMTP Configuration

### Step 1: Add Environment Variables

Add these variables to `/var/www/leapnorth/.env.local`:

```env
# SMTP Server Settings
SMTP_HOST=your.smtp.server.com
SMTP_PORT=587                    # 587 for TLS, 465 for SSL, 25 for unsecured
SMTP_USER=your-email@domain.com
SMTP_PASS=your-smtp-password

# Email Settings
EMAIL_FROM="Leap North Contact Form <noreply@leapnorth.com>"
EMAIL_TO=hello@leapnorth.com     # Where submissions will be sent

# Optional: For self-signed certificates
SMTP_TLS_REJECT_UNAUTHORIZED=true
```

### Step 2: Configure Your SMTP Server

**Common SMTP Port Options:**
- **Port 587** - STARTTLS (recommended, most compatible)
- **Port 465** - SSL/TLS (secure from start)
- **Port 25** - Unsecured (not recommended)

**Popular SMTP Providers:**

#### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # Not your regular password!
```
Note: You need to create an [App Password](https://support.google.com/accounts/answer/185833) for Gmail.

#### Office 365 / Outlook
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
```

#### Custom Mail Server (cPanel/Plesk)
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-mailbox-password
```

### Step 3: Test the Configuration

1. **Start the development server:**
   ```bash
   cd /var/www/leapnorth
   npm run dev
   ```

2. **Visit the contact form:**
   ```
   http://localhost:3002/contact
   ```

3. **Submit a test message** and check:
   - Server console for logs
   - Your email inbox (EMAIL_TO address)
   - Spam folder (if not received)

---

## Development Mode

**Without SMTP configuration**, the form works in development mode:
- Form submissions are validated
- Success message is displayed
- Data is logged to console (not emailed)
- Perfect for testing the UI/UX

---

## Email Features

### HTML Email Template
Professional branded email with:
- Leap North branding (crimson red #DC143C)
- Clean, responsive layout
- Contact details displayed clearly
- Reply-To automatically set to submitter's email

### Plain Text Fallback
Automatic plain text version for email clients that don't support HTML.

### Email Structure
```
From: Leap North Contact Form <noreply@leapnorth.com>
To: hello@leapnorth.com
Reply-To: [Submitter's email]
Subject: New Contact Form Submission from [Name]
```

---

## Security Features

- ✅ **Server-side validation** with Zod schema
- ✅ **Client-side validation** for instant feedback
- ✅ **Rate limiting ready** (can be added with middleware)
- ✅ **SQL injection protected** (no database queries)
- ✅ **XSS protected** (email content is sanitized)
- ✅ **CORS configured** for API endpoint
- ✅ **Environment variables** for sensitive data

---

## Troubleshooting

### Issue: "Email service not configured" error

**Solution:** Add all required SMTP environment variables to `.env.local`

### Issue: SMTP connection timeout

**Possible causes:**
1. Firewall blocking outbound SMTP ports
2. Incorrect SMTP_HOST or SMTP_PORT
3. Server requires authentication

**Solution:**
```bash
# Test SMTP connection from server
telnet your.smtp.server.com 587
```

### Issue: "Authentication failed"

**Possible causes:**
1. Wrong SMTP_USER or SMTP_PASS
2. 2FA enabled (need app password)
3. "Less secure apps" blocked (Gmail)

**Solution:**
- Verify credentials
- Create an app-specific password
- Enable SMTP access in mail provider settings

### Issue: Emails going to spam

**Solutions:**
1. Configure SPF records for your domain
2. Set up DKIM signing
3. Add DMARC policy
4. Use a verified "From" address
5. Avoid spam trigger words in content

### Issue: Self-signed certificate error

**Solution:** Set environment variable:
```env
SMTP_TLS_REJECT_UNAUTHORIZED=false
```
⚠️ **Warning:** Only use this for development/testing, not production!

---

## Production Checklist

Before going live:

- [ ] SMTP credentials configured in `.env.local`
- [ ] Test email delivery successfully
- [ ] EMAIL_FROM uses a verified domain
- [ ] EMAIL_TO points to monitored inbox
- [ ] SPF/DKIM/DMARC records configured
- [ ] SSL certificate valid (SMTP_TLS_REJECT_UNAUTHORIZED=true)
- [ ] Error monitoring set up
- [ ] Rate limiting configured (optional but recommended)
- [ ] Backup notification method (webhook/Slack) configured (optional)

---

## Advanced Configuration

### Add Rate Limiting

To prevent spam, consider adding rate limiting:

```typescript
// In app/api/contact/route.ts
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3 // limit each IP to 3 requests per windowMs
});
```

### Add Honeypot Field

Add a hidden field to catch bots:

```tsx
// In app/contact/page.tsx
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
```

Then reject submissions if the field is filled.

### Add CAPTCHA

For additional protection, integrate:
- Google reCAPTCHA v3
- hCaptcha
- Cloudflare Turnstile

---

## File Locations

- **Contact Page:** `/var/www/leapnorth/app/contact/page.tsx`
- **API Route:** `/var/www/leapnorth/app/api/contact/route.ts`
- **Environment Example:** `/var/www/leapnorth/.env.example`
- **Environment Config:** `/var/www/leapnorth/.env.local` (you need to create this)

---

## Support

If you encounter issues:

1. Check server console logs for detailed error messages
2. Verify all environment variables are set correctly
3. Test SMTP connection separately
4. Review email provider's SMTP documentation
5. Check firewall rules for outbound SMTP ports

---

**Last Updated:** 2025-11-13
**Version:** 1.0.0 (SMTP)
