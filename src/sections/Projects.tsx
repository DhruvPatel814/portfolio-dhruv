import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-10"
        >
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <ProjectCard
            title="Task Management System"
            description="A full-stack application to manage tasks with SQL backend integration."
            tech={["HTML", "CSS", "JS", "SQL", "Oracle APEX"]}
            github=""
            demo=""
          />

          <ProjectCard
            title="haLo raiLs"
            description="Railway user interaction system with emergency messaging via Twilio API."
            tech={["HTML", "CSS", "JS", "Twilio API"]}
            github=""
            demo=""
          />

          <ProjectCard
            title="Snake Game (C++)"
            description="A terminal-based snake game built using C++ basics and logic."
            tech={["C++"]}
            github=""
          />

          <ProjectCard
            title="AI Chatbot"
            description="AI-powered chatbot integrated with open-source APIs."
            tech={["HTML", "CSS", "JS", "API"]}
            github=""
          />

        </div>
      </div>
    </section>
  );
};

export default Projects;
