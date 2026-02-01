import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center 
                 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white 
                 rounded-full shadow-2xl hover:shadow-3xl 
                 transition-all duration-300 hover:scale-110"
      aria-label="Go to top"
    >
      <FaArrowUp size={22} />
    </button>
  );
};

export default GoToTopButton;
