import React from "react";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full z-50 backdrop-blur-md bg-[#020617]/70 border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-center items-center px-4">

        {/* Centered copyright */}
        <p className="text-sm md:text-base text-center text-white">
          © {currentYear} All rights reserved to{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent ">
            Rohit Prasad 🌐
          </span>
        </p>

      </div>

    </footer>
  );

};

export default Footer;