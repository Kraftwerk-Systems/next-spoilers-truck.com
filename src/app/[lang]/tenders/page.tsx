import Footer from "@/components/Footer/Footer";
import TendersHero from "@/sections/TendersHero/TendersHero";
import TendersTender1 from "@/sections/TendersTender1/TendersTender1";
import { getLocale } from "next-intl/server";

export default async function Index() {
  const locale = await getLocale();

  return (
    <main className="Tenders">
      <TendersHero locale={locale} />
      <div className="Tenders__divider" />
      <TendersTender1 />
      <Footer />
    </main>
  );
}
