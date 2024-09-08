// data/banner.ts
import { ReactNode } from 'react';

export interface BannerData {
    welcomeMessage: string;
    introduction: {
        main: string;
        sub: string;
    };
    description: string;
    linkText: string;
    linkUrl: string;
    buttonText: string;
}

export const bannerData: BannerData = {
    welcomeMessage: "Welcome to my corner of the web.",
    introduction: {
        main: "I'm Yash,",
        sub: "Crafting Experiences for the Digital World."
    },
    description: "Experienced Software Developer with more than 3 years of expertise in developing high-performance applications. Skilled in full-stack development, databases, and automating testing.",
    linkText: "Learn more",
    linkUrl: "#about", // You can update this with the actual URL
    buttonText: "Check out my projects"
};
