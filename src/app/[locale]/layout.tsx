import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "../globals.css";
import QueryProvider from "@/providers/query-provider";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import Footer from "@/components/common/footer";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Header from "@/components/common/header";
import { DeviceProvider } from "@/hooks/useDeviceContext";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: false,
});

const BeVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "The Home",
  description: "Welcome to The Home",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`font-be-vietnam-pro ${BeVietnamPro.variable} ${playfairDisplay.variable}  antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header currentLocale={locale} />
          <QueryProvider>
            <DeviceProvider>{children}</DeviceProvider>
          </QueryProvider>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
