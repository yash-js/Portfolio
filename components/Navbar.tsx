import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const Navbar = () => {
    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[8vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >

                    <div className="text-center flex items-center justify-center  p-5 text-2xl
font-titleFont hover:text-3x relative">
                        <div className="absolute hover:animate-spin duration-75 cursor-pointer border border-textGreen hover:border-green-200 w-10 h-10 rounded-md "></div>
                        <span className=' l'>
                            Y
                        </span>
                    </div>
                </motion.div>

                <div className='hidden mdl:inline-flex items-center gap-7 '>
                    <ul className='flex text-[15px] gap-7'>
                        <Link className=' gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href={'#home'}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                Home
                            </motion.li>
                        </Link>
                        <Link className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href={'#about'}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.1 }}
                            >
                                <span className='text-textGreen'>01. </span>
                                About
                            </motion.li>
                        </Link>
                        <Link className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href={'#experience'}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.2 }}
                            >
                                <span className='text-textGreen'>02. </span>
                                Experience
                            </motion.li>
                        </Link>
                        <Link className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href={'#project'}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.3 }}
                            >
                                <span className='text-textGreen'>03. </span>
                                Project
                            </motion.li>
                        </Link>
                        <Link className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href={'#contact'}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.4 }}
                            >
                                <span className='text-textGreen'>04. </span>
                                Contact
                            </motion.li>
                        </Link>
                    </ul>
                    <a href='/assets/Yash_Resume.pdf' target='_blank'>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.5 }}
                            className='px-4 py-2 rounded-md text-textGreen text-[15px] border border-textGreen hover:bg-hoverColor duration-300'
                        >
                            Resume
                        </motion.button>
                    </a>

                </div>

                <div className="h-5 w-6 flex flex-col justify-between items-center mdl:hidden text-4xl cursor-pointer text-textGreen overflow-hidden group">
                    <span
                        className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'
                    ></span>
                    <span
                        className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'
                    ></span>
                    <span
                        className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all ease-in-out duration-300'
                    ></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar