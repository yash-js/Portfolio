import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'
const Proses = () => {
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
                Full Stack Developer <span className='tracking-wide text-textGreen'> @ Proses Web Technologies</span>
            </h3>
            <p className='text-sm mt-1 font-medium text-textDark'>
                Sep 2023 - Present
            </p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span>
                        <TiArrowForward />

                    </span>
                    Leveraging Next.js, Node.js, and Express.js to build a robust and responsive IoT-Based Home Security System, ensuring seamless user experiences and real-time data processing.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span>
                        <TiArrowForward />
                    </span>
                    Expertly managing database operations with MySQL and Sequelize, enhancing system reliability and data integrity.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span>
                        <TiArrowForward />

                    </span>
                    Implementing WebSocket and TCP Socket technologies for secure and efficient communication, enabling remote monitoring and control of home security devices.
                </li>
            </ul>
        </motion.div>
    )
}

export default Proses