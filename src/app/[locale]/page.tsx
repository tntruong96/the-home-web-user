import { getLocale } from "next-intl/server";

import AwardComponent from "@/components/home/award-container";
import HeroVideo from "@/components/home/hero-video";
import LibrarySlider from "@/components/home/library-slider";
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
    <main className="-mt-1">
      <HeroVideo />

      <AwardComponent />

      <LibrarySlider />

      <SocialContainer />
    </main>
  );
}
