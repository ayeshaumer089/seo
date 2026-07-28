import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Have a question about learning paths, article ideas, or the site
            itself? Send a message using the form below. This form is frontend
            only and does not connect to a server.
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
          <h2>Studio details</h2>
          <p>
            <strong>Brand:</strong> TechNest Academy
          </p>
          <p>
            <strong>Focus:</strong> Beginner-friendly technology writing
          </p>
          <p>
            <strong>Email (demo):</strong> hello@technest.academy
          </p>
          <p>
            <strong>Response time:</strong> This is a demo UI, so no replies are
            sent.
          </p>
        </div>
      </section>
    </>
  );
}
