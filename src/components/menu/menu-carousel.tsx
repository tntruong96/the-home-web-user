import React, { FC, PropsWithChildren } from "react";
import { Carousel, CarouselContent } from "../ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

const MenuCarousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center md:items-center my-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
          // Fade(),
        ]}
        className="w-full lg:w-lg xl:w-2xl  relative"
      >
        <CarouselContent>{children}</CarouselContent>
      </Carousel>
    </div>
  );
};

export default MenuCarousel;
