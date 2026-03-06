import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.prolab.club";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "久留米高専 プログラミングラボ部",
    template: "%s | 久留米高専 プログラミングラボ部",
  },
  description:
    "久留米高専プログラミングラボ部(ProLab)の公式サイトです。プログラミングに興味を持つ学生が集まり、アプリ・ゲーム・アルゴリズムを制作しています。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "久留米高専 プログラミングラボ部",
    title: "久留米高専 プログラミングラボ部",
    description:
      "久留米高専プログラミングラボ部(ProLab)の公式サイトです。プログラミングに興味を持つ学生が集まり、アプリ・ゲーム・アルゴリズムを制作しています。",
    images: [
      {
        url: "/logo.png",
        alt: "久留米高専 プログラミングラボ部",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "久留米高専 プログラミングラボ部",
    description:
      "久留米高専プログラミングラボ部(ProLab)の公式サイトです。プログラミングに興味を持つ学生が集まり、アプリ・ゲーム・アルゴリズムを制作しています。",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-3">
              <p className="text-sm">(c) 2026 久留米高専プログラミングラボ部</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
