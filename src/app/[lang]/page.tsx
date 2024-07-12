import HomeAbout from "@/sections/HomeAbout/HomeAbout";
import HomeAdvantages from "@/sections/HomeAdvantages/HomeAdvantages";
import HomeHero from "@/sections/HomeHero/HomeHero";
import HomeProductHighlight from "@/sections/HomeProductHighlight/HomeProductHighlight";
import HomeROI from "@/sections/HomeROI/HomeROI";
import HomeShopHighlight from "@/sections/HomeShopHighlight/HomeShopHighlight";
import { getLocale } from "next-intl/server";

export default async function Index() {
  const locale = await getLocale();

  return (
    <main className="Home">
      <HomeHero />
      <HomeShopHighlight locale={locale} />
      <HomeProductHighlight />
      <HomeAdvantages />
      <HomeROI locale={locale} />
      <HomeAbout />
    </main>
  );
}
