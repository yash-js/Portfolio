import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <section
            className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col  gap-4 lgl:gap-8 mdl:px-10 xl:px-8'
            id='home'>
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='text-lg font-titleFont tracking-wide text-textGreen'>
                Welcome to my corner of the web.
            </motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
            >
                I&apos;m Yash,
                <span
                    className='text-textDark mt-2 lgl:mt-4'
                > Crafting Experiences for the Digital World.</span>

            </motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className='text-base md:max-w-[650px] text-textDark font-medium'
            >
                Experienced Software Developer with 2.5+ years of expertise in developing high-performance applications. Skilled in full-stack development, databases, and automating testing.{" "}
                <a href="">
                    <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                        Learn more
                        <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
                    </span>

                </a>
            </motion.p>
            <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 capitalize'
            >
                Check out my projects
            </motion.button>
        </section>
    )
}

export default Banner