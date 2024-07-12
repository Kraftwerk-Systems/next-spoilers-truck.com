import { getTranslations } from "next-intl/server";
import ValueList from "../../components/ValueList/ValueList";
import Image from "next/image";

import logoWhiteBg from "@/../public/img/logo/logo-whitebg.png";
import homeAboutUsBg from "@/../public/img/bg/section-home-about-us-bg.webp";

export default async function HomeAbout() {
  const t = await getTranslations("home");

  return (
    <section className="HomeAbout" id="about">
      <div className="HomeAbout__container-1">
        <div className="HomeAbout__heading">
          <p className="HomeAbout__subtitle">{t("about.HomeAbout__subtitle")}</p>
          <h2 className="HomeAbout__title">
            <span className="slash-group">
              <span className="thin-slash">/</span>
              <span className="thick-slash">/</span>
            </span>{" "}
            {t("about.HomeAbout__title.1")}
            <span className="u-semibold"> {t("about.HomeAbout__title.2")}</span>
          </h2>
        </div>
        <div className="HomeAbout__text-block">
          <p className="HomeAbout__description">
            <Image className="HomeAbout__logo" src={logoWhiteBg} alt="Car Trade Kft." width={300} />
            {t("about.HomeAbout__description")}
          </p>
        </div>
      </div>

      <div className="HomeAbout__container-2">
        <Image className="HomeAbout__image" src={homeAboutUsBg} alt="Car Trade Kft." />
      </div>

      <div className="HomeAbout__value-wrapper">
        <p className="HomeAbout__value-title">{t("about.HomeAbout__value-title")}</p>
        <ValueList />
      </div>
    </section>
  );
}
