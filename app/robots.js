import { absoluteUrl } from "@/data/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep private / transactional demo routes out of crawls.
        disallow: [
          "/login",
          "/dashboard",
          "/admin",
          "/checkout",
          "/thank-you",
        ],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
