import Slider from "react-slick";
import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import boida from "@/assets/icons/boida.svg";
import Slick from "@/components/Slick/Slick";
import Button from "@/components/Button/Button";

type Highlight = {
  id: string;
  name: string;
  brand: string;
  img: string;
  link: string;
};

export default function HighlightsCarousel({ highlights, onActiveItemIdChange, onControlReady }: any) {
  const slickRef = useRef<Slider>(null);

  const [currentId, setCurrentId] = useState(highlights[0].id);
  const [currentBrand, setCurrentBrand] = useState(highlights[0].brand);
  const [currentName, setCurrentName] = useState(highlights[0].name);
  const [currentLink, setCurrentLink] = useState(highlights[0].link);

  const handleAfterChange = (currentSlide: number) => {
    const activeItemId = highlights[currentSlide].id;
    onActiveItemIdChange(activeItemId); // Pass the active item ID to the parent component
    setCurrentId(activeItemId);
    setCurrentBrand(highlights[currentSlide].brand);
    setCurrentName(highlights[currentSlide].name);
    setCurrentLink(highlights[currentSlide].link);
  };

  // Expose next and previous slide methods
  useEffect(() => {
    const controls = {
      next: () => slickRef.current?.slickNext(),
      prev: () => slickRef.current?.slickPrev(),
    };
    if (onControlReady) {
      onControlReady(controls);
    }
  }, [onControlReady]);

  const t = useTranslations("common");

  const handleLinkClick = (event: any, url: string) => {
    console.log(url);
    if (event.shiftKey || event.ctrlKey || event.metaKey) {
      window.open(url, "_blank");
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="HighlightsCarousel">
      <Image src={boida} width={480} height={49} alt="boida" className="HighlightsCarousel__icon" />
      <Slick
        ref={slickRef}
        settings={{
          dots: false,
          arrows: false,
          infinite: true,
          speed: 250,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 8000,
          swipe: true,
          afterChange: handleAfterChange,
        }}
        responsiveSettings={[
          {
            breakpoint: 992,
            settings: {
              arrows: true,
            },
          },
        ]}
        componentClass="HighlightsCarousel__slider"
        items={highlights.map((highlight: Highlight, i: number) => ({
          id: highlight.id,
          component: (
            <div key={highlight.id} className="HighlightsCarousel__item">
              <div className="HighlightsCarousel__image-wrapper">
                <Image
                  src={highlight.img}
                  alt={highlight.name}
                  width={480}
                  height={480}
                  className="HighlightsCarousel__image"
                />
                <span className="HighlightsCarousel__image-badge">
                  Top <span>#{i + 1}</span>
                </span>
              </div>

              {/* <h2>{highlight.name}</h2>
              <p>{highlight.brand}</p>
              <a href={highlight.link}>Read more</a> */}
            </div>
          ),
        }))}
      />
      <div className="HighlightsCarousel__stage-wrapper">
        <div className="HighlightsCarousel__stage HighlightsCarousel__stage--1"></div>
        <div className="HighlightsCarousel__stage HighlightsCarousel__stage--2"></div>
        <div className="HighlightsCarousel__stage HighlightsCarousel__stage--3"></div>
      </div>

      <div className="HighlightsCarousel__footer">
        <h4 className="HighlightsCarousel__product">
          {currentBrand} - {currentName}
        </h4>
        <span className="HighlightsCarousel__id">/ &nbsp; {currentId} &nbsp; /</span>

        <div className="HighlightsCarousel__button-wrapper">
          <div className="HighlightsCarousel__button-circle HighlightsCarousel__button-circle--1"></div>
          <div className="HighlightsCarousel__line"></div>
          <Button
            className="HighlightsCarousel__button"
            type="primary"
            onClick={(e) => {
              handleLinkClick(e, currentLink);
            }}
          >
            {t("highlightsCarousel.view-in-shop")}
            <span className="u-bold">{t("highlightsCarousel.now")}</span>
          </Button>
          <div className="HighlightsCarousel__button-circle HighlightsCarousel__button-circle--2"></div>
        </div>
      </div>
    </div>
  );
}
