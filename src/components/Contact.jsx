import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSuccess(true);
      form.current.reset();
      setTimeout(() => setSuccess(false), 3000);
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto relative">
      {/* background glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[140px] -top-20 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[140px] bottom-0 right-0"></div>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce z-50">
          Message Sent Successfully ✓
        </div>
      )}

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
            <FaPaperPlane/>
          </span>
          <span>
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project idea or job opportunity? Let's connect and build something amazing.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT CONTACT INFO */}
        <div className="space-y-6">
          <a
            href="mailto:rp742310@gmail.com"
            className="flex items-center gap-4 p-6 backdrop-blur-lg bg-white/5 border border-white/10
            rounded-xl hover:border-blue-500 hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <FaEnvelope className="text-2xl text-blue-400" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-400 text-sm">rohit@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/rohitprasad223"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 backdrop-blur-lg bg-white/5 border border-white/10
            rounded-xl hover:border-blue-500 hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <FaGithub className="text-2xl text-blue-400" />
            <div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-gray-400 text-sm">github.com/rohitprasad</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rohit-prasad-64b823310/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 backdrop-blur-lg bg-white/5 border border-white/10
            rounded-xl hover:border-blue-500 hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-gray-400 text-sm">linkedin.com/rohit-prasad</p>
            </div>
          </a>
        </div>

        {/* RIGHT CONTACT FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 backdrop-blur-xl bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg"
        >
          <div>
            <label className="block text-sm mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 flex items-center justify-center gap-2
            bg-gradient-to-r from-blue-500 to-purple-500
            rounded-lg font-semibold
            hover:scale-105 active:scale-95
            shadow-lg hover:shadow-blue-500/40
            transition duration-300"
          >
            <FaPaperPlane/>
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;