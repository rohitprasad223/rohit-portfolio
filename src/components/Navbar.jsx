// Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-md bg-[#020617]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-4 md:px-6 py-4 flex flex-wrap justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
          🌐 <span className="gradient-text">Rohit Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-300">
          {["About", "Education", "Skills", "Projects", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition relative group"
            >
              {item === "About" ? "👨‍💻 " : item === "Education" ? "🎓 " : item === "Skills" ? "⚡ " : item === "Projects" ? "🚀 " : "📬 "}
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/Rohit_Resume.pdf"
          download
          className="mt-3 md:mt-0 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-transform duration-200 transform hover:scale-105"
        >
          <FaDownload />
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl ml-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#020617] border-t border-white/10 px-4 sm:px-6 pb-6 w-full"
        >
          <div className="flex flex-col gap-4 pt-4 text-gray-300">
            {["About", "Education", "Skills", "Projects", "Contact"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="py-2 hover:text-white transition"
              >
                {item === "About" ? "👨‍💻 " : item === "Education" ? "🎓 " : item === "Skills" ? "⚡ " : item === "Projects" ? "🚀 " : "📬 "}
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;