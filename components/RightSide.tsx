import React from 'react'

const RightSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
            <a className='mb-5' href='mailto:contact@yashpurani.com'>
                <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>contact@yashpurani.com</p>
            </a>
            <span className="w-[2px] h-60 bg-textDark inline-flex"></span>
        </div>
    )
}

export default RightSide