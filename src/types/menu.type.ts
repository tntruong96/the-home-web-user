import { TBaseDataResponse, TMedia } from "./common.type";

type TMenuCategoryData = {
  categories: TCategory[];
};

type TDishesData = {
  dishes: TDish[];
};

type TCategory = TBaseDataResponse & {
  title: string;
  slug: string;
  dishes: TDish[];
};

type TDish = TBaseDataResponse & {
  name: string;
  price: number;
  description: string;
  thumbnail: TMedia;
  ingredient: string;
  slug: string;
};

export { type TMenuCategoryData, type TCategory, type TDish, type TDishesData };
