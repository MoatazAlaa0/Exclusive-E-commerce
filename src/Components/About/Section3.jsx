import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/man-1.png"
import img2 from "../../assets/images/woman.png"
import img3 from "../../assets/images/man-2.png"

function Section3() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="slider-container cursor-grab my-40 container mx-auto">
            <Slider {...settings} className="space-y-4">
                <div  data-aos="flip-left" className="p-4 text-black ">
                    <div className="flex items-center justify-center h-full bg-[#F5F5F5] p-6 rounded-md">
                        <img src={img1} className="w-48 h-72 object-contain" alt="" />
                    </div>
                    <div>

                        <h2 className="text-3xl font-medium mt-3 ">Tom Cruise</h2>
                        <p className="mt-1 mb-3">Founder & Chairman</p>
                        <div className="flex items-center  gap-3">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-down" className="p-4">
                    <div className="flex items-center justify-center h-full bg-[#F5F5F5] p-6 rounded-md">
                        <img src={img2} className="w-48 h-72 object-contain" alt="" />
                    </div>
                    <div>

                        <h2 className="text-3xl font-medium mt-3 ">Emma Watson</h2>
                        <p className="mt-1 mb-3">Managing Director</p>
                        <div className="flex items-center  gap-3">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" className="p-4">
                    <div className="flex items-center justify-center h-full bg-[#F5F5F5] p-6 rounded-md">
                        <img src={img3} className="w-48 h-72 object-contain" alt="" />
                    </div>
                    <div>

                        <h2 className="text-3xl font-medium mt-3 ">Will Smith</h2>
                        <p className="mt-1 mb-3">Product Designer</p>
                        <div className="flex items-center  gap-3">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>

            </Slider>
        </section>

    )
}

export default Section3;
