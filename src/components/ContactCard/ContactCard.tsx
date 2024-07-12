import { getTranslations } from "next-intl/server";
import React from "react";
import Image from "next/image";
import whiteBg from "@/../public/img/logo/logo-whitebg.png";

export default async function ContactCard() {
  const t = await getTranslations("common");

  return (
    <div className="ContactCard">
      <div className="ContactCard__banner">
        <div className="ContactCard__flag-wrapper">
          <div className="ContactCard__flag1"></div>
          <div className="ContactCard__flag2"></div>
          <div className="ContactCard__flag3"></div>
        </div>
        <div className="ContactCard__header">
          <div className="ContactCard__heading">
            <p className="ContactCard__title">Car Trade Kft.</p>
            <p className="ContactCard__subtitle">Tax No.: 10701001-2-07 (HU 10701001)</p>
          </div>
          <p className="ContactCard__lead">Spoilers for Your Truck.</p>
        </div>
      </div>
      <div className="ContactCard__body">
        <div className="ContactCard__body-row">
          <div className="ContactCard__item">
            <p className="ContactCard__label">{t("contactCard.address")}</p>
            <p className="ContactCard__value">8008 Székesfehérvár, Pf. 8.</p>
          </div>
          <div className="ContactCard__item">
            <p className="ContactCard__label">{t("contactCard.facility")}</p>
            <p className="ContactCard__value">8111 Seregélyes-Jánosmajor 18.ép.</p>
          </div>
        </div>
        <div className="ContactCard__body-row">
          <div className="ContactCard__item">
            <p className="ContactCard__label">{t("contactCard.telephone")}</p>
            <p className="ContactCard__value">(22) 328-377</p>
          </div>
          <div className="ContactCard__item">
            <p className="ContactCard__label">{t("contactCard.mobile")}</p>
            <p className="ContactCard__value">(20)3156600</p>
          </div>
          <div className="ContactCard__item">
            <p className="ContactCard__label">E-mail</p>
            <p className="ContactCard__value">cartrade@szivarvanynet.hu</p>
          </div>
        </div>
      </div>
      <div className="ContactCard__logo-wrapper">
        <Image className="ContactCard__logo" src={whiteBg} alt="Car Trade Kft. Logo" width={100} height={100} />
      </div>
    </div>
  );
}
