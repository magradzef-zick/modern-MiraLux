import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MiraLux Travel — туры по Узбекистану и миру",
  description:
    "MIRA-LUX — туристическая компания в Ташкенте с 2009 года. Туры по Шёлковому пути (Самарканд, Бухара, Хива), зарубежные путешествия, визы, авиабилеты и отели.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
