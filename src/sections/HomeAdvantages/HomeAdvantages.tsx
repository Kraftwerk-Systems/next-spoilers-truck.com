import AdvantageList from "@/components/AdvantageList/AdvantageList";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { getTranslations } from "next-intl/server";

export default async function HomeAdvantages() {
  const t = await getTranslations("home");

  const scrollTo = (id: string) => {
    const roiSection = document.getElementById(id);
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="HomeAdvantages" id="advantages">
      <div className="HomeAdvantages__background">
        <div className="HomeAdvantages__container">
          <div className="HomeAdvantages__top">
            <div className="HomeAdvantages__heading">
              <p className="HomeAdvantages__subtitle">{t("advantages.HomeAdvantages__subtitle")}</p>
              <h2 className="HomeAdvantages__title">
                <span className="slash-group">
                  <span className="thin-slash">/</span>
                  <span className="thick-slash">/</span>
                </span>
                <span className="u-semibold"> {t("advantages.HomeAdvantages__title.1")}</span>{" "}
                {t("advantages.HomeAdvantages__title.2")}
              </h2>
              <p className="HomeAdvantages__description">
                {t("advantages.HomeAdvantages__description.1")}{" "}
                <span className="HomeAdvantages__description_1 u-bold">
                  {t("advantages.HomeAdvantages__description.2")}
                </span>{" "}
                {t("advantages.HomeAdvantages__description.3")}
              </p>
            </div>
            <div className="HomeAdvantages__button-group">
              <ButtonLink className="HomeAdvantages__button" type="secondary" size="normal" href="/#roi">
                {t("advantages.HomeAdvantages__button.1")}{" "}
                <span className="u-bold">{t("advantages.HomeAdvantages__button.2")}</span>
              </ButtonLink>
              <small className="roi-small">{t("hero.roi-small")}</small>
            </div>
          </div>
          <AdvantageList />
        </div>
      </div>
    </section>
  );
}
