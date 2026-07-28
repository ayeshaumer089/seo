/**
 * Dummy blog posts for TechNest Academy.
 * All content is fictional and stored locally (no database).
 * Post lengths intentionally vary between roughly 300 and 800 words.
 */

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
    author: "Aisha Rahman",
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
    author: "Daniel Okoye",
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
    author: "Maya Chen",
    date: "2026-04-02",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=700&fit=crop",
    excerpt:
      "Learn how to break a user interface into reusable pieces without overcomplicating your first app.",
    content: `
      <h2>Components are Lego bricks for interfaces</h2>
      <p>React encourages you to build interfaces from small, reusable pieces called components. Instead of writing one giant HTML file, you create building blocks such as a navigation bar, a post card, or a contact form. Each component can receive data through props and display that data in a consistent way.</p>
      <p>This approach helps you reuse the same design across pages. If your blog card looks good once, you can render it many times with different titles, authors, and dates. That reuse is one of the biggest reasons teams love React.</p>

      <h2>Start with the screen, then split</h2>
      <p>A useful beginner method is to sketch the page first. Circle the repeated sections and turn each circle into a component. Keep the first version simple: pass text and images as props, and avoid advanced state management until you need it.</p>
      <p>State becomes important when the interface changes after the user interacts with it. Examples include opening a mobile menu, typing into a form, or filtering a list of posts. Learn useState carefully and only store what the UI truly needs to remember.</p>
      <p>If two components need the same piece of information, move that state to their closest shared parent. This pattern, often called lifting state up, keeps your data flow easier to follow.</p>

      <h2>Avoid early over-engineering</h2>
      <p>It is tempting to create folders and abstractions before you have a working page. Resist that urge. Build one screen that works, then extract repeated parts. Your future self will thank you for code that is easy to follow.</p>
      <p>As your confidence grows, explore lists with keys, conditional rendering, and simple side effects. React feels natural once you practice seeing a page as a tree of components that pass information downward and respond to events upward.</p>
      <p>Most importantly, celebrate small interfaces that work. A polished button group or a reusable card component is real progress, even if the rest of the app is still simple.</p>
    `,
  },
  {
    id: 4,
    slug: "why-nextjs-is-popular",
    title: "Why Next.js Became a Favorite for Modern Sites",
    category: "Next.js",
    author: "Omar Farooq",
    date: "2026-04-10",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=700&fit=crop",
    excerpt:
      "An approachable look at routing, pages, and deployment with Next.js for learners coming from plain React.",
    content: `
      <h2>From React app to full website toolkit</h2>
      <p>React is excellent at building interactive interfaces, but a complete website also needs routing, page structure, and a smooth path to production. Next.js wraps React with practical features that many teams need on day one. You can create pages by adding files to folders, which makes navigation feel organized and predictable.</p>
      <p>For beginners, this file-based routing is a major win. Want an About page? Create an about folder with a page file. Want a dynamic blog post? Use a slug folder and load the matching article. The mental model is easy to teach and easy to remember.</p>
      <p>Because the project structure is conventional, other developers can often find their way around your code quickly. That shared understanding is valuable when you collaborate or open source a learning project.</p>

      <h2>Development speed without chaos</h2>
      <p>Next.js gives you a strong default setup: a local development server, modern JavaScript support, and a production build command. That means less time configuring tools and more time learning how your pages work. You can start with static content and later add forms, APIs, or server logic if your project needs them.</p>
      <p>The ecosystem is widely used, so finding examples and explanations is usually straightforward. That community effect matters when you are learning and need answers quickly.</p>
      <p>Still, you do not need every feature on day one. Learn pages, layouts, and links first. Add complexity only when a real requirement appears in your project.</p>

      <h2>A calm path to deployment</h2>
      <p>Many learners choose Next.js because deploying a finished site is approachable. Platforms like Vercel and Netlify integrate smoothly with common project structures. Once your pages render locally, you can connect a repository and publish a live URL.</p>
      <p>Remember that Next.js is still React underneath. The more comfortable you become with components, props, and state, the more powerful Next.js feels. Learn the basics thoroughly, then explore advanced features only when a real project requires them.</p>
    `,
  },
  {
    id: 5,
    slug: "ai-tools-for-everyday-coding",
    title: "Using AI Tools Without Losing Your Coding Skills",
    category: "Artificial Intelligence",
    author: "Priya Nair",
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
    author: "Elena Morales",
    date: "2026-05-01",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec52ef0f?w=1200&h=700&fit=crop",
    excerpt:
      "A gentle introduction to how search engines discover pages and why clear content structure matters.",
    content: `
      <h2>What SEO really means</h2>
      <p>Search engine optimization is the practice of helping people find your pages through search results. It is not magic, and it is not only about keywords. At a basic level, search engines try to understand what a page is about and whether it might help a person looking for information.</p>
      <p>For beginners, the most important idea is clarity. If your page has a clear topic, readable headings, and useful content, you are already thinking in the right direction. Technical details matter later, but communication comes first.</p>
      <p>SEO works best as an ongoing habit. You improve one page, learn from the result, and apply that lesson to the next page.</p>

      <h2>Content people can understand</h2>
      <p>Write for humans before you write for algorithms. Use headings that describe sections honestly. Keep paragraphs focused. Answer the question a visitor likely has when they arrive. Thin pages that repeat the same phrase rarely help anyone, including search engines.</p>
      <p>Internal links between related articles can also help visitors explore your site. When someone finishes a beginner guide, offer a natural next step. Good navigation supports both users and discovery.</p>
      <p>Choose titles that match the promise of the article. If the heading says the post is for beginners, make sure the examples truly feel beginner-friendly.</p>

      <h2>Technical basics come later</h2>
      <p>As you grow, you will learn about titles, descriptions, structured data, sitemaps, and indexing. Those topics are powerful, but they work best on top of solid pages. A beautifully tagged empty page still has little value.</p>
      <p>If you are practicing SEO yourself, start by reviewing one page at a time. Ask whether the main topic is obvious within a few seconds. Then improve headings, examples, and readability. Strong fundamentals make every advanced SEO technique more effective.</p>
      <p>This article is only an introduction. The rest of your learning can happen by editing real pages, measuring what changes, and noticing how clearer writing improves the experience for every visitor.</p>
    `,
  },
  {
    id: 7,
    slug: "css-layouts-that-feel-modern",
    title: "CSS Layouts That Feel Modern Without Extra Libraries",
    category: "CSS",
    author: "Noah Williams",
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
    author: "Sofia Almeida",
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
    author: "Liam Carter",
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
    author: "Hannah Brooks",
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
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
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
