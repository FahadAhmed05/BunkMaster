"use client";
import { useEffect, useState } from "react";

export default function FloatingFeedbackBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 1000);
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50 transition-all duration-700 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
    >
      <a
        href="#feedback"
        className="
          block px-5 py-3 rounded-full shadow-lg 
          bg-gradient-to-r from-rose-500 to-orange-400 
          text-white text-sm font-semibold cursor-pointer
          hover:scale-105 active:scale-95 transition-transform
        "
      >
        💬 Share Feedback
      </a>
    </div>
  );
}
