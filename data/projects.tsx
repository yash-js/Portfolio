import { StaticImageData } from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface ProjectLink {
  url: string;
  icon: IconType;
  label: string;
}

export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  links: ProjectLink[];
  featured: boolean;
}

export const projects: Project[] = [
    {
      title: "TaskScape - Project Management Tool",
      description: "A comprehensive project management application built with Next.js and TypeScript. Features include real-time updates, drag-and-drop task management, and team collaboration tools.",
      image: "/assets/images/taskscape.png",
      technologies: [
        { name: "Next.js", color: "text-textGreen" },
        { name: "TypeScript", color: "text-textGreen" },
        { name: "Tailwind CSS", color: "text-textGreen" },
        { name: "Prisma", color: "text-textGreen" }
      ],
      links: [
        { url: "https://github.com/username/taskscape", icon: FaGithub, label: "GitHub" },
        { url: "https://taskscape.demo.com", icon: FaExternalLinkAlt, label: "Live Demo" }
      ],
      featured: true
    },
    {
      title: "Socio - Social Media Platform",
      description: "A modern social media platform built using the MERN stack. It features user authentication, real-time messaging, posts, comments, and the ability to like and share posts.",
      image: "/assets/images/socio.png",
      technologies: [
        { name: "MongoDB", color: "text-textGreen" },
        { name: "Express.js", color: "text-textGreen" },
        { name: "React", color: "text-textGreen" },
        { name: "Node.js", color: "text-textGreen" }
      ],
      links: [
        { url: "https://github.com/yash-js/Socio", icon: FaGithub, label: "GitHub" },
        // { url: "#", icon: FaExternalLinkAlt, label: "Live Demo" }
      ],
      featured: true
    },
    {
        title: "Student Management System",
        description: "A comprehensive student management system using the MERN stack. It includes features such as student registration, attendance tracking, grade management, and class scheduling.",
        image: "/assets/images/sms.png",
        technologies: [
          { name: "MongoDB", color: "text-textGreen" },
          { name: "Express.js", color: "text-textGreen" },
          { name: "React", color: "text-textGreen" },
          { name: "Node.js", color: "text-textGreen" }
        ],
        links: [
          { url: "https://github.com/yash-js/Student-Management-System", icon: FaGithub, label: "GitHub" },
        //   { url: "https://student-management.demo.com", icon: FaExternalLinkAlt, label: "Live Demo" }
        ],
        featured: true
      }
  ];
  