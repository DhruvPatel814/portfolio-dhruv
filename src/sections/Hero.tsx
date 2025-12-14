import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center px-6 
                 bg-gray-50 dark:bg-gray-900
                 transition-colors duration-300"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold 
                     text-gray-900 dark:text-gray-100"
        >
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Dhruv Patel
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl max-w-xl 
                     text-gray-700 dark:text-gray-300"
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
            className="px-6 py-3 rounded-lg font-medium transition
                       border border-gray-700 text-gray-700
                       hover:bg-gray-200
                       dark:border-gray-500 dark:text-gray-200
                       dark:hover:bg-gray-800"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
