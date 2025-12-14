import React from "react";
import { motion } from "framer-motion";

const skills = [
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "SQL",
  "Oracle APEX",
  "Git & GitHub",
  "DSA",
  "Problem Solving",
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-5 py-2 rounded-full font-medium cursor-pointer transition
                bg-white text-gray-800 border border-gray-300 shadow-md
                hover:bg-indigo-600 hover:text-white

                dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700
                dark:hover:bg-indigo-500
              "
            >
              {skill}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
