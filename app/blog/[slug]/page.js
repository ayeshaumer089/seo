import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { formatDate, getPostBySlug, getRelatedPosts, posts } from "@/data/posts";
import {
  articleBreadcrumbSchema,
  articleSchema,
  faqPageSchema,
} from "@/data/schema";
import { absoluteUrl, publicRobots, siteName, twitterCard } from "@/data/site";

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
  const faqSchema = faqPageSchema(post);

  return (
    <article className="container article-page">
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={articleBreadcrumbSchema(post)} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

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
