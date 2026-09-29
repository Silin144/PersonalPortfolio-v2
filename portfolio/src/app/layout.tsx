import type { Metadata } from "next";
import { Chakra_Petch, Share_Tech_Mono, EB_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/Providers";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Silin Gupta | Software Engineer",
  description:
    "CS student at University of Waterloo building AI-powered products and full-stack applications.",
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "University of Waterloo",
  ],
  authors: [{ name: "Silin Raj Gupta" }],
  metadataBase: new URL("https://silin.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://silin.dev",
    title: "Silin Gupta | Software Engineer",
    description: "CS student at UWaterloo building AI-powered products.",
    siteName: "Silin Gupta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silin Gupta | Software Engineer",
    description: "CS student at UWaterloo building AI-powered products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${shareTechMono.variable} ${ebGaramond.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B1CVECTKJS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B1CVECTKJS');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
