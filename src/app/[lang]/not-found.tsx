import notFound from "@/assets/icons/404.svg";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";

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
        <Link href="/">
          <button className="Button Button--primary Button--dark Button--normal NotFound__button">
            {t("backToHome")}
          </button>
        </Link>
      </main>
    </>
  );
}
