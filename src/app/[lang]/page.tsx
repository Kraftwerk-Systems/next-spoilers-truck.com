import HomeHero from "@/sections/HomeHero/HomeHero";
import HomeShopHighlight from "@/sections/HomeShopHighlight/HomeShopHighlight";
import { getLocale } from "next-intl/server";

export default async function Index() {
  const locale = await getLocale();

  return (
    <main className="Home">
      <HomeHero />
      <HomeShopHighlight locale={locale} />
    </main>
  );
}
