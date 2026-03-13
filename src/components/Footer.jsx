import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 w-full overflow-x-hidden z-50 backdrop-blur-md bg-[#020617]/70 border-t border-white/10 h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full flex justify-center items-center px-4">
          <p className="text-sm md:text-base text-center text-white">
            © {currentYear} All rights reserved to{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Rohit Prasad 🌐
            </span>
          </p>
        </div>
      </footer>

      {/* Spacer to prevent overlap */}
      <div className="h-16"></div>
    </>
  );
};

export default Footer;