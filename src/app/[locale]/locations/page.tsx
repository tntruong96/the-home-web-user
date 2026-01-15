// import { useTranslations } from "next-intl";

import HeroCarousel from "@/components/locations/hero-carousel";
import LocationCards from "@/components/locations/location-cards";
import LocationStory from "@/components/locations/story";
import { CarouselItem } from "@/components/ui/carousel";
import { CAROUSEL_ITEM_QUERY } from "@/hooks/graph-query/carousel-item";
import { graphqlRequest } from "@/lib/graphql";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Image from "next/image";

export default async function LocationsPage() {
  //   const t = useTranslations("locations");
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["carousel-items"],
  //   queryFn: () => graphqlRequest(CAROUSEL_ITEM_QUERY),
  // });

  return (
    <section className="container mx-auto md:max-w-5xl px-4">
      <LocationStory />
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Location Cards */}
      <LocationCards />
    </section>
  );
}
