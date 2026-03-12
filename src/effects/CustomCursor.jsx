import { useEffect, useRef } from "react";

function CustomCursor() {

  const cursorRef = useRef(null);

  useEffect(() => {

    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("a, button");

    links.forEach((el) => {

      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });

      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });

    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <div ref={cursorRef} className="cursor"></div>
  );

}

export default CustomCursor;