"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thanks for joining! This demo form does not send emails.");
    setEmail("");
  }

  return (
    <section className="newsletter-section">
      <div className="container newsletter-inner">
        <div>
          <h2>Stay curious with TechNest</h2>
          <p>
            Get friendly learning notes and new article updates. UI only — no
            emails are sent.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>

        {message ? <p className="form-message">{message}</p> : null}
      </div>
    </section>
  );
}
