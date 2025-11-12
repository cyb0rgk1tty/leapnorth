import Link from "next/link";
import { Separator } from "@/app/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-brand text-foreground tracking-normal uppercase">LEAP NORTH</h3>
            <p className="text-base text-muted-foreground font-semibold">
              True North. True Growth.
            </p>
            <p className="text-base text-muted-foreground">
              Transform your business through integrated marketing and intelligent automation.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/services#marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketing & Growth
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="text-muted-foreground hover:text-primary transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO & Content
                </Link>
              </li>
              <li>
                <Link href="/services#paid-ads" className="text-muted-foreground hover:text-primary transition-colors">
                  Paid Advertising
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>
                <a href="mailto:hello@leapnorth.co" className="hover:text-primary transition-colors">
                  hello@leapnorth.co
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-base text-muted-foreground">
          <p>&copy; {currentYear} Leap North Company. All rights reserved.</p>
          <div className="flex items-center gap-2 my-4 md:my-0">
            <svg className="w-6 h-4" viewBox="0 0 640 480" aria-label="Canadian Flag">
              <path fill="#fff" d="M0 0h640v480H0z"/>
              <path fill="#d52b1e" d="M0 0h213.3v480H0zm426.7 0h213.3v480H426.7z"/>
              <path fill="#d52b1e" d="m318 139.5-26.5 191.2 25-8.3-10 25 35-17.5-7.5 25.8h17.5l-7.5-25.8 35 17.5-10-25 25 8.3-26.5-191.2z"/>
            </svg>
            <span className="font-semibold">Proudly Canadian</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
