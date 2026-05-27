"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackCtaClick, type CtaClickParams } from "@/utils/analytics";

type TrackedExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
  tracking: CtaClickParams;
};

export default function TrackedExternalLink({ tracking, onClick, ...props }: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackCtaClick(tracking);
        onClick?.(e);
      }}
    />
  );
}
