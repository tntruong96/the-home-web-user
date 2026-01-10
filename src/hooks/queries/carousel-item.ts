import { graphqlRequest } from "@/lib/graphql";
import { useQuery } from "@tanstack/react-query";
import { CAROUSEL_ITEM_QUERY } from "../graph-query/carousel-item";
import { TCarouselItem } from "@/types/location.type";

export const useGetCarouselItems = () => {
  const query = useQuery({
    queryKey: ["carousel-items"],
    queryFn: () => graphqlRequest<TCarouselItem>(CAROUSEL_ITEM_QUERY),
  });
  return { ...query };
};
