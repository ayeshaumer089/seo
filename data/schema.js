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

/**
 * Article schema (JSON-LD) for individual blog posts.
 * @type Article — matches Google Article rich-result expectations.
 */
export function articleSchema(post) {
  const postUrl = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.schemaDescription ?? post.excerpt,
    image: [post.image],
    author: {
      "@type": "Organization",
      name: post.author ?? siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: siteLogoUrl,
      },
    },
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
}

/**
 * BreadcrumbList schema for article pages.
 */
export function articleBreadcrumbSchema(post) {
  const postUrl = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };
}

/**
 * FAQPage schema — only for posts that define a `faqs` array.
 * Each item needs question + answer text that matches visible page content.
 */
export function faqPageSchema(post) {
  if (!post.faqs?.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
