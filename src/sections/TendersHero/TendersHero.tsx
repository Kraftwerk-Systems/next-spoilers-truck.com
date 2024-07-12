import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import arrow from "@/assets/icons/arrow.svg";
import hu from "@/assets/icons/hu.svg";
import bg from "@/../public/img/bg/section-tenders-hero-bg.webp";

export default async function TendersHero({ locale }: { locale: string }) {
  const t = await getTranslations("tenders");

  return (
    <section className="TendersHero">
      <div className="TendersHero__content">
        <div className="TendersHero__technical"></div>
        <div className="TendersHero__heading-wrapper">
          <div className="TendersHero__heading">
            <p className="TendersHero__title">
              <span className="slash-group">
                <span className="thin-slash">/</span>
                <span className="thick-slash">/</span>
              </span>
              <span className="u-semibold"> {t("TendersHero__title.1")}</span> {t("TendersHero__title.2")}
              <span className="u-semibold"> {t("TendersHero__title.3")}</span>
            </p>
            <div className="TendersHero__labels">
              <span className="TendersHero__label">GINOP</span>
              <span className="TendersHero__label">2021</span>
            </div>
            <p className="TendersHero__description">{t("TendersHero__description")}</p>
          </div>
        </div>
        <div className="TendersHero__control-wrapper">
          <div className="TendersHero__circle-button-wrapper">
            <Link href={`/tenders/#tender-1`} className="TendersHero__circle-button">
              <Image src={arrow} width={17.5} color="var(--grayscale-0)" alt="arrow" />
            </Link>
            <div className="TendersHero__circle-button-asd"></div>
          </div>
        </div>

        <div className="TendersHero__banner">
          <div className="TendersHero__counter">
            <p className="TendersHero__counter-value">1</p>
            <p className="TendersHero__counter-label">{t("TendersHero__counter-label")}</p>
          </div>
          <Image src={hu} width={42} alt="Hungary" />
        </div>
      </div>

      <div className="TendersHero__image-wrapper">
        <Image src={bg} alt="Tenders Hero" className="TendersHero__image" />
      </div>
    </section>
  );
}
