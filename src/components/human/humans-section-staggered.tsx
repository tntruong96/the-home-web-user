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

export type HumansSectionStaggeredProps = {
  title?: string;
  seeMoreHref?: string;
  seeMoreLabel?: string;
  navItems?: HumansNavItem[];
  primaryImage?: HumansSectionImage;
  secondaryImage?: HumansSectionImage;
  className?: string;
};

export default function HumansSectionStaggered({
  title = "Humans of the Home",
  seeMoreHref = "/human",
  seeMoreLabel = "Xem tiếp",
  navItems = defaultHumansNav,
  primaryImage = defaultHumansImages.primary,
  secondaryImage = defaultHumansImages.secondary,
  className,
}: HumansSectionStaggeredProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#f5f1ea] text-[#7a5c3a]",
        "[background-image:url('/bg.webp')]",
        className,
      )}
    >
      <Image
        className="absolute top-1/2 -right-6"
        src={"/mac-khen.png"}
        alt={"mac khen"}
        height={200}
        width={200}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      <Image
        className="hidden lg:flex absolute top-16 right-1/4"
        src={"/ca-trich.png"}
        alt={"ca trich"}
        height={200}
        width={200}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />

      <div className="relative z-10 mx-auto px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <header className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between lg:items-end lg:justify-end ">
          <h2 className="hidden  lg:absolute lg:top-14 lg:left-14 z-10 lg:flex flex-col text-[#D3AC7E] text-center text-2xl font-light uppercase tracking-[0.2em] sm:text-left sm:text-3xl md:text-4xl lg:text-6xl xl:text-[80px] lg:leading-tight">
            <span className="font-abygaer ">HUMANS OF</span>
            <span className="font-abygaer ">THE HOME</span>
          </h2>
          <h2 className="font-abygaer lg:hidden lg:absolute lg:top-14 lg:left-8 z-10 flex flex-col text-[#D3AC7E] text-center text-2xl font-light uppercase tracking-[0.2em] sm:text-left sm:text-3xl md:text-4xl lg:text-[80px] lg:leading-tight">
            HUMANS OF THE HOME
          </h2>
          {seeMoreHref ? (
            <Link
              href={seeMoreHref}
              className="shrink-0 font-playfair-display text-sm underline decoration-[#a67c52]/50 underline-offset-[6px] transition hover:decoration-[#7a5c3a] hover:text-[#5c4428] sm:text-base"
            >
              {seeMoreLabel}
            </Link>
          ) : null}
        </header>
        <div className="lg:flex w-full justify-between items-end gap-2">
          <div className="hidden lg:flex relative aspect-square w-[150px] h-[150px]">
            <Image
              src={"/cua.png"}
              alt={primaryImage.alt}
              fill
              className="object-contain"
              // sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10 lg:items-start">
            <div className="relative  w-full overflow-hidden rounded-sm sm:min-h-[380px] lg:min-h-[800px]">
              <div className="relative w-full aspect-[3/4] sm:min-h-[380px] lg:min-h-[800px]">
                <Image
                  src={primaryImage.src}
                  alt={primaryImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:gap-10 h-full">
              <div className="relative aspect-[14/10] xl:aspect-[16/10] w-full overflow-hidden rounded-sm">
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <HumansNavList items={navItems} variant="serif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
