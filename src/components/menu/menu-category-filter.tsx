"use client";
import { useTranslations } from "next-intl";

export default function MenuCategoryFilter(props: {
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  activeCategory: string;
}) {
  const t = useTranslations("menu");
  const { setActiveCategory, activeCategory } = props;

  return (
    <div className="flex justify-center">
      <div className="flex gap-4  md:gap-8 text-lg">
        <button
          onClick={() => setActiveCategory("food")}
          className={`transition-colors w-32 md:w-52 cursor-pointer text-xl md:text-3xl underline-offset-8 ${
            activeCategory === "food"
              ? "underline font-semibold"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {t("categories.food")}
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={() => setActiveCategory("drink")}
          className={`transition-colors w-32 md:w-52 cursor-pointer text-xl md:text-3xl underline-offset-8  ${
            activeCategory === "drink"
              ? "underline font-semibold"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {t("categories.drink")}
        </button>
      </div>
    </div>
  );
}
