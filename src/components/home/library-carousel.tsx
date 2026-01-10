import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { LibraryItem } from "./library-slider";

interface ILibraryCarousel {
  items: LibraryItem[];
  index: number;
  isActive: boolean;
  handleItemClick: (item: LibraryItem) => void;
}

const LibraryCarousel = ({
  items,
  index,
  isActive,
  handleItemClick,
}: ILibraryCarousel) => {
  return (
    <div className="flex justify-center md:items-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full md:w-3xl relative"
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id} className="w-xl h-[500px] relative p-1">
              <div className="flex">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                />
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
