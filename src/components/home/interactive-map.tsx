"use client";
import { useGetRegionalDishes } from "@/hooks/queries/dishes";
import { useDevice } from "@/hooks/useDeviceContext";
import { TDish } from "@/types/menu.type";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import central from "../../../public/central.webp";
import northern_line from "../../../public/northern-line.webp";
import central_line from "../../../public/central-line.webp";
import southern_line from "../../../public/southern-line.webp";
import northern from "../../../public/northern.webp";
import southern from "../../../public/southern.webp";
import DishContainer from "./dish-container";

type Region = "northern" | "central" | "southern" | null;

const InteractiveMap = () => {
  const locale = useLocale();
  const t = useTranslations("main");
  const { isDesktop, isMobile } = useDevice();
  const [activeRegion, setActiveRegion] = useState<Region>(null);
  const [dishesData, setDishesData] = useState<TDish[] | undefined>([]);
  const [title, setTitle] = useState<string>("");
  const [hoveredMap, setHoveredMap] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const { data: northernData } = useGetRegionalDishes(locale, "northern");
  const { data: centralData } = useGetRegionalDishes(locale, "central");
  const { data: southernData } = useGetRegionalDishes(locale, "southern");

  const getRegionData = (region: Region) => {
    switch (region) {
      case "northern":
        return setDishesData(northernData);
      case "central":
        return setDishesData(centralData);
      case "southern":
        return setDishesData(southernData);
      default:
        return;
    }
  };

  const getRegionTitle = (region: Region) => {
    switch (region) {
      case "northern":
        return setTitle(t("northern"));
      case "central":
        return setTitle(t("central"));
      case "southern":
        return setTitle(t("southern"));
      default:
        return;
    }
  };

  useEffect(() => {
    getRegionData(activeRegion);
    getRegionTitle(activeRegion);
    if (activeRegion) {
      setHoveredMap(true);
    }
  }, [activeRegion]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActiveRegion(null);
        setHoveredMap(false);
        setTitle("");
        setDishesData([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full h-full md:h-[900px] lg:h-[700px]" ref={ref}>
      {/* Map Image with Overlay Regions */}
      <div className="relative  md:h-[900px] lg:h-[700px] flex justify-center">
        {activeRegion && activeRegion === "northern" && (
          <div className="lg:w-[50vw] xl:w-[50vw] h-[70px] hidden lg:block absolute top-[90px] left-[16vw] xl:left-[18vw] object-cover z-20">
            <Image fill src={northern_line} alt="northern line" />
          </div>
        )}
        {activeRegion && activeRegion === "central" && (
          <div className="lg:w-[44vw] h-[300px] hidden lg:block absolute top-[90px] left-[24vw] object-cover z-20">
            <Image fill src={central_line} alt="northern line" />
          </div>
        )}
        {activeRegion && activeRegion === "southern" && (
          <div className="lg:w-[43vw] h-[400px] hidden lg:block absolute top-[90px] left-[25vw] object-cover z-20">
            <Image fill src={southern_line} alt="northern line" />
          </div>
        )}
        <div className="relative flex flex-col justify-center items-center cursor-pointer flex-1">
          <Image
            src={northern}
            width={350}
            height={350}
            alt="Northern Vietnam map"
            onClick={() => isDesktop && setActiveRegion("northern")}
            className={`transition-all duration-200  ${
              activeRegion && activeRegion !== "northern"
                ? "brightness-50"
                : "brightness-100"
            }`}
          />
          <Image
            src={central}
            width={350}
            height={350}
            alt="Central Vietnam map"
            onClick={() => isDesktop && setActiveRegion("central")}
            className={`transition-all duration-200 ${
              activeRegion && activeRegion !== "central"
                ? "brightness-50"
                : "brightness-100"
            }`}
          />
          <Image
            src={southern}
            width={350}
            height={350}
            alt="Southern Vietnam map"
            onClick={() => isDesktop && setActiveRegion("southern")}
            className={`transition-all duration-200 ${
              activeRegion && activeRegion !== "southern"
                ? "brightness-50"
                : "brightness-100"
            }`}
          />
        </div>
        {/* Food Display Section */}
        {isDesktop && (
          <div className="flex-1">
            {hoveredMap ? (
              <DishContainer title={title} dishList={dishesData} />
            ) : null}
          </div>
        )}
      </div>
      {isMobile ? (
        <div>
          <DishContainer title={t("northern")} dishList={northernData} />
          <DishContainer title={t("central")} dishList={centralData} />
          <DishContainer title={t("southern")} dishList={southernData} />
        </div>
      ) : null}
    </div>
  );
};

export default InteractiveMap;
