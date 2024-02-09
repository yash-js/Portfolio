import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center">

                <div className="border border-textGreen w-10 h-10 text-center flex items-center justify-center text-2xl rounded-md p-5 ont-titleFont">
                    Y
                </div>
          
            </div>
        </div>
    )
}

export default Navbar