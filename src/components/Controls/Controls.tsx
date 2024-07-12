import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import controlArrow from "@/assets/icons/control-arrow.svg";

export default function Controls({ count, activeIdx, handlers }: any) {
  const t = useTranslations("common");

  const prev = handlers?.prev;
  const next = handlers?.next;

  const paginationEllipses = Array.from({ length: count }, (_, idx) => (
    <span key={idx} className={`ellipse ${idx === activeIdx - 1 ? "filled-ellipse" : "outlined-ellipse"}`} />
  ));

  return (
    <div className="Controls">
      <div className="Controls__group">
        <div className="Controls__control">
          <button
            className="Controls__button"
            onClick={() => {
              prev();
            }}
          >
            <Image src={controlArrow} alt="control arrow" width={14} height={14} />
          </button>
          <p className="Controls__text">{t("controls.previous")}</p>
        </div>
        <div className="Controls__control">
          <button
            className="Controls__button"
            onClick={() => {
              next();
            }}
          >
            <Image src={controlArrow} alt="control arrow 2" width={14} height={14} />
          </button>
          <p className="Controls__text">{t("controls.next")}</p>
        </div>
      </div>
      <div className="Controls__pagination">{paginationEllipses}</div>
    </div>
  );
}
