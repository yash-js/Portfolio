import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

const Projects = () => {
    return (
        <section id='projects'
            className='max-w-container mx-auto lgl:px-20 py-24'
        >
            <SectionTitle
                title='Some things I have built'
                titleNo='03'
            />
            {/* First Project */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="">
                    <a className='w-full xl:w-1/2 h-auto relative' href="taskscape.yashpurani.com">
                        <div className="">
                            <Image
                                fill
                                alt='project_1'
                                className='h-full w-full object-contain'
                                src={'/assets/images/taskscape.png'}
                            />
                        </div>
                    </a>
                </div>
                <div className=""></div>
            </div>
        </section>
    )
}

export default Projects