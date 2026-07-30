/**
 * Article content for TechNest Academy, stored locally (no database).
 * Each entry drives its own route, sitemap entry and metadata.
 */

import { siteAuthor } from "@/data/site";

export const categories = [
  "Web Development",
  "JavaScript",
  "React",
  "Next.js",
  "Artificial Intelligence",
  "SEO Basics",
  "CSS",
  "HTML",
  "Freelancing",
  "Programming Tips",
];

export const posts = [
  {
    id: 1,
    slug: "getting-started-with-web-development",
    title: "Getting Started with Web Development in 2026",
    category: "Web Development",
    author: siteAuthor,
    date: "2026-03-12",
    image:
      "https://images.unsplash.com/photo-1498050108023-c8199c77ae80?w=1200&h=700&fit=crop",
    excerpt:
      "A practical roadmap for beginners who want to build real websites without feeling overwhelmed.",
    content: `
      <h2>Why web development still matters</h2>
      <p>Every business, portfolio, and product idea eventually needs a place on the internet. Web development is the craft of turning that idea into something people can open, read, and use. If you are just starting out, the amount of tools and tutorials can feel endless. The good news is that you only need a small set of skills to begin building useful pages today.</p>
      <p>At its core, the web is still built with HTML for structure, CSS for presentation, and JavaScript for behavior. Frameworks come and go, but these three foundations remain the language of browsers. Learning them well will make every future tool easier to understand.</p>
      <p>It also helps to remember that websites are for people first. A clean layout, readable text, and clear navigation matter as much as fancy features. When you keep the visitor in mind, your technical choices become easier to prioritize.</p>

      <h2>A simple learning path</h2>
      <p>Start with HTML and practice writing clean, readable documents. Focus on headings, paragraphs, lists, links, and forms before worrying about advanced layout patterns. Once you can describe a page in HTML, move to CSS and learn how spacing, color, typography, and flexbox shape the look of a site.</p>
      <p>After that, spend time with JavaScript fundamentals: variables, functions, arrays, objects, and events. Build tiny projects like a tip calculator, a theme toggle, or a to-do list. These small wins teach you how code responds to user actions.</p>
      <p>Do not rush into every new library you see on social media. Master the basics until you can explain them in your own words. That foundation will save you from copying code you do not understand.</p>

      <h2>Build projects, not just notes</h2>
      <p>Reading alone rarely creates confidence. Choose one small website idea each week and finish it. A personal landing page, a recipe collection, or a simple blog layout will teach you more than another unfinished course. When you get stuck, search for one specific problem at a time instead of rewriting everything from scratch.</p>
      <p>As you grow, explore version control with Git, host a static site for free, and share your work. Feedback from other learners is one of the fastest ways to improve. Web development rewards curiosity, patience, and consistent practice more than perfect memorization.</p>
      <p>Keep a folder of finished projects, even the imperfect ones. Looking back at earlier work is motivating, and those projects become portfolio pieces when you are ready to apply for opportunities or freelance work.</p>
    `,
  },
  {
    id: 2,
    slug: "javascript-habits-that-save-time",
    title: "JavaScript Habits That Save Hours Every Week",
    category: "JavaScript",
    author: siteAuthor,
    date: "2026-03-18",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0b4c4?w=1200&h=700&fit=crop",
    excerpt:
      "Small daily habits that help you write clearer JavaScript and debug problems faster.",
    content: `
      <h2>Write code you can read next month</h2>
      <p>JavaScript gives you freedom, but that freedom can turn into confusion if names and structure are unclear. Choose variable names that describe purpose, not type. A name like totalPrice is easier to understand later than tp or x1. Short functions with one job are easier to test and reuse than long blocks that do everything at once.</p>
      <p>Keep related logic together. If a function formats a date, avoid mixing network requests inside it. Clear boundaries make bugs easier to locate because you can ask, “Where does this responsibility live?”</p>
      <p>Comments can help, but readable code is better than a novel of explanations. Comment the why when something is surprising, and let clean naming handle the what.</p>

      <h2>Prefer predictable data flow</h2>
      <p>Many beginners struggle when values change in surprising places. Reduce surprise by treating data as something you transform step by step. Use arrays and objects intentionally, and avoid mutating shared state unless you understand who depends on it.</p>
      <p>Learn the common array methods well: map, filter, find, and reduce. They help you express transformations without nested loops. When async work appears, master promises and async/await before jumping into complex libraries. Waiting for data is part of almost every modern app.</p>
      <p>Practice with real examples such as filtering a list of blog posts, sorting products by price, or waiting for a fake API response. The patterns become natural when you repeat them in small projects.</p>

      <h2>Debug with a calm process</h2>
      <p>When something breaks, resist the urge to rewrite everything. Reproduce the issue, read the error carefully, and check the values at each step with console logs or breakpoints. Confirm assumptions one by one: Did the function run? Was the input what you expected? Did the condition evaluate the way you thought?</p>
      <p>Over time, this calm process becomes faster than guessing. Combine it with small commits and frequent saves so you can always return to a working version. Good JavaScript habits are less about clever tricks and more about clarity, patience, and consistent structure.</p>
      <p>If you are learning with others, explain the bug out loud. Teaching the problem often reveals the missing detail before anyone else replies. That habit alone can save hours every week.</p>
    `,
  },
  {
    id: 3,
    slug: "react-components-for-beginners",
    title: "Thinking in React Components as a Beginner",
    category: "React",
    author: siteAuthor,
    date: "2026-04-02",
    updated: "2026-07-29",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=700&fit=crop",
    excerpt:
      "How to split an interface into components, when to use props versus state, and the derived-state and key mistakes that trip up most beginners.",
    content: `
      <p>React asks you to stop thinking about pages and start thinking about components — small, reusable pieces that receive data and return markup. This guide walks through how to split an interface into components, how props and state differ, and the mistakes that trip up most beginners.</p>

      <h2>A component is a function that returns markup</h2>
      <p>That is the whole idea. A component takes an object of inputs (props) and returns what should appear on screen:</p>
<pre><code>function BlogCard({ title, category, date }) {
  return (
    &lt;article className="blog-card"&gt;
      &lt;p className="category-pill"&gt;{category}&lt;/p&gt;
      &lt;h3&gt;{title}&lt;/h3&gt;
      &lt;time dateTime={date}&gt;{date}&lt;/time&gt;
    &lt;/article&gt;
  );
}</code></pre>
      <p>Write it once, render it many times with different data:</p>
<pre><code>&lt;div className="posts-grid"&gt;
  {posts.map((post) => (
    &lt;BlogCard
      key={post.id}
      title={post.title}
      category={post.category}
      date={post.date}
    /&gt;
  ))}
&lt;/div&gt;</code></pre>
      <p>The <code>key</code> prop is not decorative. React uses it to match items between renders, so it must be stable and unique — a database id, not the array index. Using the index causes subtle bugs the moment the list is reordered or filtered.</p>

      <h2>Splitting a page into components</h2>
      <p>A reliable method: sketch the page, then circle every region that repeats or that has one clear job. Each circle becomes a component. A blog index typically decomposes into a page, a grid, and a card:</p>
<pre><code>BlogPage
 └─ PostsGrid
     └─ BlogCard   (rendered once per post)</code></pre>
      <p>Resist splitting further than that at first. Extracting a component for every heading and paragraph produces a tree so fragmented that following the data becomes harder than the duplication you removed. Build one screen that works, then extract the parts you actually repeat.</p>

      <h3>Props flow down, and are read-only</h3>
      <p>A component must never modify the props it receives. Data flows in one direction — parent to child — and that constraint is what makes React apps predictable. If a child needs to change something, the parent passes down a function for the child to call:</p>
<pre><code>function Parent() {
  const [query, setQuery] = useState("");

  return &lt;SearchBox value={query} onChange={setQuery} /&gt;;
}

function SearchBox({ value, onChange }) {
  return (
    &lt;input value={value} onChange={(e) => onChange(e.target.value)} /&gt;
  );
}</code></pre>

      <h2>State is memory between renders</h2>
      <p>Props come from outside. State is what a component remembers on its own — a menu being open, text typed into a field, a filter selection.</p>
<pre><code>import { useState } from "react";

function NavToggle() {
  const [open, setOpen] = useState(false);

  return (
    &lt;button aria-expanded={open} onClick={() => setOpen(!open)}&gt;
      {open ? "Close menu" : "Open menu"}
    &lt;/button&gt;
  );
}</code></pre>
      <p>When the new value depends on the previous one, pass a function instead of a value. This avoids stale reads when updates are batched:</p>
<pre><code>setCount((previous) => previous + 1);   // safe
setCount(count + 1);                     // can go stale</code></pre>

      <h3>Do not put derived values in state</h3>
      <p>This is the single most common beginner mistake. If a value can be calculated from existing props or state, calculate it during render — do not store a second copy that you have to keep synchronized:</p>
<pre><code>// Avoid: two sources of truth that will drift apart
const [posts, setPosts] = useState(allPosts);
const [visible, setVisible] = useState(allPosts);

// Prefer: one source of truth, derive the rest
const [category, setCategory] = useState("All");
const visible =
  category === "All"
    ? allPosts
    : allPosts.filter((post) => post.category === category);</code></pre>
      <p>Every piece of state you remove is a bug you can no longer write.</p>

      <h3>Lifting state up</h3>
      <p>When two components need the same information, move that state to their closest shared parent and pass it down to both. A category filter and a results grid both need the selected category, so it belongs to the page that renders them — not to either one individually.</p>

      <h2>Conditional rendering without the gotchas</h2>
      <p>Use a ternary when you need one branch or the other, and <code>&amp;&amp;</code> when you need something or nothing:</p>
<pre><code>{isLoading ? &lt;Spinner /&gt; : &lt;PostList posts={posts} /&gt;}

{related.length > 0 &amp;&amp; &lt;RelatedPosts items={related} /&gt;}</code></pre>
      <p>Watch out for the number-zero trap: <code>{posts.length &amp;&amp; &lt;List /&gt;}</code> renders a literal <code>0</code> on the page when the array is empty, because <code>0</code> is falsy but still a valid thing to render. Compare explicitly with <code>&gt; 0</code>.</p>

      <h2>Where to go next</h2>
      <p>Once components, props, and state feel natural, the next steps are effects, custom hooks, and performance work — all covered in our <a href="/blog/advanced-react-tutorial">advanced React tutorial</a>. If you plan to build full websites rather than single apps, <a href="/blog/why-nextjs-is-popular">Next.js</a> layers routing and server rendering on top of exactly these concepts.</p>
      <p>Most importantly, celebrate small interfaces that work. A polished button group or a reusable card component is real progress, even if the rest of the app is still simple.</p>
    `,
  },
  {
    id: 4,
    slug: "why-nextjs-is-popular",
    title: "Why Next.js Became a Favorite for Modern Sites",
    category: "Next.js",
    author: siteAuthor,
    date: "2026-04-10",
    updated: "2026-07-29",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=700&fit=crop",
    excerpt:
      "File-based routing, server vs client components, the metadata API, and deployment — the parts of Next.js that matter when you come from plain React.",
    content: `
      <p>React is excellent at building interactive interfaces, but a complete website also needs routing, page structure, metadata, and a path to production. Next.js supplies all of that. This guide covers the parts that matter when you are moving from plain React — file-based routing, server and client components, metadata, and deployment.</p>

      <h2>File-based routing removes a whole category of decisions</h2>
      <p>In a plain React app you install a router, configure it, and maintain a list of route definitions. In Next.js the folder structure <em>is</em> the routing table. A file at a given path becomes a URL:</p>
<pre><code>app/
  page.js              →  /
  about/page.js        →  /about
  blog/page.js         →  /blog
  blog/[slug]/page.js  →  /blog/anything</code></pre>
      <p>Square brackets mark a dynamic segment. The value arrives as a route parameter, so one file serves every article on your site. In recent versions <code>params</code> is a promise, so you await it:</p>
<pre><code>export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return &lt;article&gt;&lt;h1&gt;{post.title}&lt;/h1&gt;&lt;/article&gt;;
}</code></pre>
      <p>Pair that with <code>generateStaticParams</code> and Next.js pre-renders every article to static HTML at build time:</p>
<pre><code>export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}</code></pre>
      <p>The payoff is that each page ships as real HTML. Search engines and social scrapers see your content in the initial response instead of an empty div waiting for JavaScript.</p>

      <h2>Server components by default</h2>
      <p>The biggest conceptual shift from plain React is that components render on the server unless you say otherwise. Server components can read data directly, never ship their JavaScript to the browser, and cannot use hooks or event handlers.</p>
      <p>When you need interactivity — state, effects, click handlers — you opt in with a directive at the top of the file:</p>
<pre><code>"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  // ...
}</code></pre>
      <p>The practical rule: keep pages as server components, and push interactive pieces down into small client components. A navigation menu that toggles open needs <code>"use client"</code>; the page rendering your article does not. This keeps your JavaScript bundle small, which is exactly the outcome the <a href="/blog/advanced-react-tutorial">performance techniques in our advanced React guide</a> aim for.</p>

      <h2>Metadata is part of the framework</h2>
      <p>In plain React, page titles and descriptions usually require an extra library and run after the page loads. Next.js treats metadata as a first-class export, resolved on the server and included in the initial HTML.</p>
      <p>Static metadata is a plain object:</p>
<pre><code>export const metadata = {
  title: "About",
  description: "What this site covers and who writes it.",
  alternates: { canonical: "/about" },
};</code></pre>
      <p>Dynamic pages export a function instead:</p>
<pre><code>export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: \`/blog/\${post.slug}\` },
  };
}</code></pre>
      <p>One subtlety worth knowing early: metadata is shallow-merged from the root layout downward, and any field a page does not set is inherited. Setting a canonical URL in your root layout will therefore apply it to every page that does not override it — which tells Google your whole site is a duplicate of one URL. Set canonicals per page. Our <a href="/blog/seo-basics-every-beginner-should-know">SEO basics guide</a> explains why that single mistake is so damaging.</p>

      <h2>Layouts, and what makes them different</h2>
      <p>A <code>layout.js</code> wraps every page beneath it and — importantly — does not re-render when you navigate between sibling pages. Shared headers, footers, and fonts belong there:</p>
<pre><code>export default function RootLayout({ children }) {
  return (
    &lt;html lang="en"&gt;
      &lt;body&gt;
        &lt;Header /&gt;
        &lt;main&gt;{children}&lt;/main&gt;
        &lt;Footer /&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}</code></pre>
      <p>Special files sit alongside it: <code>loading.js</code> for a loading state, <code>not-found.js</code> for 404s, and <code>error.js</code> for error boundaries. Each is wired up by filename — no registration step.</p>

      <h2>Built-in files for robots and sitemaps</h2>
      <p>Two small conventions save real effort. A <code>app/sitemap.js</code> returning an array generates <code>/sitemap.xml</code>, and <code>app/robots.js</code> generates <code>/robots.txt</code>:</p>
<pre><code>export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://example.com/sitemap.xml",
  };
}</code></pre>
      <p>Because these are code, your sitemap stays in sync with your content automatically. One caveat: a static file in <code>public/</code> with the same name conflicts with the generated route, so pick one approach.</p>

      <h2>Deployment, and what changes on each host</h2>
      <p>Vercel and Netlify both build from a connected Git repository, so pushing to your main branch publishes the site. Netlify handles Next.js through an adapter that maps server rendering onto its own infrastructure; for a mostly static content site like a blog, everything pre-renders at build time and there is little to configure.</p>
      <p>Two things to verify after your first deploy: that <code>/robots.txt</code> and <code>/sitemap.xml</code> actually load at your live domain, and that "View page source" on an article shows your content in the HTML. If both are true, the site is genuinely crawlable.</p>

      <h2>What to learn first</h2>
      <p>You do not need every feature on day one. Learn pages, layouts, links, and metadata. Add server actions, route handlers, and caching only when a real requirement appears.</p>
      <p>Remember that Next.js is still React underneath. If components, props, and state feel shaky, spend time on <a href="/blog/react-components-for-beginners">thinking in React components</a> first — every Next.js concept sits on top of that foundation.</p>
    `,
  },
  {
    id: 5,
    slug: "ai-tools-for-everyday-coding",
    title: "Using AI Tools Without Losing Your Coding Skills",
    category: "Artificial Intelligence",
    author: siteAuthor,
    date: "2026-04-21",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=700&fit=crop",
    excerpt:
      "How to treat AI assistants as helpful partners while still learning to think like a developer.",
    content: `
      <h2>AI is a collaborator, not a replacement</h2>
      <p>Artificial intelligence tools can suggest code, explain errors, and draft first versions of functions. Used wisely, they shorten the distance between an idea and a working prototype. Used carelessly, they can hide gaps in understanding and create code you cannot maintain.</p>
      <p>The healthiest approach is to stay in charge of the decisions. Ask the tool for options, then evaluate those options with your own judgment. If you cannot explain what a snippet does, do not paste it into your project until you can.</p>
      <p>Think of AI like a fast pair-programming partner. It can propose ideas, but you remain responsible for testing, readability, and the final result.</p>

      <h2>Ask better questions</h2>
      <p>Vague prompts create vague answers. Instead of saying “fix my website,” describe the exact symptom, the file involved, and what you expected to happen. Share the error message and the smallest piece of code that reproduces the issue. Clear context leads to clearer help.</p>
      <p>Also ask for explanations, not only solutions. Request a short breakdown of why a bug happened and how the fix works. That habit turns each stuck moment into a mini lesson.</p>
      <p>When the answer seems too complex, ask for a simpler version. Learning is smoother when each explanation matches your current level.</p>

      <h2>Protect your learning loop</h2>
      <p>Set boundaries for practice days. On some projects, write the first draft yourself and only use AI for review. On others, let AI generate a starting point, then rewrite it in your own style. Both approaches build skill when you stay engaged.</p>
      <p>Finally, verify everything. Test the feature, check edge cases, and read the code line by line. AI can accelerate your work, but your responsibility for quality remains the same. Developers who combine curiosity with careful review get the best results from these tools.</p>
      <p>Keep a short notebook of concepts you learned through AI-assisted sessions. Over a month, that notebook becomes proof that the tools are helping you grow rather than replacing your thinking.</p>
    `,
  },
  {
    id: 6,
    slug: "seo-basics-every-beginner-should-know",
    title: "SEO Basics Every Beginner Should Know",
    category: "SEO Basics",
    author: siteAuthor,
    date: "2026-05-01",
    updated: "2026-07-29",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec52ef0f?w=1200&h=700&fit=crop",
    excerpt:
      "Crawling, indexing and ranking explained — plus how to read Search Console status labels and a checklist to diagnose pages Google skips.",
    content: `
      <p>Search engine optimization is the practice of helping people find your pages through search results. It is not magic, and it is not only about keywords. This guide walks through the three stages every page must pass — crawling, indexing, and ranking — and shows you exactly what to check at each one.</p>

      <h2>Crawling, indexing, and ranking are three different things</h2>
      <p>Most beginner confusion comes from treating these as one step. They are not, and a page can fail at any of them independently.</p>
      <ul>
        <li><strong>Crawling</strong> — Googlebot requests your URL and downloads the HTML. Blocked by <code>robots.txt</code>, server errors, or the page simply never being discovered.</li>
        <li><strong>Indexing</strong> — Google evaluates the page and decides whether to store it. Blocked by a <code>noindex</code> tag, a canonical pointing elsewhere, duplicate content, or a judgement that the page adds nothing new.</li>
        <li><strong>Ranking</strong> — Google decides where an indexed page appears for a given query. This is where relevance, quality, and links matter.</li>
      </ul>
      <p>The practical consequence: if your page is not indexed, working on keywords is wasted effort. Fix the earlier stage first.</p>

      <h3>The single most useful diagnostic</h3>
      <p>Open Google Search Console, go to <strong>Indexing → Pages</strong>, and read the exact status label on a URL that is missing. The wording tells you which stage failed:</p>
      <ul>
        <li><strong>Discovered – currently not indexed</strong> — Google knows the URL exists but has not crawled it. Usually a crawl-budget or site-authority signal, common on brand-new sites.</li>
        <li><strong>Crawled – currently not indexed</strong> — Google fetched and evaluated the page, then declined to store it. This is a quality or duplication judgement, not a bug.</li>
        <li><strong>Duplicate without user-selected canonical</strong> — Google found near-identical pages and picked one. Often caused by every page sharing the same title and description.</li>
        <li><strong>Alternate page with proper canonical tag</strong> — your own canonical tag is pointing at a different URL. Check that each page declares itself.</li>
        <li><strong>Excluded by ‘noindex’ tag</strong> — an explicit directive in your HTML. Search your codebase for it.</li>
      </ul>

      <h2>robots.txt and noindex do completely different jobs</h2>
      <p>This trips up almost every beginner. <code>robots.txt</code> controls <em>crawling</em>. The <code>noindex</code> meta tag controls <em>indexing</em>. They are not interchangeable.</p>
      <p>A file at the root of your domain tells crawlers which paths they may request:</p>
<pre><code>User-Agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml</code></pre>
      <p>A meta tag in the page's <code>&lt;head&gt;</code> tells Google not to store the page:</p>
<pre><code>&lt;meta name="robots" content="noindex, follow" /&gt;</code></pre>
      <p>Here is the trap: if you block a URL in <code>robots.txt</code>, Googlebot cannot fetch the page — which means it never sees the <code>noindex</code> tag inside it. The URL can then still appear in results as a bare link with no description. To keep a page out of the index, allow crawling and use <code>noindex</code>. Never both.</p>

      <h2>Give every page a unique title and description</h2>
      <p>A surprising number of sites ship with one title repeated across every page, usually because it was set once in a shared layout and never overridden. To Google, twenty pages with an identical title and no description look like one page duplicated twenty times — so it indexes one and discards the rest.</p>
      <p>Each page needs:</p>
      <ul>
        <li>A <strong>title</strong> of roughly 50–60 characters that describes that specific page</li>
        <li>A <strong>meta description</strong> of roughly 140–160 characters written for a human deciding whether to click</li>
        <li>A <strong>self-referencing canonical</strong> — the page's own URL, telling Google this is the version to index</li>
      </ul>
      <p>Beware of inherited canonicals. In framework layouts, a canonical set at the root often cascades to every child page that does not override it, silently declaring your entire site a duplicate of the homepage. Always verify the rendered HTML rather than trusting the source.</p>

      <h3>How to check what Google actually sees</h3>
      <p>View the raw HTML, not the rendered page in DevTools — those can differ. Right-click and choose "View page source", then search for <code>&lt;title&gt;</code>, <code>name="description"</code>, <code>rel="canonical"</code>, and <code>name="robots"</code>. Do this on three or four different pages and confirm the values actually differ. This one check catches the majority of beginner indexing problems.</p>

      <h2>Structure your content for both readers and parsers</h2>
      <p>Write for humans first, but structure deliberately. Use exactly one <code>&lt;h1&gt;</code> describing the page topic, then <code>&lt;h2&gt;</code> and <code>&lt;h3&gt;</code> to build a logical outline. Do not pick heading levels for their font size — that is what CSS is for. Our guide to <a href="/blog/html-semantics-made-simple">HTML semantics</a> covers why the tags themselves carry meaning.</p>
      <p>Answer the question a visitor actually arrived with, ideally in the first two paragraphs. Pages that bury the answer under three screens of preamble tend to lose readers, and the resulting behaviour is not a good signal.</p>

      <h2>Internal links are how Google finds your pages</h2>
      <p>Google discovers most pages by following links. A page that no other page links to — an "orphan" — may sit in your sitemap for months without being crawled. A sitemap is a hint; internal links are the actual path.</p>
      <p>Three habits that help:</p>
      <ul>
        <li>Link from your homepage to your most important pages directly</li>
        <li>End each article with two or three links to genuinely related articles</li>
        <li>Use descriptive anchor text — "thinking in React components" tells Google far more than "click here"</li>
      </ul>

      <h2>Why new sites wait, and what actually shortens the wait</h2>
      <p>A brand-new site with no inbound links receives a very small crawl budget. Typical first indexing runs from a few days to several weeks, and full coverage of a small site can take one to three months. This is normal and not a sign that something is broken.</p>
      <p>Repeatedly clicking "Request Indexing" in Search Console does not speed this up — it is a hint, not a command, and the daily quota is small. What genuinely helps is having pages worth indexing, a clean crawl path to them, and a few real links from places that are already crawled regularly.</p>

      <h2>A checklist you can actually run</h2>
      <ul>
        <li>Does <code>/robots.txt</code> load, and does it allow your content?</li>
        <li>Does <code>/sitemap.xml</code> load and list every URL you want indexed?</li>
        <li>Does each page have a unique title and description in the raw HTML?</li>
        <li>Does each page's canonical point at itself?</li>
        <li>Is there a <code>noindex</code> tag anywhere you did not intend?</li>
        <li>Can you reach every page by clicking links from the homepage?</li>
        <li>Does every page return HTTP 200, not a soft 404?</li>
      </ul>
      <p>Work down that list before touching keywords. Strong fundamentals make every advanced technique more effective, and a beautifully tagged empty page still has little value.</p>
    `,
  },
  {
    id: 7,
    slug: "css-layouts-that-feel-modern",
    title: "CSS Layouts That Feel Modern Without Extra Libraries",
    category: "CSS",
    author: siteAuthor,
    date: "2026-05-14",
    image:
      "https://images.unsplash.com/photo-1507721999472-57bd63fc2aec?w=1200&h=700&fit=crop",
    excerpt:
      "Practical CSS techniques for spacing, alignment, and responsive sections using flexbox and grid.",
    content: `
      <h2>Spacing creates polish</h2>
      <p>Modern websites often look expensive because of thoughtful spacing, not because of exotic effects. Consistent gaps between sections, generous line height, and aligned columns give a page breathing room. Before adding animations or gradients, check whether your margins and padding already feel intentional.</p>
      <p>Create a small spacing scale and reuse it. When every section uses related values, the design feels calmer and more professional. Random spacing is one of the fastest ways to make a page look unfinished.</p>
      <p>Typography deserves the same care. Choose readable sizes, keep line lengths comfortable, and make sure headings feel connected to the body text beneath them.</p>

      <h2>Flexbox for rows and alignment</h2>
      <p>Flexbox shines when you need to align items in a row or column. Navigation links, button groups, and card footers are classic flexbox jobs. Learn justify-content and align-items thoroughly. Those two properties solve a surprising number of layout questions.</p>
      <p>When content wraps on smaller screens, flexbox can help items stack naturally. Combine it with media queries so your layout adapts instead of shrinking awkwardly.</p>
      <p>Try rebuilding a simple header with a logo on the left and links on the right. That single exercise teaches alignment, spacing, and responsive behavior in a very practical way.</p>

      <h2>Grid for page structure</h2>
      <p>CSS Grid is excellent for larger structures: a main column beside a sidebar, a gallery of equal cards, or a footer with multiple link groups. Define the columns you want, then place content into those areas. Grid reduces the need for complicated nested wrappers.</p>
      <p>Practice by rebuilding simple layouts from sites you admire. Copy the structure with your own content and colors. Over time, you will recognize patterns and choose flexbox or grid with confidence. Modern CSS is powerful enough for beautiful responsive design without reaching for a heavy library every time.</p>
      <p>As a bonus challenge, build one page using only flexbox and another using mostly grid. Comparing the two will sharpen your judgment faster than reading another reference chart.</p>
    `,
  },
  {
    id: 8,
    slug: "html-semantics-made-simple",
    title: "HTML Semantics Made Simple",
    category: "HTML",
    author: siteAuthor,
    date: "2026-05-26",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&h=700&fit=crop",
    excerpt:
      "Why choosing the right HTML tags makes your pages clearer for browsers, assistive tools, and future you.",
    content: `
      <h2>Tags carry meaning</h2>
      <p>HTML is more than a way to put text on a screen. The tags you choose tell browsers and assistive technologies what each piece of content is. A heading is not just big text. A navigation region is not just a row of links. When you use semantic tags, your document becomes easier to interpret.</p>
      <p>Beginners sometimes wrap everything in div elements. That works visually with CSS, but it throws away useful meaning. Prefer header, nav, main, article, section, and footer when they match the content.</p>
      <p>Semantic structure also helps you reason about your page while you build it. You can glance at the markup and understand the purpose of each region more quickly.</p>

      <h2>Headings create a map</h2>
      <p>Think of headings as a table of contents for your page. Use one main heading for the primary topic, then supporting headings for sections. Avoid skipping levels only to achieve a certain font size. Style with CSS; structure with HTML.</p>
      <p>Lists should be lists. Quotes should be quotes. Buttons should be buttons when they trigger actions, while links should navigate to another place. These small decisions improve accessibility and make your intentions obvious.</p>

      <h2>Forms deserve care</h2>
      <p>Every input should have a clear label. Placeholders are not a replacement for labels because they disappear when users type. Group related fields and provide helpful messages when something is required.</p>
      <p>Semantic HTML is one of the highest-leverage beginner skills. It costs little extra time and pays off in maintainability, accessibility, and clarity. Once you build the habit, writing cleaner documents becomes automatic.</p>
      <p>A useful practice exercise is to take an existing page and rewrite its markup with better tags while keeping the visual design the same. You will quickly see how much clearer the document becomes.</p>
    `,
  },
  {
    id: 9,
    slug: "freelancing-tips-for-new-developers",
    title: "Freelancing Tips for New Developers",
    category: "Freelancing",
    author: siteAuthor,
    date: "2026-06-08",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=700&fit=crop",
    excerpt:
      "Practical advice for landing early clients, setting expectations, and delivering work professionally.",
    content: `
      <h2>Start with proof, not promises</h2>
      <p>New freelancers often worry that they need years of experience before anyone will hire them. What clients usually need is evidence that you can solve a specific problem. A small portfolio of finished projects, even personal ones, is more convincing than a long list of unfinished tutorials.</p>
      <p>Choose two or three services you can deliver confidently, such as landing pages, blog setups, or simple redesigns. Clear focus helps clients understand when to contact you.</p>
      <p>Write short case notes for each project: the goal, what you built, and what improved. That story format is easier for clients to trust than a vague skills list.</p>

      <h2>Communicate like a professional</h2>
      <p>Many freelance issues are communication issues. Confirm the scope in writing. List what is included, what is not included, and when drafts will be shared. Ask questions early about brand colors, content readiness, and feedback timelines.</p>
      <p>Set boundaries around revisions. Unlimited changes sound friendly, but they can drain both sides. A defined revision round keeps projects healthy and predictable.</p>
      <p>Send brief progress updates even when everything is on track. Silence makes clients nervous, while simple check-ins build confidence.</p>

      <h2>Price for the work and the responsibility</h2>
      <p>Your rate should reflect research time, communication, testing, and delivery—not only the hours spent typing code. Beginners sometimes undercharge so severely that the project becomes stressful. Research common ranges in your region and offer packages with clear outcomes.</p>
      <p>After each project, write down what went well and what you would change next time. Freelancing is a business skill layered on top of technical skill. The developers who improve both sides build more sustainable careers.</p>
      <p>Remember that saying no to a poorly defined project can protect your reputation. Good clients appreciate clarity, and clarity starts with you.</p>
    `,
  },
  {
    id: 10,
    slug: "programming-tips-for-faster-learning",
    title: "Programming Tips for Faster, Calmer Learning",
    category: "Programming Tips",
    author: siteAuthor,
    date: "2026-06-20",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=700&fit=crop",
    excerpt:
      "Study strategies that help beginners retain concepts and build momentum without burning out.",
    content: `
      <h2>Learn in loops, not straight lines</h2>
      <p>Many beginners expect learning to feel like a straight staircase: one topic, then the next, forever upward. Real progress looks more like a loop. You learn a concept, try it, get confused, review it, and suddenly understand more than before. That repetition is not failure. It is how skills settle into memory.</p>
      <p>Schedule short practice sessions more often instead of rare marathon days. Forty focused minutes can beat three distracted hours.</p>
      <p>End each session by writing one sentence about what you practiced. That tiny reflection helps tomorrow’s session start faster.</p>

      <h2>Protect your attention</h2>
      <p>Close extra tabs. Silence notifications. Work on one exercise until you either finish it or write down the exact question blocking you. Scattered attention makes programming feel harder than it is.</p>
      <p>When you hit a wall, take a short break and return with a narrower question. “Why is this variable undefined?” is easier to solve than “Why is nothing working?”</p>
      <p>If frustration rises, switch to a smaller related task for ten minutes. Momentum matters more than perfect intensity.</p>

      <h2>Teach what you just learned</h2>
      <p>Explain a concept in plain language, as if you were writing a note to a friend. If you cannot explain it, you probably need another pass. Teaching reveals gaps quickly and strengthens what you already know.</p>
      <p>Keep a simple log of wins: the bug you fixed, the layout you finished, the concept that finally clicked. On difficult days, that log reminds you that progress is happening. Programming rewards steady learners who stay curious, patient, and kind to themselves while they grow.</p>
      <p>Over months, these calm habits compound. You will still meet confusing topics, but you will meet them with a process you trust.</p>
    `,
  },
  {
    id: 11,
    slug: "advanced-react-tutorial",
    title: "Advanced React Tutorial",
    category: "React",
    author: siteAuthor,
    date: "2026-07-29",
    updated: "2026-07-30",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop",
    excerpt:
      "Move from React basics to Advanced React JS with performance optimization, Context API, Suspense, Lazy Loading, and Custom Hooks.",
    schemaDescription:
      "Learn Advanced React concepts including Context API, Custom Hooks, React Suspense, Lazy Loading, and Performance Optimization.",
    faqs: [
      {
        question: "What is Advanced React?",
        answer:
          "Advanced React includes concepts beyond basics — such as Context API, Custom Hooks, Performance Optimization, Lazy Loading, React Suspense, Higher Order Components, and scalable architecture patterns. It focuses on building production-ready applications.",
      },
      {
        question: "How do I become an advanced React developer?",
        answer:
          "Start with strong JavaScript and React fundamentals. Then practice Advanced React concepts with real projects. Learn Performance Optimization, Context API, Custom Hooks, and Code Splitting, and review your code regularly. Building and refining real apps is the fastest path forward.",
      },
      {
        question: "What are advanced React concepts?",
        answer:
          "Key advanced React concepts include React Performance Optimization, Context API, Custom Hooks, Higher Order Components, Lazy Loading and React Suspense, Code Splitting, and state management patterns (including Redux when needed).",
      },
      {
        question: "Should I learn Redux after React?",
        answer:
          "Not always immediately. First learn React state, Context API, and Custom Hooks. If your app grows and state becomes complex across many features, then Redux (or another state library) can be a useful next step.",
      },
    ],
    content: `
      <p>This Advanced React Tutorial is designed for developers who already understand the basics of React and want to master Advanced React JS concepts. In this guide, you will learn React Performance Optimization, Context API, Custom Hooks, React Suspense, and Lazy Loading through simple explanations and practical examples.</p>
      <p>By the end of this tutorial, you will have a solid understanding of advanced React concepts and be able to build scalable, high-performance React applications.</p>
      <p>If you are still building your foundation, start with our <a href="/blog/react-components-for-beginners">React Tutorial</a> and <a href="/blog/javascript-habits-that-save-time">JavaScript Tutorial</a> first.</p>

      <h2>What is Advanced React?</h2>
      <p>Advanced React refers to the set of concepts, techniques, and best practices used to build scalable, maintainable, and high-performance React applications.</p>
      <p>After learning the basics of React — such as Components, JSX, Props, and State — developers move on to advanced topics like:</p>
      <ul>
        <li>Context API</li>
        <li>Custom Hooks</li>
        <li>React Suspense</li>
        <li>Lazy Loading</li>
        <li>Performance Optimization</li>
      </ul>
      <p>These concepts help you write cleaner, reusable, and more efficient code.</p>
      <p>Learning Advanced React matters because modern web apps often include hundreds (or thousands) of components and complex user interactions. Without advanced techniques, apps can become slow, hard to manage, and difficult to maintain.</p>
      <p>Understanding React Performance, Context API, and the Virtual DOM helps you build faster applications with a better user experience.</p>
      <p>For example, imagine you are building an e-commerce website. Instead of passing user data through many components using props, you can use the Context API to share that data more efficiently. In the same way, Lazy Loading lets pages load only when needed, which improves speed and overall performance.</p>
      <p>In short, Advanced React is the next step after React fundamentals. It gives you the skills to create professional, production-ready applications that are faster, easier to maintain, and ready for real-world projects.</p>

      <h2>Prerequisites Before Learning Advanced React</h2>
      <p>Before starting Advanced React, you should have a solid understanding of core React and modern JavaScript. Jumping into advanced topics too early can make development feel confusing.</p>
      <p>That is why it is important to build a strong foundation before moving on to Context API, Custom Hooks, React Suspense, and Performance Optimization.</p>

      <h3>What you should know first</h3>
      <p>You should be comfortable with:</p>
      <ul>
        <li>Creating Components</li>
        <li>Writing JSX</li>
        <li>Managing Props and State</li>
        <li>Handling events</li>
        <li>Using Hooks like <code>useState</code> and <code>useEffect</code></li>
      </ul>
      <p>You should also know modern JavaScript features such as:</p>
      <ul>
        <li>ES6 syntax</li>
        <li>Arrow functions</li>
        <li>Destructuring</li>
        <li>Promises and async/await</li>
        <li>Array methods</li>
      </ul>
      <p>For example, if you do not understand how state updates work with <code>useState</code>, it will be harder to learn optimization tools like <code>React.memo</code> or <code>useCallback</code>. Likewise, understanding component communication is essential before using Context API in larger apps.</p>
      <p>Want a refresher on components and state first? Read our <a href="/blog/react-components-for-beginners">guide to thinking in React components</a>.</p>
      <p>A simple learning path looks like this:</p>
<pre><code>JavaScript Basics
        ↓
React Basics
        ↓
Components + JSX
        ↓
Props + State
        ↓
Hooks
        ↓
Advanced React</code></pre>
      <p>Mastering the fundamentals first will help you understand advanced concepts more easily and build scalable applications with confidence.</p>

      <h2>React Performance Optimization</h2>
      <p>React Performance Optimization is the process of improving the speed, efficiency, and responsiveness of a React application. As apps grow, unnecessary re-renders and poor state management can slow down the user experience.</p>
      <p>By using advanced React techniques, you can build faster and more scalable applications.</p>

      <h3>Why Performance Optimization Matters</h3>
      <p>Performance optimization helps reduce loading time, improve user experience, and make React apps more efficient. Fast websites keep users engaged and can also support better search visibility.</p>
      <p>When your UI feels smooth, users stay longer — and your app becomes easier to scale.</p>

      <h3>Common Performance Problems</h3>
      <p>Some common issues include:</p>
      <ul>
        <li>Unnecessary component re-rendering</li>
        <li>Large JavaScript bundles</li>
        <li>Too many API requests</li>
        <li>Poor state management</li>
        <li>Rendering large lists without optimization</li>
      </ul>
      <p>These problems often show up only after an app grows, so it is useful to learn optimization early.</p>

      <h3>Best Optimization Techniques</h3>
      <p>Here are practical techniques used in Advanced React JS projects:</p>
      <p><strong>1. Use React.memo to prevent unnecessary re-renders</strong></p>
<pre><code>const MemoizedComponent = React.memo(function UserCard({ name }) {
  return &lt;div&gt;{name}&lt;/div&gt;;
});</code></pre>
      <p><strong>2. Use useMemo for expensive calculations</strong></p>
<pre><code>import { useMemo } from "react";

function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  return (
    &lt;ul&gt;
      {filteredProducts.map((product) => (
        &lt;li key={product.id}&gt;{product.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
      <p><strong>3. Use useCallback for stable function references</strong></p>
<pre><code>import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return &lt;Child onClick={handleClick} count={count} /&gt;;
}</code></pre>
      <p><strong>4. Use Code Splitting and Lazy Loading</strong></p>
      <p>Splitting your code helps reduce the initial bundle size so your app loads faster.</p>
      <p>For official guidance, check the <a href="https://react.dev/learn/render-and-commit" target="_blank" rel="noopener noreferrer">React documentation on performance</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/Performance" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>.</p>

      <h3>Best Practices</h3>
      <ul>
        <li>Optimize only after measuring real performance issues</li>
        <li>Keep components small and focused</li>
        <li>Avoid storing unnecessary data in state</li>
        <li>Prefer local state when global state is not needed</li>
        <li>Use memoization carefully — not everywhere</li>
      </ul>
      <p><strong>Summary:</strong> React Performance Optimization is essential for scalable and responsive apps. With techniques like <code>React.memo</code>, <code>useMemo</code>, Lazy Loading, and Code Splitting, you can improve performance and deliver a better user experience.</p>

      <h2>Context API</h2>
      <p>The Context API lets you share data across components without passing props through every level of the tree. This is especially useful in larger apps where prop drilling becomes hard to manage.</p>
      <p>Common use cases include:</p>
      <ul>
        <li>Theme settings (light/dark mode)</li>
        <li>Authentication and user data</li>
        <li>Language preferences</li>
        <li>Shared app configuration</li>
      </ul>

      <h3>Basic Context API example</h3>
<pre><code>import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}</code></pre>
      <p>Then consume it in any child component:</p>
<pre><code>function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    &lt;button onClick={() => setTheme(theme === "light" ? "dark" : "light")}&gt;
      Current theme: {theme}
    &lt;/button&gt;
  );
}</code></pre>

      <h3>When to use Context API</h3>
      <p>Use Context when:</p>
      <ul>
        <li>Many components need the same data</li>
        <li>Prop drilling becomes messy</li>
        <li>The shared data updates infrequently</li>
      </ul>
      <p>Avoid Context when:</p>
      <ul>
        <li>Only a few components need the data</li>
        <li>Updates happen very frequently (this can cause extra re-renders)</li>
      </ul>
      <p>If you later move into full-stack React apps, Context often works well alongside routing and server components in a <a href="/blog/why-nextjs-is-popular">Next.js Tutorial</a>.</p>

      <h2>Lazy Loading and React Suspense</h2>
      <p>Lazy Loading means loading parts of your app only when they are needed. Combined with React Suspense, this improves initial load time and overall React Performance.</p>
      <p>This approach is closely related to Code Splitting — one of the most important Advanced React concepts for production apps.</p>

      <h3>Lazy Loading with React.lazy</h3>
<pre><code>import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    &lt;Suspense fallback={&lt;p&gt;Loading dashboard...&lt;/p&gt;}&gt;
      &lt;Dashboard /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>

      <h3>Why this matters</h3>
      <p>Without Lazy Loading, users may download code for pages they never visit. With Suspense and lazy components, you can:</p>
      <ul>
        <li>Reduce the initial JavaScript bundle</li>
        <li>Improve page load speed</li>
        <li>Load heavy features only when required</li>
      </ul>
      <p>A good rule of thumb: lazy-load routes, charts, admin panels, and other large feature modules.</p>
      <p>Learn more in the official <a href="https://react.dev/reference/react/lazy" target="_blank" rel="noopener noreferrer">React lazy documentation</a> and <a href="https://react.dev/reference/react/Suspense" target="_blank" rel="noopener noreferrer">Suspense docs</a>.</p>

      <h2>Higher Order Components</h2>
      <p>A Higher Order Component (HOC) is a function that takes a component and returns a new component with extra behavior. HOCs were a common pattern before Hooks became popular, and you will still see them in many codebases.</p>
      <p>Typical use cases include:</p>
      <ul>
        <li>Authentication checks</li>
        <li>Logging and analytics</li>
        <li>Reusing logic across multiple components</li>
      </ul>

      <h3>Simple HOC example</h3>
<pre><code>function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = Boolean(localStorage.getItem("token"));

    if (!isLoggedIn) {
      return &lt;p&gt;Please log in to continue.&lt;/p&gt;;
    }

    return &lt;WrappedComponent {...props} /&gt;;
  };
}

function Profile() {
  return &lt;h2&gt;Welcome to your profile&lt;/h2&gt;;
}

export default withAuth(Profile);</code></pre>

      <h3>HOCs vs Custom Hooks</h3>
      <p>Today, many teams prefer Custom Hooks because they are usually easier to read and compose. Still, understanding HOCs helps you maintain older projects and recognize Advanced React JS patterns in production code.</p>

      <h2>Custom Hooks</h2>
      <p>Custom Hooks let you extract reusable logic from components. They are one of the most practical React Advanced Concepts you will use every day.</p>
      <p>A Custom Hook:</p>
      <ul>
        <li>Starts with <code>use</code></li>
        <li>Can call other Hooks</li>
        <li>Helps keep components clean and focused</li>
      </ul>

      <h3>Example: useLocalStorage</h3>
<pre><code>import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function Settings() {
  const [username, setUsername] = useLocalStorage("username", "");

  return (
    &lt;input
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter username"
    /&gt;
  );
}</code></pre>

      <h3>Why Custom Hooks matter</h3>
      <p>Custom Hooks help you:</p>
      <ul>
        <li>Reuse logic across components</li>
        <li>Keep UI code cleaner</li>
        <li>Test shared behavior more easily</li>
        <li>Build scalable application architecture</li>
      </ul>
      <p>If you are still getting comfortable with built-in Hooks, revisit our <a href="/blog/react-components-for-beginners">React components guide</a> before writing advanced Custom Hooks.</p>

      <h2>Common Mistakes</h2>
      <p>Even intermediate developers make mistakes when learning Advanced React. Here are a few to avoid:</p>
      <ul>
        <li><strong>Overusing Context API</strong> for every piece of state</li>
        <li><strong>Memoizing everything</strong> with <code>React.memo</code>, <code>useMemo</code>, and <code>useCallback</code></li>
        <li><strong>Skipping the basics</strong> and jumping straight into Redux or advanced patterns</li>
        <li><strong>Creating huge components</strong> that do too many things</li>
        <li><strong>Ignoring bundle size</strong> and loading all code upfront</li>
        <li><strong>Mutating state directly</strong> instead of updating it immutably</li>
        <li><strong>Forgetting dependency arrays</strong> in <code>useEffect</code>, <code>useMemo</code>, and <code>useCallback</code></li>
      </ul>
      <p>A better approach is simple: start with clear component design, measure performance, and apply advanced tools only when they solve a real problem.</p>
      <p>Strong HTML and layout skills also help when debugging UI issues — see our <a href="/blog/html-semantics-made-simple">HTML Basics</a> and <a href="/blog/css-layouts-that-feel-modern">CSS Flexbox Guide</a> if you need a quick refresh.</p>

      <h2>Best Practices</h2>
      <p>Follow these best practices to write cleaner Advanced React JS code:</p>
      <ul>
        <li>Keep components small and focused on one responsibility</li>
        <li>Prefer composition over complicated inheritance patterns</li>
        <li>Use Context API for shared, low-frequency data</li>
        <li>Extract repeated logic into Custom Hooks</li>
        <li>Use Lazy Loading for large routes and features</li>
        <li>Optimize with <code>React.memo</code>, <code>useMemo</code>, and <code>useCallback</code> only when needed</li>
        <li>Keep state as local as possible</li>
        <li>Write readable names for components, Hooks, and props</li>
        <li>Test important logic and critical user flows</li>
        <li>Stay consistent with folder structure and coding style</li>
      </ul>
      <p>These habits make your codebase easier to maintain as your project grows.</p>

      <h2>FAQs</h2>

      <h3>What is Advanced React?</h3>
      <p>Advanced React includes concepts beyond basics — such as Context API, Custom Hooks, Performance Optimization, Lazy Loading, React Suspense, Higher Order Components, and scalable architecture patterns. It focuses on building production-ready applications.</p>

      <h3>How do I become an advanced React developer?</h3>
      <p>Start with strong JavaScript and React fundamentals. Then practice Advanced React concepts with real projects. Learn Performance Optimization, Context API, Custom Hooks, and Code Splitting, and review your code regularly. Building and refining real apps is the fastest path forward.</p>

      <h3>What are advanced React concepts?</h3>
      <p>Key advanced React concepts include:</p>
      <ul>
        <li>React Performance Optimization</li>
        <li>Context API</li>
        <li>Custom Hooks</li>
        <li>Higher Order Components</li>
        <li>Lazy Loading and React Suspense</li>
        <li>Code Splitting</li>
        <li>State management patterns (including Redux when needed)</li>
      </ul>

      <h3>Should I learn Redux after React?</h3>
      <p>Not always immediately. First learn React state, Context API, and Custom Hooks. If your app grows and state becomes complex across many features, then Redux (or another state library) can be a useful next step.</p>

      <h2>Conclusion</h2>
      <p>Advanced React is about writing applications that stay fast, clean, and scalable as they grow. Once you understand the basics, concepts like Performance Optimization, Context API, Lazy Loading, Suspense, HOCs, and Custom Hooks help you build professional apps with confidence.</p>
      <p>Keep practicing with real projects, apply these patterns carefully, and improve step by step. With consistent learning, you will move from intermediate React skills to Advanced React JS mastery.</p>
    `,
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

/**
 * Posts to link to from the end of an article: same-category first, then the
 * most recent remaining posts. Every article therefore links out to at least
 * three others, so crawlers can reach the whole blog from any entry point.
 */
export function getRelatedPosts(slug, count = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];

  const others = posts.filter((post) => post.slug !== slug);
  const sameCategory = others.filter(
    (post) => post.category === current.category
  );
  const rest = others
    .filter((post) => post.category !== current.category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return [...sameCategory, ...rest].slice(0, count);
}

export function getLatestPosts(count = 6) {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
