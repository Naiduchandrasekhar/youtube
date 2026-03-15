import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { videoTitleButtons } from "../Utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ButtonList = () => {
  const selectedLanguage = useSelector(
    (store) => store?.language?.selectedLanguage
  );

  const isDarkMode = useSelector(
    (store) => store?.mode?.isDarkMode
  );

  const scrollRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 0;
    const isAtEnd =
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setShowLeft(!isAtStart);
    setShowRight(!isAtEnd);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const notify = (title) => toast(`${title} route not implemented`);

  return (
    <div className="relative w-full overflow-hidden my-3">

      {/* LEFT ARROW */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 
          shadow-md rounded-full p-2 cursor-pointer transition-colors duration-300
          ${isDarkMode
              ? "bg-[#1f1f1f] text-white border border-gray-700 hover:bg-[#2a2a2a]"
              : "bg-white text-black border border-gray-200 hover:bg-gray-100"
            }`}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* SCROLLABLE BUTTONS */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto no-scrollbar w-full whitespace-nowrap scroll-smooth"
      >
        {videoTitleButtons?.[selectedLanguage]?.map(
          (title, index) => (
            <button
              key={index}
              className={`m-1 font-medium rounded-2xl px-4 py-1.5 
              whitespace-nowrap shrink-0 transition-colors duration-300 border cursor-pointer
              ${isDarkMode
                  ? "bg-[#272727] text-white border-gray-700 hover:bg-[#3a3a3a]"
                  : "bg-gray-100 text-black border-gray-200 hover:bg-gray-200"
                }`}
            >
              {title === "Live" ? <Link to="/Live">{title}</Link> : <span onClick={() => notify(title)}>{title}</span>}
            </button>
          )
        )}
      </div>

      {/* RIGHT ARROW */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 
          shadow-md rounded-full p-2 cursor-pointer transition-colors duration-300
          ${isDarkMode
              ? "bg-[#1f1f1f] text-white border border-gray-700 hover:bg-[#2a2a2a]"
              : "bg-white text-black border border-gray-200 hover:bg-gray-100"
            }`}
        >
          <ChevronRight size={20} />
        </button>
      )}

    </div>
  );
};

export default ButtonList;