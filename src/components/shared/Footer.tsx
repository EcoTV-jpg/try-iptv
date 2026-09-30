import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerLinks } from "@/lib/site-data/footer";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050706]">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:py-16">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-7 text-muted-foreground">
              Premium live TV and on-demand entertainment, built for the devices you already use.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Device Guides</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.supportedLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal & Trust</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Support</h3>
            <address className="mt-4 space-y-3 text-[15px] not-italic text-muted-foreground">
              <a href={`mailto:${footerLinks.contact.email}`} className="flex items-center gap-2 transition-colors duration-200 hover:text-foreground">
                <Mail className="h-4 w-4 text-primary" />
                {footerLinks.contact.email}
              </a>
              <a href="https://wa.me/447848197761" className="flex items-center gap-2 transition-colors duration-200 hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 text-primary" />WhatsApp Support
              </a>
            </address>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TryIPTV. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            {footerLinks.legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-foreground transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
