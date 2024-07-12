import { getTranslations } from "next-intl/server";
import React from "react";
import Image from "next/image";

import szechenyi from "@/../public/img/szechenyi.webp";

export default async function Tender() {
  const t = await getTranslations("common");

  return (
    <div className="Tender">
      <div className="Tender__top">
        <div className="Tender__header">
          <p className="Tender__title">{t("tender.title")}</p>
          <p className="Tender__subtitle">GINOP-4.1.4-19-2020-01591</p>
        </div>
        <Image className="Tender__logo" src={szechenyi} alt="Szechenyi 2020" />
      </div>
      <div className="Tender__body">
        <div className="Tender__item">
          <p className="Tender__key">{t("tender.beneficiary.key")}</p>
          <p className="Tender__value">{t("tender.beneficiary.value")}</p>
        </div>
        <div className="Tender__item">
          <p className="Tender__key">{t("tender.project.key")}</p>
          <p className="Tender__value">{t("tender.project.value")}</p>
        </div>
        <div className="Tender__item">
          <p className="Tender__key">{t("tender.amount.key")}</p>
          <p className="Tender__value">{t("tender.amount.value")}</p>
        </div>
        <div className="Tender__item">
          <p className="Tender__key">{t("tender.ratio.key")}</p>
          <p className="Tender__value">{t("tender.ratio.value")}</p>
        </div>
        <div className="Tender__item">
          <p className="Tender__key">{t("tender.content.key")}</p>
          <p className="Tender__value">{t("tender.content.value")}</p>
        </div>
        <div className="Tender__item">
          <p className="Tender__key">{t("tender.end.key")}</p>
          <p className="Tender__value">{t("tender.end.value")}</p>
        </div>
        <div className="Tender__item">
          <p className="Tender__key">{t("tender.id.key")}</p>
          <p className="Tender__value">{t("tender.id.value")}</p>
        </div>
      </div>
    </div>
  );
}
