import Image from "next/image";
import React, { FC } from "react";
import sample from "../../../public/sample.avif";
import { TDish } from "@/types/menu.type";

const DishItem: FC<{ dish: TDish }> = ({ dish }) => {
  function handleOnClick(slug?: string) {
    // console.log(slug);
  }

  return (
    <div
      className="w-1/2 sm:w-1/3 md:w-full p-2 cursor-pointer"
      onClick={() => handleOnClick(dish.slug)}
    >
      <div className="relative w-full h-[150px]">
        <Image className="object-cover" fill alt="thumbnail" src={sample} />
      </div>
      <h6 className="text-white text-sm font-be-vietnam-pro">{dish?.name}</h6>
    </div>
  );
};

export default DishItem;
