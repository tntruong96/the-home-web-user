"use client";

import { useGetCarouselItems } from "@/hooks/queries/carousel-item";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function HeroCarousel() {
  // const { data } = useGetCarouselItems();
  // console.log(data?.heroCarouselItems);
  // const carouselItem = data?.heroCarouselItems[0]?.images ?? [];

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
          Fade(),
        ]}
        className="w-full md:w-3xl relative"
      >
        <CarouselContent>
          {/* {carouselItem.map((item) => ( */}
          <CarouselItem
            // key={item.documentId}
            className="w-full aspect-video relative p-1"
          >
            <Image
              // src={`${process.env.NEXT_PUBLIC_ENDPOINT}${item?.url}`}
              // src={`/api/strapi-uploads${item?.url.replace("/uploads", "")}`}
              // alt={item.name}
              src={"/location-1.avif"}
              alt="abc"
              fill
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              // src={`${process.env.NEXT_PUBLIC_ENDPOINT}${item?.url}`}
              // src={`/api/strapi-uploads${item?.url.replace("/uploads", "")}`}
              // alt={item.name}
              src={"/location-2.avif"}
              alt="abc"
              fill
              className="object-cover"
            />
          </CarouselItem>
          {/* ))} */}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
