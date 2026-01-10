import Image from "next/image";
import React from "react";

interface LibraryItem {
  id: any;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const LibrarySliderItem = ({
  item,
  index,
  isActive,
  handleItemClick,
}: {
  item: LibraryItem;
  index: number;
  isActive: boolean;
  handleItemClick: (item: LibraryItem) => void;
}) => {
  return (
    <button
      key={item.id}
      type="button"
      onClick={() => handleItemClick(item)}
      className={[
        "group relative flex w-1/3 flex-shrink-0 cursor-pointer flex-col border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-left shadow-sm transition-all duration-300",
        index > 0 ? "-ml-20 md:-ml-26" : "",
        isActive ? "z-20  shadow-xl" : "z-10 ",
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
        <p className="mt-3 text-xs text-neutral-500">
          {isActive
            ? "Click again to open this story."
            : "Click to highlight this story."}
        </p>
      </div>
    </button>
  );
};

export default LibrarySliderItem;
