import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">TechNest Academy</p>
          <p className="footer-text">
            A technology blog for learners exploring web development,
            programming tips, and modern digital skills.
          </p>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-heading">Topics</p>
          {/* Linked rather than plain text so every page passes crawlable
              links down to individual articles. */}
          <ul className="footer-links">
            <li>
              <Link href="/blog/getting-started-with-web-development">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/blog/javascript-habits-that-save-time">
                JavaScript
              </Link>
            </li>
            <li>
              <Link href="/blog/why-nextjs-is-popular">React &amp; Next.js</Link>
            </li>
            <li>
              <Link href="/blog/programming-tips-for-faster-learning">
                Programming Tips
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} TechNest Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
