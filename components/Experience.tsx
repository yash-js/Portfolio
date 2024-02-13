import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Mahitech from './works/Mahitech'
import Proses from './works/Proses'

const Experience = () => {
    const [mahitech, setMahitech] = useState(false)
    const [proses, setProses] = useState(true)
    return (
        <section
            className='max-w-containerXs mx-auto py-10 lgl:py-24 px-4'
            id='experience'>
            <SectionTitle
                title='Where I have Worked'
                titleNo='02'
            />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-40 flex flex-col'>

                    <li onClick={
                        () => {
                            setMahitech(false)
                            setProses(true)
                        }
                    } className={`border-l-2 ${proses ? ' border-l-textGreen' : 'border-l-hoverColor'} bg-transparent text-textDark hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Proses Web Technologies
                    </li>
                    <li onClick={
                        () => {
                            setMahitech(true)
                            setProses(false)
                        }
                    } className={`border-l-2 ${mahitech ? ' border-l-textGreen' : 'border-l-hoverColor'} bg-transparent text-textDark hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        MahiTech LLC
                    </li>
                </ul>
                {mahitech && <Mahitech />}
                {proses && <Proses />}
            </div>
        </section>
    )
}

export default Experience