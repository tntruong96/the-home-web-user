import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import { MenuCategoryIcon } from "./menu-category-icon";
import { MenuFeaturedDishCard } from "./menu-featured-dish-card";
import {
  defaultFeaturedDish,
  defaultMenuCategories,
  type MenuFeaturedDish,
  type MenuLandingCategory,
} from "./menu-landing-types";

export type MenuLandingImmersiveProps = {
  title?: string;
  intro?: string;
  ctaHref?: string;
  ctaLabel?: string;
  categories?: MenuLandingCategory[];
  featured?: MenuFeaturedDish;
  /** Full-bleed background (restaurant interior) */
  backgroundSrc?: string;
  backgroundAlt?: string;
  className?: string;
};

export default function MenuLandingImmersive({
  title = "MENU",
  intro = "Khám phá thực đơn phối hợp tinh hoa ẩm thực Việt và các món Ý cổ điển, được chọn lọc theo mùa.",
  ctaHref = "/menu",
  ctaLabel = "XEM THỰC ĐƠN",
  categories = defaultMenuCategories,
  featured = defaultFeaturedDish,
  backgroundSrc = "/main-bg.webp",
  backgroundAlt = "",
  className,
}: MenuLandingImmersiveProps) {
  return (
    <section className={cn("relative min-h-[min(100vh,920px)] w-full", className)}>
      <Image
        src={backgroundSrc}
        alt={backgroundAlt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/50"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[min(100vh,920px)] max-w-[1600px] flex-col gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:py-24 xl:gap-16">
        <div className="flex flex-1 flex-col justify-center lg:max-w-none xl:max-w-[58%]">
          <h1 className="font-playfair-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/88 sm:text-base">
            {intro}
          </p>
          <Link
            href={ctaHref}
            className="mt-8 inline-flex w-fit rounded-full bg-[#e8dcc6] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a2428] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            {ctaLabel}
          </Link>

          <nav
            className="mt-12 w-full"
            aria-label="Menu categories"
          >
            <div
              className={cn(
                "flex gap-0 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]",
                "[&::-webkit-scrollbar]:hidden",
                "lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0",
              )}
            >
              {categories.map((cat, index) => (
                <React.Fragment key={`${cat.href}-${cat.label}`}>
                  {index > 0 ? (
                    <div
                      className="hidden w-px shrink-0 self-stretch bg-white/25 lg:block"
                      aria-hidden
                    />
                  ) : null}
                  <Link
                    href={cat.href}
                    className={cn(
                      "group flex min-w-[min(78vw,220px)] flex-col items-center gap-4 border-white/15 px-4 py-5 text-center transition sm:min-w-[200px]",
                      "first:pl-0 last:pr-0 lg:min-w-0 lg:border-0 lg:px-5",
                      "hover:bg-white/5 lg:hover:bg-transparent",
                    )}
                  >
                    <MenuCategoryIcon
                      name={cat.icon}
                      className="opacity-90 transition group-hover:opacity-100"
                    />
                    <span className="text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
                      {cat.label}
                    </span>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition group-hover:border-white group-hover:bg-white/20"
                      aria-hidden
                    >
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </Link>
                  {index < categories.length - 1 ? (
                    <div
                      className="w-px shrink-0 self-stretch bg-white/20 lg:hidden"
                      aria-hidden
                    />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-shrink-0 justify-center lg:w-[min(100%,420px)] xl:w-[min(100%,440px)]">
          <MenuFeaturedDishCard dish={featured} variant="immersive" />
        </div>
      </div>
    </section>
  );
}
