"use client";

export default function FeedbackSection() {
  return (
    <section id="feedback" className="w-full mt-20 mb-16 px-4">
      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">
        
        <h2 className="text-2xl font-semibold text-center mb-4">
          Share Your Thoughts
        </h2>

        <p className="text-sm text-gray-300 text-center leading-relaxed mb-8">
          If this little tool added even a hint of ease to your journey, I would be grateful to hear your thoughts.  
          Tell me what felt missing, what could have been gentler or more helpful.  
          Your words will quietly guide the next steps, and I’ll do my best to shape this space into something even better for you.
        </p>

        <form
          action="https://formspree.io/f/meoykpjv"
          method="POST"
          className="space-y-4"
        >
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
            <label className="text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-3 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="text-sm">Your Feedback</label>
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
          Your voice lights the path forward.
        </p>
      </div>
    </section>
  );
}