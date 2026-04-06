import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import React from "react";
import type { HumansNavItem } from "./humans-of-the-home-types";

type Props = {
  items: HumansNavItem[];
  variant: "serif" | "sans";
  className?: string;
};

const accent = "border-[#a67c52]/45 text-[#7a5c3a]";

export function HumansNavList({ items, variant, className }: Props) {
  const font =
    variant === "serif"
      ? "font-playfair-display text-base sm:text-[24px] xl:text-[32px] tracking-[0.12em]"
      : "font-sans text-base font-semibold tracking-[0.2em] sm:text-sm";

  return (
    <nav className={cn("w-full", className)} aria-label="Humans of the Home">
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={`${item.href}-${item.label}`}
            className={cn("border-b", accent)}
          >
            <Link
              href={item.href}
              className={cn(
                "group flex items-center justify-between gap-4 py-5 transition",
                font,
                "hover:text-[#5c4428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f1ea]",
              )}
            >
              <span className="uppercase ">{item.label}</span>
              <ArrowRight
                className="h-8 w-8 shrink-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                strokeWidth={1.25}
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
