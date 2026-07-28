import { Figtree, Syne } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

// Intentionally minimal metadata — SEO fields left for you to add later.
export const metadata = {
  title: "TechNest Academy",
  verification: {
    google: "q3tEwqck3HyABBgXcVsAWfmWZw2kOaMlp6GaxzyzdfQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
