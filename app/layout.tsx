import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adsons | Electronics Trading & Distribution",
    template: "%s | Adsons",
  },
  description:
    "Adsons connects dependable mobile and computer accessories with wholesale partners across Africa, Asia and North America.",
  openGraph: {
    title: "Adsons | Electronics Trading & Distribution",
    description: "Connecting markets. Powering everyday technology.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Adsons | Electronics Trading & Distribution",
    description: "Connecting markets. Powering everyday technology.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
