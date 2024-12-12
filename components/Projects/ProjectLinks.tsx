import React from 'react';
import { ProjectLink } from '@/data/projects';

interface ProjectLinksProps {
  links: ProjectLink[];
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  return (
    <div className="flex gap-4 mt-4">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textLight hover:text-textGreen transition-colors duration-300"
            aria-label={link.label}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};

export default ProjectLinks;