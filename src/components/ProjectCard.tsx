import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  github,
  demo,
}) => {
  return (
    <div
      className="
        p-6 rounded-xl border shadow-md transition-all
        bg-white text-gray-900 border-gray-200
        hover:shadow-xl hover:-translate-y-1

        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
      "
    >
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-700 dark:text-gray-300">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="
              px-3 py-1 rounded-full text-sm border
              bg-gray-100 text-gray-800 border-gray-300

              dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            className="
              px-4 py-2 rounded-md text-white transition
              bg-gray-900 hover:bg-gray-700

              dark:bg-indigo-600 dark:hover:bg-indigo-500
            "
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            className="
              px-4 py-2 rounded-md border transition
              border-gray-900 text-gray-900 hover:bg-gray-200

              dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-700
            "
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
