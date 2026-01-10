"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import LibraryCarousel from "./library-carousel";
import LibrarySliderItem from "./library-slider-card";
import { useTranslations } from "next-intl";

export type LibraryItem = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

const libraryItems: LibraryItem[] = [
  {
    id: "founder-message",
    title: "Message from The home's founder",
    imageSrc: "/location-1.avif",
    imageAlt: "Two people smiling in front of the restaurant",
    href: "/library/founder-message",
  },
  {
    id: "sustainability",
    title: "Sustainability journey",
    imageSrc: "/location-2.avif",
    imageAlt: "Green plants in the restaurant",
    href: "/library/sustainability",
  },
  {
    id: "craft",
    title: "Craft & community",
    imageSrc: "/location-1.avif",
    imageAlt: "Interior view of the dining space",
    href: "/library/craft-community",
  },
  {
    id: "stories",
    title: "Stories from The Home",
    imageSrc: "/location-1.avif",
    imageAlt: "Table with food and drinks",
    href: "/library/stories",
  },
];

export default function LibrarySlider() {
  const router = useRouter();
  const params = useParams();
  const t = useTranslations();
  const [activeId, setActiveId] = useState<string | null>(libraryItems[0]?.id);

  const locale = typeof params?.locale === "string" ? params.locale : "en";

  const handleItemClick = (item: LibraryItem) => {
    if (activeId === item.id) {
      router.push(`/${locale}${item.href}`);
    } else {
      setActiveId(item.id);
    }
  };

  const handleViewAllClick = () => {
    router.push(`/${locale}/library`);
  };

  return (
    <>
      <section className="mx-auto mt-10 max-w-screen-xl px-4 py-10 md:py-14 hidden lg:block">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="flex flex-col justify-center items-center border border-neutral-200 bg-neutral-50 px-4 py-10 md:w-72">
            <div className="flex flex-col items-center justify-center">
              <h2 className=" text-2xl font-playfair-display font-medium leading-snug text-neutral-900 text-center">
                {t("main.storiesOfTheHome")}
              </h2>
              {/* <p className="mt-5 text-sm text-neutral-600">
                Discover stories, messages, and the philosophy behind our
                dishes.
              </p> */}
            </div>

            {/* <button
              type="button"
              onClick={handleViewAllClick}
              className="mt-8 inline-flex h-12 w-32 items-center justify-center rounded-full border border-neutral-900 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
            >
              View library
            </button> */}
          </div>

          <div className="relative flex-1 ">
            <div className="flex h-full items-stretch justify-start">
              {libraryItems.map((item, index) => {
                const isActive = item.id === activeId;

                return (
                  <LibrarySliderItem
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={isActive}
                    handleItemClick={() => handleItemClick(item)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden">
        <div>
          <h2 className="my-3 sm:my-0 text-3xl font-playfair-display font-medium leading-snug text-neutral-900 text-center">
            Moments of The Home
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
