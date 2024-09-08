import React from 'react';
import SectionTitle from './SectionTitle';
import { aboutMe, AboutMe } from '../data/about';

const About: React.FC = () => {
    const { introduction, technologies }: AboutMe = aboutMe;

    return (
        <section id='about'
            className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
        >
            <SectionTitle
                title="About me"
                titleNo='01'
            />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    {introduction.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <p>Here are a few technologies I have been working with recently:</p>
                    <ul
                        className='max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6'
                    >
                        {technologies.map((tech, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <span>{tech.icon}</span>
                                {tech.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=""></div>
            </div>
        </section>
    )
}

export default About;
