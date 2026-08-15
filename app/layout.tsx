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
    default: "Adsons | International Cellphone Accessories Trading",
    template: "%s | Adsons",
  },
  description:
    "Established in 2001, Adsons specializes in the import, export and wholesale distribution of cellphone accessories across international markets.",
  openGraph: {
    title: "Adsons | International Cellphone Accessories Trading",
    description: "Connecting Businesses. Building Lasting Partnerships.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Adsons - Connecting Businesses. Building Lasting Partnerships." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adsons | International Cellphone Accessories Trading",
    description: "Connecting Businesses. Building Lasting Partnerships.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/adsons-favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/adsons-favicon.ico", type: "image/x-icon", sizes: "256x256" },
    ],
    shortcut: "/adsons-favicon.ico",
    apple: "/adsons-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
