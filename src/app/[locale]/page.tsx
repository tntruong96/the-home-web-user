import { getLocale } from "next-intl/server";

import AwardComponent from "@/components/home/award-container";
import HeroVideo from "@/components/home/hero-video";
import LibrarySlider from "@/components/home/library-slider";
import SocialContainer from "@/components/home/social-container";
import StoryCardsSection from "@/components/home/story-cards-section";
import MenuLandingSplit from "@/components/menu/menu-landing-split";
import MenuLandingImmersive from "@/components/menu/menu-landing-immersive";
import HumansSectionStaggered from "@/components/human/humans-section-staggered";
import HumansSectionEditorial from "@/components/human/humans-section-editorial";
import SocialSectionTealEditorial from "@/components/home/social-section-teal-editorial";
import SocialSectionSplitFeeds from "@/components/home/social-section-split-feeds";
import TopContainer from "@/components/home/top-container";
import { cn } from "@/lib/utils";

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
      {/* <HeroVideo /> */}
      <div
        className={cn(
          "[background-image:url('/THP.webp')] ",
          "bg-center bg-no-repeat bg-cover",
        )}
      >
        <TopContainer />
        <AwardComponent />
      </div>

      {/* <LibrarySlider /> */}
      <StoryCardsSection />

      <MenuLandingSplit />
      {/* <MenuLandingImmersive backgroundSrc="/main-bg.webp" /> */}

      <HumansSectionStaggered />
      {/* <HumansSectionEditorial /> */}

      {/* <SocialSectionTealEditorial
        facebookUrl="https://..."
        instagramUrl="https://..."
      /> */}
      <SocialSectionSplitFeeds
        facebookUrl="https://..."
        instagramUrl="https://..."
      />

      {/* <SocialContainer /> */}
    </main>
  );
}
