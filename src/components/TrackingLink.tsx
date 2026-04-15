"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { trackCtaClick, type CtaClickParams } from "@/utils/analytics";

type TrackingLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  tracking: CtaClickParams;
};

export default function TrackingLink({
  tracking,
  onClick,
  ...props
}: TrackingLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackCtaClick(tracking);
        onClick?.(e);
      }}
    />
  );
}
