"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields before sending.");
      return;
    }

    setStatus(
      "Message ready! This is a frontend-only form, so nothing was sent."
    );
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you learn?"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Send Message
      </button>

      {status ? <p className="form-message">{status}</p> : null}
    </form>
  );
}
