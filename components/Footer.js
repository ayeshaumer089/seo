import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">TechNest Academy</p>
          <p className="footer-text">
            A fictional technology blog for learners exploring web development,
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
          <ul className="footer-links">
            <li>Web Development</li>
            <li>JavaScript</li>
            <li>React &amp; Next.js</li>
            <li>Programming Tips</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} TechNest Academy. Built for learning practice.</p>
      </div>
    </footer>
  );
}
