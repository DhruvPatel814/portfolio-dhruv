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
    <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-xl transition-transform hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-700">{description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm border"
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
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
            target="_blank"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            className="px-4 py-2 border border-gray-900 rounded-md hover:bg-gray-200"
            target="_blank"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
