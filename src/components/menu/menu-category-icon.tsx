import { cn } from "@/lib/utils";
import React from "react";
import type { MenuLandingCategoryIcon } from "./menu-landing-types";

const stroke = "stroke-white";

export function MenuCategoryIcon({
  name,
  className,
}: {
  name: MenuLandingCategoryIcon;
  className?: string;
}) {
  const common = cn("h-10 w-10 shrink-0", stroke, className);

  switch (name) {
    case "starAnise":
      return (
        <svg
          className={common}
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden
        >
          <path
            d="M24 4 L28 18 L42 14 L32 24 L42 34 L28 30 L24 44 L20 30 L6 34 L16 24 L6 14 L20 18 Z"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="3" strokeWidth="1" />
        </svg>
      );
    case "fish":
      return (
        <svg
          className={common}
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden
        >
          <path
            d="M6 24 Q14 12 28 14 Q40 16 42 24 Q40 32 28 34 Q14 36 6 24 Z"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <circle cx="34" cy="22" r="2" fill="white" />
          <path d="M6 24 L2 20 M6 24 L2 28" strokeWidth="1.2" />
        </svg>
      );
    case "shrimp":
      return (
        <svg
          className={common}
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden
        >
          <path
            d="M8 32 Q20 8 38 18 Q42 22 38 28 Q32 36 20 38 Q12 40 8 32"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M12 30 L16 26 M18 34 L22 30 M24 36 L28 32"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      );
    case "clam":
      return (
        <svg
          className={common}
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden
        >
          <path
            d="M8 28 Q24 8 40 28 Q38 38 24 40 Q10 38 8 28 Z"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path
            d="M12 28 Q24 18 36 28"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
