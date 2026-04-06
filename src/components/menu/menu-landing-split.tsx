import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import React from "react";
import { MenuFeaturedDishCard } from "./menu-featured-dish-card";
import {
  defaultFeaturedDish,
  defaultMenuCategories,
  type MenuFeaturedDish,
  type MenuLandingCategory,
} from "./menu-landing-types";
import Image from "next/image";

export type MenuLandingSplitProps = {
  title?: string;
  intro?: string;
  ctaHref?: string;
  ctaLabel?: string;
  categories?: MenuLandingCategory[];
  featured?: MenuFeaturedDish;
  className?: string;
};

export default function MenuLandingSplit({
  title = "MENU",
  intro = "Mời bạn đến với hành trình khám phá bản đồ đặc sản Việt cùng Nhà trên đế bánh pizza chuẩn Ý...",
  ctaHref = "/menu",
  ctaLabel = "XEM THỰC ĐƠN",
  categories = defaultMenuCategories,
  featured = defaultFeaturedDish,
  className,
}: MenuLandingSplitProps) {
  return (
    <section
      className={cn(
        "grid min-h-0 grid-cols-1 lg:min-h-[min(92vh,900px)] lg:grid-cols-2",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20",
          "bg-[#1a3338] text-white",
          "[background-image:url('/bg-bl.webp')]",
        )}
      >
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url(/bg-bl.webp)`,
          }}
          aria-hidden
        />
        <Image
          className="absolute top-8 right-8"
          src={"/vector/tre.png"}
          alt=""
          height={150}
          width={150}
          sizes="(max-width:768px) 100vw, 200px"
        />
        <Image
          className="absolute top-80 right-1/3"
          src={"/vector/tieu.png"}
          alt=""
          height={100}
          width={100}
          sizes="(max-width:768px) 100vw, 200px"
        />
        <Image
          className="absolute bottom-8 right-1/8"
          src={"/vector/nhum.png"}
          alt=""
          height={80}
          width={80}
          sizes="(max-width:768px) 100vw, 200px"
        />
        <div className="relative z-10 mx-auto w-full max-w-lg">
          <h1 className="font-abygaer text-6xl xl:text-[80px] font-semibold tracking-wide sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-80 text-sm leading-relaxed text-white/85 sm:text-base">
            {intro}
          </p>
          <Link
            href={ctaHref}
            className=" inline-flex rounded-full bg-white px-12 py-1 text-sm font-semibold uppercase tracking-wider text-[#1a3338] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a3338]"
          >
            {ctaLabel}
          </Link>
          <nav
            className="mt-24 border-t border-white/20 pt-2"
            aria-label="Menu categories"
          >
            <ul className="flex flex-col">
              {categories.map((cat) => (
                <li
                  key={`${cat.href}-${cat.label}`}
                  className="border-b border-white/20 last:border-b-0"
                >
                  <Link
                    href={cat.href}
                    className="group flex items-center justify-between  text-[32px] gap-4 py-4 text-sm font-light uppercase tracking-widest text-white transition hover:text-[#e8dcc6] focus-visible:outline-none focus-visible:text-[#e8dcc6]"
                  >
                    <span>{cat.label}</span>
                    <ArrowRight
                      className="h-8 w-8 shrink-0 text-white/70 transition group-hover:translate-x-0.5 group-hover:text-white"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={cn(
          "flex items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16",
          "bg-[#D3AC7E]",
        )}
      >
        <MenuFeaturedDishCard dish={featured} variant="split" />
      </div>
    </section>
  );
}
