/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { GrLinkTop } from "react-icons/gr";

function BackToTop() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Untuk membuat scroll menjadi smooth
    });
  };
  return (
    <>
      {scrollY > 500 && (
        <label className="flex flex-col gap-1 items-center fixed bottom-10 right-14">
          <button
            onClick={scrollToTop}
            className="btn btn-xs md:btn-sm btn-circle btn-secondary "
          >
            <BiArrowToTop className="text-lg md:text-xl" />
          </button>
          <p className="text-[6px] md:text-[8px] font-bold text-secondary">
            Back to Top
          </p>
        </label>
      )}
    </>
  );
}

export default BackToTop;
