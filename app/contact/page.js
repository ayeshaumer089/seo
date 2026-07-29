import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { siteName } from "@/data/site";

// TODO: swap this for a real, monitored inbox before relying on the page.
const contactEmail = "hello@technest.academy";

const description =
  "Get in touch with TechNest Academy about learning paths, article ideas, corrections, or suggestions for topics you would like covered.";

export const metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName,
    title: `Contact | ${siteName}`,
    description,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Have a question about learning paths, article ideas, or a correction
            to one of our guides? Send a message using the form below, or email
            us directly.
          </p>
        </div>
      </section>

      <section className="container contact-layout">
        <div className="contact-panel">
          <h2>Send a message</h2>
          <p>
            Fill in your name, email, and message. You will see a confirmation
            note on the page after submitting.
          </p>
          <ContactForm />
        </div>

        <div className="contact-panel">
          <h2>Site details</h2>
          <p>
            <strong>Publication:</strong> TechNest Academy
          </p>
          <p>
            <strong>Focus:</strong> Beginner-friendly technology writing on web
            development, JavaScript, React, and CSS
          </p>
          <p>
            {/* TODO: replace with a mailbox you actually monitor. */}
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
          <p>
            <strong>Topics we cover:</strong> see the{" "}
            <Link href="/blog">full article list</Link> or read more{" "}
            <Link href="/about">about the site</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
