import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center px-6" id="home">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900"
        >
          Hi, I'm <span className="text-indigo-600">Dhruv Patel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-gray-700 max-w-xl"
        >
          A motivated Software Engineer who loves building clean, efficient
          web applications and solving challenging problems using C++, Java,
          and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium
                       hover:bg-indigo-700 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-700 rounded-lg font-medium
                       hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
