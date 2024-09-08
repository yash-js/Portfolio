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
        "I’m Yash, a passionate Full Stack Developer specializing in the MERN stack. With more than 3 years of experience, I’ve honed my skills in crafting robust and scalable web applications. My expertise includes React, Node.js, Express, IoT, Next.js, Tailwind CSS, Rust, React Native, MongoDB, MySQL, Firebase, Git, JIRA, Cypress, Sequelize, Material UI, Redmine, HTML, CSS, Redis, and Redux.",
        "I thrive in dynamic environments, where I can leverage my problem-solving skills to create innovative solutions. Whether it’s building responsive user interfaces or optimizing backend performance, I’m dedicated to delivering high-quality software that exceeds expectations."
    ],
    technologies
};
