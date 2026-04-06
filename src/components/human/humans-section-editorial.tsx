import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import { HumansNavList } from "./humans-nav-list";
import {
  defaultHumansImages,
  defaultHumansNav,
  type HumansNavItem,
  type HumansSectionImage,
} from "./humans-of-the-home-types";

function EditorialDecorLeft() {
  return (
    <div
      className="pointer-events-none text-[#a67c52]/40 [&_svg]:max-md:opacity-70"
      aria-hidden
    >
      <svg
        className="mb-4 h-12 w-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <circle cx="24" cy="24" r="10" />
        <line x1="24" y1="8" x2="24" y2="14" strokeLinecap="round" />
        <line x1="24" y1="34" x2="24" y2="40" strokeLinecap="round" />
        <line x1="8" y1="24" x2="14" y2="24" strokeLinecap="round" />
        <line x1="34" y1="24" x2="40" y2="24" strokeLinecap="round" />
        <line x1="12.7" y1="12.7" x2="16.5" y2="16.5" strokeLinecap="round" />
        <line x1="31.5" y1="31.5" x2="35.3" y2="35.3" strokeLinecap="round" />
        <line x1="35.3" y1="12.7" x2="31.5" y2="16.5" strokeLinecap="round" />
        <line x1="16.5" y1="31.5" x2="12.7" y2="35.3" strokeLinecap="round" />
      </svg>
      <svg
        className="h-28 w-20 md:h-36 md:w-24"
        viewBox="0 0 80 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.55"
      >
        <path d="M40 10 Q55 35 48 60 Q42 85 38 108" />
        <path d="M32 35 Q22 50 28 68 M48 40 Q58 55 52 72" />
        <path d="M25 55 L18 75 M55 58 L62 78" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function EditorialDecorRight() {
  return (
    <svg
      className="pointer-events-none h-16 w-24 text-[#a67c52]/35 max-md:hidden md:h-20 md:w-28"
      viewBox="0 0 100 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      aria-hidden
    >
      <circle cx="20" cy="25" r="4" />
      <circle cx="38" cy="32" r="3.5" />
      <circle cx="55" cy="22" r="4" />
      <circle cx="72" cy="30" r="3" />
      <circle cx="48" cy="45" r="3.5" />
      <path d="M15 40 Q35 48 55 42 T88 38" strokeLinecap="round" />
    </svg>
  );
}

export type HumansSectionEditorialProps = {
  kicker?: string;
  titleLines?: [string, string, string];
  seeMoreHref?: string;
  seeMoreLabel?: string;
  navItems?: HumansNavItem[];
  primaryImage?: HumansSectionImage;
  secondaryImage?: HumansSectionImage;
  className?: string;
};

export default function HumansSectionEditorial({
  kicker = '[ Cùng trở thành "người một Nhà" nhé ]',
  titleLines = ["Humans", "of the", "Home"],
  seeMoreHref = "/human",
  seeMoreLabel = "Xem tiếp",
  navItems = defaultHumansNav,
  primaryImage = defaultHumansImages.primary,
  secondaryImage = defaultHumansImages.secondary,
  className,
}: HumansSectionEditorialProps) {
  const [line1, line2, line3] = titleLines;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#f4f0e8] text-neutral-900",
        "[background-image:radial-gradient(ellipse_at_10%_15%,rgba(166,124,82,0.05)_0%,transparent_45%),radial-gradient(ellipse_at_90%_85%,rgba(60,48,36,0.04)_0%,transparent_50%)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 lg:gap-y-12">
          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
            <p className="max-w-xs text-xs leading-relaxed text-neutral-600 sm:text-sm">
              {kicker}
            </p>
            <div className="mt-6 flex flex-col items-center lg:items-start">
              <EditorialDecorLeft />
            </div>
            <h2 className="mt-6 font-playfair-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:mt-8 lg:text-[2.65rem]">
              <span className="block">{line1}</span>
              <span className="block">{line2}</span>
              <span className="block">{line3}</span>
            </h2>
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm lg:col-span-5 lg:aspect-auto lg:min-h-[min(72vh,640px)]">
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
          </div>

          <div className="flex flex-col gap-8 lg:col-span-4 lg:justify-between">
            <div>
              <HumansNavList items={navItems} variant="sans" />
              {seeMoreHref ? (
                <Link
                  href={seeMoreHref}
                  className="mt-6 inline-block text-sm text-[#7a5c3a] underline decoration-[#a67c52]/50 underline-offset-[6px] transition hover:text-[#5c4428] hover:decoration-[#7a5c3a]"
                >
                  {seeMoreLabel}
                </Link>
              ) : null}
            </div>
            <div className="flex flex-col gap-6">
              <EditorialDecorRight />
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
