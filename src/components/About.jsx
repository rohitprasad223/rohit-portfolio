import { motion } from "framer-motion";
import { FaCode, FaServer, FaLightbulb, FaRocket } from "react-icons/fa";

function About() {

  const strengths = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      desc: "Creating responsive, interactive and visually clean user interfaces using modern frontend technologies."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Building structured backend logic, APIs and database-driven systems using scalable architecture."
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      desc: "Passionate about analyzing complex problems and building efficient technical solutions."
    }
  ];

  const values = [
    {
      icon: <FaRocket />,
      title: "Growth Mindset",
      desc: "Always learning new technologies and improving development practices."
    },
    {
      icon: <FaLightbulb />,
      title: "Curiosity Driven",
      desc: "Exploring how systems work and constantly improving my technical understanding."
    },
    {
      icon: <FaCode />,
      title: "Project Oriented",
      desc: "Focused on building real-world projects to strengthen practical development experience."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-6 max-w-6xl mx-auto relative">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[160px] -top-32 left-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[450px] h-[450px] bg-purple-500/10 blur-[140px] bottom-0 right-0"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
        ╰┈➤ About 
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I am an aspiring full stack developer passionate about building modern
          web applications and solving real-world problems through technology.
          I enjoy learning new tools, building practical projects and continuously
          improving my development skills.
        </p>
      </motion.div>

      {/* Journey */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center mb-20 relative z-10"
      >
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-9 h-9 rounded-full
          bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
          <FaRocket/>
          </span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          My Development Journey
          </span>
          </h3>

          <p className="text-gray-400 leading-relaxed mb-4">
            My journey into web development started with curiosity about how
            websites work. I began learning frontend technologies and gradually
            expanded into backend development.
          </p>

          <p className="text-gray-400 leading-relaxed">
            By building real-world projects, I developed a strong understanding
            of how modern web applications are designed, built and optimized.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 text-center rounded-xl backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 hover:scale-105 transition">
            <h4 className="text-3xl font-bold text-blue-500">6+</h4>
            <p className="text-gray-400 text-sm">Projects Built</p>
          </div>

          <div className="p-6 text-center rounded-xl backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 hover:scale-105 transition">
            <h4 className="text-3xl font-bold text-blue-500">8+</h4>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
        </div>
      </motion.div>

      {/* Strengths */}
      <div className="grid md:grid-cols-3 gap-8 mb-20 relative z-10">
        {strengths.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-7 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 
            hover:border-blue-500 hover:-translate-y-2 transition duration-300 
            shadow-lg hover:shadow-blue-500/20 relative overflow-hidden"
          >

            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center 
              rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20
              text-blue-400 shadow-lg shadow-blue-500/20 mb-4">

                {item.icon}

              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 relative z-10"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 
              hover:border-blue-500 hover:scale-105 transition shadow-lg hover:shadow-blue-500/20"
            >
              <div className="text-blue-400 text-xl mb-3">{item.icon}</div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Future Goal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto relative z-10"
      >
        <p className="text-gray-400 leading-relaxed">
          Currently looking for opportunities where I can contribute to real
          projects, collaborate with experienced developers and grow as a
          professional Full Stack Developer.
        </p>
      </motion.div>

    </section>
  );
}

export default About;