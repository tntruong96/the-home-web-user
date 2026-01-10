import { GET_CATEGORIES } from "@/hooks/graph-query/category";
import { GET_DISHES_QUERY } from "@/hooks/graph-query/dishes";
import { graphqlRequest } from "@/lib/graphql";
import { TDishesData, TMenuCategoryData } from "@/types/menu.type";

const getMenuCategories = async (
  locale: string = "vi",
  filters: string = "food"
) => {
  try {
    const res = await graphqlRequest<TMenuCategoryData>(GET_CATEGORIES, {
      locale,
      filters: {
        type: {
          eqi: filters,
        },
      },
    });
    return res.categories;
  } catch (error) {
    throw error;
  }
};

const getDishes = async (
  locale: string = "vi",
  region: string = "northern"
) => {
  const res = await graphqlRequest<TDishesData>(GET_DISHES_QUERY, {
    locale,
    filters: {
      region: {
        eqi: region,
      },
    },
  });
  return res.dishes;
};

export { getMenuCategories, getDishes };
