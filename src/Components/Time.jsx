import React, { useState, useEffect } from 'react';

function Time({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    function calculateTimeLeft(targetDate) {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            
            document.querySelector(".timer").classList.add("hidden");
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }


    function padTimeUnit(unit) {
        return unit < 10 ? `0${unit}` : unit;
    }


    return (
        <div className='flex timer items-center gap-2'>
            {/* Days section */}
            <div className='flex items-center gap-1'>
                <div className='flex flex-col items-center'>
                    <h3 className='font-normal text-black '>Days</h3>
                    <h4 className='text-black text-xl md:text-3xl font-bold'>{padTimeUnit(timeLeft.days)}</h4>
                </div>

                <span className="text-[#E07575] text-xl md:text-3xl">:</span>
            </div>



            {/* Hours section */}
            <div className='flex items-center gap-1'>
                <div className='flex flex-col items-center'>

                    <h3 className='font-normal text-black '>Hours</h3>
                    <h4 className='text-black  text-xl md:text-3xl font-bold'>{padTimeUnit(timeLeft.hours)}</h4>

                </div>
                <span className="text-[#E07575]  text-xl md:text-3xl">:</span>
            </div>



            {/* Minutes section */}
            <div className='flex items-center gap-1'>
                <div className='flex flex-col items-center'>
                    <h3 className='font-normal text-black '>Minutes</h3>
                    <h4 className='text-black  text-xl md:text-3xl font-bold'>{padTimeUnit(timeLeft.minutes)}</h4>
                </div>

                <span className="text-[#E07575]  text-xl md:text-3xl">:</span>
            </div>



            {/* Seconds section */}

            
            <div className='flex flex-col items-center'>
                <h3 className='font-normal text-black '>Seconds</h3>
                <h4 className='text-black  text-xl md:text-3xl font-bold'>{padTimeUnit(timeLeft.seconds)}</h4>
            </div>
        </div>
    );
}

export default Time;
