// import { useTranslations } from "next-intl";
import HeroCarousel from "@/components/locations/hero-carousel";
import LocationCards from "@/components/locations/location-cards";
import { CAROUSEL_ITEM_QUERY } from "@/hooks/graph-query/carousel-item";
import { graphqlRequest } from "@/lib/graphql";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function LocationsPage() {
  //   const t = useTranslations("locations");
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["carousel-items"],
    queryFn: () => graphqlRequest(CAROUSEL_ITEM_QUERY),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="min-h-screen bg-white">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Location Cards */}
        <LocationCards />
      </div>
    </HydrationBoundary>
  );
}
