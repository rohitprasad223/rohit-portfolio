import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "Rashtrasant Tukadoji Maharaj Nagpur University",
      year: "2023 - 2025",
      college: "Suryodaya College of Engineering & Technology, Nagpur."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Rashtrasant Tukadoji Maharaj Nagpur University",
      year: "2019 - 2022",
      college: "Prerna College of Commerce, Science & Arts, Nagpur."
    },
    {
      degree: "Higher Secondary (12th)",
      institute: "Maharashtra State Board",
      year: "2018 - 2019",
      college: "Vande Mataram Junior College, Nagpur."
    },
    {
      degree: "Secondary School (10th)",
      institute: "Maharashtra State Board",
      year: "2016 - 2017",
      college: "ABC Convent School, Nagpur."
    }
  ];

  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">

          <span className="flex items-center justify-center w-10 h-10 rounded-full
          bg-gradient-to-r from-blue-500 to-purple-500 text-black shadow-lg">
            <FaGraduationCap/>
          </span>

          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Education
          </span>

        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          My academic background and learning journey that built the
          foundation of my development career.
        </p>

      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-white/10 pl-10 space-y-12">

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >

            {/* Circle */}
            <div className="absolute -left-[46px] top-2 w-5 h-5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>

            {/* Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-blue-500/20">

              <h3 className="text-xl font-semibold mb-1">
                {item.degree}
              </h3>

              <p className="text-gray-400 text-sm mb-2">
                {item.institute} • {item.year}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.college}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Education;