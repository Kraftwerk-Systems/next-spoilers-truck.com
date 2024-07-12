import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { getTranslations } from "next-intl/server";

export default async function GDPRPage() {
  const t = await getTranslations("privacy");

  return (
    <>
      <div className="GDPRPage__button-strip">
        <ButtonLink type="secondary" size="compact" className="GDPRPage__button GDPRPage__button--back" href="/">
          <span className="u-bold">{t("backToLastPage1")}</span>
          {t("backToLastPage2")}
        </ButtonLink>
      </div>

      <main className="GDPRPage GDPRPage--1 section">
        <div className="GDPRPage__top">
          <div className="GDPRPage__title">
            <p className="GDPRPage__tagline">{t("tagline")}</p>
            <h1 className="GDPRPage__heading">{t("heading")}</h1>
          </div>

          <p className="GDPRPage__description">{t("description")}</p>
        </div>
        <div className="GDPRPage__content">
          <h3>{t("0.title")}</h3>
          <br />
          {t("0.text--1")}
          <br />
          <br />
          {t("0.text--2")}
          <br />
          <br />
          <br />
          <h3>{t("1.title")}</h3>
          <br />
          {t("1.text--1")} <br />
          {t("1.text--2")} <br />
          <br />
          {t("1.text--3")} <br />
          {t("1.text--4")} <br />
          <br />
          <br />
          <h3>{t("2.title")}</h3>
          <br />
          {t("2.text--1")} <br />
          <br />
          {t("2.text--2")}
          <br />
          <br />
          {t("2.text--3")}
          <br />
          <br />
          <span className="u-bold">{t("2.sub1.title")}</span> <br />
          {t("2.sub1.text--1")} <br />
          {t("2.sub1.text--2")} <br />
          {t("2.sub1.text--3")} <br />
          <br />
          <br />
          <span className="u-bold"> {t("2.sub2.title")} </span> <br />
          {t("2.sub2.text--1")} <br />
          {t("2.sub2.text--2")} <br />
          {t("2.sub2.text--3")} <br />
          <br />
          <br />
          <span className="u-bold"> {t("2.sub3.title")} </span> <br />
          {t("2.sub3.text--1")} <br />
          <br />
          <br />
          <br />
          <h3>{t("3.title")}</h3> <br />
          {t("3.text--1")}
          <br />
          <br />
          {t("3.sub1.title")} <br />
          {t("3.sub1.text--1")}
          <br />
          <br />
          <br />
          <span className="u-bold"> {t("3.sub2.title")} </span> <br />
          {t("3.sub2.text--1")}
          <br />
          <br />
          <span className="u-bold">{t("3.sub3.title")}</span> <br />
          {t("3.sub3.text--1")}
          <br />
          <br />
          <span className="u-bold"> {t("3.sub4.title")} </span> <br />
          {t("3.sub4.text--1")}
          <br />
          <br />
          {t("3.sub4.text--2")} <br />
          <br />
          {t("3.sub4.text--3")}
          <br />
          <br />
          {t("3.sub4.text--4")}
          <br />
          <br />
          {t("3.sub4.text--5")}
          <br />
          <br />
          {t("3.sub4.text--6")}
          <br />
          {t("3.sub4.text--7")}
          <br />
          <br />
          {t("3.sub5.title")}
          <br />
          <br />
          <span className="u-bold"> {t("3.sub5.text--1")} </span> <br />
          {t("3.sub5.text--2")} <br />
          {t("3.sub5.text--3")}
          <br />
          <br />
          <span className="u-bold"> {t("3.sub6.title")} </span> <br />
          {t("3.sub6.text--1")} <br />
          {t("3.sub6.text--2")}
          <br />
          <br />
          {t("3.sub7.title")} <br />
          {t("3.sub7.text--1")}
          <br />
          <br />
          {t("3.sub7.text--2")} <br />
          {t("3.sub7.text--3")}
          <br />
          <br />
          {t("3.sub7.text--4")} <br />
          {t("3.sub7.text--5")}
          <br />
          <br />
          <span className="u-bold">{t("3.sub8.title")}</span> <br />
          <br />
          <span className="u-bold">{t("3.sub8.text--1")}</span> <br />
          {t("3.sub8.text--2")} <br />
          {t("3.sub8.text--3")}
          <br />
          {t("3.sub8.text--4")}
          <br />
          {t("3.sub8.text--5")}
          <br />
          {t("3.sub8.text--6")}
          <br />
          <br />
          <span className="u-bold">{t("3.sub9.title")}</span> <br />
          {t("3.sub9.text--1")} <br />
          <br />
          <span className="u-bold">{t("3.sub9.text--2")}</span> <br />
          {t("3.sub9.text--3")}
          <br />
          <br />
          <br />
          <h3>{t("4.title")}</h3>
          <br />
          {t("4.text--1")} <br />
          {t("4.text--2")}
          <br />
          <br />
          {t("4.text--3")}
          <br />
          {t("4.text--4")}
          <br />
          {t("4.text--5")}
          <br />
          <br />
          <br />
          <h3>{t("5.title")}</h3>
          <br />
          {t("5.text--1")}
          <br />
          <br />
          <br />
          <h3>{t("6.title")}</h3>
          <br />
          {t("6.text--1")}
          <br />
          <br />
          <br />
          <h3>{t("7.title")}</h3>
          <br />
          {t("7.text--1")}
          <br />
          <br />
          <br />
          <h3>{t("8.title")}</h3> <br />
          {t("8.text--1")}
          <br />
          <br />
          <span className="u-bold">{t("8.sub1.title")}</span>
          <br />
          <br />
          <span className="u-bold">{t("8.sub1.sub1.title")}</span> <br />
          {t("8.sub1.sub1.text--1")}
          <br />
          {t("8.sub1.sub1.text--2")}
          <br />
          {t("8.sub1.sub1.text--3")} <br />
          <br />
          <span className="u-bold">{t("8.sub1.sub2.title")}</span> <br />
          {t("8.sub1.sub2.text--1")}
          <br />
          {t("8.sub1.sub2.text--2")}
          <br />
          <br />
          <span className="u-bold">{t("8.sub1.sub3.title")}</span> <br />
          {t("8.sub1.sub3.text--1")}
          <br />
          {t("8.sub1.sub3.text--2")}
          <br /> <br />
          <span className="u-bold">{t("8.sub1.sub4.title")}</span> <br />
          {t("8.sub1.sub4.text--1")}
          <br />
          {t("8.sub1.sub4.text--2")}
          <br />
          <br />
          <span className="u-bold">{t("8.sub1.sub5.title")}</span> <br />
          {t("8.sub1.sub5.text--1")}
          <br />
          {t("8.sub1.sub5.text--2")}
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3>{t("9.title")}</h3>
          <br />
          <span className="u-bold">{t("9.sub1.title")}</span> <br />
          {t("9.sub1.text--1")}
          <br />
          {t("9.sub1.text--2")}
          <br />
          {t("9.sub1.text--3")}
          <br />
          {t("9.sub1.text--4")}
          <br />
          <br />
          <span className="u-bold">{t("9.sub2.title")}</span> <br />
          {t("9.sub2.text--1")}
          <br />
          <br />
          {t("9.sub2.text--2")}
          <br />
          <br />
          {t("9.sub2.text--3")}
          <br />
          <br />
          {t("9.sub2.text--4")}
          <br />
          <br />
          <span className="u-bold">{t("9.sub3.title")}</span> <br />
          {t("9.sub3.text--1")}
          <br />
          <br />
          <span className="u-bold">{t("9.sub4.title")}</span>
          <br />
          {t("9.sub4.text--1")}
          <br />
          <br />
          {t("9.sub4.text--2")}
          <br />
          {t("9.sub4.text--3")}
          <br />
          <br />
          {t("9.sub4.text--4")} <br />
          {t("9.sub4.text--5")}
          <br />
          {t("9.sub4.text--6")}
          <br />
          {t("9.sub4.text--7")}
          <br />
          <br />
          {t("9.sub4.text--8")}
          <br />
          {t("9.sub4.text--9")}
          <br />
          {t("9.sub4.text--10")}
          <br />
          {t("9.sub4.text--11")}
          <br />
          {t("9.sub4.text--12")}
          <br />
          {t("9.sub4.text--13")} <br />
          {t("9.sub4.text--14")}
          <br />
          <br />
          {t("9.sub4.text--15")}
          <br />
          <br />
          {t("9.sub4.text--16")}
          <br />
          <br />
          <span className="u-bold">{t("9.sub5.title")}</span>
          <br />
          {t("9.sub5.text--1")}
          <br />
          {t("9.sub5.text--2")}
          <br />
          {t("9.sub5.text--3")}
          <br />
          <br />
          <br />
          <span className="u-bold">{t("9.sub6.title")}</span> <br />
          {t("9.sub6.text--1")}
          <br />
          <br />
          <span className="u-bold">{t("9.sub7.title")}</span>
          <br />
          {t("9.sub7.text--1")}
          <br />
        </div>
      </main>
    </>
  );
}
