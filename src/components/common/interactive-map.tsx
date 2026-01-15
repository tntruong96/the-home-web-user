"use client";
import { useDevice } from "@/hooks/useDeviceContext";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Stories from "../menu/region-stories";

// import DishContainer from "../home/dish-container";

type Region = "northern" | "central" | "southern" | "pq" | null;

const InteractiveMap = () => {
  const locale = useLocale();
  const t = useTranslations("main");
  const { isDesktop, isMobile } = useDevice();
  const [activeRegion, setActiveRegion] = useState<Region>("northern");

  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (ref.current && !ref.current.contains(event.target as Node)) {
  //       setActiveRegion(null);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="relative w-full lg:h-[900px]" ref={ref}>
      {/* Map Image with Overlay Regions */}
      <div className="relative h-[900px] flex flex-col lg:flex-row lg:gap-12 justify-end">
        <div className="relative flex flex-col justify-center items-center cursor-pointer flex-1 lg:w-1/2">
          <Image
            src={"/northern-2.png"}
            width={350}
            height={350}
            alt="Northern Vietnam map"
            onClick={() => setActiveRegion("northern")}
            className={` transition-all duration-200  ${
              activeRegion && activeRegion !== "northern"
                ? "brightness-50"
                : "brightness-100"
            }`}
          />
          <Image
            src={"/central-2.png"}
            width={350}
            height={350}
            alt="Central Vietnam map"
            onClick={() => setActiveRegion("central")}
            className={`transition-all duration-200 ${
              activeRegion && activeRegion !== "central"
                ? "brightness-50"
                : "brightness-100"
            }`}
          />
          <div className="flex relative w-[350px] h-[350px]">
            <Image
              src={"/pq.png"}
              width={100}
              height={300}
              alt="Southern Vietnam map"
              onClick={() => setActiveRegion("pq")}
              className={`flex-1 transition-all duration-200 ${
                activeRegion && activeRegion !== "pq"
                  ? "brightness-50"
                  : "brightness-100"
              }`}
            />
            <Image
              src={"/southern-2.png"}
              width={250}
              height={350}
              alt="Southern Vietnam map"
              onClick={() => setActiveRegion("southern")}
              className={`flex-1 transition-all duration-200 ${
                activeRegion && activeRegion !== "southern"
                  ? "brightness-50"
                  : "brightness-100"
              }`}
            />
          </div>
        </div>
        {/* Food Display Section */}
        {isDesktop && (
          <div className="flex-1 lg:w-1/2 hidden lg:block">
            <Stories region={activeRegion} />
          </div>
        )}
      </div>
      {isMobile ? (
        <div>
          {/* <DishContainer title={t("northern")} dishList={northernData} />
          <DishContainer title={t("central")} dishList={centralData} />
          <DishContainer title={t("southern")} dishList={southernData} /> */}
        </div>
      ) : null}
    </div>
  );
};

export default InteractiveMap;
