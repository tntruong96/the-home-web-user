import { getMenuCategories } from "@/services/menu";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../keys";
// import { getLocale } from "next-intl/server";

const useGetCategories = (locale: string, filters: string = "food") => {
  // console.log(locale);
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES, locale, filters],
    queryFn: () => getMenuCategories(locale, filters),
    refetchOnWindowFocus: false,
  });
};

export { useGetCategories };
