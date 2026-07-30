import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPostBySlug, getRelatedPosts, posts } from "@/data/posts";
import { absoluteUrl, publicRobots, siteName, siteUrl, twitterCard } from "@/data/site";
import { siteLogoUrl } from "@/data/schema";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found",
      robots: { index: false, follow: true },
    };
  }

  const url = absoluteUrl(`/blog/${post.slug}`);
  const ogImage = {
    url: post.image,
    width: 1200,
    height: 630,
    alt: post.title,
  };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "tutorial", "web development", "beginners"],
    authors: [{ name: post.author }],
    robots: publicRobots,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      siteName,
      title: post.title,
      description: post.excerpt,
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      section: post.category,
      images: [ogImage],
    },
    // Same cover image as Open Graph (easier to maintain).
    twitter: twitterCard({
      title: post.title,
      description: post.excerpt,
      image: ogImage,
    }),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, 3);
  const postUrl = absoluteUrl(`/blog/${post.slug}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    articleSection: post.category,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: siteLogoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <article className="container article-page">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{post.title}</span>
        </nav>
        <p className="category-pill">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-meta">
          <span>By {post.author}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </section>

      <img
        className="article-hero-image"
        src={post.image}
        alt={post.title}
        width={1200}
        height={700}
      />

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {related.length > 0 && (
        <section className="related-posts">
          <h2>Keep reading</h2>
          <ul className="related-posts-list">
            {related.map((item) => (
              <li key={item.id}>
                <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                <span className="related-posts-category">{item.category}</span>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="btn btn-secondary">
            Browse all articles
          </Link>
        </section>
      )}
    </article>
  );
}
