import React, { useState, useEffect } from "react";
import Img1 from "../../assets/images/JbL.png"
export default function Section5() {

    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-12-20T23:59:59');
        const currentTime = new Date();
        const difference = targetDate - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-black text-white  container mx-auto mb-24 mt-24">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between md:pt-0 pt-10  lg:space-y-0">
                {/* Text Section */}
                <div className="lg:w-1/2 text-center  lg:text-left mb-10 md:mb-0 md:ps-14 md: space-y-10">
                    <h4 className="text-[#00FF66] font-bold ">Categories</h4>
                    <h1 className=" text-xl md:text-5xl font-semibold  leading-tight">
                        Enhance Your Music Experience
                    </h1>
                    {/* Countdown Timer */}
                    <div className="flex justify-center lg:justify-start  space-x-4 mt-4">
                        {/* Days */}
                        <div className="text-center w-16 h-16 rounded-full flex items-center justify-center bg-white flex-col text-black" >
                            <span className="block  font-semibold">{timeLeft.days}</span>
                            <span className="text-sm  ">Days</span>
                        </div>
                        {/* Hours */}
                        <div className="text-center w-16 h-16 rounded-full flex items-center justify-center bg-white flex-col text-black" >
                            <span className="block  font-semibold">{timeLeft.hours}</span>
                            <span className="text-sm  ">Hours</span>
                        </div>
                        {/* Minutes */}
                        <div className="text-center w-16 h-16 rounded-full flex items-center justify-center bg-white flex-col text-black" >
                            <span className="block  font-semibold">{timeLeft.minutes}</span>
                            <span className="text-sm  ">Minutes</span>
                        </div>
                        {/* Seconds */}
                        <div className="text-center w-16 h-16 rounded-full flex items-center justify-center bg-white flex-col text-black" >
                            <span className="block  font-semibold">{timeLeft.seconds}</span>
                            <span className="text-sm  ">Seconds</span>
                        </div>
                    </div>
                    {/* Buy Now Button */}
                    <button className="mt-11   rounded py-4 px-12 bg-[#00FF66] text-white">Buy Now!</button>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center py-5">
                   
                    <div className="flex items-center justify-center">
                        
                        <img
                            src={Img1}
                            alt="JBL Speaker"
                            className="w-[600px] h-[600px]   object-contain rounded-full  shadow-inner  shadow-[#D9D9D9] "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
