"use client";

import { useEffect, useState } from "react";

export default function FloatingFeedbackBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 1000);
  }, []);

  const handleClick = () => {
    const formSection = document.getElementById("feedback");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50 transition-all duration-700 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
    >
      <button
        onClick={handleClick}
        className="
          block px-5 py-3 rounded-full shadow-lg 
          bg-gradient-to-r from-rose-500 to-orange-400 
          text-white text-sm font-semibold cursor-pointer
          hover:scale-110 active:scale-95 transition-transform
          animate-bounce
        "
      >
        💬 Share Feedback
      </button>
    </div>
  );
}
