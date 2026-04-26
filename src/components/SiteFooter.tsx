import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

type SiteFooterProps = {
  legalText: ReactNode;
  contactLabel?: ReactNode;
  policyLabel?: ReactNode;
  locale?: "fr" | "en";
  contactHref?: string;
  policyHref?: string;
  className?: string;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  style?: CSSProperties;
  brandStyle?: CSSProperties;
  legalStyle?: CSSProperties;
  linkStyle?: CSSProperties;
  contactLinkStyle?: CSSProperties;
  policyLinkStyle?: CSSProperties;
};

const defaultFooterStyle: CSSProperties = {
  background: "#060D1A",
  padding: "24px 16px",
};

const brandStyle: CSSProperties = {
  fontFamily: "var(--font-playfair)",
  color: "#F5C842",
  fontSize: "1rem",
  fontWeight: 700,
  marginBottom: "6px",
};

const defaultLegalStyle: CSSProperties = {
  color: "rgba(240,235,224,0.3)",
  fontSize: "11px",
};

const defaultLinkStyle: CSSProperties = {
  color: "rgba(240,235,224,0.45)",
  fontSize: "11px",
  display: "block",
  marginTop: "4px",
};

export default function SiteFooter({
  legalText,
  contactLabel,
  policyLabel,
  locale = "fr",
  contactHref = "/contact",
  policyHref = "/politique-confidentialite",
  className,
  contentClassName = "mx-auto max-w-2xl text-center",
  contentStyle,
  style,
  brandStyle: brandStyleOverride,
  legalStyle,
  linkStyle,
  contactLinkStyle,
  policyLinkStyle,
}: SiteFooterProps) {
  const resolvedContactLabel = contactLabel ?? (locale === "fr" ? "Contactez-nous" : "Contact us");
  const resolvedPolicyLabel = policyLabel ?? (locale === "fr" ? "Politique de confidentialité" : "Privacy policy");
  const mergedLinkStyle = { ...defaultLinkStyle, ...linkStyle };

  return (
    <footer className={className} style={{ ...defaultFooterStyle, ...style }}>
      <div className={contentClassName} style={contentStyle}>
        <p style={{ ...brandStyle, ...brandStyleOverride }}>ArgentQC.ca</p>
        <p style={{ ...defaultLegalStyle, ...legalStyle }}>{legalText}</p>
        {contactHref.startsWith("/") ? (
          <Link href={contactHref} style={{ ...mergedLinkStyle, ...contactLinkStyle }}>
            {resolvedContactLabel}
          </Link>
        ) : (
          <a href={contactHref} style={{ ...mergedLinkStyle, ...contactLinkStyle }}>
            {resolvedContactLabel}
          </a>
        )}
        <Link href={policyHref} style={{ ...mergedLinkStyle, ...policyLinkStyle }}>
          {resolvedPolicyLabel}
        </Link>
      </div>
    </footer>
  );
}
