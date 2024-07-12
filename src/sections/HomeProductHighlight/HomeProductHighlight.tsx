"use client";

import Controls from "@/components/Controls/Controls";
import HighlightsCarousel from "@/components/HighlightsCarousel/HighlightsCarousel";
import HighlightsTable from "@/components/HighlightsTable/HighlightsTable";
import highlights from "@/data/highlights";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

export default function HomeProductHighlight() {
  const t = useTranslations("home");

  const [carouselControls, setCarouselControls] = useState<{
    prev: () => void;
    next: () => void;
  } | null>(null);

  const [activeIdx, setActiveIdx] = useState(1);

  const handleActiveItemIdChange = (activeItemId: string) => {
    //console.log("Active Item ID:", activeItemId);

    setActiveIdx(highlights.findIndex((highlight) => highlight.id === activeItemId) + 1);
  };

  const handleControlReady = useCallback((controls: { prev: () => void; next: () => void }) => {
    setCarouselControls(controls);
  }, []);

  return (
    <section className="HomeProductHighlight" id="product-highlights">
      <div className="HomeProductHighlight__content">
        <div className="HomeProductHighlight__title">
          <span className="HomeProductHighlight__tagline">{t("productHighlight.tagline")}</span>
          <h2 className="HomeProductHighlight__heading">
            <span className="slash-group">
              <span className="thin-slash">/</span>
              <span className="thick-slash">/</span>
            </span>
            {t("productHighlight.heading")}
            <span className="HomeProductHighlight__heading-bold">{t("productHighlight.heading-bold")}</span>
          </h2>
          <p className="HomeProductHighlight__lead">
            {t("productHighlight.lead-1")}
            <br />
            {t("productHighlight.lead-2")}
            <span className="HomeProductHighlight__lead-bold">{t("productHighlight.lead-bold")}</span>
          </p>
        </div>
        <div className="HomeProductHighlight__main">
          <div className="HomeProductHighlight__main-left">
            <HighlightsCarousel
              highlights={highlights}
              onActiveItemIdChange={handleActiveItemIdChange}
              onControlReady={handleControlReady}
            />
          </div>
          <div className="HomeProductHighlight__main-right">
            <HighlightsTable data={highlights} activeIdx={activeIdx} />
            <Controls
              count={7}
              activeIdx={activeIdx}
              handlers={carouselControls || { prev: () => {}, next: () => {} }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
