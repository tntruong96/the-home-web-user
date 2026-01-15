"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface MenuFilterProps {
  onFilterClick: (pageIndex: number) => void;
  activeFilter: string | null;
}

const MenuFilter = ({ onFilterClick, activeFilter }: MenuFilterProps) => {
  const t = useTranslations("menu.filter");
  const [isOpen, setIsOpen] = useState(false);

  // Map filter categories to their starting page indices
  const filterMap: Record<string, number> = {
    salad: 3, // Pages 2-4
    appetizer: 5, // Pages 5-7
    main: 7, // Page 8
    pasta: 9, // Pages 9-12
    classicPizza: 13, // Pages 13-19
    vietnamesePizza: 19,
    dessert: 33, // Pages 20-21
    drink: 35, // Pages 22-31
  };

  const filters = [
    { key: "salad", page: filterMap.salad },
    // { key: "appetizer", page: filterMap.appetizer },
    { key: "main", page: filterMap.main },
    { key: "pasta", page: filterMap.pasta },
    { key: "classicPizza", page: filterMap.classicPizza },
    { key: "vietnamesePizza", page: filterMap.vietnamesePizza },
    { key: "dessert", page: filterMap.dessert },
    { key: "drink", page: filterMap.drink },
  ];

  const handleClick = (key: string, page: number) => {
    onFilterClick(page);
    setIsOpen(false);
  };

  return (
    <div className="w-full mb-8">
      {/* Mobile: Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-primary text-black rounded-lg font-semibold flex items-center justify-between"
        >
          <span>{activeFilter ? t(activeFilter) : t("salad")}</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => handleClick(filter.key, filter.page)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                  activeFilter === filter.key
                    ? "bg-primary text-white font-semibold"
                    : "bg-white"
                }`}
              >
                {t(filter.key)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Horizontal Scroll */}
      <div className="hidden md:block overflow-x-auto no-scrollbar">
        <div className="flex gap-2 md:gap-4 pb-2 min-w-max justify-center items-center">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleClick(filter.key, filter.page)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap transition-all ${
                activeFilter === filter.key
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-black "
              }`}
            >
              {t(filter.key)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
