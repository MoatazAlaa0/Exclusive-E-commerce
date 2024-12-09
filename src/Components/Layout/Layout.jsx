import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'



export default function Layout() {
    const [isVisible, setIsVisible] = useState(false);

 
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <>
            {isVisible && (
                <div
                    
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' ,})}
                    className="fixed cursor-pointer bottom-5 right-5 z-50 flex items-center justify-center bg-[#d3cfcf] w-12 h-12 rounded-full text-black shadow-lg"
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            )}


            <Navbar />

            <Outlet />
            <Footer />

        </>


    )
}
