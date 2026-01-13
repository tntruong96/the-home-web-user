import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "../ui/carousel";
import { LibraryItem } from "./library-slider";
import { Card, CardContent } from "../ui/card";

interface ILibraryCarousel {
  items: LibraryItem[];
  index: number;
  isActive: boolean;
  handleItemClick: (item: LibraryItem, index?: number) => void;
}

const LibraryCarousel = ({
  items,
  index,
  isActive,
  handleItemClick,
}: ILibraryCarousel) => {
  return (
    <div className="flex">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id} className="">
              <div className="p-1">
                <Card className="p-0 border-none rounded-none">
                  <CardContent className="flex aspect-square flex-col items-center p-0">
                    <div className="relative  aspect-square h-fit w-full">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="h-12 w-full flex items-center p-4 text-base">
                      {item.title}
                    </span>
                  </CardContent>
                </Card>
                {/* <h2 className="absolute text-white -bottom-2 w-full h-8 font-playfair-display  p-2">
                  {item.title}
                </h2> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LibraryCarousel;
