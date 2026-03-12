import { useEffect } from "react";

function ScrollToHash() {
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;

      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    };

    // Scroll after all resources (images/fonts) loaded
    window.addEventListener("load", handleScroll);

    // Scroll when hash changes dynamically
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  return null;
}

export default ScrollToHash;