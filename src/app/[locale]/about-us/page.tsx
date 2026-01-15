import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[100vw]">
        <Image
          src={"/home-story-sm.webp"}
          alt="Home Story"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default AboutUs;
