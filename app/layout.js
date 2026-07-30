import { Figtree, Syne } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/data/schema";
import {
  siteAuthor,
  siteCategory,
  siteDescription,
  siteKeywords,
  siteName,
  siteOgDescription,
  siteTitle,
  siteUrl,
  defaultOgImage,
  publicRobots,
  twitterCard,
} from "@/data/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const GA_MEASUREMENT_ID = "G-4MZPJY65VF";

export const metadata = {
  // Lets every child segment use relative URLs for canonical and OG images.
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  category: siteCategory,
  authors: [{ name: siteAuthor, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  // NOTE: `alternates` is deliberately NOT set here. Metadata is shallow-merged
  // from the root down, so a canonical defined in this layout would be
  // inherited by every page that doesn't override it — telling Google that
  // /about, /blog and /contact are all duplicates of the homepage. Each page
  // declares its own canonical instead.
  robots: publicRobots,
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    title: siteTitle,
    description: siteOgDescription,
    url: siteUrl,
    images: [defaultOgImage],
  },
  // Twitter Card reuses the same Open Graph image (best practice).
  twitter: twitterCard({
    title: siteTitle,
    description: siteOgDescription,
    image: defaultOgImage,
  }),
  verification: {
    google: "q3tEwqck3HyABBgXcVsAWfmWZw2kOaMlp6GaxzyzdfQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        {/* Organization + WebSite structured data (JSON-LD) */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
