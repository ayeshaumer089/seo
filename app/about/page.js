export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About TechNest Academy</h1>
          <p>
            We are a fictional learning-focused technology blog created to help
            beginners explore coding topics with confidence and curiosity.
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
            Our articles cover web development, JavaScript, React, Next.js, CSS,
            HTML, freelancing, AI tools, and practical programming habits. Each
            piece is designed to be useful on its own and easy to revisit later.
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
            <strong>10</strong>
            Sample articles ready to explore across beginner-friendly topics.
          </div>
          <div className="stat-block">
            <strong>10</strong>
            Categories spanning code, design foundations, and career skills.
          </div>
          <div className="stat-block">
            <strong>100%</strong>
            Frontend demo — no accounts, no backend, no database required.
          </div>
        </div>
      </section>
    </>
  );
}
