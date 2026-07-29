/**
 * Single source of truth for site-wide SEO values.
 * Imported by app/layout.js, app/robots.js and app/sitemap.js so the
 * canonical host is never duplicated or allowed to drift.
 */

export const siteUrl = "https://testjstutorial.netlify.app";

export const siteName = "TechNest Academy";

/** Homepage / default document title (~50–60 characters). */
export const siteTitle =
  "TechNest Academy | Learn React, Next.js & Web Development";

/** Default meta description (~150–160 characters). */
export const siteDescription =
  "TechNest Academy provides beginner-friendly tutorials on React, Next.js, JavaScript, CSS, HTML, AI tools, and web development with practical examples.";

/** Shorter Open Graph description for social previews. */
export const siteOgDescription =
  "Learn React, Next.js, JavaScript, CSS, HTML and AI with beginner-friendly tutorials.";

/** Byline used on every article. */
export const siteAuthor = "TechNest Academy";

export const siteKeywords = [
  "React Tutorial",
  "Next.js Tutorial",
  "JavaScript",
  "Web Development",
  "CSS",
  "HTML",
  "AI tools",
  "Programming Tips",
];

export const siteCategory = "Education";

/**
 * Default Open Graph / Twitter preview image (1200 × 630).
 * Absolute URL so WhatsApp, LinkedIn, and X always resolve the image.
 */
export const defaultOgImage = {
  url: "https://images.unsplash.com/photo-1498050108023-c8199c77ae80?w=1200&h=630&fit=crop",
  width: 1200,
  height: 630,
  alt: "TechNest Academy — beginner-friendly web development tutorials",
};

export const blogOgImage = {
  url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop",
  width: 1200,
  height: 630,
  alt: "TechNest Academy Blog",
};

export const aboutOgImage = {
  url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop",
  width: 1200,
  height: 630,
  alt: "About TechNest Academy",
};

export const contactOgImage = {
  url: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1200&h=630&fit=crop",
  width: 1200,
  height: 630,
  alt: "Contact TechNest Academy",
};

/**
 * Optional X (Twitter) handles for twitter:site / twitter:creator.
 * Update these when a real brand account exists.
 */
export const twitterSite = "@TechNestAcademy";
export const twitterCreator = "@TechNestAcademy";

/**
 * Shared Twitter Card fields — reuses the same image as Open Graph.
 * Prefer summary_large_image for professional link previews.
 */
export function twitterCard({ title, description, image }) {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [typeof image === "string" ? image : image.url],
    site: twitterSite,
    creator: twitterCreator,
  };
}

/** Builds an absolute URL for a site-relative path. */
export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
