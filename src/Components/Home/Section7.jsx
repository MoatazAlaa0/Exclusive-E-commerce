import React from 'react'
import img1 from "../../assets/images/PlayStaction.png"
import img2 from "../../assets/images/Woman-Modal.jpg"
import img3 from "../../assets/images/Speaker.png"
import img4 from "../../assets/images/Perfume.png"
import HeaderShape from './HeaderShape'
export default function Section7() {
    return (
        <section>
            <div className="container mx-auto p-6">
            <HeaderShape title={"Featured"}/>
            <h2 className="text-xl md:text-4xl text-black font-semibold mb-10">New Arrival</h2>
                <div className="flex flex-wrap lg:flex-nowrap gap-6">
                    {/* PlayStation 5 Card */}
                    <div className="bg-black relative w-full lg:w-[49%] text-white rounded-lg flex flex-col p-6">
                        <img src={img1} alt="PlayStation 5" className="rounded-lg mb-4 translate-y-10" />
                        <div className="absolute bottom-10 left-6">
                            <h3 className="text-2xl font-semibold mb-2">PlayStation 5</h3>
                            <p className="text-[#FAFAFA] text-sm">Black and White version of the PS5</p>
                            <p className="text-[#FAFAFA] text-sm font-medium mb-2">coming out on sale.</p>
                            <button className="text-white font-medium border-b border-white">Shop Now</button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-[49%] flex flex-col gap-4">
                        {/* Women's Collections Card */}
                        <div className="relative bg-[#0c0c0c] text-white rounded-lg flex items-center overflow-hidden p-6">
                            <div className="absolute bottom-10 left-6 z-20">
                                <h3 className="text-lg lg:text-2xl font-semibold mb-2">Women’s Collections</h3>
                                <p className="text-[#FAFAFA] text-sm mb-4">Featured women collections that give you another vibe.</p>
                                <button className="text-white font-medium border-b border-white">Shop Now</button>
                            </div>
                            <img src={img2} alt="Women's Collections" className="w-2/3  translate-x-10 " />
                        </div>

                        {/* Bottom Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Speakers Card */}
                            <div className="bg-[#161515] relative text-white rounded-lg flex items-center justify-center p-4">
                                <img src={img3} alt="Speakers" className="w-[500px] rounded-lg" />
                                <div className='absolute bottom-5 left-5'>

                                    <h3 className="text-lg lg:text-2xl font-semibold mb-2">Speakers</h3>
                                    <p className="text-[#FAFAFA] text-sm mb-2">Amazon wireless speakers</p>
                                    <button className="text-white font-medium border-b border-white">Shop Now</button>
                                </div>
                            </div>
                            {/* Perfume Card */}
                            <div className="bg-[#161515] relative text-white rounded-lg flex items-center  justify-center p-4">
                                <img src={img4} alt="Perfume" className="w-full md:w-2/3 rounded-lg " />
                                <div className='absolute bottom-5 left-5'>

                                    <h3 className="text-lg lg:text-2xl font-semibold mb-2">Perfume</h3>
                                    <p className="text-[#FAFAFA] text-sm mb-2">GUCCI INTENSE OUD EDP</p>
                                    <button className="text-white font-medium border-b border-white">Shop Now</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    )
}
