/**
 * Single source of truth for site-wide SEO values.
 * Imported by app/layout.js, app/robots.js and app/sitemap.js so the
 * canonical host is never duplicated or allowed to drift.
 */

export const siteUrl = "https://testjstutorial.netlify.app";

export const siteName = "TechNest Academy";

export const siteDescription =
  "Beginner-friendly guides to web development, JavaScript, React, Next.js, and CSS — clear explanations and small, practical examples you can build today.";

/** Byline used on every article. */
export const siteAuthor = "TechNest Academy";

/** Builds an absolute URL for a site-relative path. */
export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
