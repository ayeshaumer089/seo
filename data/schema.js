import { absoluteUrl, siteDescription, siteName, siteUrl } from "@/data/site";

export const siteLogoUrl = absoluteUrl("/logo.svg");

/**
 * Organization schema — used sitewide (layout) and on About / Contact.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: siteLogoUrl,
    description: siteDescription,
    foundingDate: "2026",
    sameAs: [],
  };
}

/**
 * WebSite schema — homepage / sitewide.
 * SearchAction omitted until a real /search page exists.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: siteLogoUrl,
      },
    },
  };
}

/**
 * Blog listing page schema.
 */
export function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteName} Blog`,
    url: absoluteUrl("/blog"),
    description:
      "Beginner-friendly tutorials on React, Next.js, JavaScript, CSS, HTML, and web development.",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: siteLogoUrl,
      },
    },
  };
}
