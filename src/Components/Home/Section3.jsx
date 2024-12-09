import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderShape from './HeaderShape';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';
import { useQuery } from 'react-query';
import img1 from "../../assets/images/Categories.webp"
import { Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

export default function Section3() {
    const sliderRef = useRef(null);



    

    const getAllCategoryName = () => {
        return axios.get('https://dummyjson.com/products/category-list');

    };


    const { data, isLoading, isError } = useQuery({
        queryKey: ['CategoriesName'],
        queryFn: getAllCategoryName,

    });



    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#000000"
                    ariaLabel="oval-loading"
                />
            </div>
        );
    }

    if (isError) {
        return <NotFound />;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (

        <section className="Categories container mx-auto mb-24 border-b border-black border-opacity-[0.2]">
            <HeaderShape title={"Categories"} />
            <div className="Categories-header flex items-center justify-between mb-3 mx-1 md:mx-0">
                <div className="flex items-center gap-10 md:gap-20">
                    <h2 className="text-xl md:text-4xl text-black font-semibold">Browse By Category</h2>

                </div>
                <div>
                    {/* Custom Slider Controls */}
                    <div className="slider-controls flex items-center gap-1">
                        <div
                            className="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 shadow-sm hover:bg-gray-200 cursor-pointer"
                            onClick={() => sliderRef.current.slickPrev()}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                        <div
                            className="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 shadow-sm hover:bg-gray-200 cursor-pointer"
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Categories cursor-grab mb-20 mt-10">
                <Slider
                    ref={sliderRef}
                    {...settings}
                    className="slick-slider space-x-3"
                >
                    {data.data.map((cat, index) => (
                        <div
                            key={index}
                            className="!px-2 "
                        >
                            <div className=" text-center cursor-pointer group border border-black border-opacity-[0.3]">
                                <Link to={ `/Categories/${cat}`}>

                                    <img src={img1} alt="CategoryIamge" />
                                    <div className='group-hover:bg-[#DB4444]  transition-all group-hover:text-white py-5 px-5'>

                                        <h3>{cat}</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


        </section>
    )
}
