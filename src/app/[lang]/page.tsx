import { getTranslations } from "next-intl/server";

export default async function Index() {
  const t = await getTranslations("Index");
  return <h1>{t("title")}</h1>;
}
