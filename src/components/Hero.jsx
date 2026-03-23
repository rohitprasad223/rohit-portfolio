import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function Hero() {

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[160px] top-20 -left-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[160px] bottom-10 -right-20"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* RIGHT IMAGE (Mobile pe pehle dikhaye) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative group">
            <img
              src={profile}
              className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-40 -z-10"></div>
          </div>
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >

          {/* Badge */}
          <span className="inline-block px-4 py-1 mb-6 text-sm rounded-full
          bg-gradient-to-r from-blue-500/10 to-purple-500/10
          border border-blue-500/30 text-blue-400">

            🚀 Available for Work

          </span>

          <p className="text-gray-400 text-lg mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-3">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Rohit Ramashankar Prasad
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg">
            I build scalable web applications and user interfaces using HTML,
            CSS, Bootstrap, JavaScript, React, PHP, Laravel, and MySQL,
            focusing on clean UI, high performance, and modern digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="
                relative inline-block px-6 py-3 md:px-8 md:py-4 text-base font-semibold text-white
                bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400
                rounded-lg shadow-lg shadow-blue-500/30
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50
                active:scale-95 active:shadow-md
                before:absolute before:inset-0 before:rounded-lg before:bg-white/5
                before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-10
              "
            >
              Contact Me
            </a>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;