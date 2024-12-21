import { FaAws, FaCss3, FaReact } from 'react-icons/fa';
import { PiFileHtmlFill } from 'react-icons/pi';
import { SiAppwrite, SiExpress, SiFirebase, SiJavascript, SiMysql, SiPrisma, SiSequelize, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs, TbBrandNodejs, TbBrandReactNative } from 'react-icons/tb';
import { BiLogoMongodb } from 'react-icons/bi';

export interface Technology {
    name: string;
    icon: JSX.Element;
}

export const technologies: Technology[] = [
    { name: 'HTML', icon: <PiFileHtmlFill className='text-textGreen' /> },
    { name: 'CSS', icon: <FaCss3 className='text-textGreen' /> },
    { name: 'JavaScript', icon: <SiJavascript className='text-textGreen' /> },
    { name: 'TypeScript', icon: <SiTypescript className='text-textGreen' /> },
    { name: 'React', icon: <FaReact className='text-textGreen' /> },
    { name: 'React Native', icon: <TbBrandReactNative className='text-textGreen' /> },
    { name: 'NodeJs', icon: <TbBrandNodejs className='text-textGreen' /> },
    { name: 'ExpressJs', icon: <SiExpress className='text-textGreen' /> },
    { name: 'NextJs (v12+)', icon: <TbBrandNextjs className='text-textGreen' /> },
    { name: 'MongoDB', icon: <BiLogoMongodb className='text-textGreen' /> },
    { name: 'MySQL', icon: <SiMysql className='text-textGreen' /> },
    { name: 'Prisma', icon: <SiPrisma className='text-textGreen' /> },
    { name: 'Sequelize', icon: <SiSequelize className='text-textGreen' /> },
    { name: 'Firebase', icon: <SiFirebase className='text-textGreen' /> },
    { name: 'AppWrite', icon: <SiAppwrite className='text-textGreen' /> },
    { name: 'AWS', icon: <FaAws className='text-textGreen' /> }
];

export interface AboutMe {
    introduction: string[];
    technologies: Technology[];
}

export const aboutMe: AboutMe = {
    introduction: [
        "I’m Yash, a dedicated Full Stack Developer with 3.5+ years of experience in the MERN stack. I specialize in designing and building high-performance web applications using technologies like React, Node.js, Express, Next.js, and MongoDB. My technical arsenal also includes expertise in Tailwind CSS, Rust, React Native, MySQL, Firebase, and Redux.",
        "I excel in dynamic and collaborative environments, leveraging my problem-solving skills to create innovative, user-centric solutions. From crafting responsive user interfaces to optimizing backend systems for efficiency, I am committed to delivering top-notch software that drives results and enhances user experiences."
    ],
    technologies
};
