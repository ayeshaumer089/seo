import { posts } from "@/data/posts";
import { absoluteUrl } from "@/data/site";

/**
 * Google discounts `lastmod` when every URL claims to have changed on the
 * current build date, so static pages use a fixed date and content pages
 * report the date of the content itself.
 */
const SITE_LAUNCH_DATE = new Date("2026-03-12");

function postDate(post) {
  return new Date(post.updated ?? post.date);
}

function latestPostDate() {
  const timestamps = posts.map((post) => postDate(post).getTime());
  return new Date(Math.max(...timestamps));
}

export default function sitemap() {
  const newest = latestPostDate();

  const staticPages = [
    {
      url: absoluteUrl("/"),
      lastModified: newest,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: newest,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: SITE_LAUNCH_DATE,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: SITE_LAUNCH_DATE,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const blogPages = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: postDate(post),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}
