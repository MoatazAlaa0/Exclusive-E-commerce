import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oval } from "react-loader-spinner";

function CategorySlider({cat}) {




    
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="slider-container cursor-grab ">
      <Slider {...settings}>
       
          { cat ?  cat.map(cate => (
            <div key={cate.id} className="slider-item mb-5 p-3">
                <img src={cate.thumbnail} alt={cate.title} />

                <h2 className=" bg-slate-300 shadow-lg rounded-lg px-3 py-3 font-medium text-cyan-950">{cate.title}</h2>

            </div>
          ))  : <div className='h-screen mt-40 flex items-center justify-center'>
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#000000"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div> }
       
   
      </Slider>
    </div>
  );
}

export default CategorySlider;
