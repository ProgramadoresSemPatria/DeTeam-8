import LayoutWrapper from "@/components/layout/LayoutWrapper";
import MetaDataLayout from "@/components/layout/MetaDataLayout";
import { Toaster } from "@/components/ui/sonner";
import { Tooltip } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/auth/useAuthContext";
import { routing } from "@/i18n/routing";
import QueryClientProvider from "@/util/providers/ReactQueryProvider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <Tooltip />
      <Toaster richColors />
      <html lang={locale}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased
         max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
        >
          <NextIntlClientProvider>
            <QueryClientProvider>
              <MetaDataLayout>
                <AuthProvider>
                  <LayoutWrapper>{children}</LayoutWrapper>
                </AuthProvider>
              </MetaDataLayout>
            </QueryClientProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
