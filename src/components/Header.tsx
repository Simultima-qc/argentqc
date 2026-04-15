"use client";

import Link from "next/link";
import { useState } from "react";

const DARK = "#060D1A";
const GOLD = "#F5C842";

const navItems = [
  { href: "/aides-financieres", label: "Aides financières" },
  { href: "/impots", label: "Impôts" },
  { href: "/retraite", label: "Retraite" },
  { href: "/depenses", label: "Dépenses" },
  { href: "/strategies", label: "Stratégies" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        background: DARK,
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(245,200,66,0.12)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        {/* ── Barre principale ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "56px",
            gap: "16px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: GOLD,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            ArgentQC.ca
          </Link>

          {/* Nav desktop — scroll horizontal sur petit écran */}
          <nav
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "rgba(240,235,224,0.65)",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  padding: "6px 10px",
                  borderRadius: "8px",
                  flexShrink: 0,
                  transition: "color 0.15s, background 0.15s",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/questionnaire"
            style={{
              background: GOLD,
              color: DARK,
              fontWeight: 700,
              fontSize: "13px",
              padding: "8px 16px",
              borderRadius: "10px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Commencer →
          </Link>

          {/* Burger mobile (visible si nav déborde) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: GOLD,
              fontSize: "1.4rem",
              cursor: "pointer",
              padding: "4px",
              flexShrink: 0,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu mobile déplié */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(245,200,66,0.12)",
              paddingBottom: "16px",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: "rgba(240,235,224,0.75)",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "12px 4px",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/questionnaire"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                background: GOLD,
                color: DARK,
                fontWeight: 700,
                fontSize: "14px",
                padding: "12px",
                borderRadius: "10px",
                textAlign: "center",
                textDecoration: "none",
                marginTop: "12px",
              }}
            >
              Commencer →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
