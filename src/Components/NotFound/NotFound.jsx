import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
   <>
   <div className='h-screen flex items-center justify-center flex-col'>
    <h1 className="text-3xl md:text-8xl font-medium text-black mb-9 ">404 Not Found</h1>
    <p className=" text-[14px] md:text-[16px] text-black mb-14 ">Your visited page not found. You may go home page. </p>
    <Link to={"/Home"} className='rounded py-4 px-12 text-white bg-[#DB4444]'>Back to home page</Link >
    


   </div>
   
   </>
  )
}
