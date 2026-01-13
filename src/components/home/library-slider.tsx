"use client";

import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import LibraryCarousel from "./library-carousel";
import LibrarySliderItem from "./library-slider-card";

export type LibraryItem = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

const libraryItems: LibraryItem[] = [
  {
    id: "nha",
    title: "Câu Chuyện Của Nhà",
    imageSrc: "/location-1.avif",
    imageAlt: "Two people smiling in front of the restaurant",
    href: "/stories/founder-message",
  },
  {
    id: "founder-message",
    title: "Câu Chuyện Đặc Sản Việt",
    imageSrc: "/location-1.avif",
    imageAlt: "Two people smiling in front of the restaurant",
    href: "/stories/founder-message",
  },
  {
    id: "sustainability",
    title: "Con Người",
    imageSrc: "/location-2.avif",
    imageAlt: "Green plants in the restaurant",
    href: "/stories/sustainability",
  },
  {
    id: "craft",
    title: "Không Gian",
    imageSrc: "/location-1.avif",
    imageAlt: "Interior view of the dining space",
    href: "/stories/craft-community",
  },
];

export default function LibrarySlider() {
  const router = useRouter();
  const params = useParams();
  const t = useTranslations();
  const [activeId, setActiveId] = useState<string | null>(libraryItems[0]?.id);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const locale = typeof params?.locale === "string" ? params.locale : "en";

  const handleItemClick = (item: LibraryItem, index?: number) => {
    if (activeId === item.id) {
      router.push(`/${locale}${item.href}`);
    } else {
      setActiveId(item.id);
      setActiveIndex(index);
    }
  };

  return (
    <>
      <section className="mx-auto my-24 container hidden lg:block">
        <div className="flex flex-row">
          <div className="flex flex-col flex-1 shrink-0 justify-center items-center border border-neutral-200 bg-neutral-50 px-4 py-10 min-w-[300px] max-w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <h2 className=" text-2xl flex-1 font-playfair-display font-medium leading-snug text-neutral-900 text-center">
                {t("main.storiesOfTheHome")}
              </h2>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex w-full h-full items-stretch justify-start">
              {libraryItems.map((item, index) => {
                const isActive = item.id === activeId;

                return (
                  <LibrarySliderItem
                    length={libraryItems.length}
                    key={item.id}
                    activeIndex={activeIndex}
                    item={item}
                    index={index}
                    isActive={isActive}
                    handleItemClick={() => handleItemClick(item, index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden container mx-auto my-16">
        <div>
          <h2 className="my-3 text-3xl font-playfair-display font-medium leading-snug text-neutral-900 text-center">
            {t("main.storiesOfTheHome")}
          </h2>
        </div>
        <LibraryCarousel
          items={libraryItems}
          index={0}
          isActive={true}
          handleItemClick={handleItemClick}
        />
      </section>
    </>
  );
}
