import React from 'react';
import { Technology } from '@/data/projects';

interface ProjectTechnologiesProps {
  technologies: Technology[];
}

const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ technologies }) => {
  return (
    <ul className="flex flex-wrap gap-3 mb-4">
      {technologies.map((tech, index) => (
        <li
          key={index}
          className={`text-sm ${tech.color} bg-hoverColor px-3 py-1 rounded-full`}
        >
          {tech.name}
        </li>
      ))}
    </ul>
  );
};

export default ProjectTechnologies;