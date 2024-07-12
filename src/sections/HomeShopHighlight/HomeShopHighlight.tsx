"use client";

import BrandCard from "@/components/BrandCard/BrandCard";
import Button from "@/components/Button/Button";
import ShopLink from "@/components/ShopLink/ShopLink";
import Slick from "@/components/Slick/Slick";
import brands from "@/data/brands";
import { useTranslations } from "next-intl";
import highlightBg from "/public/img/bg/section-shop-highlight-bg.webp";
import shopHero from "/public/img/bg/shop-hero.webp";
import Image from "next/image";

import { Link } from "@/navigation";

export default function HomeShopHighlight({ locale }: { locale: string }) {
  const t = useTranslations("home");

  const shopUrl = "/shop";

  const handleLinkClick = (event: any, url: string) => {
    if (event.shiftKey || event.ctrlKey || event.metaKey) {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  };

  return (
    <section className="HomeShopHighlight" id="shop-highlights">
      <div className="HomeShopHighlight__image-wrapper">
        <div className="HomeShopHighlight__image-container">
          <Image src={highlightBg} alt="Car Trade Kft." className="HomeShopHighlight__image" />
        </div>
        <div className="HomeShopHighlight__ornament HomeShopHighlight__ornament--1"></div>
        <div className="HomeShopHighlight__ornament HomeShopHighlight__ornament--2"></div>
      </div>

      <div className="HomeShopHighlight__content">
        <div className="HomeShopHighlight__title">
          <h2 className="HomeShopHighlight__heading">
            <span className="slash-group">
              <span className="thin-slash">/</span>
              <span className="thick-slash">/</span>
            </span>
            {t("shopHighlight.heading")}
            <span className="HomeShopHighlight__heading-bold">{t("shopHighlight.heading-bold")}</span>
          </h2>
          <p className="HomeShopHighlight__lead">{t("shopHighlight.lead")}</p>
          <p className="HomeShopHighlight__lead-bold">
            {t("shopHighlight.lead-bold")}{" "}
            <span className="HomeShopHighlight__lead-bold-highlight">{t("shopHighlight.lead-bold-highlight")}</span>
          </p>
        </div>
        <div className="HomeShopHighlight__link-group">
          <Link href={`https://shop.spoilers-truck.com/${locale}`} className="HomeShopHighlight__link-image-wrapper">
            <Image src={shopHero} alt={t("shopHighlight.image-alt")} className="HomeShopHighlight__link-image" />
          </Link>

          <ShopLink title="shop.spoilers-truck.com" url="https://shop.spoilers-truck.com" />
        </div>

        <div className="HomeShopHighlight__assortment-group">
          <h3 className="HomeShopHighlight__assortment-heading">
            <span className="slash-group">
              <span className="thin-slash">/</span>
              <span className="thick-slash">/</span>
            </span>
            {t("shopHighlight.assortment-heading")}
            <span className="HomeShopHighlight__assortment-heading-bold">
              {t("shopHighlight.assortment-heading-bold")}
            </span>
          </h3>
          <div className="HomeShopHighlight__assortment">
            <Slick
              settings={{
                slidesToShow: 3,
                slidesToScroll: 2,
                rows: 2,
                infinite: true,
                arrows: true,
                dots: true,
                speed: 350,
              }}
              responsiveSettings={[
                {
                  breakpoint: 1550,
                  settings: {
                    slidesToShow: 2,
                    arrows: true,
                  },
                },
                {
                  breakpoint: 950,
                  settings: {
                    slidesToShow: 2,
                    rows: 3,
                    arrows: true,
                  },
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    rows: 3,
                    autoplay: true,
                    autoplaySpeed: 4000,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 3,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    rows: 3,
                    arrows: false,
                  },
                },
              ]}
              items={brands.map((brand, i) => ({
                id: `brand-${i}`,
                component: (
                  <BrandCard key={`brand-${i}`} url={`${shopUrl}/brand/${brand}`}>
                    {brand}
                  </BrandCard>
                ),
              }))}
            />
          </div>
          <Button
            type="secondary"
            size="large"
            onClick={(e) => {
              handleLinkClick(e, shopUrl);
            }}
            className="HomeShopHighlight__button"
          >
            {t("shopHighlight.button-cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
