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

/** Builds an absolute URL for a site-relative path. */
export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
