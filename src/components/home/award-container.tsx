import Image from "next/image";
import React from "react";

const awards = [
  {
    alt: "abc",
    src: "/michelin.webp",
  },
  {
    alt: "abc",
    src: "/tripadvisor-1.webp",
  },
  {
    alt: "abc",
    src: "/tripadvisor-2.webp",
  },
  {
    alt: "abc",
    src: "/tripadvisor.webp",
  },
];

const AwardComponent = () => {
  return (
    <div className="relative mx-auto my-24 container flex justify-center items-center gap-8 sm:gap-16 lg:gap-20">
      {awards.map((award, i) => (
        <div
          key={i}
          className=" w-16 h-16 sm:w-24 sm:h-24 md:h-32 md:w-32 relative"
        >
          <Image
            src={award.src}
            alt={award.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default AwardComponent;
