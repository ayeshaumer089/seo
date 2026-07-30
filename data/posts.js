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
    updated: "2026-07-30",
    metaTitle: "Web Development Roadmap for Beginners in 2026",
    metaDescription:
      "Start web development with HTML, CSS, and JavaScript. A calm weekly plan, small projects, and habits that help beginners ship real sites without burnout.",
    schemaDescription:
      "A beginner-friendly web development roadmap covering HTML, CSS, JavaScript fundamentals, project ideas, and learning habits for 2026.",
    content: `
      <h2>Why web development still matters</h2>
      <p>Every business, portfolio, and product idea eventually needs a place on the internet. Web development is the craft of turning that idea into something people can open, read, and use. If you are just starting out, the amount of tools and tutorials can feel endless. The good news is that you only need a small set of skills to begin building useful pages today.</p>
      <p>At its core, the web is still built with HTML for structure, CSS for presentation, and JavaScript for behavior. Frameworks come and go, but these three foundations remain the language of browsers. Learning them well will make every future tool easier to understand.</p>
      <p>It also helps to remember that websites are for people first. A clean layout, readable text, and clear navigation matter as much as fancy features. When you keep the visitor in mind, your technical choices become easier to prioritize.</p>
      <p>You do not need to decide your entire career on day one. Many developers begin with curiosity about how a single page works, then grow into larger apps over months. Treat early learning as exploration rather than a race.</p>

      <h2>A simple learning path</h2>
      <p>Start with HTML and practice writing clean, readable documents. Focus on headings, paragraphs, lists, links, and forms before worrying about advanced layout patterns. Our guide to <a href="/blog/html-semantics-made-simple">HTML semantics</a> explains why the tags you choose matter for accessibility and for tools like search engines.</p>
      <p>Once you can describe a page in HTML, move to CSS and learn how spacing, color, typography, flexbox, and grid shape the look of a site. You do not need every visual trick at once. A page with consistent spacing and readable type already feels professional. For layout patterns that work on real projects, see <a href="/blog/css-layouts-that-feel-modern">CSS layouts that feel modern</a>.</p>
      <p>After that, spend time with JavaScript fundamentals: variables, functions, arrays, objects, and events. Build tiny projects like a tip calculator, a theme toggle, or a to-do list. These small wins teach you how code responds to user actions. As your scripts grow, <a href="/blog/javascript-habits-that-save-time">JavaScript habits that save time</a> will help you keep code readable and easier to debug.</p>
      <p>Do not rush into every new library you see on social media. Master the basics until you can explain them in your own words. That foundation will save you from copying code you do not understand.</p>

      <h3>A realistic weekly rhythm</h3>
      <p>Most beginners succeed with a steady rhythm instead of marathon weekends. One workable pattern looks like this:</p>
      <ul>
        <li><strong>Two or three short sessions</strong> on HTML and CSS practice, rebuilding small sections from sites you admire</li>
        <li><strong>One session</strong> on JavaScript exercises, always tied to a tiny feature on a page you are building</li>
        <li><strong>One review session</strong> where you read your own markup and ask whether a stranger could understand the structure</li>
      </ul>
      <p>When a topic feels fuzzy, revisit it the following week instead of skipping ahead. Loops are normal. The developers who stay calm through repetition usually move faster in the long run. If study feels scattered, <a href="/blog/programming-tips-for-faster-learning">programming tips for faster learning</a> offer practical ways to protect focus and retain concepts.</p>

      <h2>Tools you actually need at the start</h2>
      <p>You can begin with a text editor, a modern browser, and patience. Visual Studio Code (or any editor you enjoy) plus Chrome or Firefox DevTools is enough for months of learning. Install a simple live-server extension or use your editor’s preview so you see changes quickly.</p>
      <p>Later you may add Git for version history, a framework when a project outgrows plain files, and a hosting platform when you want a public URL. None of that is required on week one. Avoid collecting ten extensions before you have written ten lines of meaningful HTML.</p>
      <p>When you are ready to publish, free tiers on common hosts let you deploy static sites with minimal setup. The first deploy is a milestone: you learn how filenames, paths, and assets behave in production, which local tutorials rarely stress enough.</p>

      <h2>Build projects, not just notes</h2>
      <p>Reading alone rarely creates confidence. Choose one small website idea each week and finish it. A personal landing page, a recipe collection, or a simple blog layout will teach you more than another unfinished course. When you get stuck, search for one specific problem at a time instead of rewriting everything from scratch.</p>
      <p>Define “done” in advance. For a landing page, done might mean a hero section, three feature blocks, and a contact link that works on mobile. Small scope keeps motivation high and teaches you to ship.</p>
      <p>As you grow, explore version control with Git, host a static site for free, and share your work. Feedback from other learners is one of the fastest ways to improve. Web development rewards curiosity, patience, and consistent practice more than perfect memorization.</p>
      <p>Keep a folder of finished projects, even the imperfect ones. Looking back at earlier work is motivating, and those projects become portfolio pieces when you are ready to apply for opportunities or freelance work.</p>

      <h2>What to learn after the basics</h2>
      <p>Once HTML, CSS, and core JavaScript feel familiar, you can branch based on what you want to build. Content-heavy sites benefit from learning how semantic structure and performance affect discovery; later, topics like <a href="/blog/seo-basics-every-beginner-should-know">SEO basics</a> connect directly to how people find your pages.</p>
      <p>If you prefer interactive interfaces, component-based libraries are a natural next step. If you want full sites with routing and metadata handled for you, modern meta-frameworks build on the same foundations you are learning now.</p>
      <p>There is no single correct order for everyone. Pick the path that matches the next project you care about, finish that project, then widen your map. Steady progress beats chasing every trending stack name.</p>

      <h2>Staying motivated when progress feels slow</h2>
      <p>Some weeks you will fix one bug and call it a win. That is still progress. Compare yourself to your past self, not to creators who have documented only their highlights. Write down what confused you and what finally clicked; those notes become a personal textbook.</p>
      <p>Community helps: share work in learner forums, pair with a friend for thirty minutes, or teach a concept to someone a step behind you. Teaching exposes gaps gently and reinforces what you know.</p>
      <p>Web development is a craft you practice in public, one page at a time. Start small, finish often, and trust that the skills compound when you show up consistently.</p>
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
    updated: "2026-07-30",
    metaTitle: "JavaScript Habits That Save Hours Every Week",
    metaDescription:
      "Write clearer JavaScript with naming, data flow, and calm debugging. Practical daily habits for beginners who want fewer bugs and faster fixes.",
    schemaDescription:
      "Daily JavaScript habits for readable code, predictable data flow, array methods, async patterns, and a step-by-step debugging process.",
    content: `
      <h2>Write code you can read next month</h2>
      <p>JavaScript gives you freedom, but that freedom can turn into confusion if names and structure are unclear. Choose variable names that describe purpose, not type. A name like totalPrice is easier to understand later than tp or x1. Short functions with one job are easier to test and reuse than long blocks that do everything at once.</p>
      <p>Keep related logic together. If a function formats a date, avoid mixing network requests inside it. Clear boundaries make bugs easier to locate because you can ask, “Where does this responsibility live?”</p>
      <p>Comments can help, but readable code is better than a novel of explanations. Comment the why when something is surprising, and let clean naming handle the what.</p>
      <p>When you return to a file after a break, the first minute should tell you the story. If you need five scrolls to find where state changes, consider splitting the file or renaming sections. Good habits cost little during writing and pay heavily during debugging.</p>

      <h2>Prefer predictable data flow</h2>
      <p>Many beginners struggle when values change in surprising places. Reduce surprise by treating data as something you transform step by step. Use arrays and objects intentionally, and avoid mutating shared state unless you understand who depends on it.</p>
      <p>Learn the common array methods well: map, filter, find, and reduce. They help you express transformations without nested loops. When async work appears, master promises and async/await before jumping into complex libraries. Waiting for data is part of almost every modern app.</p>
      <p>Practice with real examples such as filtering a list of blog posts, sorting products by price, or waiting for a fake API response. The patterns become natural when you repeat them in small projects. If you are still building confidence with the web stack overall, our <a href="/blog/getting-started-with-web-development">getting started with web development</a> guide keeps the big picture in view while you drill JavaScript details.</p>

      <h3>Favor immutability in small steps</h3>
      <p>You do not need a special library to think clearly about data. When updating an array, prefer creating a new array with spread or map instead of pushing into a shared reference that other functions also hold. The goal is to know what changed and when.</p>
      <ul>
        <li>Return new objects from functions when the caller should see an update</li>
        <li>Keep “source of truth” in one place rather than mirroring the same list in three variables</li>
        <li>Log inputs at the start of tricky functions so mistakes show up early</li>
      </ul>
      <p>These patterns matter even more once you move into UI libraries. Before React state feels natural, skim <a href="/blog/react-components-for-beginners">thinking in React components</a> so you see how one-way data flow builds on the same ideas.</p>

      <h2>Debug with a calm process</h2>
      <p>When something breaks, resist the urge to rewrite everything. Reproduce the issue, read the error carefully, and check the values at each step with console logs or breakpoints. Confirm assumptions one by one: Did the function run? Was the input what you expected? Did the condition evaluate the way you thought?</p>
      <p>Over time, this calm process becomes faster than guessing. Combine it with small commits and frequent saves so you can always return to a working version. Good JavaScript habits are less about clever tricks and more about clarity, patience, and consistent structure.</p>
      <p>If you are learning with others, explain the bug out loud. Teaching the problem often reveals the missing detail before anyone else replies. That habit alone can save hours every week.</p>

      <h3>A short checklist when errors feel vague</h3>
      <p>When the console shows a minified message or nothing at all, walk through this list before changing architecture:</p>
      <ul>
        <li>Confirm the script is loaded and the path in your HTML is correct</li>
        <li>Check for typos in selectors, property names, and async function keywords</li>
        <li>Verify types: comparing a string "5" to a number 5 fails in subtle ways</li>
        <li>Isolate the smallest function that still fails and test it with fixed inputs</li>
      </ul>
      <p>Pair this process with steady study habits. <a href="/blog/programming-tips-for-faster-learning">Programming tips for faster learning</a> help you protect attention so debugging sessions stay short and focused instead of turning into all-day spirals.</p>

      <h2>Use tools wisely, not as a crutch</h2>
      <p>Formatters, linters, and AI assistants can speed up routine work, but they work best when you still read the output. Let a formatter handle spacing so you think about logic. Let linters catch common footguns early. When you use AI for a snippet, rewrite variable names to match your project and run the feature manually.</p>
      <p><a href="/blog/ai-tools-for-everyday-coding">Using AI tools without losing your skills</a> is about staying in charge: ask for explanations, test edge cases, and refuse code you cannot describe in plain language.</p>

      <h2>Review habits that compound</h2>
      <p>Once a week, pick one file you wrote earlier and refactor one thing: rename a vague function, extract a helper, or replace a loop with map. Small refactors teach you patterns faster than reading about them alone.</p>
      <p>Keep a snippet notebook of patterns you trust—debouncing a search input, parsing JSON safely, toggling classes on a menu. Your future self will thank you when the next project starts under deadline pressure.</p>
      <p>JavaScript rewards developers who write for humans first and computers second. Clarity, predictable flow, and patient debugging will save you more hours than any single clever one-liner.</p>

      <h2>Organize files as your project grows</h2>
      <p>Small scripts live happily in one file. Once you have utilities, UI helpers, and API calls, group by feature or by layer—whichever you can explain to a teammate in one sentence. Avoid deep folder trees before you need them; two clear files beat six empty folders.</p>
      <p>When you import between files, use consistent naming and default exports sparingly. Named exports make refactoring safer because search tools can follow symbols. This discipline pays off whether you stay on vanilla JavaScript or move into bundled apps later.</p>
      <p>Before each study week, pick one habit from this article to focus on—naming, immutable updates, or debugging checkpoints. Small deliberate practice beats reading about ten habits without changing behavior.</p>
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
    metaTitle: "React Components for Beginners: Props & State",
    metaDescription:
      "Split UIs into React components, use props and state correctly, avoid derived-state bugs, and lift state when siblings need the same data.",
    schemaDescription:
      "Beginner guide to React components: props versus state, keys, derived values, lifting state, and conditional rendering pitfalls with examples.",
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

      <h2>Styling components without losing structure</h2>
      <p>React does not replace HTML semantics. Your components should still render meaningful elements—articles for posts, nav for menus, buttons for actions. CSS modules, plain class names, or utility classes all work; the important part is keeping markup readable so layout and accessibility stay straightforward.</p>
      <p>When a card or grid feels messy, the fix is often structural: fewer nested divs, clearer component boundaries, and layout rules you already practice in <a href="/blog/css-layouts-that-feel-modern">modern CSS layouts</a>. Good styling starts with components that return predictable HTML.</p>
      <p>JavaScript clarity matters too. Props and state are easier to reason about when functions stay small and data transformations are explicit—habits covered in <a href="/blog/javascript-habits-that-save-time">JavaScript habits that save time</a>.</p>

      <h2>Where to go next</h2>
      <p>Once components, props, and state feel natural, the next steps are effects, custom hooks, and performance work — all covered in our <a href="/blog/advanced-react-tutorial">advanced React tutorial</a>. If you plan to build full websites rather than single apps, <a href="/blog/why-nextjs-is-popular">Next.js</a> layers routing and server rendering on top of exactly these concepts.</p>
      <p>While you practice, rebuild one static page you already built in HTML as a small component tree. You will feel where state belongs and where props are enough. That single migration teaches more than reading another checklist.</p>

      <h2>Effects come later—get renders predictable first</h2>
      <p>Beginners often reach for effects to fix every data problem. Before that step, make sure you can render lists from props, filter with derived values, and lift shared state to a parent. When fetching arrives, you will recognize which data belongs in state versus which can flow from the server on each request—especially in full-stack setups described in <a href="/blog/why-nextjs-is-popular">Why Next.js is popular</a>.</p>
      <p>Write components that accept sample data as props while you design. Hard-coded arrays in the parent keep the child pure and easy to test visually. Swap in real data only after the UI behaves correctly with edge cases: empty lists, long titles, and missing images.</p>
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
    metaTitle: "Why Next.js Is Popular for Modern Web Apps",
    metaDescription:
      "Next.js file routing, server components, metadata API, sitemaps, and deployment—what matters when you move from plain React to full sites.",
    schemaDescription:
      "Overview of Next.js App Router: file-based routes, server and client components, metadata, layouts, sitemap and robots conventions, and deployment checks.",
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
      <p>If the web platform itself still feels new—HTML structure, CSS layout, basic JavaScript—balance framework tutorials with <a href="/blog/getting-started-with-web-development">a grounded web development roadmap</a> so you recognize what Next.js automates versus what you still need to understand when something breaks.</p>
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
    updated: "2026-07-30",
    metaTitle: "Use AI Coding Tools Without Losing Skills",
    metaDescription:
      "Treat AI as a collaborator: better prompts, learning boundaries, and verification steps so assistants speed up work without replacing real understanding.",
    schemaDescription:
      "How beginners can use AI coding assistants responsibly with clear prompts, explanation-first habits, and verification that protects long-term skill growth.",
    content: `
      <h2>AI is a collaborator, not a replacement</h2>
      <p>Artificial intelligence tools can suggest code, explain errors, and draft first versions of functions. Used wisely, they shorten the distance between an idea and a working prototype. Used carelessly, they can hide gaps in understanding and create code you cannot maintain.</p>
      <p>The healthiest approach is to stay in charge of the decisions. Ask the tool for options, then evaluate those options with your own judgment. If you cannot explain what a snippet does, do not paste it into your project until you can.</p>
      <p>Think of AI like a fast pair-programming partner. It can propose ideas, but you remain responsible for testing, readability, and the final result.</p>
      <p>That responsibility includes security and privacy. Avoid pasting secrets, private client data, or credentials into public chat tools. When in doubt, describe the problem with fake sample data instead of production values.</p>

      <h2>Ask better questions</h2>
      <p>Vague prompts create vague answers. Instead of saying “fix my website,” describe the exact symptom, the file involved, and what you expected to happen. Share the error message and the smallest piece of code that reproduces the issue. Clear context leads to clearer help.</p>
      <p>Also ask for explanations, not only solutions. Request a short breakdown of why a bug happened and how the fix works. That habit turns each stuck moment into a mini lesson.</p>
      <p>When the answer seems too complex, ask for a simpler version. Learning is smoother when each explanation matches your current level.</p>

      <h3>Prompt patterns that work for developers</h3>
      <ul>
        <li>State the environment: browser, Node version, framework, and what you already tried</li>
        <li>Paste the smallest failing example, not an entire repository</li>
        <li>Ask for trade-offs when multiple approaches exist</li>
        <li>Request tests or edge cases you should verify manually</li>
      </ul>
      <p>Strong prompts mirror how you would ask a patient mentor. The same clarity helps when you debug alone—see <a href="/blog/javascript-habits-that-save-time">JavaScript habits that save time</a> for a calm debugging rhythm that pairs well with AI suggestions.</p>

      <h2>Protect your learning loop</h2>
      <p>Set boundaries for practice days. On some projects, write the first draft yourself and only use AI for review. On others, let AI generate a starting point, then rewrite it in your own style. Both approaches build skill when you stay engaged.</p>
      <p>Finally, verify everything. Test the feature, check edge cases, and read the code line by line. AI can accelerate your work, but your responsibility for quality remains the same. Developers who combine curiosity with careful review get the best results from these tools.</p>
      <p>Keep a short notebook of concepts you learned through AI-assisted sessions. Over a month, that notebook becomes proof that the tools are helping you grow rather than replacing your thinking.</p>

      <h2>Know where AI helps—and where it misleads</h2>
      <p>Assistants are strong at boilerplate, explaining error messages, suggesting refactorings, and comparing library options. They are weaker at knowing your full codebase context, your business rules, and whether a clever shortcut will break in production.</p>
      <p>Always run the code. Click through the UI. Refresh the page. If the task touches SEO or metadata, confirm the rendered HTML yourself rather than trusting a summary—our <a href="/blog/seo-basics-every-beginner-should-know">SEO basics guide</a> shows what search engines actually read.</p>
      <p>When learning fundamentals, pair AI with structured practice. <a href="/blog/programming-tips-for-faster-learning">Programming tips for faster learning</a> help you schedule focused sessions so generated answers do not replace the struggle that builds memory.</p>

      <h2>Using AI in freelance and team settings</h2>
      <p>If you bill clients for work, disclose how you use assistants when contracts require originality or compliance review. Rewrite generated copy and code so deliverables match the client’s voice and standards.</p>
      <p>For early freelance projects, AI can draft proposals or outline landing-page sections, but you still own scoping and communication. <a href="/blog/freelancing-tips-for-new-developers">Freelancing tips for new developers</a> cover how clarity with clients matters more than any tool hype.</p>

      <h2>A simple weekly balance</h2>
      <p>Try alternating days: one day AI-assisted exploration, one day manual practice without suggestions. Notice which concepts stick better. Adjust the ratio until you feel faster <em>and</em> able to explain your own projects in interviews or portfolio walkthroughs.</p>
      <p>AI is here to stay, but your career grows from judgment, communication, and finished work. Use the tools to remove friction, not to skip the learning that makes you trustworthy when the tools are wrong.</p>

      <h2>Build a personal review ritual</h2>
      <p>After any AI-assisted change, walk through a short ritual: run the app, read the diff, rename anything generic, and delete dead code the model added “just in case.” Five minutes of review prevents hours of mystery behavior later.</p>
      <p>Save prompts that worked well in a private doc—not to copy blindly, but to remember how you described problems clearly. Prompt quality improves when you treat it as a skill parallel to coding.</p>
      <p>When learning a new language or framework, spend the first hour without AI to establish mental models. Then use AI to quiz you, generate exercises, or compare your solution to alternatives. That order keeps fundamentals anchored while still benefiting from speed.</p>
      <p>Document one lesson per week in your own words—what the tool suggested, what you changed, and why your version is safer. That log becomes interview material and proof that you understand the systems you ship.</p>
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
    metaTitle: "SEO Basics for Beginners: Crawl, Index, Rank",
    metaDescription:
      "Learn crawling vs indexing vs ranking, read Search Console statuses, fix robots and canonical mistakes, and use internal links so pages get indexed.",
    schemaDescription:
      "SEO fundamentals for developers: crawl/index/rank stages, Search Console diagnostics, robots vs noindex, unique metadata, structure, and internal linking.",
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

      <h2>When pages are “Crawled – currently not indexed”</h2>
      <p>That label often means Google saw the URL, fetched it, and decided the page did not earn a place in the index yet. Technical tags can be perfect while the content still feels thin, duplicated, or too similar to other URLs on the same site.</p>
      <p>Practical responses include expanding articles with original explanations, giving each post a distinct angle, and linking related posts together so crawlers understand site depth. Publishing frameworks like <a href="/blog/why-nextjs-is-popular">Next.js</a> help only when each route ships unique HTML and metadata—not when every article repeats the same boilerplate.</p>
      <p>Compare two articles on your site side by side. If titles, descriptions, and opening paragraphs could swap without anyone noticing, revise until each page answers a specific question. Quality work pairs naturally with solid markup from <a href="/blog/html-semantics-made-simple">HTML semantics</a> and readable layout from <a href="/blog/css-layouts-that-feel-modern">modern CSS</a>.</p>
      <p>Indexing takes time on new domains. Improve the pages you control, keep internal links healthy, and revisit Search Console monthly rather than daily. Patience plus substance beats repeated “request indexing” clicks.</p>
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
    updated: "2026-07-30",
    metaTitle: "Modern CSS Layouts With Flexbox and Grid",
    metaDescription:
      "Build polished responsive pages with spacing scales, flexbox alignment, and CSS Grid—no heavy layout library required for most beginner sites.",
    schemaDescription:
      "Beginner-friendly CSS layout guide covering spacing systems, flexbox for components, grid for page structure, and responsive habits.",
    content: `
      <h2>Spacing creates polish</h2>
      <p>Modern websites often look expensive because of thoughtful spacing, not because of exotic effects. Consistent gaps between sections, generous line height, and aligned columns give a page breathing room. Before adding animations or gradients, check whether your margins and padding already feel intentional.</p>
      <p>Create a small spacing scale and reuse it. When every section uses related values, the design feels calmer and more professional. Random spacing is one of the fastest ways to make a page look unfinished.</p>
      <p>Typography deserves the same care. Choose readable sizes, keep line lengths comfortable, and make sure headings feel connected to the body text beneath them.</p>
      <p>Start from content, not decoration. List the sections your page needs—hero, features, testimonials, footer—then assign vertical rhythm between them. When markup is meaningful, spacing decisions become easier; pairing layout work with <a href="/blog/html-semantics-made-simple">HTML semantics made simple</a> keeps structure and style aligned.</p>

      <h3>A minimal spacing scale</h3>
      <p>You do not need dozens of tokens on day one. Many sites look coherent with four or five steps, for example 0.5rem, 1rem, 1.5rem, 2.5rem, and 4rem. Use the smaller steps inside components and the larger steps between major sections.</p>
      <ul>
        <li>Apply the same gap value to every card in a grid</li>
        <li>Match heading margin-bottom to the paragraph spacing below it</li>
        <li>Increase section padding on large screens instead of stretching text edge to edge</li>
      </ul>

      <h2>Flexbox for rows and alignment</h2>
      <p>Flexbox shines when you need to align items in a row or column. Navigation links, button groups, and card footers are classic flexbox jobs. Learn justify-content and align-items thoroughly. Those two properties solve a surprising number of layout questions.</p>
      <p>When content wraps on smaller screens, flexbox can help items stack naturally. Combine it with media queries so your layout adapts instead of shrinking awkwardly.</p>
      <p>Try rebuilding a simple header with a logo on the left and links on the right. That single exercise teaches alignment, spacing, and responsive behavior in a very practical way.</p>

      <h3>Common flex patterns</h3>
<pre><code>.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}</code></pre>
      <p>Use <code>gap</code> instead of margin hacks on first and last children when you can. It keeps spacing predictable when items wrap or when you add another button later.</p>

      <h2>Grid for page structure</h2>
      <p>CSS Grid is excellent for larger structures: a main column beside a sidebar, a gallery of equal cards, or a footer with multiple link groups. Define the columns you want, then place content into those areas. Grid reduces the need for complicated nested wrappers.</p>
      <p>Practice by rebuilding simple layouts from sites you admire. Copy the structure with your own content and colors. Over time, you will recognize patterns and choose flexbox or grid with confidence. Modern CSS is powerful enough for beautiful responsive design without reaching for a heavy library every time.</p>
      <p>As a bonus challenge, build one page using only flexbox and another using mostly grid. Comparing the two will sharpen your judgment faster than reading another reference chart.</p>

      <h3>When to pick flex versus grid</h3>
      <p>Flexbox excels when you are distributing items along one primary axis—toolbar controls, tag lists, or vertically centered icons beside text. Grid excels when you need two-dimensional control: equal-height cards, complex footers, or dashboards with named regions.</p>
      <p>Many real pages mix both: a grid for the page shell, flexbox inside each cell for fine alignment. That combination covers most marketing sites and blogs you will build while learning <a href="/blog/getting-started-with-web-development">web development fundamentals</a>.</p>

      <h2>Responsive habits without framework magic</h2>
      <p>Mobile-first CSS means you write base styles for narrow screens, then add min-width media queries for wider layouts. Your navigation might stack by default and become horizontal only when space allows.</p>
      <p>Use relative units where they help: rem for typography and spacing, percentages or fr units in grid templates, and max-width on text columns so lines stay readable on large monitors.</p>
      <p>Test in the browser’s device toolbar, but also resize the window slowly. Awkward breakpoints appear when flex items wrap at odd widths—adjust gap or switch to a single column earlier if needed.</p>

      <h2>Accessibility and visual polish together</h2>
      <p>Layout choices affect focus order and touch targets. Leave enough padding on links and buttons, and avoid hiding important actions only on hover without a keyboard-friendly alternative.</p>
      <p>Good structure also supports discovery. Clean headings and readable sections help visitors and search engines understand your page; when you publish, skim <a href="/blog/seo-basics-every-beginner-should-know">SEO basics every beginner should know</a> to connect layout work with how pages are evaluated.</p>

      <h2>Putting it together on a small project</h2>
      <p>Pick one page—an about screen or a blog index—and implement it with your spacing scale, one flex navigation bar, and a grid of cards. Ship it, then refactor one section using the opposite tool on purpose to feel the difference.</p>
      <p>If you later move into component-based UI libraries, these same layout rules transfer directly to className-based styles. Solid CSS fundamentals remain valuable even when frameworks handle routing and data.</p>
      <p>Modern layout is less about memorizing every property and more about repeating a few confident patterns until they feel automatic. Spacing, flexbox, and grid will carry most of the sites you build in your first year and beyond.</p>

      <h2>Debugging layout without guesswork</h2>
      <p>When alignment looks wrong, inspect the parent first. Flex and grid properties apply to containers; children inherit behavior from rules you set on the wrapper. Browser DevTools highlight flex lines and grid tracks—turn them on once and learn what each overlay means.</p>
      <p>Watch for collapsed margins between block elements and for fixed heights that clip content on small screens. Many “mystery gaps” are default margins on headings or paragraphs that a simple reset or consistent spacing scale fixes.</p>
      <p>Keep a screenshot folder of layouts you fixed. Comparing before and after reminds you which patterns recur, so the next project starts faster.</p>
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
    updated: "2026-07-30",
    metaTitle: "HTML Semantics Explained for Beginners",
    metaDescription:
      "Choose meaningful HTML tags for headings, landmarks, lists, and forms. Clear structure helps accessibility, maintenance, and search indexing.",
    schemaDescription:
      "A plain-language guide to semantic HTML: landmarks, heading hierarchy, lists, links versus buttons, and accessible forms for beginner web developers.",
    content: `
      <h2>Tags carry meaning</h2>
      <p>HTML is more than a way to put text on a screen. The tags you choose tell browsers and assistive technologies what each piece of content is. A heading is not just big text. A navigation region is not just a row of links. When you use semantic tags, your document becomes easier to interpret.</p>
      <p>Beginners sometimes wrap everything in div elements. That works visually with CSS, but it throws away useful meaning. Prefer header, nav, main, article, section, and footer when they match the content.</p>
      <p>Semantic structure also helps you reason about your page while you build it. You can glance at the markup and understand the purpose of each region more quickly.</p>
      <p>Search engines also lean on structure to grasp topics and relationships between sections. Semantics alone will not rank a thin page, but they remove avoidable confusion—especially when combined with unique titles and descriptions from our <a href="/blog/seo-basics-every-beginner-should-know">SEO basics guide</a>.</p>

      <h2>Landmarks readers and tools can follow</h2>
      <p>Think of landmarks as signposts. A typical content page might look like this in outline form:</p>
<pre><code>&lt;header&gt; site title, optional intro &lt;/header&gt;
&lt;nav&gt; primary links &lt;/nav&gt;
&lt;main&gt;
  &lt;article&gt; primary content &lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt; contact, legal &lt;/footer&gt;</code></pre>
      <p>Screen readers can jump between these regions. You benefit too when styling: target <code>main</code> for width constraints without accidentally shrinking the footer.</p>
      <p>Use one <code>main</code> element per page for the primary content. Multiple articles inside it are fine; duplicate mains are not.</p>

      <h2>Headings create a map</h2>
      <p>Think of headings as a table of contents for your page. Use one main heading for the primary topic, then supporting headings for sections. Avoid skipping levels only to achieve a certain font size. Style with CSS; structure with HTML.</p>
      <p>Lists should be lists. Quotes should be quotes. Buttons should be buttons when they trigger actions, while links should navigate to another place. These small decisions improve accessibility and make your intentions obvious.</p>
      <p>If you need a smaller visual title inside a section that already has an h2, use h3—not h5 because it “looks right” in the browser default styles. Picking levels for appearance is one of the most common semantic mistakes.</p>

      <h3>Links, buttons, and interactive clarity</h3>
      <ul>
        <li>Use <code>&lt;a href&gt;</code> when navigation happens—even to in-page anchors</li>
        <li>Use <code>&lt;button type="button"&gt;</code> for actions that stay on the page, like opening a menu</li>
        <li>Avoid clickable divs unless you add keyboard support and roles—and even then, prefer native elements</li>
      </ul>
      <p>Native elements inherit focus styles and keyboard behavior for free. That saves JavaScript and prevents silent failures for many users.</p>

      <h2>Forms deserve care</h2>
      <p>Every input should have a clear label. Placeholders are not a replacement for labels because they disappear when users type. Group related fields and provide helpful messages when something is required.</p>
      <p>Associate labels explicitly with <code>for</code> and <code>id</code> attributes, or wrap the input inside the label. Either pattern works; missing association does not.</p>
      <p>Use fieldset and legend when a set of radios or checkboxes belongs to one question. Error text should be plain language and, when possible, linked with aria attributes so assistive tech announces updates.</p>

      <h2>Images, figures, and alternative text</h2>
      <p>Decorative images can use empty alt text so screen readers skip them. Informative images need alt descriptions that convey the same purpose as the image, not a keyword dump.</p>
      <p>Figure and figcaption are useful for charts, screenshots, or photos that need a visible caption. The caption helps every reader understand why the media is there.</p>

      <h2>Semantics and layout work together</h2>
      <p>Semantic HTML does not limit design. CSS still controls layout, color, and typography. In fact, meaningful tags make layout easier because you can target <code>nav ul</code> or <code>article &gt; header</code> without sprinkling extra classes everywhere.</p>
      <p>When you style sections, reuse spacing and grid patterns from <a href="/blog/css-layouts-that-feel-modern">CSS layouts that feel modern</a> while keeping the document outline clean.</p>
      <p>If you are new to the overall stack, <a href="/blog/getting-started-with-web-development">getting started with web development</a> places semantics in a full learning path so you know when to deepen markup versus when to practice JavaScript behavior.</p>

      <h2>Practice that sticks</h2>
      <p>Semantic HTML is one of the highest-leverage beginner skills. It costs little extra time and pays off in maintainability, accessibility, and clarity. Once you build the habit, writing cleaner documents becomes automatic.</p>
      <p>A useful exercise is to take an existing page and rewrite its markup with better tags while keeping the visual design the same. You will quickly see how much clearer the document becomes.</p>
      <p>Another exercise: disable CSS in the browser for a page you wrote. If the outline still makes sense, your semantics are doing their job. If everything collapses into an undifferentiated stream, revisit headings and landmarks until the story reads well in plain text.</p>

      <h2>Tables, time, and microformats you will meet</h2>
      <p>Data tables belong in table elements with thead and tbody when the content is truly tabular. For layout grids, use CSS instead of table markup—accessibility tools expect tables to mean data relationships.</p>
      <p>Use time elements with a datetime attribute for publish dates on articles. Machines can parse the value while humans see a friendly formatted string. Small choices like that help blogs and docs stay understandable as they grow.</p>
      <p>Review your site navigation: are primary links inside nav? Is the site name in a header? These patterns support keyboard users and make future refactors safer when you add pages or categories.</p>
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
    updated: "2026-07-30",
    metaTitle: "Freelance Web Dev Tips for New Developers",
    metaDescription:
      "Land early clients with a focused portfolio, clear scope in writing, professional updates, and pricing that reflects the full job—not just coding hours.",
    schemaDescription:
      "Freelancing advice for junior developers: portfolio proof, scoped proposals, client communication, revision boundaries, and sustainable pricing.",
    content: `
      <h2>Start with proof, not promises</h2>
      <p>New freelancers often worry that they need years of experience before anyone will hire them. What clients usually need is evidence that you can solve a specific problem. A small portfolio of finished projects, even personal ones, is more convincing than a long list of unfinished tutorials.</p>
      <p>Choose two or three services you can deliver confidently, such as landing pages, blog setups, or simple redesigns. Clear focus helps clients understand when to contact you.</p>
      <p>Write short case notes for each project: the goal, what you built, and what improved. That story format is easier for clients to trust than a vague skills list.</p>
      <p>If your portfolio sites are still learning projects, say so honestly while highlighting what you controlled—layout, performance basics, contact forms, or content structure. Many small businesses need straightforward sites, not experimental architecture.</p>

      <h2>Build offers clients can understand</h2>
      <p>Package work into outcomes: “One-page launch site with contact form and mobile layout” beats “I do web stuff.” List deliverables, timeline, and what the client must provide (copy, logo files, brand colors).</p>
      <ul>
        <li>Discovery call or questionnaire to capture goals and examples they like</li>
        <li>One or two design directions, not unlimited concepts</li>
        <li>Staging link for review before launch</li>
        <li>Short handoff notes on how to update text or images if applicable</li>
      </ul>
      <p>Technical quality still matters. Clients notice fast load times and readable pages on phones. Brushing up on <a href="/blog/css-layouts-that-feel-modern">modern CSS layout</a> and <a href="/blog/getting-started-with-web-development">web fundamentals</a> helps you deliver polish without overpromising custom apps on your first engagement.</p>

      <h2>Communicate like a professional</h2>
      <p>Many freelance issues are communication issues. Confirm the scope in writing. List what is included, what is not included, and when drafts will be shared. Ask questions early about brand colors, content readiness, and feedback timelines.</p>
      <p>Set boundaries around revisions. Unlimited changes sound friendly, but they can drain both sides. A defined revision round keeps projects healthy and predictable.</p>
      <p>Send brief progress updates even when everything is on track. Silence makes clients nervous, while simple check-ins build confidence.</p>

      <h3>Email habits that prevent scope creep</h3>
      <p>When a client asks for “just one more thing,” reply with kindness and clarity: acknowledge the idea, note whether it fits the current agreement, and offer a follow-up quote if it does not. Most reasonable clients appreciate transparency.</p>
      <p>Save decisions in writing. Color choices, font picks, and removed sections are easy to forget weeks later; a short summary email after each call protects both of you.</p>

      <h2>Price for the work and the responsibility</h2>
      <p>Your rate should reflect research time, communication, testing, and delivery—not only the hours spent typing code. Beginners sometimes undercharge so severely that the project becomes stressful. Research common ranges in your region and offer packages with clear outcomes.</p>
      <p>After each project, write down what went well and what you would change next time. Freelancing is a business skill layered on top of technical skill. The developers who improve both sides build more sustainable careers.</p>
      <p>Remember that saying no to a poorly defined project can protect your reputation. Good clients appreciate clarity, and clarity starts with you.</p>

      <h2>Discovery, SEO, and launch details clients notice</h2>
      <p>Even simple brochure sites benefit from unique page titles, sensible headings, and a sitemap when the site goes live. You do not need to become an SEO consultant overnight, but knowing <a href="/blog/seo-basics-every-beginner-should-know">SEO basics</a> helps you avoid launch mistakes like identical titles on every page.</p>
      <p>Verify forms, test links, and click through on a phone before you call the project done. Those checks take minutes and prevent the embarrassed follow-up email every freelancer wants to avoid.</p>

      <h2>Learning speed and sustainable workload</h2>
      <p>Freelancing while learning is valid, but guard your calendar. One satisfied client beats three rushed deliveries that teach you burnout. Use <a href="/blog/programming-tips-for-faster-learning">calmer learning habits</a> to improve skills between projects instead of cramming new frameworks mid-contract.</p>
      <p>Ask for testimonials when a client is happy. A sentence about reliability and clear communication is as valuable as praise for code quality.</p>

      <h2>Long-term growth</h2>
      <p>Repeat clients and referrals come from trust. Document your process, meet agreed dates, and leave projects in a maintainable state. Over a year, a narrow specialty plus professional delivery often opens more doors than calling yourself a generalist who can build anything overnight.</p>
      <p>Freelance development is still development—your craft improves with every shipped site. Treat each project as both a paycheck and a portfolio chapter, and the business side gets easier as proof accumulates.</p>

      <h2>Contracts, deposits, and finishing well</h2>
      <p>Even lightweight projects benefit from a simple agreement: scope, timeline, payment schedule, and who owns the final files. A modest deposit before build work starts filters serious clients and protects your calendar.</p>
      <p>Define “launch” explicitly—DNS updated, SSL working, forms tested, and a short training call if you promised one. Handing over credentials in a secure channel beats pasting passwords in chat logs.</p>
      <p>After launch, offer an optional maintenance window for typos and small tweaks, then bill separately for new features. Clear endings make repeat business healthier than endless informal favors.</p>
      <p>Track hours honestly on early projects—not to micromanage yourself, but to learn how long tasks really take. Your next quote will be kinder to you and fairer to the client when it reflects reality instead of optimism alone.</p>
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
    updated: "2026-07-30",
    metaTitle: "Programming Study Tips for Calmer Learning",
    metaDescription:
      "Learn programming in focused loops: shorter sessions, attention habits, teaching back concepts, and a simple log that shows real progress over time.",
    schemaDescription:
      "Study strategies for beginner programmers: spaced practice, attention management, teaching to learn, and motivation habits that reduce burnout.",
    content: `
      <h2>Learn in loops, not straight lines</h2>
      <p>Many beginners expect learning to feel like a straight staircase: one topic, then the next, forever upward. Real progress looks more like a loop. You learn a concept, try it, get confused, review it, and suddenly understand more than before. That repetition is not failure. It is how skills settle into memory.</p>
      <p>Schedule short practice sessions more often instead of rare marathon days. Forty focused minutes can beat three distracted hours.</p>
      <p>End each session by writing one sentence about what you practiced. That tiny reflection helps tomorrow’s session start faster.</p>
      <p>Connect loops to real tools. If you are learning JavaScript, tie each session to a button, form, or list on a page you are building. Abstract drills help, but context makes memory stick—especially when you follow patterns from <a href="/blog/javascript-habits-that-save-time">JavaScript habits that save time</a>.</p>

      <h3>Spaced review without a complex system</h3>
      <p>You do not need fancy software to revisit topics. Keep a single document with three columns: concept, last practiced, confidence (low/med/high). Once a week, pick two low-confidence items and spend twenty minutes on them before learning anything new.</p>
      <ul>
        <li>Re-implement a small exercise from scratch without looking</li>
        <li>Explain the concept aloud in two minutes</li>
        <li>Find one bug in old code and fix it</li>
      </ul>

      <h2>Protect your attention</h2>
      <p>Close extra tabs. Silence notifications. Work on one exercise until you either finish it or write down the exact question blocking you. Scattered attention makes programming feel harder than it is.</p>
      <p>When you hit a wall, take a short break and return with a narrower question. “Why is this variable undefined?” is easier to solve than “Why is nothing working?”</p>
      <p>If frustration rises, switch to a smaller related task for ten minutes. Momentum matters more than perfect intensity.</p>

      <h3>Environment cues that help</h3>
      <p>Use the same chair, playlist, or time of day when possible. Rituals signal focus. Keep reference material one click away—documentation for your language, notes from your last session—but move social feeds out of reach during practice.</p>
      <p>When tutorials tempt you to tab-hop, pick one course or book for the week. Depth beats sampling five “complete guides” that each stop at chapter three.</p>

      <h2>Teach what you just learned</h2>
      <p>Explain a concept in plain language, as if you were writing a note to a friend. If you cannot explain it, you probably need another pass. Teaching reveals gaps quickly and strengthens what you already know.</p>
      <p>Keep a simple log of wins: the bug you fixed, the layout you finished, the concept that finally clicked. On difficult days, that log reminds you that progress is happening. Programming rewards steady learners who stay curious, patient, and kind to themselves while they grow.</p>
      <p>Over months, these calm habits compound. You will still meet confusing topics, but you will meet them with a process you trust.</p>

      <h2>Pair learning with a roadmap</h2>
      <p>Without a map, every new video feels urgent. With a map, you can say “not yet” calmly. If you are unsure what to study next, follow a structured path such as <a href="/blog/getting-started-with-web-development">getting started with web development</a>, then deepen areas that match your projects.</p>
      <p>When you reach interactive UI work, return to fundamentals if state or props confuse you—<a href="/blog/react-components-for-beginners">thinking in React components</a> assumes comfort with functions and data, not memorized syntax alone.</p>

      <h2>Tools and AI without losing the struggle</h2>
      <p>Assistants can unblock you, but the struggle that lasts five extra minutes often becomes long-term memory. Set a timer: try yourself first, then ask for a hint, then ask for an explanation of the solution.</p>
      <p><a href="/blog/ai-tools-for-everyday-coding">Using AI tools responsibly</a> fits this rhythm when you treat answers as material to rewrite and test, not as finished homework.</p>

      <h2>Rest, health, and realistic expectations</h2>
      <p>Sleep matters for debugging more than most beginners admit. Stepping away after dinner and seeing the typo in the morning is not magic—it is a rested brain.</p>
      <p>Compare weekly output, not daily mood. Some days produce one line that fixes everything; other days are reading only. Both count when the loop continues.</p>
      <p>Calmer learning is not slower learning. It is learning that survives busy weeks, job changes, and the inevitable plateaus every developer meets. Trust the loop, protect attention, teach what you know, and the skills will accumulate.</p>

      <h2>Study with others without comparing pace</h2>
      <p>Find one accountability partner or a small group chat where you share weekly goals—not daily leaderboard scores. Celebrate each other’s shipped exercises and ask specific questions when stuck.</p>
      <p>When someone learns faster, notice their habits rather than their talent: Do they sleep enough? Do they finish tiny projects? Do they reread fundamentals? Copy processes, not timelines.</p>
      <p>Return to this article when a course feels overwhelming. Trim your scope, restore one focus habit, and continue. Consistency over months beats intensity for a single weekend every time.</p>
      <p>Keep one “easy win” exercise bookmarked for low-energy days—a short kata, a flexbox drill, or a component you have built before. Showing up on hard days matters more than heroic sessions you cannot repeat.</p>
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
