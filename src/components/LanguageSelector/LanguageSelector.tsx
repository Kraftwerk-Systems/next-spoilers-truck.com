import { useTranslations } from "next-intl";
import globe from "@/assets/icons/globe.svg";
import Image from "next/image";

export default function LanguageSelector({ onToggle }: any) {
  const t = useTranslations("common");

  return (
    <div className="LanguageSelector" onClick={onToggle}>
      <div className="LanguageSelector__text">
        <span>{t("header.language.selector1")}</span>
        <span className="u-bold">{t("header.language.selector2")}</span>
        <span>{t("header.language.selector3")}</span>
      </div>
      <Image
        src={globe}
        className="LanguageSelector__icon"
        color="var(--secondary-400)"
        width={36}
        height={36}
        alt="Globe"
      />
    </div>
  );
}
