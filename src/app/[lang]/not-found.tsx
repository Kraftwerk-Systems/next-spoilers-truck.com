import notFound from "@/assets/icons/404.svg";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

export default async function NotFoundPage() {
  const t = await getTranslations("notFound");

  return (
    <>
      <main className="NotFound">
        {/* <img
          src="/img/logo/logo-title-url-no-background.webp"
          alt={t("logoAlt")}
          className="NotFound__logo"
        /> */}
        <div className="NotFound__title">
          <h1 className="NotFound__title-text">{t("heading")}</h1>
          <p className="NotFound__title-text">{t("message")}</p>
          <p className="NotFound__title-text">{t("message2")}</p>
        </div>
        <Image src={notFound} alt="404" className="NotFound__icon NotFound__icon--landscape" />
        <Image src={notFound} alt="404" className="NotFound__icon NotFound__icon--portrait" />
        <ButtonLink href="/" type="primary" isDark={true} className="NotFound__button">
          {t("backToHome")}
        </ButtonLink>
      </main>
    </>
  );
}
