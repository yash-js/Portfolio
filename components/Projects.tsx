import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

const Projects = () => {
    return (
        <section id='projects'
        className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-8'
           
        // className='max-w-container mx-auto lgl:px-20 py-24'
        >
            <SectionTitle
                title='Some things I have built'
                titleNo='03'
            />
            {/* First Project */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="">
                    <a className='w-full xl:w-1/2 min-h-50 h-auto relative' href="taskscape.yashpurani.com">
                        <div className="min-h-56">
                            <Image
                            fill
                                alt='project_1'
                                className='h-full w-full object-contain'
                                src={'/assets/images/taskscape.png'}
                            />
                        </div>
                    </a>
                    <h1>Yash</h1>
                    </div>
                {/* <div className=""></div>
                <p className='p-5 text-center text-xl text-red-500'>
          This Section is Under Development!
        </p> */}
            </div>
        </section>
    )
}

export default Projects