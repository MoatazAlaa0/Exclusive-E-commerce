import React from 'react'

export default function HeaderShape({title}) {
    return (
        <div className='flex items-center gap-3 mb-3 mx-1 md:mx-0'>
            <div className='w-5 rounded h-10 bg-[#DB4444]'>

            </div>
            <h1 className='text-[#DB4444] font-semibold '>{title}</h1>
        </div>
    )
}
