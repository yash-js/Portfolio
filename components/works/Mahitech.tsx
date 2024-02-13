import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'
const Mahitech = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='w-full'
        >
            <h3
                className='flex gap-1 font-medium text-xl font-titleFont'
            >
                Associate Software Developer <span className='tracking-wide text-textGreen'>@Mahitech LLC </span>
            </h3>
            <p className='text-sm mt-1 font-medium text-textDark'>
                Jun 2021 - Aug 2023
            </p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span>
                        <TiArrowForward />

                    </span>
                    Developed software applications using React, JavaScript, HTML, CSS and Material UI for a high-profile software
                    engineering firm.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span>
                        <TiArrowForward />

                    </span>
                    Performed unit testing and debugging of software applications.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span>
                        <TiArrowForward />

                    </span>
                    Utilized Agile methodology to develop software applications.
                </li>
            </ul>
        </motion.div>
    )
}

export default Mahitech