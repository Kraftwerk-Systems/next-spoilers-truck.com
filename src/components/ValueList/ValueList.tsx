import React from "react";
import Slick from "../Slick/Slick";
import ValueItem from "../ValueItem/ValueItem";
import { getTranslations } from "next-intl/server";

export default async function ValueList() {
  const t = await getTranslations("common");

  return (
    <div className="ValueList">
      <Slick
        dotsWithNumbers={true}
        settings={{
          arrows: false,
          dots: false,
          slidesToShow: 4,
          infinite: true,
          speed: 350,
        }}
        responsiveSettings={[
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 3,
              speed: 350,
              autoplay: true,
              autoplaySpeed: 2500,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              autoplay: true,
              speed: 350,
              autoplaySpeed: 1500,
              arrows: true,
              dots: true,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 2,
              autoplay: true,
              speed: 350,
              autoplaySpeed: 1500,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
              autoplay: true,
              speed: 350,
              autoplaySpeed: 1500,
              arrows: false,
              dots: true,
            },
          },
        ]}
        componentClass="Slick--ValueList"
        itemClass="Slick__item"
        // dotsWithNumbers={true}
        items={[
          {
            id: "value#1",
            component: <ValueItem icon="quality-value">{t("valueList.quality-value")}</ValueItem>,
          },
          {
            id: "value#2",
            component: <ValueItem icon="communication-value">{t("valueList.communication-value")}</ValueItem>,
          },
          {
            id: "value#3",
            component: <ValueItem icon="catalog-value">{t("valueList.catalog-value")}</ValueItem>,
          },
          {
            id: "value#4",
            component: <ValueItem icon="flexible-service-value">{t("valueList.flexible-service-value")}</ValueItem>,
          },
        ]}
      />
    </div>
  );
}
