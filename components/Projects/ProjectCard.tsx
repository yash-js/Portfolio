import React from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import ProjectLinks from './ProjectLinks';
import ProjectTechnologies from './ProjectTechnologies';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse = false }) => {
  return (
    <div className={`relative flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12`}>
      {/* Project Image */}
      <div className="w-full md:w-1/2 h-[300px] relative group">
        <div className="absolute w-full h-full bg-textGreen/10 rounded-lg z-10 group-hover:bg-transparent transition-all duration-300"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Project Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-textLight mb-4">{project.title}</h3>
        <p className="text-textDark mb-6">{project.description}</p>
        
        <ProjectTechnologies technologies={project.technologies} />
        <ProjectLinks links={project.links} />
      </div>
    </div>
  );
};

export default ProjectCard;