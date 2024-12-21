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
    buttonLinkUrl?:string
}

export const bannerData: BannerData = {
    welcomeMessage: "Welcome to my digital space.",
    introduction: {
        main: "I'm Yash,",
        sub: "Building Solutions for the Modern Web."
    },
    description: "Full Stack Developer with 3.5+ years of experience delivering robust and efficient web applications. Proficient in React, Node.js, Next.js, and creating seamless user experiences backed by optimized backend architectures.",
    linkText: "Discover my journey",
    linkUrl: "#about",
    buttonText: "Explore my projects",
    buttonLinkUrl: "#projects"
};
