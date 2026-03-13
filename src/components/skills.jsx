import { motion } from "framer-motion";
import { SiRedux } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaLaravel,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaTools
} from "react-icons/fa";

/* Inline SVG icons */

const TailwindIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#38B2AC">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zM16 16c-1.33 0-2.67-.67-4-2-1.33-1.33-2.67-2-4-2 1.33 0 2.67.67 4 2 1.33 1.33 2.67 2 4 2z" />
  </svg>
);

const VSCodeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#007ACC">
    <path d="M2 3v18l20-9L2 3zM16.5 12L6 18V6l10.5 6z" />
  </svg>
);

const SublimeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF9800">
    <path d="M2 2h20v20H2V2zm16 16h-2v-8h2v8zm-6 0h-2V6h2v12z" />
  </svg>
);

const WordPressIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#21759B">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0z" />
  </svg>
);

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "PHP", icon: <FaPhp color="#777BB4" /> },
  { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
  { name: "MySQL", icon: <FaDatabase color="#4479A1" /> },
  { name: "TailwindCSS", icon: <TailwindIcon /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
  { name: "VS Code", icon: <VSCodeIcon /> },
  { name: "Sublime Text", icon: <SublimeIcon /> },
  { name: "WordPress", icon: <WordPressIcon /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> }
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-6 max-w-6xl mx-auto relative">

      {/* background glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-500/10 blur-[120px] -top-10 left-0"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-500/10 blur-[120px] bottom-0 right-0"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">

          <span className="flex items-center justify-center w-10 h-10 rounded-full
          bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
            <FaTools/>
          </span>

          <span>
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </span>

        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Technologies and tools I use to build modern and scalable web applications.
        </p>

      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

        {skills.map((skill, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-8 rounded-xl text-center backdrop-blur-lg bg-white/5 
            border border-white/10 hover:border-blue-500 
            hover:-translate-y-2 transition duration-300
            shadow-lg hover:shadow-blue-500/20 relative overflow-hidden"
          >

            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 mx-auto flex items-center justify-center 
              rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20
              text-3xl mb-4 shadow-md">

                {skill.icon}

              </div>

              <h3 className="font-medium text-lg">
                {skill.name}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;