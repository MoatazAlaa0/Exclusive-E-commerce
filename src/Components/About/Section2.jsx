import React, { useState } from 'react'
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Section2() {
    AOS.init()
    const [Counteron, setCounteron] = useState(false)
    return (
        <section  className='my-40 container mx-auto '>

            <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center gap-5 text-black'>
                <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)} >
                    <div   className='mx-5 md:mx-0 border group hover:shadow-lg transition-all hover:text-white hover:bg-[#DB4444] border-black border-opacity-[0.3] flex items-center justify-center flex-col p-7  '>
                        <div className='  w-20 mb-4 h-20 flex items-center justify-center rounded-full transition-all group-hover:bg-[rgb(255,255,255,0.2)] bg-[rgb(46,45,47,0.3)] '>
                            <div className='flex items-center transition-all group-hover:bg-white group-hover:text-black justify-center rounded-full w-14 bg-black h-14 text-white'>
                                <i className="fa-solid fa-store text-3xl"></i>
                            </div>
                        </div>
                        <h1 className='text-3xl font-bold mb-1 '>
                            {Counteron && <CountUp start={0} end={10.5} duration={1} decimals={1} delay={0} />}
                            K


                        </h1>
                        <p>Sallers active our site</p>
                    </div>
                </ScrollTrigger>
             
                <div   className=' mx-5 md:mx-0 border group hover:shadow-lg transition-all hover:text-white hover:bg-[#DB4444] border-black border-opacity-[0.3] flex items-center justify-center flex-col p-7  '>
                    <div className='w-20 mb-4 h-20 flex items-center justify-center rounded-full transition-all   group-hover:bg-[rgb(255,255,255,0.2)] bg-[rgb(46,45,47,0.3)] '>
                        <div className='flex items-center justify-center rounded-full w-14  transition-all group-hover:bg-white group-hover:text-black bg-black h-14 text-white'>
                            <i className="fa-solid fa-dollar-sign text-3xl"></i>
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold mb-1 '>
                        {Counteron && <CountUp start={0} end={33} duration={1} delay={0} />}
                        K


                    </h1>
                    <p>Sallers active our site</p>
                </div>
            
              
                <div   className='mx-5 md:mx-0  hover:shadow-lg border group transition-all hover:text-white hover:bg-[#DB4444] border-black border-opacity-[0.3] flex items-center justify-center flex-col p-7  '>
                    <div className='w-20 mb-4 h-20 flex items-center justify-center rounded-full  transition-all  group-hover:bg-[rgb(255,255,255,0.2)]  bg-[rgb(46,45,47,0.3)] '>
                        <div className='flex items-center justify-center rounded-full w-14  transition-all group-hover:bg-white group-hover:text-black bg-black h-14 text-white'>
                            <i className="fa-solid fa-bag-shopping text-3xl"></i>
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold mb-1 '>
                        {Counteron && <CountUp start={0} end={45.5} duration={1} decimals={1} delay={0} />}
                        K


                    </h1>
                    <p>Sallers active our site</p>
                </div>
               
               
                <div   className='mx-5 md:mx-0 hover:shadow-lg  border group transition-all hover:text-white hover:bg-[#DB4444] border-black border-opacity-[0.3] flex items-center justify-center flex-col p-7  '>
                    <div className='w-20 mb-4 h-20 flex items-center justify-center rounded-full transition-all  group-hover:bg-[rgb(255,255,255,0.2)]  bg-[rgb(46,45,47,0.3)] '>
                        <div className='flex items-center justify-center rounded-full w-14  transition-all group-hover:bg-white group-hover:text-black bg-black h-14 text-white'>
                            <i className="fa-solid fa-sack-dollar text-3xl"></i>
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold mb-1 '>
                        {Counteron && <CountUp start={0} end={25} duration={1} delay={0} />}
                        K


                    </h1>
                    <p>Sallers active our site</p>
                </div>
               
            </div>
        </section>
    )
}
