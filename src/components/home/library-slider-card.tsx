import Image from "next/image";
import React from "react";

interface LibraryItem {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const LibrarySliderItem = ({
  item,
  index,
  isActive,
  handleItemClick,
  activeIndex,
  length,
}: {
  item: LibraryItem;
  index: number;
  isActive: boolean;
  handleItemClick: (item: LibraryItem) => void;
  activeIndex: number | undefined;
  length: number;
}) => {
  console.log(activeIndex);
  console.log(index);
  // Calculate z-index based on position relative to active card
  const getZIndex = () => {
    // if (isActive && (activeIndex === 0 || activeIndex === length - 1)) {
    //   return "z-[5]";
    // }
    // if (activeIndex !== undefined) {
    //   const distance = Math.abs(activeIndex - index);
    //   if (distance === 1) {
    //     return "z-[3]";
    //   }
    // }
    // return "z-[2]";
    if (activeIndex === undefined) {
      return "z-[2]";
    }

    // If active card is first or last
    if (activeIndex === 0 || activeIndex === length - 1) {
      if (isActive) {
        return "z-[5]";
      }
      // Calculate distance from active card and decrease z-index
      const distance = Math.abs(activeIndex - index);
      // z-index decreases: 5 (active), 4, 3, 2...
      const zIndex = Math.max(2, 5 - distance);
      return `z-[${zIndex}]`;
    }

    // If active card is in the middle
    if (isActive) {
      return "z-[5]";
    }

    const distance = Math.abs(activeIndex - index);
    if (distance === 1) {
      // Two adjacent cards
      return "z-[4]";
    }
    // All other cards
    return "z-[3]";
  };

  return (
    <button
      key={item.id}
      type="button"
      onClick={() => handleItemClick(item)}
      className={[
        "group relative flex flex-1 min-w-0 cursor-pointer flex-col border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-left shadow-sm transition-all duration-300",
        index > 0 ? "-ml-20" : "",
        isActive ? "shadow-xl" : "",
        getZIndex(),

        // ac,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={item.title}
    >
      <div className="relative h-64 overflow-hidden bg-neutral-100">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="224px"
        />
        <div className="absolute invisible group-hover:visible  inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/0 top-1/2 left-1/2 -translate-1/2 flex items-center justify-center w-full h-full text-white">
          <span>Read More</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between px-4 py-5">
        <p className="mt-2 text-sm font-medium leading-snug text-neutral-900">
          {item.title}
        </p>
      </div>
    </button>
  );
};

export default LibrarySliderItem;
