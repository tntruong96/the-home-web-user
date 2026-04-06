import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import type { MenuFeaturedDish } from "./menu-landing-types";

type Props = {
  dish: MenuFeaturedDish;
  variant: "split" | "immersive";
  className?: string;
};

export function MenuFeaturedDishCard({ dish, variant, className }: Props) {
  if (variant === "split") {
    return (
      <Link
        href={dish.href}
        className={cn(
          "group relative mx-auto block w-full max-w-md overflow-hidden rounded-[6px] bg-neutral-900 shadow-2xl",
          "min-h-[420px] sm:min-h-[480px] lg:min-h-[min(72vh,640px)] lg:max-h-[640px]",
          className,
        )}
      >
        <Image
          src={dish.imageSrc}
          alt={dish.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {/* <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20"
          aria-hidden
        /> */}
        {/* {dish.badge ? (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-medium tracking-wide text-neutral-900">
            {dish.badge}
          </span>
        ) : null}
        <div className="absolute left-4 right-4 top-14 z-10 text-white">
          <p className="font-playfair-display text-lg font-semibold leading-tight sm:text-xl">
            {dish.nameVi}
          </p>
          {dish.nameEn ? (
            <p className="mt-1 text-sm text-white/85">{dish.nameEn}</p>
          ) : null}
        </div>
        <p className="absolute right-5 top-28 z-10 font-sans text-3xl font-bold tabular-nums text-white sm:text-4xl">
          {dish.price}
        </p> */}
        <span
          className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg transition group-hover:scale-105"
          aria-hidden
        >
          <ArrowUpRight className="h-8 w-8" color="#765032" strokeWidth={2} />
        </span>
        {/* <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-sm text-white/90">
          {dish.description ? (
            <p className="line-clamp-3">{dish.description}</p>
          ) : null}
        </div> */}
      </Link>
    );
  }

  const thumb = dish.thumbSrc ?? dish.imageSrc;
  const foot = dish.footSrc ?? dish.imageSrc;

  return (
    <Link
      href={dish.href}
      className={cn(
        "group flex w-full max-w-md flex-col rounded-3xl bg-[#e8dcc6] p-4 shadow-2xl ring-1 ring-black/5 transition hover:ring-2 hover:ring-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:p-5",
        className,
      )}
    >
      <div className="flex gap-3 sm:gap-4">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-32">
          <Image
            src={thumb}
            alt=""
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
        <div className="min-w-0 flex-1">
          {dish.badge ? (
            <span className="mb-1 inline-block rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-800">
              {dish.badge}
            </span>
          ) : null}
          <p className="font-playfair-display text-base font-semibold leading-snug text-neutral-900 sm:text-lg">
            {dish.nameVi}
          </p>
          {dish.nameEn ? (
            <p className="text-xs text-neutral-600 sm:text-sm">{dish.nameEn}</p>
          ) : null}
        </div>
      </div>
      {dish.description ? (
        <p className="my-3 line-clamp-3 text-sm leading-relaxed text-neutral-700">
          {dish.description}
        </p>
      ) : null}
      <div className="relative mx-auto my-2 aspect-square w-[min(72%,220px)] overflow-hidden rounded-full border-4 shadow-md">
        <Image
          src={dish.imageSrc}
          alt={dish.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="220px"
        />
      </div>
      <div className="relative mt-2 h-24 w-full overflow-hidden rounded-xl sm:h-28">
        <Image
          src={foot}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 400px"
        />
      </div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-2xl font-bold tabular-nums text-neutral-900 sm:text-3xl">
          {dish.price}
        </p>
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 shadow transition group-hover:scale-105"
          aria-hidden
        >
          <ArrowRight className="h-5 w-5" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}
