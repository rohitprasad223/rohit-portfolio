import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaRocket  } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">

          <span className="flex items-center justify-center w-10 h-10 rounded-full
          bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
            <FaRocket/>
          </span>

          <span>
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </span>

        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Some of the projects I built while learning full stack
          development using modern technologies.
        </p>

      </motion.div>

      <Slider {...settings}>

        {projects.map((p, i) => (

          <div key={i} className="px-2 md:p-4">

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300">

              <h3 className="text-2xl font-semibold mb-3">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {p.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 text-sm px-4 py-2
                    bg-white/10 rounded-lg
                    shadow-lg shadow-blue-500/30
                    hover:scale-105 hover:shadow-xl
                    active:scale-95 active:shadow-md
                    bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400
                    transition-transform duration-300 ease-in-out
                    before:absolute before:inset-0 before:rounded-lg before:bg-white/5
                    before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10
                    before:pointer-events-none
                  "
                >
                  <FaGithub /> Code
                </a>

                {/* 
                <a
                  href={p.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-sm px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
                */}

              </div>

            </div>

          </div>

        ))}

      </Slider>

    </section>
  );
}

export default Projects;