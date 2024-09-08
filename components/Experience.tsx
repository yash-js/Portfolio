import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import ExperienceDetails from './ExperienceDetails';
import { experiences, ExperienceData } from '../data/experience';

const Experience = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    // Function to parse the start date into a comparable format
    const parseDate = (dateString: string) => {
        const [month, year] = dateString.split(' ');
        return new Date(`${month} 1, ${year}`).getTime();
    };

    // Sort experiences by start date in descending order
    const sortedExperiences = [...experiences].sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));

    const handleItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <section
            className='max-w-containerXs mx-auto py-10 lgl:py-24 px-4'
            id='experience'
        >
            <SectionTitle
                title='Where I have Worked'
                titleNo='02'
            />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-40 flex flex-col'>
                    {sortedExperiences.map((experience, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(index)}
                            className={`border-l-2 ${selectedIndex === index ? 'border-l-textGreen' : 'border-l-hoverColor'} bg-transparent text-textDark hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                        >
                            {experience.company}
                        </li>
                    ))}
                </ul>
                <div className="flex-1">
                    <ExperienceDetails
                        {...sortedExperiences[selectedIndex]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
