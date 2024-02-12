import { FaAws, FaCss3, FaReact } from 'react-icons/fa'
import { PiFileHtmlFill } from 'react-icons/pi'
import { SiAppwrite, SiExpress, SiFirebase, SiJavascript, SiMysql, SiPrisma, SiSequelize, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs, TbBrandNodejs, TbBrandReactNative } from 'react-icons/tb'
import SectionTitle from './SectionTitle'
import { BiLogoMongodb } from 'react-icons/bi'

const About = () => {
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fuga deleniti! Quo vel est eum dicta. Est sint ea rerum, vitae delectus quae voluptates impedit, ipsum explicabo in dolorem nesciunt quidem. Dolorem natus officiis eius pariatur saepe odio commodi, veritatis dignissimos nostrum doloremque, facere tenetur? Nemo, repellat soluta harum laudantium quas corrupti, qui blanditiis aut rerum ab dolorum necessitatibus vel itaque dignissimos quae deserunt dolores impedit explicabo sunt neque dolorem reprehenderit ad obcaecati tempore. Illum repellendus aperiam quae possimus dolorem ratione ab reprehenderit incidunt animi placeat, assumenda molestias, asperiores eligendi molestiae quidem odio aliquid. Reiciendis est repudiandae temporibus totam culpa.
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span className='text-textGreen'>
                        Sequi quidem expedita</span> enim iusto. Culpa veritatis alias doloremque rem nam sed distinctio cumque iste animi illo tempore, corrupti eos. Quia, odio!
                    </p>
                    <p>Here are few technologies I have been working with recently:</p>
                    <ul
                        className='max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6'
                    >
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <PiFileHtmlFill />
                            </span>
                            HTML
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <FaCss3 />
                            </span>
                            CSS
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <SiJavascript />
                            </span>
                            JavaScript
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <SiTypescript />
                            </span>
                            TypeScript
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <FaReact />
                            </span>
                            React
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <TbBrandReactNative />
                            </span>
                            React Native
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <TbBrandNodejs />
                            </span>
                            NodeJs
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <SiExpress />
                            </span>
                            ExpressJs
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <TbBrandNextjs />
                            </span>
                            NextJs (v12+)
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <BiLogoMongodb />
                            </span>
                            MongoDB
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <SiMysql />
                            </span>
                            MySQL
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <SiPrisma />
                            </span>
                            Prisma
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <SiSequelize />
                            </span>
                            Sequelize
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <SiFirebase />
                            </span>
                            Firebase
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <SiAppwrite />
                            </span>
                            AppWrite
                        </li>
                        <li className=' flex items-center gap-2'>
                            <span className='text-textGreen'>
                                <FaAws />
                            </span>
                            AWS
                        </li>
                    </ul>
                </div>
                <div className=""></div>
            </div>
        </section>
    )
}

export default About