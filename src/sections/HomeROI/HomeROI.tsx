import ButtonLink from "@/components/ButtonLink/ButtonLink";
import ROICalculator from "@/components/ROICalculator/ROICalculator";
import currencies from "@/data/currencies";
import truckCategories from "@/data/truckCategories";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import smile from "@/../public/img/smile.webp";
import roiCalc from "@/../public/img/bg/section-roi-calculator-bg.webp";

// Dummy net fuel price per litre (in EUR)
const netFuelPricePerLitre = 1.5; // This is just a placeholder value

export default async function HomeROI({ locale }: { locale: string }) {
  const t = await getTranslations("home");

  const shopUrl = process.env.SHOP_URL;

  return (
    <section className="HomeROI">
      <div className="HomeROI__container" id="roi">
        <div className="HomeROI__top">
          <div className="HomeROI__heading">
            <p className="HomeROI__subtitle">{t("roi.HomeROI__subtitle")}</p>
            <h2 className="HomeROI__title">
              <span className="slash-group">
                <span className="thin-slash">/</span>
                <span className="thick-slash">/</span>
              </span>{" "}
              {t("roi.HomeROI__title.1")}
              <span className="u-semibold"> {t("roi.HomeROI__title.2")}</span>
            </h2>
            <p className="HomeROI__description">{t("roi.HomeROI__description")}</p>
          </div>
        </div>
        <div className="HomeROI__body">
          <ROICalculator
            truckCategories={truckCategories}
            currencies={currencies}
            netFuelPricePerLitre={netFuelPricePerLitre}
            locale={locale}
          />
          <div className="HomeROI__smile-group">
            <Image className="HomeROI__smile" src={smile} alt="Smile" />
            <div className="HomeROI__cta-group">
              <div className="HomeROI__cta">
                <p className="HomeROI__interested">{t("roi.HomeROI__cta.1")}</p>
                <p className="HomeROI__action">{t("roi.HomeROI__cta.2")}</p>
              </div>
              <ButtonLink className="HomeROI__button" type="secondary" href={shopUrl}>
                {t("roi.HomeROI__button")}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div className="HomeROI__image-wrapper">
        <Image className="HomeROI__image" src={roiCalc} alt="ROI Calculator" />
      </div>
    </section>
  );
}
