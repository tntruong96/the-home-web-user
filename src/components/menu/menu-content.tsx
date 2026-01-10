"use client";
import React, { useState } from "react";
import MenuCategoryFilter from "@/components/menu/menu-category-filter";
import FoodContent from "./foodContent";
import { useGetCategories } from "@/hooks/queries/category";
import { useLocale } from "next-intl";

const MenuContent = () => {
  const [activeCategory, setActiveCategory] = useState("food");
  const locale = useLocale();
  const { data } = useGetCategories(locale, activeCategory);
  console.log(data);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Filter */}
      <MenuCategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <FoodContent data={data} />
      {/* {activeCategory === "food" ? (
      ) : (
        <DrinkContent />
      )} */}
    </div>
  );
};

export default MenuContent;
