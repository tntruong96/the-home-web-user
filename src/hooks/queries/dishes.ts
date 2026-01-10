import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../keys";
import { getDishes } from "@/services/menu";

export const useGetRegionalDishes = (
  locale: string = "vn",
  region: string = "northern"
) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.DISHES, locale, region],
    queryFn: () => getDishes(locale, region),
  });

  return { ...query };
};
