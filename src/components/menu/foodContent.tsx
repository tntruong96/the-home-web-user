import { TCategory } from "@/types/menu.type";
import { useTranslations } from "next-intl";
import { FC } from "react";
import MenuSection from "./menu-section";

const FoodContent: FC<{ data?: TCategory[] }> = ({ data }) => {
  const t = useTranslations("menu");

  return (
    <section className="mt-12 space-y-16 w-full flex flex-col overflow-auto">
      {data?.map((item) =>
        item.dishes.length ? (
          <MenuSection
            key={item.documentId}
            title={item.title}
            items={item.dishes}
          />
        ) : null
      )}
    </section>
  );
};

export default FoodContent;
