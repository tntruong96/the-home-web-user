import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type StoryCardData = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export type StoryCardsSectionProps = {
  kicker?: string;
  seeMoreHref?: string;
  seeMoreLabel?: string;
  hero?: StoryCardData;
  stories?: [StoryCardData, StoryCardData, StoryCardData];
  className?: string;
};

const DEFAULT_HERO: StoryCardData = {
  href: "/about-us",
  imageSrc: "/st1.png",
  imageAlt: "Câu chuyện của Nhà",
  title: "CÂU CHUYỆN CỦA NHÀ",
  description:
    "Hành trình giữ lửa ẩm thực và không gian sum họp, nơi mỗi bữa ăn là một phần của câu chuyện chung.",
};

const DEFAULT_STORIES: [StoryCardData, StoryCardData, StoryCardData] = [
  {
    href: "/human",
    imageSrc: "/st2.png",
    imageAlt: "Câu chuyện Đặc Sản Việt",
    title: "Câu chuyện Đặc Sản Việt",
    description:
      "Ẩm thực Việt Nam được bồi đắp từ chính dải đất trải dài từ ôn đới xuống nhiệt đới...",
  },
  {
    href: "/menu",
    imageSrc: "/st3.png",
    imageAlt: "Người Nhà",
    title: "Người Nhà",
    description:
      "Mỗi chiếc pizza mang hương vị và dấu ấn của đội ngũ người Nhà nhiệt huyết....",
  },
  {
    href: "/locations",
    imageSrc: "/st4.png",
    imageAlt: "Không gian Nhà",
    title: "Không gian Nhà",
    description:
      "Giữa trung tâm đảo ngọc nhộn nhịp, The Home Pizza Signature đón bạn 'về nhà'...",
  },
];

export const storyCardsSectionDefaults: StoryCardsSectionProps = {
  kicker: "[Nhà chào bạn.]",
  seeMoreHref: "/about-us",
  seeMoreLabel: "Xem tiếp",
  hero: DEFAULT_HERO,
  stories: DEFAULT_STORIES,
};

function StoryCardLink({
  item,
  variant,
  sizes,
  className,
}: {
  item: StoryCardData;
  variant: "hero" | "column";
  sizes: string;
  className?: string;
}) {
  const isHero = variant === "hero";

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative flex overflow-hidden rounded-[6px] bg-neutral-900 shadow-md outline-none ring-offset-4 ring-offset-[#F5F1E9] transition-[transform,box-shadow] duration-300",
        "hover:ring-2 hover:ring-[#162F3E] focus-visible:ring-2 focus-visible:ring-[#162F3E]",
        "hover:shadow-lg active:scale-[0.99] md:active:scale-100",
        isHero
          ? "min-h-[280px] w-full sm:min-h-[320px] lg:aspect-square lg:max-h-[min(52vw,560px)] lg:min-h-0"
          : "min-h-[260px] w-full sm:min-h-[300px] lg:min-h-[700px]",
        className,
      )}
    >
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes={sizes}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
        aria-hidden
      />
      <span
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE9DE] text-neutral-800 shadow-sm transition group-hover:bg-white"
        aria-hidden
      >
        <ArrowUpRight className="h-8 w-8 " color="#765032" strokeWidth={2} />
      </span>
      <div
        className={cn(
          "relative z-[1] mt-auto flex flex-col justify-end p-5 sm:p-6 md:p-7",
          isHero ? "gap-3" : "gap-2",
        )}
      >
        {isHero ? (
          <div className="flex flex-col text-[#EFE9DE] text-[40px] lg:text-[60px] xl:text-[80px]">
            <h2 className=" font-abygaer">Câu</h2>
            <h2 className=" font-abygaer">Chuyện</h2>
            <h2 className=" font-abygaer">Của Nhà</h2>
          </div>
        ) : (
          <h2
            className={cn(
              "font-abygaer font-light  tracking-wide text-[#EFE9DE]",
              isHero
                ? "text-2xl leading-tight sm:text-3xl md:text-4xl"
                : "text-lg leading-snug sm:text-xl xl:text-3xl",
            )}
          >
            {item.title}
          </h2>
        )}
        <p
          className={cn(
            "max-w-prose text-white/90",
            isHero ? "text-sm sm:text-base" : "text-xs sm:text-sm",
          )}
        >
          {item.description}
        </p>
      </div>
    </Link>
  );
}

export default function StoryCardsSection({
  kicker = storyCardsSectionDefaults.kicker,
  seeMoreHref = storyCardsSectionDefaults.seeMoreHref,
  seeMoreLabel = storyCardsSectionDefaults.seeMoreLabel,
  hero: heroProp,
  stories: storiesProp,
  className,
}: StoryCardsSectionProps) {
  const hero = heroProp ?? DEFAULT_HERO;
  const stories = storiesProp ?? DEFAULT_STORIES;
  const [a, b, c] = stories;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#F5F1E9] text-[#3d2914]",
        "[background-image:url('/bg.webp')]",
        className,
      )}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
        <Image
          className="absolute -top-8 right-1/5"
          src={"/vector/doi.png"}
          alt=""
          height={200}
          width={200}
          sizes="(max-width:768px) 100vw, 400px"
        />
        <Image
          className="absolute -bottom-12 right-1/12"
          src={"/vector/hen.png"}
          alt=""
          height={200}
          width={200}
          sizes="(max-width:768px) 100vw, 400px"
        />
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-4">
          <p className="text-[#765032] text-sm tracking-wide sm:text-base">
            {kicker}
          </p>
          {seeMoreHref ? (
            <Link
              href={seeMoreHref}
              className="text-sm underline text-[#765032] decoration-neutral-600/50 underline-offset-4  sm:text-base"
            >
              {seeMoreLabel}
            </Link>
          ) : null}
        </header>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-end gap-8">
            <div className="hidden lg:flex relative aspect-square h-[200px] w-[200px]">
              <Image
                src={"/tom.png"}
                alt=""
                fill
                className="object-contain"
                sizes="(max-width:768px) 100vw, 400px"
              />
            </div>
            <StoryCardLink
              item={hero}
              variant="hero"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:col-span-7 lg:grid-cols-3 lg:gap-5">
            <StoryCardLink
              item={a}
              variant="column"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 24vw"
            />
            <StoryCardLink
              item={b}
              variant="column"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 24vw"
            />
            <StoryCardLink
              item={c}
              variant="column"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 24vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
