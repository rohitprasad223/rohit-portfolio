import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#020617]/70 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">🌐
          <span className="gradient-text">
            Rohit Portfolio
          </span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-300">

          <a href="#about" className="hover:text-white transition relative group">
            👨‍💻 About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </a>

          <a href="#education" className="hover:text-white transition relative group">
            🎓 Education
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </a>

          <a href="#skills" className="hover:text-white transition relative group">
            ⚡ Skills
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </a>

          <a href="#projects" className="hover:text-white transition relative group">
            🚀 Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </a>

          <a href="#contact" className="hover:text-white transition relative group">
            📬 Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </a>

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
          className="md:hidden text-2xl"
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
          className="md:hidden bg-[#020617] border-t border-white/10 px-6 pb-6"
        >

          <div className="flex flex-col gap-5 pt-4 text-gray-300">

            <a href="#about" onClick={() => setOpen(false)}>
              👨‍💻 About
            </a>

            <a href="#education" onClick={() => setOpen(false)}>
              🎓 Education
            </a>

            <a href="#skills" onClick={() => setOpen(false)}>
              ⚡ Skills
            </a>

            <a href="#projects" onClick={() => setOpen(false)}>
              🚀 Projects
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              📬 Contact
            </a>

          </div>

        </motion.div>
      )}

    </nav>
  );
}

export default Navbar;