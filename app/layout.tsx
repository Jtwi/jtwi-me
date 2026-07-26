import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

const description =
  "Product manager at Topps Tiles. I scaled a £4m marketplace startup before moving into product management, and I still ship code.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jtwi.me"),
  title: "Jordan Twiggs — Product Manager",
  description,
  openGraph: {
    type: "website",
    url: "https://jtwi.me/",
    title: "Jordan Twiggs — Product Manager",
    description,
    siteName: "jtwi.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Twiggs — Product Manager",
    description,
  },
  alternates: { canonical: "https://jtwi.me/" },
};

export const viewport: Viewport = {
  themeColor: "#14151a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
