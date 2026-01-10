"use client";
import React, { FC } from "react";
import MenuItem from "../menu/menu-item";
import { useGetRegionalDishes } from "@/hooks/queries/dishes";
import { useLocale } from "next-intl";
import { TDish } from "@/types/menu.type";

interface IProps {
  title?: string;
  dishes?: TDish[];
}

const RegionFoodsComponent = () => {
  const locale = useLocale();
  const { data: northernData } = useGetRegionalDishes(locale, "northern");
  const { data: centralData } = useGetRegionalDishes(locale, "central");
  const { data: southernData } = useGetRegionalDishes(locale, "southern");

  return (
    <section>
      <RegionFood title="Northern" dishes={northernData} />
      <RegionFood title="Central" dishes={centralData} />
      <RegionFood title="Southern" dishes={southernData} />
    </section>
  );
};

export default RegionFoodsComponent;

const RegionFood: FC<IProps> = ({ title, dishes }) => {
  return (
    <div>
      <h3 className="text-center text-white text-2xl">{title}</h3>
      {dishes?.map((dish) => (
        <MenuItem key={dish.documentId} item={dish} />
      ))}
    </div>
  );
};
