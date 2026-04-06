import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {
  SocialCircleArrowOnly,
  SocialIgThumbnail,
} from "./social-section-shared";
import {
  defaultSocialUrls,
  defaultSplitFacebookPosts,
  defaultSplitInstagramCells,
  type SocialFbPost,
  type SocialIgCell,
} from "./social-section-types";

export type SocialSectionSplitFeedsProps = {
  facebookUrl?: string;
  instagramUrl?: string;
  facebookHeader?: string;
  instagramHeader?: string;
  facebookPosts?: SocialFbPost[];
  instagramCells?: SocialIgCell[];
  /** Tan panel */
  leftClassName?: string;
  /** Teal panel */
  rightClassName?: string;
  className?: string;
};

export default function SocialSectionSplitFeeds({
  facebookUrl = defaultSocialUrls.facebook,
  instagramUrl = defaultSocialUrls.instagram,
  facebookHeader = "[ Follow Nhà Facebook ]",
  instagramHeader = "[ Follow Nhà Instagram ]",
  facebookPosts = defaultSplitFacebookPosts,
  instagramCells = defaultSplitInstagramCells,
  leftClassName,
  rightClassName,
  className,
}: SocialSectionSplitFeedsProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 lg:min-h-[min(90vh,880px)] lg:grid-cols-2",
        className,
      )}
    >
      {/* Facebook — tan */}
      <div
        className={cn(
          "flex flex-col px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20",
          "bg-[#D3AC7E]",
          leftClassName,
        )}
      >
        <div className="relative mb-6 flex min-h-[22px]">
          <p className="text-center text-lg font-medium tracking-wide text-neutral-900">
            {facebookHeader}
          </p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <SocialCircleArrowOnly
              href={facebookUrl}
              variant="dark"
              ariaLabel={facebookHeader}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 lg:gap-7">
          {facebookPosts.map((post) => (
            <a
              key={`${post.imageSrc}-${post.title}`}
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden bg-[#765032] shadow-md transition hover:shadow-lg sm:flex-row"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-auto sm:h-auto sm:w-[42%] sm:min-h-[200px] xl:min-h-[270px]">
                <Image
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02] sm:object-cover"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {post.body}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Instagram — dark teal */}
      <div
        className={cn(
          "relative flex flex-col px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20",
          "bg-[#004040] text-white",
          "[background-image:url(/bg-bl.webp)]",
          rightClassName,
        )}
      >
        <div className="relative z-10 mb-6 flex min-h-[22px]">
          <p className=" text-center font-raleway flex justify-center text-lg font-medium tracking-wide text-white/95">
            {instagramHeader}
          </p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <SocialCircleArrowOnly
              href={instagramUrl}
              variant="light"
              ariaLabel={instagramHeader}
            />
          </div>
        </div>

        <div className="relative z-10 grid flex-1 grid-cols-3 gap-1.5 sm:gap-2">
          {instagramCells.map((cell, index) => (
            <SocialIgThumbnail
              key={`${cell.src}-${index}`}
              cell={cell}
              href={instagramUrl}
              sizes="(max-width: 1024px) 30vw, 18vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
