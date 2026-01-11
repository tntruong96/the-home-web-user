import { Play } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { QueryClient } from "@tanstack/react-query";

import InteractiveMap from "@/components/home/interactive-map";
import LibrarySlider from "@/components/home/library-slider";
import HeroVideo from "@/components/home/hero-video";
import { QUERY_KEYS } from "@/hooks/keys";
import { getDishes } from "@/services/menu";
import SocialContainer from "@/components/home/social-container";

export default async function HomePage() {
  const locale = await getLocale();
  const isVietnamese = locale === "vi";
  // const queryClient = new QueryClient();
  // await Promise.all([
  //   await queryClient.prefetchQuery({
  //     queryKey: [QUERY_KEYS.DISHES, locale, "northern"],
  //     queryFn: () => getDishes(locale, "northern"),
  //   }),
  //   await queryClient.prefetchQuery({
  //     queryKey: [QUERY_KEYS.DISHES, locale, "central"],
  //     queryFn: () => getDishes(locale, "central"),
  //   }),
  //   await queryClient.prefetchQuery({
  //     queryKey: [QUERY_KEYS.DISHES, locale, "southern"],
  //     queryFn: () => getDishes(locale, "southern"),
  //   }),
  // ]);

  return (
    <main className="">
      <HeroVideo />

      <LibrarySlider />

      <SocialContainer />
    </main>
  );
}
