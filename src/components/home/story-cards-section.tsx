"use client";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export type StoryCardData = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  subtitle: string;
};

export type StoryCardsSectionProps = {
  kicker?: string;
  seeMoreHref?: string;
  seeMoreLabel?: string;
  hero?: StoryCardData;
  stories?: [StoryCardData, StoryCardData, StoryCardData];
  className?: string;
};

const DEFAULT_STORIES: [StoryCardData, StoryCardData, StoryCardData] = [
  {
    href: "/about-us",
    imageSrc: "/st1.png",
    imageAlt: "Câu chuyện của Nhà",
    title: "CÂU CHUYỆN CỦA NHÀ",
    subtitle: "Nhà chào bạn.",
    description:
      "Mời bạn đến với hành trình khám phá bản đồ đặc sản Việt cùng Nhà trên đế bánh pizza chuẩn Ý, với mỗi miếng pizza mang dấu ấn của hương vị vùng miền Việt Nam nơi địa lý, khí hậu, thổ nhưỡng và văn hóa giao hòa, tạo nên sự đa dạng nguyên liệu và hương vị đặc trưng. Chính từ niềm tin rằng ẩm thực Việt đủ phong phú để bước ra thế giới, Nhà kiên định cùng sứ mệnh vẽ nên Bản Đồ Pizza Đặc Sản Việt.",
  },
  {
    href: "/human",
    imageSrc: "/st3.png",
    imageAlt: "Đặc Sản Việt",
    title: "Đặc Sản Việt",
    subtitle: "Ẩm thực Việt Nam",
    description:
      "Ẩm thực Việt Nam được bồi đắp từ chính dải đất trải dài từ ôn đới xuống nhiệt đới, sự phân hóa khí hậu Bắc - Nam tạo nên sự khác biệt trong văn hóa chế biến và sử dụng nguyên liệu. Chính sự đa dạng ấy trở thành kho nguyên liệu phong phú để anh Chủ và đồng đội ở bếp Nhà tìm kiếm cảm hứng, chọn lọc và gửi gắm lên đế bánh pizza chuẩn Ý. Từ đó, bản đồ Pizza Đặc Sản Việt dần được vẽ nên bằng những hương vị vừa thân quen vừa mới mẻ, nhưng luôn bắt nguồn từ mảnh đất và con người Việt Nam. ",
  },
  {
    href: "/locations",
    imageSrc: "/st4.png",
    imageAlt: `Tinh Thần "Home"`,
    title: `Tinh Thần "Home"`,
    subtitle: "Người Nhà",

    description:
      "Mỗi chiếc pizza mang hương vị và dấu ấn của đội ngũ người Nhà nhiệt huyết, như chiếc cầu nối đưa bạn đến gần hơn với hành trình pizza đặc sản Việt. Nhà rất vui khi có bạn ghé qua, cùng thưởng thức pizza, chia sẻ câu chuyện của mình, biết đâu câu chuyện của bạn sẽ truyền cảm hứng để các đầu bếp Nhà sáng tạo nên những hương vị mới, ghi dấu thêm cột mốc trên Bản Đồ Pizza Đặc Sản Việt.   ",
  },
];

export const storyCardsSectionDefaults: StoryCardsSectionProps = {
  kicker: "[Nhà chào bạn.]",
  seeMoreHref: "/about-us",
  seeMoreLabel: "Xem tiếp",
  stories: DEFAULT_STORIES,
};

function StoryCardLink({
  item,
  isActive,
  sizes,
  className,
  topTextItem,
  topSlot,
  onFocus,
  onMouseEnter,
}: {
  item: StoryCardData;
  isActive?: boolean;
  sizes: string;
  className?: string;
  topTextItem?: StoryCardData;
  onMouseEnter: () => void;
  onFocus: () => void;
  topSlot?: "title" | "description" | null;
}) {
  return (
    <div className={cn(" flex flex-col justify-between h-full")}>
      {topTextItem && topSlot && (
        <div className="relative hidden lg:block z-20 px-4 pb-3 pt-2">
          {topSlot === "title" ? (
            <>
              <h3 className="font-raleway font-semibold text-[#765032] text-xl md:text-base flex gap-8">
                <span>[</span>
                {topTextItem.subtitle}
                <span>]</span>
              </h3>
            </>
          ) : (
            <div className="flex flex-col justify-around gap-4">
              <p className="text-sm md:text-base text-[#765032] line-clamp-6">
                {topTextItem.description}
              </p>
              <div className="flex justify-end">
                <Link href={"#"}>
                  <Button
                    className="bg-transparent border border-[#765032] rounded-[4px] text-[#765032] max-w-32 py-0 h-6 cursor-pointer"
                    variant={"link"}
                  >
                    Đọc Tiếp
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
      <Link
        onMouseEnter={onMouseEnter}
        onFocus={onFocus}
        href={item.href}
        className={cn(
          "group relative flex overflow-hidden  bg-neutral-900 shadow-md outline-none  transition-[transform,box-shadow] duration-500",
          "hover:shadow-lg active:scale-[0.99] md:active:scale-100",
          // isHero
          //   ? "min-h-[280px] w-full sm:min-h-[320px] lg:aspect-square lg:max-h-[min(52vw,560px)] lg:min-h-0"
          //   : "min-h-[260px] w-full sm:min-h-[300px] lg:min-h-[700px]",
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
          )}
        >
          <div className={cn(isActive ? "lg:max-w-64" : "")}>
            <h2
              className={cn(
                "font-abygaer font-light  tracking-wide text-[#EFE9DE] text-2xl leading-tight sm:text-3xl md:text-4xl",
              )}
            >
              {item.title}
            </h2>
          </div>
          <div className="block lg:hidden  text-[#EFE9DE]">
            <p className="line-clamp-2">{item.description}</p>
          </div>
        </div>
      </Link>
    </div>
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
  const stories = storiesProp ?? DEFAULT_STORIES;
  const [a, b, c] = stories;
  const [activeIndex, setActiveIndex] = useState(0);

  const columns = [a, b, c];

  const getTopSlot = (
    index: number,
    active: number,
  ): "title" | "description" | null => {
    if (index === active) return null;
    const others = [0, 1, 2].filter((i) => i !== active);
    return index === Math.min(...others) ? "title" : "description";
  };

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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-12 lg:gap-5 ">
          {columns.map((item, index) => {
            const isActive = activeIndex === index;
            // 2 cột không active sẽ hiển thị text của cột active
            const topSlot = getTopSlot(index, activeIndex);
            const mirroredText = columns[activeIndex];
            return (
              <div
                key={item.href}
                className={cn(
                  "transition-all duration-1000 ease-in-out",
                  "col-span-1 sm:col-span-1",
                  isActive ? "lg:col-span-6" : "lg:col-span-3",
                )}
              >
                <StoryCardLink
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  item={item}
                  isActive={isActive}
                  topTextItem={topSlot ? mirroredText : undefined}
                  topSlot={topSlot}
                  sizes={
                    isActive
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  // className="h-full"
                  className={cn(
                    isActive ? "lg:h-[700px]" : "lg:h-[350px]",
                    "h-[420px]",
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
