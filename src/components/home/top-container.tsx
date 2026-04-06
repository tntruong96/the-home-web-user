import { cn } from "@/lib/utils";
import React from "react";
import TopTextTitle from "./top-text-title";
import Image from "next/image";
import AwardComponent from "./award-container";

const TopContainer = () => {
  return (
    <section
      className={cn(
        "relative h-screen bg-center bg-no-repeat bg-cover",
        // "[background-image:url('/THP.webp')]",
      )}
    >
      <Image
        src={"/vector/map-vec.png"}
        alt="map"
        className="object-fill hidden lg:flex absolute -left-40 xl:-left-2"
        height={1000}
        width={1000}
      />

      <TopTextTitle />
      {/* <AwardComponent /> */}
    </section>
  );
};

export default TopContainer;
