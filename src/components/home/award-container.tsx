import Image from "next/image";
import React from "react";

const awards = [
  {
    alt: "abc",
    src: "/location-1.avif",
  },
  {
    alt: "abc",
    src: "/location-1.avif",
  },
  {
    alt: "abc",
    src: "/location-1.avif",
  },
  {
    alt: "abc",
    src: "/location-1.avif",
  },
];

const AwardComponent = () => {
  return (
    <div className="relative mx-auto my-24 container flex justify-center items-center gap-4 sm:gap-16">
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
