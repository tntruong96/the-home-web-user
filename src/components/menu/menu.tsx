"use client";

import Image from "next/image";
import React, { FC, PropsWithChildren, Ref } from "react";
import HTMLFlipBook from "react-pageflip";

interface IProps {
  ref?: Ref<HTMLDivElement>;
}

const MenuComponent = () => {
  return (
    <HTMLFlipBook
      // width={600}
      // height={500}
      // minWidth={300}
      // maxWidth={400}
      // minHeight={400}
      // maxHeight={500}
      width={450}
      height={650}
      size="stretch"
      maxWidth={450}
      maxHeight={650}
      minWidth={300}
      minHeight={400}
      className=""
      autoSize={true}
      clickEventForward
      disableFlipByClick
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
      swipeDistance={100}
      useMouseEvents={true}
    >
      <PageComponent>
        <Image
          src={"/location-1.avif"}
          alt="abc"
          fill
          className="object-cover"
        />
      </PageComponent>
      <PageComponent>
        <Image
          src={"/location-2.avif"}
          alt="abc"
          fill
          className="object-cover"
        />
      </PageComponent>
      <PageComponent>
        <Image
          src={"/location-1.avif"}
          alt="abc"
          fill
          className="object-cover"
        />
      </PageComponent>
      <PageComponent>
        <Image
          src={"/location-2.avif"}
          alt="abc"
          fill
          className="object-cover"
        />
      </PageComponent>
    </HTMLFlipBook>
  );
};

const PageComponent: FC<PropsWithChildren<IProps>> = (props) => {
  const { children, ref } = props;
  return (
    <div ref={ref} className="relative">
      <div>{children}</div>
    </div>
  );
};

export default MenuComponent;
