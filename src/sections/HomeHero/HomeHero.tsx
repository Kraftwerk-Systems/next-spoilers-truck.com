"use client";

import Button from "@/components/Button/Button";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import phone from "@/assets/icons/phone.svg";
import mobile from "@/assets/icons/mobile.svg";
import email from "@/assets/icons/email.svg";
import facebook from "@/assets/icons/facebook.svg";

export default function HomeHero() {
  const t = useTranslations("home");

  const shopUrl = "/shop";

  const scrollTo = (id: string) => {
    const roiSection = document.getElementById(id);
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (event: any, url: string) => {
    if (event.shiftKey || event.ctrlKey || event.metaKey) {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  };

  return (
    <section className="HomeHero" id="hero">
      <div className="HomeHero__row">
        <div className="HomeHero__column-heading">
          <div className="HomeHero__group-title">
            <h2 className="HomeHero__subheading">
              <span className="HomeHero__subheading-highlight">{t("hero.subheading-highlight")}</span>
              <br className="HomeHero__br HomeHero__br--2" />
              {t("hero.subheading")}
            </h2>
            <h1 className="HomeHero__heading">
              {t("hero.heading-1")}
              <span className="HomeHero__heading-bold highlighted-text">{t("hero.heading-bold")}</span>
              <br className="HomeHero__br HomeHero__br--1" />
              {t("hero.heading-2")}
              <span className="HomeHero__heading-medium">{t("hero.heading-medium")}</span>
            </h1>
            <p className="HomeHero__lead">
              {t("hero.lead-1")}
              <span className="HomeHero__lead-highlight">{t("hero.lead-highlight")}</span>
              {t("hero.lead-2")}
            </p>
          </div>
          <div className="HomeHero__group-cta">
            <span className="HomeHero__tagline">{t("hero.tagline")}</span>
            <div className="HomeHero__buttons">
              <div className="HomeHero__button-group">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => scrollTo("roi")}
                  className="HomeHero__button HomeHero__roi-button"
                >
                  {t("hero.roi-button")}
                </Button>
                <small className="HomeHero__roi-small">{t("hero.roi-small")}</small>
              </div>
              <Button
                type="grayscale"
                size="large"
                onClick={() => {
                  scrollTo("product-highlights");
                }}
                className="HomeHero__button HomeHero__shop-button"
              >
                {t("hero.view-products-button")}
              </Button>
            </div>
          </div>
        </div>
        <div className="HomeHero__column-shop">
          <div className="HomeHero__column-shop-top">
            <span className="HomeHero__visit-shop">
              {t("hero.visit-shop")}
              <span className="HomeHero__visit-shop-bold">{t("hero.visit-shop-bold")}</span>
            </span>
            <Button
              type="secondary"
              size="large"
              onClick={(event) => handleLinkClick(event, shopUrl)}
              className="HomeHero__button HomeHero__to-shop-button"
            >
              {t("hero.to-shop-button")}
            </Button>{" "}
          </div>
          <div className="HomeHero__contacts">
            <span className="HomeHero__contact-heading">{t("hero.contact-heading")}</span>
            <div className="HomeHero__contact-group">
              <a href="tel:+3622328377" className="HomeHero__contact">
                {t("hero.phone")}
              </a>
              <Image src={phone} className="HomeHero__contact-icon" color="var(--primary-500)" width={40} alt="phone" />
            </div>
            <div className="HomeHero__contact-group">
              <a href="tel:+36203156600" className="HomeHero__contact">
                {t("hero.mobile")}
              </a>
              <Image
                src={mobile}
                className="HomeHero__contact-icon"
                color="var(--primary-500)"
                width={40}
                alt="mobile"
              />
            </div>
            <div className="HomeHero__contact-group">
              <a href="mailto:info@spoilers-truck.com" className="HomeHero__contact">
                {t("hero.email")}
              </a>
              <Image src={email} className="HomeHero__contact-icon" color="var(--primary-500)" width={40} alt="email" />
            </div>
            <div className="HomeHero__contact-group">
              <a href="https://www.facebook.com/CarTradeKft" className="HomeHero__contact">
                {t("hero.facebook")}
              </a>
              <Image
                src={facebook}
                className="HomeHero__contact-icon"
                color="var(--primary-500)"
                width={40}
                alt="facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
