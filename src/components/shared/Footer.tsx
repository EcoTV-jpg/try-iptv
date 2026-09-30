import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerLinks } from "@/lib/site-data/footer";
import { socialLinks } from "@/lib/site-data/socials";

type SocialIconName = "x" | "instagram" | "facebook" | "whatsapp";

const socialFooterLinks: {
  name: string;
  href: string;
  ariaLabel: string;
  icon: SocialIconName;
}[] = [
  {
    name: "X",
    href: socialLinks.x,
    ariaLabel: "Follow TryIPTV on X",
    icon: "x",
  },
  {
    name: "Instagram",
    href: socialLinks.instagram,
    ariaLabel: "Follow TryIPTV on Instagram",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: socialLinks.facebook,
    ariaLabel: "Follow TryIPTV on Facebook",
    icon: "facebook",
  },
  {
    name: "WhatsApp",
    href: socialLinks.whatsapp,
    ariaLabel: "Contact TryIPTV on WhatsApp",
    icon: "whatsapp",
  },
];

function SocialIcon({ name }: { name: SocialIconName }) {
  const iconClassName = "h-4 w-4";

  if (name === "x") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.53 3h3.18l-6.95 7.94L21.94 21h-6.4l-5.02-6.56L4.78 21H1.58l7.44-8.5L1.18 3h6.57l4.53 5.99L17.53 3Zm-1.12 16.23h1.76L6.8 4.68H4.91l11.5 14.55Z"
        />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.48H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z"
        />
      </svg>
    );
  }

  return (
    <svg className={iconClassName} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.21 6.46 6.64 2.03 12.1 2.03a9.82 9.82 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

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
              <span
                dangerouslySetInnerHTML={{
                  __html: `<!--email_off--><a href="mailto:${footerLinks.contact.email}" class="flex items-center gap-2 transition-colors duration-200 hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>${footerLinks.contact.email}</a><!--/email_off-->`,
                }}
              />
              <a href="https://wa.me/447848197761" className="flex items-center gap-2 transition-colors duration-200 hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 text-primary" />WhatsApp Support
              </a>
            </address>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-foreground">Social</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="TryIPTV social links">
                {socialFooterLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-label={link.ariaLabel}
                      title={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.1] bg-white/[0.03] text-muted-foreground transition-colors duration-200 hover:border-primary/35 hover:bg-primary/[0.06] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <SocialIcon name={link.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
