"use client";
import {
  centralStory,
  northernStory,
  pqStory,
  southernStory,
} from "@/asset/specialty-menu";
import { useLocale } from "next-intl";
import Image from "next/image";
import { JSX } from "react";
import { Card, CardContent } from "../ui/card";
import { CarouselItem } from "../ui/carousel";
import MenuCarousel from "./menu-carousel";

type TLocaleStory = {
  en: TStory;
  vi: TStory;
  menu: TMenu[];
};

type TMenu = { url: string; alt: string };

type TStory = {
  title: string;
  content: JSX.Element;
};

const RegionStory = ({ region }: { region: string | null }) => {
  const locale = useLocale();

  const regionMap: Record<string, TLocaleStory | undefined> = {
    northern: northernStory,
    central: centralStory,
    southern: southernStory,
    pq: pqStory,
  };

  const localeStory = region ? regionMap[region] : null;

  const story: TStory | undefined =
    locale === "en" ? localeStory?.en : localeStory?.vi;

  const menu: TMenu[] = localeStory?.menu ?? [];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{story?.title}</h1>
      {story?.content}
      <div className="flex  w-full ">
        <MenuCarousel>
          {menu.map((item) => (
            <CarouselItem key={item.url} className="basis-1/2">
              <div className="p-1">
                <Card className="p-0 border-none rounded-none bg-primary">
                  <CardContent className="flex aspect-[2/3] flex-col items-center p-0">
                    <div className="relative  aspect-[2/3] h-fit w-full">
                      <Image
                        src={item.url}
                        alt={item.alt}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </MenuCarousel>
      </div>
    </div>
  );
};

export default RegionStory;
