"use client";

import { useState, FormEvent } from "react";
import ThanksFeedbackModal from "./ThanksFeedbackModal";

export default function FeedbackSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meoykpjv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setIsModalOpen(true);
        form.reset();
      } else {
        alert("Something went wrong, please try again!");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending feedback");
    }
  };

  return (
    <section id="feedback" className="w-full mt-20 mb-16 px-4">
      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">

        <h2 className="text-2xl font-semibold text-center mb-4">
          Share Your Thoughts
        </h2>

        <p className="text-sm text-gray-300 text-center leading-relaxed mb-8">
          If this little tool brought even a breath of ease to your journey,
          I would be thankful for a few words to help me shape it better for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm">Your Name (optional)</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-3 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
              placeholder="Enter your name..."
            />
          </div>

          <div>
            <label className="text-sm">Your Email (optional)</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 px-3 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="text-sm">Your Feedback (required)</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full mt-1 px-3 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 transition-all py-2 rounded-lg mt-4 border border-white/30"
          >
            Send Feedback
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          Your voice softly shapes what comes next.
        </p>
      </div>

      <ThanksFeedbackModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
}
