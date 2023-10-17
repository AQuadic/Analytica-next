import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import "react-phone-number-input/style.css";
import Script from "next/script";
import Layout from "@/components/layout/Layout";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import PushNotificationLayout from "@/components/PushNotificationLayout";
import Provider from "@/components/Provider";


export const metadata = {
  title: "analytica",
  description: "analytica is a...",
  openGraph: {
    title: "analytica",
    description: "analytica is a...",
  },
};

export default async function RootLayout({ children, params }) {
  const locale = useLocale();

  if (locale === "en") {
    import("./en.css");
  }
  if (locale === "ar") {
    import("./ar.css");
  }
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={locale === "en" ? "ltr" : "rtl"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout lang={locale}>
            <PushNotificationLayout>
              <Provider >
                <main>{children}</main>
              </Provider>
            </PushNotificationLayout>
          </Layout>
        </NextIntlClientProvider>

        <Script src="/bootstrap.js" />
      </body>
    </html>
  );
}
