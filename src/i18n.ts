import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "hu", "de", "hr", "it", "ro", "sk", "slo"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
