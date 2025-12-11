import { ChevronUp } from "lucide-react";
import React from "react";

function TopArrow() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-sec hover:bg-prim text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" strokeWidth={3} />
      </button>
      ;
    </div>
  );
}

export default TopArrow;
