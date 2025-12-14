import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        >
          Contact Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg mb-10 text-gray-700 dark:text-gray-300"
        >
          Whether you want to discuss a project, explore collaboration, or just say hello —  
          feel free to reach out!
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <a
            href="mailto:dhruvpateldrup@gmail.com"
            className="px-6 py-3 rounded-lg font-medium transition
                       bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/dhruv-patel-4126992b0/"
            target="_blank"
            className="px-6 py-3 rounded-lg font-medium transition
                       border border-gray-700 text-gray-700 hover:bg-gray-200
                       dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/DhruvPatel814"
            target="_blank"
            className="px-6 py-3 rounded-lg font-medium transition
                       border border-gray-700 text-gray-700 hover:bg-gray-200
                       dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
