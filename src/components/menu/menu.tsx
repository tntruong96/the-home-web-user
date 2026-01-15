"use client";

import Image from "next/image";
import React, { FC, PropsWithChildren, Ref, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import MenuFilter from "./menu-filter";
import LocaleSwitcher from "../common/locale-switcher";

interface IProps {
  ref?: Ref<HTMLDivElement>;
}

interface FlipBookRef {
  pageFlip?: () => {
    flip?: (page: number) => void;
    flipPage?: (page: number) => void;
  };
  flip?: (page: number) => void;
  flipPage?: (page: number) => void;
}

const MenuComponent = () => {
  const flipBookRef = useRef<FlipBookRef | null>(null);
  // Initial page is 0 (cover), so no filter initially
  // When user flips to page 2+, the handleFlip will update the filter
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (pageIndex: number) => {
    if (flipBookRef.current) {
      try {
        // Try different ways to access the flip method based on react-pageflip API
        const pageFlip =
          flipBookRef.current.pageFlip?.() || flipBookRef.current;
        if (pageFlip && typeof pageFlip.flip === "function") {
          pageFlip.flip(pageIndex);
        } else if (pageFlip && typeof pageFlip.flipPage === "function") {
          pageFlip.flipPage(pageIndex);
        }
      } catch (error) {
        console.error("Error flipping page:", error);
      }
    }
  };

  const handleFlip = (e: { data: number }) => {
    const currentPage = e.data;
    // Update active filter based on current page
    // Pages 0-1: Cover (no filter)
    // Pages 2-4: Salad
    // Pages 5-7: Appetizer
    // Page 8: Main
    // Pages 9-12: Pasta
    // Pages 13-19: Classic Pizza
    // Pages 20-21: Dessert
    // Pages 22-31: Drink

    let filterKey: string | null = null;
    if (currentPage >= 35) {
      filterKey = "drink";
    } else if (currentPage >= 33) {
      filterKey = "dessert";
    } else if (currentPage >= 19) {
      filterKey = "vietnamesePizza";
    } else if (currentPage >= 13) {
      filterKey = "classicPizza";
    } else if (currentPage >= 9) {
      filterKey = "pasta";
    } else if (currentPage >= 7) {
      filterKey = "main";
    } else if (currentPage >= 5) {
      filterKey = "appetizer";
    } else if (currentPage >= 2) {
      filterKey = "salad";
    }
    setActiveFilter(filterKey);
  };

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Thực Đơn Của Nhà
      </h1>
      <MenuFilter
        onFilterClick={handleFilterClick}
        activeFilter={activeFilter}
      />
      <HTMLFlipBook
        ref={flipBookRef}
        onFlip={handleFlip}
        width={450}
        height={650}
        size="stretch"
        maxWidth={450}
        maxHeight={650}
        minWidth={300}
        minHeight={400}
        className="mx-auto"
        autoSize={true}
        clickEventForward={false}
        disableFlipByClick={false}
        drawShadow={false}
        usePortrait={true}
        flippingTime={1000}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        showCover={true}
        showPageCorners={false}
        startPage={0}
        startZIndex={0}
        style={{
          minHeight: 0,
          height: 650,
        }}
        swipeDistance={50}
        useMouseEvents={true}
      >
        <PageComponent>
          <Image
            src={"/menu/cover-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/cover.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/salad/salad-01.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/salad/salad-02.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/salad/salad-03.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/appertizer/app-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/appertizer/app-2.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/appertizer/app-3.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/main.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/pasta/pas-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/pasta/pas-2.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/pasta/pas-3.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/pasta/pas-4.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/classic/classic-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/classic/classic-2.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/classic/classic-3.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/classic/classic-4.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/classic/classic-5.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/classic/classic-6.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/classic/classic-7.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>

        <PageComponent>
          <Image
            src={"/menu/northern-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/northern-2.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/central-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/central-2.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/central-3.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/central-4.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/southern-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/southern-2.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/southern-3.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/southern-4.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>

        <PageComponent>
          <Image
            src={"/menu/pq-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/pq-4.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/pq-5.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>

        <PageComponent>
          <Image
            src={"/menu/desert/des-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/desert/des-2.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-1.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-2.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-3.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-4.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-5.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-6.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-7.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-8.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-9.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/drink/drink-10.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
        <PageComponent>
          <Image
            src={"/menu/end.webp"}
            alt="abc"
            fill
            className="object-cover"
          />
        </PageComponent>
      </HTMLFlipBook>
    </div>
  );
};

const PageComponent: FC<PropsWithChildren<IProps>> = (props) => {
  const { children, ref } = props;
  return (
    <div ref={ref} className="relative w-full h-full">
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
};

export default MenuComponent;
