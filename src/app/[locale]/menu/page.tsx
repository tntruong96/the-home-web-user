import InteractiveMap from "@/components/common/interactive-map";
import MenuComponent from "@/components/menu/menu";
import MenuContent from "@/components/menu/menu-content";
import { QUERY_KEYS } from "@/hooks/keys";
import { getMenuCategories } from "@/services/menu";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getLocale } from "next-intl/server";

export default async function MenuPage() {
  const locale = await getLocale();
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: [QUERY_KEYS.CATEGORIES, locale],
  //   queryFn: () => getMenuCategories(locale),
  // });
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <div className="min-h-screen bg-white">
    //     <MenuContent />
    //   </div>
    // </HydrationBoundary>
    <section className="pt-40 pb-16 container mx-auto ">
      <InteractiveMap />

      <MenuComponent />
    </section>
  );
}
