import { useTranslations } from "next-intl";
import React from "react";

export default function HighlightsTable({ data, activeIdx }: any) {
  const t = useTranslations("common");

  return (
    <div className="HightlightsTable">
      <p className="HightlightsTable__title">
        <span className="u-bold">{t("highlightsTable.top7")}</span>
        {t("highlightsTable.products")}
      </p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>{t("highlightsTable.id")}</th>
            <th>{t("highlightsTable.brand")}</th>
            <th>{t("highlightsTable.name")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr
              key={item.id}
              className={
                activeIdx === data.indexOf(item) + 1
                  ? "HightlightsTable__item HightlightsTable__item--active"
                  : "HightlightsTable__item"
              }
            >
              <td>
                <span className="u-bold">{data.indexOf(item) + 1}</span>
              </td>
              <td className="HightlightsTable__id">{item.id}</td>
              <td className="HightlightsTable__brand">{item.brand}</td>
              <td className="HightlightsTable__name">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
