import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SocialFollowCta, SocialIgThumbnail } from "./social-section-shared";
import {
  defaultSocialUrls,
  defaultTealInstagramCells,
  type SocialIgCell,
} from "./social-section-types";

function HerbBundle({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-[#c9a962]/90", className)}
      viewBox="0 0 72 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.65"
      aria-hidden
    >
      <path d="M36 8 Q50 28 44 52 Q40 72 36 92" />
      <path d="M28 35 Q18 48 24 62 M44 38 Q54 50 48 65" />
      <path d="M22 55 L14 78 M50 58 L58 78" strokeLinecap="round" />
    </svg>
  );
}

function ChiliDecor({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-[#c9a962]/90", className)}
      viewBox="0 0 80 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.7"
      aria-hidden
    >
      <path d="M8 38 Q25 8 48 18 Q68 26 72 40" strokeLinecap="round" />
      <path d="M20 32 Q35 22 50 28" strokeLinecap="round" />
      <ellipse cx="10" cy="38" rx="4" ry="6" transform="rotate(-35 10 38)" />
    </svg>
  );
}

function ShellCluster({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-[#c9a962]/90", className)}
      viewBox="0 0 90 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.55"
      aria-hidden
    >
      <path d="M18 40 Q30 18 44 22 Q58 26 52 44 Q46 50 32 48 Q20 46 18 40" />
      <path d="M48 38 Q58 22 72 28 Q82 34 76 46 Q68 52 54 48" />
      <path d="M32 48 Q40 52 52 50" strokeLinecap="round" />
    </svg>
  );
}

function CauliflowerDecor({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-[#c9a962]/[0.35]", className)}
      viewBox="0 0 200 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.45"
      aria-hidden
    >
      <path d="M100 95 Q60 88 45 60 Q38 40 55 28 Q72 18 100 22 Q128 18 145 28 Q162 40 155 60 Q140 88 100 95" />
      <path d="M70 45 Q85 35 100 40 Q115 35 130 45" />
      <path d="M85 58 Q100 50 115 58" strokeLinecap="round" />
      <path d="M92 72 Q100 68 108 72" strokeLinecap="round" />
    </svg>
  );
}

function CenterSeal({ tagline }: { tagline: string }) {
  return (
    <div className="mx-auto flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-[#c9a962] bg-[#0a2426]/90 px-4 text-center shadow-[0_0_0_1px_rgba(201,169,98,0.15)] backdrop-blur-sm sm:h-48 sm:w-48">
      <Home
        className="mb-2 h-8 w-8 text-[#c9a962] sm:h-9 sm:w-9"
        strokeWidth={1.25}
      />
      <p className="text-[0.5rem] font-medium uppercase leading-relaxed tracking-[0.18em] text-[#c9a962] sm:text-[0.55rem]">
        {tagline}
      </p>
    </div>
  );
}

export type SocialSectionTealEditorialProps = {
  facebookUrl?: string;
  instagramUrl?: string;
  facebookIntro?: string;
  facebookImageSrc?: string;
  facebookImageAlt?: string;
  followLabel?: string;
  instagramFooter?: string;
  centerTagline?: string;
  instagramCells?: SocialIgCell[];
  className?: string;
};

export default function SocialSectionTealEditorial({
  facebookUrl = defaultSocialUrls.facebook,
  instagramUrl = defaultSocialUrls.instagram,
  facebookIntro = "The Home Pizza kể câu chuyện ẩm thực qua từng khoảnh khắc — từ lò bánh đến bàn tiệc sum vầy.",
  facebookImageSrc = "/human-1.webp",
  facebookImageAlt = "Không gian The Home",
  followLabel = "[ Follow Nhà ]",
  instagramFooter = "Theo dõi Nhà trên Instagram để xem món mới, sự kiện và những ngày bình thường đầy cảm hứng tại quán.",
  centerTagline = "A cozy house where pizza happens • A pizza journey across Vietnam •",
  instagramCells = defaultTealInstagramCells,
  className,
}: SocialSectionTealEditorialProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#0b2b2b] text-white",
        "[background-image:radial-gradient(ellipse_at_30%_20%,rgba(201,169,98,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(0,0,0,0.25)_0%,transparent_55%)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 xl:gap-14">
          {/* Facebook column */}
          <div className="order-1 flex flex-col lg:order-none">
            <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              {facebookIntro}
            </p>
            <div className="mt-8 flex items-start gap-3 sm:gap-4">
              <HerbBundle className="mt-1 h-24 w-14 shrink-0 sm:h-28 sm:w-16" />
              <div className="font-playfair-display text-3xl font-light uppercase leading-[1.05] tracking-[0.12em] text-white sm:text-4xl md:text-5xl">
                <span className="block">Nhà</span>
                <span className="block">Facebook</span>
              </div>
            </div>
            <div className="mt-8">
              <SocialFollowCta
                href={facebookUrl}
                label={followLabel}
                variant="light"
              />
            </div>
            <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-sm sm:mt-12">
              <Image
                src={facebookImageSrc}
                alt={facebookImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Center seal */}
          <div className="order-2 flex justify-center py-4 lg:order-none lg:px-2 lg:py-24">
            <CenterSeal tagline={centerTagline} />
          </div>

          {/* Instagram column */}
          <div className="order-3 flex flex-col lg:order-none">
            <div className="flex w-full flex-col items-end gap-5">
              <ChiliDecor className="h-10 w-24 sm:h-12 sm:w-28" />
              <SocialFollowCta
                href={instagramUrl}
                label={followLabel}
                variant="light"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
              {instagramCells.map((cell, index) => (
                <SocialIgThumbnail
                  key={`${cell.src}-${index}`}
                  cell={cell}
                  href={instagramUrl}
                  sizes="(max-width: 640px) 45vw, 18vw"
                />
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:mt-12">
              <div className="flex flex-wrap items-end gap-3">
                <ShellCluster className="h-14 w-20 shrink-0" />
                <div className="font-playfair-display text-3xl font-light uppercase leading-none tracking-[0.12em] text-white sm:text-4xl">
                  <span className="block">Nhà</span>
                  <span className="block">Instagram</span>
                </div>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/80">
                {instagramFooter}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative z-10 flex justify-center pb-6 pt-4 md:pb-10">
        <CauliflowerDecor className="w-[min(92vw,420px)]" />
      </div>
    </section>
  );
}
