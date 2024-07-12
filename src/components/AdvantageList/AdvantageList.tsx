import React from "react";
import Slick from "@/components/Slick/Slick";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import { getTranslations } from "next-intl/server";

export default async function AdvantageList() {
  const t = await getTranslations("common");

  return (
    <div className="AdvantageList">
      <Slick
        dotsWithNumbers={true}
        settings={{
          arrows: false,
          slidesToShow: 5,
          swipe: true,
          infinite: false,
          speed: 400,
          dots: false,
          touchThreshold: 10,
        }}
        responsiveSettings={[
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 4,
              speed: 400,
              dots: true,
            },
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              speed: 400,
              dots: true,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              speed: 400,
              dots: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              autoplay: true,
              speed: 400,
              autoplaySpeed: 1750,
              arrows: true,
              swipe: true,
              dots: true,
            },
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              speed: 400,
              arrows: false,
              swipe: true,
              dots: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              autoplay: true,
              speed: 400,
              autoplaySpeed: 1500,
              arrows: true,
              swipe: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              autoplay: true,
              speed: 400,
              autoplaySpeed: 1500,
              arrows: true,
              swipe: true,
              dots: true,
            },
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
              autoplay: true,
              speed: 400,
              autoplaySpeed: 1500,
              arrows: false,
              swipe: true,
              dots: true,
            },
          },
        ]}
        componentClass="Slick--AdvantageList"
        itemClass="Slick__item"
        // dotsWithNumbers={true}
        items={[
          {
            id: "advantage#1",
            component: (
              <AdvantageCard icon="aero" title={t("advantageList.1.title")} subtitle={t("advantageList.1.subtitle")} />
            ),
          },
          {
            id: "advantage#2",
            component: (
              <AdvantageCard
                icon="stability"
                title={t("advantageList.2.title")}
                subtitle={t("advantageList.2.subtitle")}
              />
            ),
          },
          {
            id: "advantage#3",
            component: (
              <AdvantageCard
                icon="efficiency"
                title={t("advantageList.3.title")}
                subtitle={t("advantageList.3.subtitle")}
              />
            ),
          },
          {
            id: "advantage#4",
            component: (
              <AdvantageCard
                icon="safety"
                title={t("advantageList.4.title")}
                subtitle={t("advantageList.4.subtitle")}
              />
            ),
          },
          {
            id: "advantage#5",
            component: (
              <AdvantageCard
                icon="aesthetics"
                title={t("advantageList.5.title")}
                subtitle={t("advantageList.5.subtitle")}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
