import React from 'react';
import SectionTitle from '../SectionTitle';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-contentContainer mx-auto py-24 px-4"
    >
      <SectionTitle title="Some Things I've Built" titleNo="03" />
      
      <div className="mt-16 space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;