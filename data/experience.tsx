// data/experiences.ts
export interface ExperienceData {
    role: string;
    company: string;
    companyUrl?: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export const experiences: ExperienceData[] = [
    {
        role: "Associate Software Developer",
        company: "Mahitech LLC",
        companyUrl: "https://www.mahitech.com",
        startDate: "Jun 2021",
        endDate: "Aug 2023",
        responsibilities: [
            "Developed software applications using React, JavaScript, HTML, CSS, and Material UI for a high-profile software engineering firm.",
            "Performed unit testing and debugging of software applications.",
            "Utilized Agile methodology to develop software applications."
        ]
    },
    {
        role: "Software Developer",
        company: "Proses Web Technologies",
        companyUrl: "https://www.prosesweb.com",
        startDate: "Sept 2023",
        endDate: "Feb  2024",
        responsibilities: [
            "Developed eCommerce, food delivery, and security system controlling apps using React Native, Flutter, and Ionic.",
            "Led a team of developers and coordinated with cross-functional teams to deliver high-quality software.",
            "Improved application performance and user experience through regular updates and optimizations."
        ]
    },
    
    {
        role: "Software Development Engineer",
        company: "Zentosys Solutions Pvt Ltd",
        companyUrl: "https://www.zentosys.ai",
        startDate: "May 2024",
        endDate: "Present",
        responsibilities: [
            "Developing and maintaining the on demand laundry app for the Saudi Arabian market, ensuring high performance and responsiveness.",
            "Implemented efficient features that improved user experience and reduced load times, leading to a more responsive application",
            "Collaborated with cross-functional teams to design, develop, and deploy new functionalities, driving higher user engagement and satisfaction."
        ]
    },
    
];
