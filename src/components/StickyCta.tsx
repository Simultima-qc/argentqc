"use client";

import { useEffect, useRef, useState } from "react";
import TrackingLink from "@/components/TrackingLink";

const DARK = "#060D1A";
const GOLD = "#F5C842";

interface StickyCtaProps {
  label: string;
  href: string;
  toolSectionId: string;
}

export default function StickyCta({ label, href, toolSectionId }: StickyCtaProps) {
  const [scrolled, setScrolled] = useState(false);
  const [toolVisible, setToolVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Appear after 300px scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Disappear when tool section enters viewport
  useEffect(() => {
    const target = document.getElementById(toolSectionId);
    if (!target) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => setToolVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observerRef.current.observe(target);

    return () => observerRef.current?.disconnect();
  }, [toolSectionId]);

  const visible = scrolled && !toolVisible;

  return (
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingBottom: "env(safe-area-inset-bottom)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <TrackingLink
        href={href}
        className="block w-full py-5 text-center text-base font-extrabold no-underline"
        style={{
          background: GOLD,
          color: DARK,
          boxShadow: "0 -6px 28px rgba(245,200,66,0.35)",
          letterSpacing: "0.01em",
        }}
        tracking={{
          cta_name: "sticky_mobile",
          cta_location: "mobile_global",
          destination: href,
        }}
      >
        {label}
      </TrackingLink>
    </div>
  );
}
