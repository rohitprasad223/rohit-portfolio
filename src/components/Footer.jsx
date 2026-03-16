import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full backdrop-blur-md bg-[#020617]/70 border-t border-white/10 py-4 ">
      <div className="max-w-6xl mx-auto flex justify-center items-center px-4">
        <p className="text-sm md:text-base text-center text-white">
          © {currentYear} All rights reserved to{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Rohit Prasad 🌐
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;