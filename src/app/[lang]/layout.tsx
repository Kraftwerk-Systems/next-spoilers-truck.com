import { locales } from "@/i18n";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/styles/main.scss";
import Header from "@/components/Header/Header";
import CookiesBar from "@/components/CookiesBar/CookiesBar";

import { Noto_Sans } from "next/font/google";
const notoSans = Noto_Sans({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={notoSans.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <CookiesBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
