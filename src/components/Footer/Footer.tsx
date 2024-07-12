import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import logo from "@/../public/img/logo/logo.png";
import { Link } from "@/navigation";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

import phone from "@/assets/icons/phone.svg";
import mobile from "@/assets/icons/mobile.svg";
import email from "@/assets/icons/email.svg";
import facebook from "@/assets/icons/facebook.svg";
import heart from "@/assets/icons/heart.svg";

export default async function Footer() {
  const t = await getTranslations("common");

  const shopUrl = "/shop";

  return (
    <footer className="Footer">
      <div className="Footer__top">
        <Image className="Footer__logo" src={logo} alt="Car Trade Kft." width={350} />
        <div className="Footer__links">
          <div className="Footer__list">
            <p className="Footer__title">{t("footer.sitemap")}</p>
            <div className="Footer__body">
              <Link href="/" className="Footer__item">
                {t("footer.homeScreen")}
              </Link>
              <Link href="/#advantages" className="Footer__item">
                {t("footer.spoilerAdvantages")}
              </Link>
              <Link href="/#about" className="Footer__item">
                {t("footer.aboutUs")}
              </Link>
              <Link href="/tenders" className="Footer__item">
                {t("footer.tenders")}
              </Link>
              <Link href="/#contact" className="Footer__item">
                {t("footer.contact")}
              </Link>
            </div>
          </div>
          <div className="Footer__list">
            <p className="Footer__title">{t("footer.productCatalogue")}</p>
            <div className="Footer__body">
              <Link href={`${shopUrl}/top-products`} className="Footer__item">
                {t("footer.topProducts")}
              </Link>
              <Link href={`${shopUrl}/new-products`} className="Footer__item">
                {t("footer.newProducts")}
              </Link>
              <Link href={`${shopUrl}/brands`} className="Footer__item">
                {t("footer.ourBrands")}
              </Link>
              <Link href={`${shopUrl}/catalogue`} className="Footer__item">
                {t("footer.catalogueSearch")}
              </Link>
            </div>
          </div>
          <div className="Footer__list">
            <p className="Footer__title">{t("footer.connectWithUs")}</p>
            <div className="Footer__body">
              <div className="Footer__item">
                <Image src={phone} color="var(--primary-500)" width={8.75} alt="Phone" />
                <a href="tel:+3622328377">{t("footer.phone")} - +36 22 328-377</a>
              </div>
              <div className="Footer__item">
                <Image src={mobile} color="var(--primary-500)" width={8.75} alt="Mobile" />
                <a href="tel:+36203156600">{t("footer.mobile")} - +36 20 315 66 00</a>
              </div>
              <div className="Footer__item">
                <Image src={email} color="var(--primary-500)" width={8.75} alt="Email" />
                <a href="mailto:info@spoilers-truck.com">Email - info@spoilers-truck.com</a>
              </div>
              <div className="Footer__item">
                <Image src={facebook} color="var(--primary-500)" width={8.75} alt="Facebook" />
                <a href="https://www.facebook.com/CarTradeKft">Facebook - facebook.com/CarTradeKft</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer__cta">
        <p className="Footer__cta-title">{t("footer.Footer__cta-title")}</p>
        <ButtonLink type="grayscale" size="large" href={shopUrl}>
          {t("footer.Footer__cta-button")}
        </ButtonLink>
      </div>
      <div className="Footer__bottom">
        <div className="Footer__credits">
          <p className="Credits__text">Made with </p>
          <Image src={heart} color="var(--primary-500)" width={8.75} alt="Heart" />
          <p className="Credits__text"> by KraftWerk Systems in 2024.</p>
        </div>
        <div className="Footer__legal">
          <Link href="/privacy">{t("footer.privacyPolicy")}</Link>
          <Link href="/privacy">{t("footer.termsAndConditions")}</Link>
        </div>
      </div>
    </footer>
  );
}
