import LeftSide from '@/components/LeftSide'
import Navbar from '@/components/Navbar'
import RightSide from '@/components/RightSide'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yash Purani</title>
        <meta name="description" content="Yash's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll ">
        <Navbar />
        <p className='p-5 text-center text-xl text-red-500'>
          This is prototype. Portfolio Under Development!
        </p>
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </motion.div>

          <div className="h-[88vh] w-full mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            <Projects />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  )
}
