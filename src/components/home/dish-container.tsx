import React, { FC } from "react";
import DishItem from "./dish-item";
import { TDish } from "@/types/menu.type";

interface IProps {
  title?: string;
  dishList?: TDish[];
  className?: string;
}

const DishContainer: FC<IProps> = ({ title, dishList }) => {
  return (
    <div className="my-12">
      <h3 className="text-center font-playfair-display text-white text-3xl font-medium mb-8 lg:pl-24 xl:pl-18 2xl:pl-0 2xl:pr-8">
        {title}
      </h3>
      <div className="mx-4 md:mx-6 flex flex-row flex-wrap  md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:grid-rows-2 md:gap-4">
        {dishList?.map((dish: TDish) => (
          <DishItem dish={dish} key={dish.documentId} />
        ))}
      </div>
    </div>
  );
};

export default DishContainer;
