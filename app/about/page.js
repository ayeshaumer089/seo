import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { categories, posts } from "@/data/posts";
import { organizationSchema } from "@/data/schema";
import {
  aboutOgImage,
  absoluteUrl,
  publicRobots,
  siteName,
  twitterCard,
} from "@/data/site";

const description =
  "TechNest Academy is a learning-focused technology blog helping beginners explore web development, JavaScript, React and CSS with confidence.";

export const metadata = {
  title: "About",
  description,
  robots: publicRobots,
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/about"),
    siteName,
    title: `About ${siteName}`,
    description,
    locale: "en_US",
    images: [aboutOgImage],
  },
  twitter: twitterCard({
    title: `About ${siteName}`,
    description,
    image: aboutOgImage,
  }),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <section className="page-hero">
        <div className="container">
          <h1>About TechNest Academy</h1>
          <p>
            We are a learning-focused technology blog helping beginners explore
            coding topics with confidence and curiosity.
          </p>
        </div>
      </section>

      <section className="container about-layout">
        <div className="about-copy">
          <h2>Our story</h2>
          <p>
            TechNest Academy started as a simple idea: technology writing should
            feel welcoming. Too many tutorials assume readers already know the
            jargon. We write as if we are sitting beside you, explaining one
            clear step at a time.
          </p>
          <p>
            Our articles cover{" "}
            <Link href="/blog/getting-started-with-web-development">
              web development
            </Link>
            ,{" "}
            <Link href="/blog/javascript-habits-that-save-time">JavaScript</Link>
            ,{" "}
            <Link href="/blog/react-components-for-beginners">React</Link>,{" "}
            <Link href="/blog/why-nextjs-is-popular">Next.js</Link>,{" "}
            <Link href="/blog/css-layouts-that-feel-modern">CSS</Link>,{" "}
            <Link href="/blog/html-semantics-made-simple">HTML</Link>,{" "}
            <Link href="/blog/freelancing-tips-for-new-developers">
              freelancing
            </Link>
            , <Link href="/blog/ai-tools-for-everyday-coding">AI tools</Link>,
            and{" "}
            <Link href="/blog/programming-tips-for-faster-learning">
              practical programming habits
            </Link>
            . Each piece is designed to be useful on its own and easy to revisit
            later.
          </p>
          <h2>What we believe</h2>
          <p>
            Learning sticks when explanations are honest, examples are small, and
            progress is celebrated. We avoid hype and focus on skills you can
            practice today. Whether you are building your first webpage or
            preparing for freelance work, we want this site to feel like a calm
            nest for your next skill.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-block">
            <strong>{posts.length}</strong>
            Articles to explore across beginner-friendly topics.
          </div>
          <div className="stat-block">
            <strong>{categories.length}</strong>
            Categories spanning code, design foundations, and career skills.
          </div>
          <div className="stat-block">
            <strong>Free</strong>
            Every guide is free to read, with no sign-up required.
          </div>
        </div>
      </section>
    </>
  );
}
