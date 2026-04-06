import { cn } from "@/lib/utils";
import { ArrowUpRight, MapPin, Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import type { SocialIgCell } from "./social-section-types";

export function SocialCircleArrowOnly({
  href,
  variant,
  ariaLabel,
}: {
  href: string;
  variant: "light" | "dark";
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition hover:scale-105 bg-[#EFE9DE]",
      )}
    >
      <ArrowUpRight className="h-12 w-12" color="#765032" strokeWidth={2} />
    </a>
  );
}

export function SocialFollowCta({
  href,
  label,
  variant,
  className,
}: {
  href: string;
  label: string;
  variant: "light" | "dark";
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 transition",
        variant === "light"
          ? "text-white hover:text-[#e8dcc6]"
          : "text-neutral-900 hover:text-neutral-700",
        className,
      )}
    >
      <span className="text-sm font-medium tracking-wide">{label}</span>
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition group-hover:scale-105",
          variant === "light"
            ? "border-white/50 bg-white/10 text-white group-hover:border-white group-hover:bg-white/20"
            : "border-neutral-800/30 bg-white/80 text-neutral-900 group-hover:border-neutral-900",
        )}
        aria-hidden
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
      </span>
    </a>
  );
}

export function SocialIgThumbnail({
  cell,
  sizes,
  href,
  className,
}: {
  cell: SocialIgCell;
  sizes: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block aspect-[3/4] overflow-hidden bg-black/20",
        className,
      )}
    >
      <Image
        src={cell.src}
        alt={cell.alt}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes={sizes}
      />
      {cell.overlay ? (
        <span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded bg-black/45 text-white backdrop-blur-[2px]">
          {cell.overlay === "play" ? (
            <Play className="h-3.5 w-3.5 fill-white text-white" />
          ) : (
            <MapPin className="h-3 w-3" strokeWidth={2} />
          )}
        </span>
      ) : null}
    </a>
  );
}
