import React from 'react'
import imag1 from "../../assets/images/MainImage.jfif"
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Section1() {
  AOS.init()
  return (
    <section className='my-40 flex-col md:flex-row gap-10 flex items-center justify-between container ml-auto '>

    <div data-aos="fade-up"   data-aos-duration="3500" className='md:w-[45%]  text-black w-full'>
        <div className='mx-3 md:mx-0'>

      <h1 className='text-6xl font-semibold mb-7'>Our Story</h1>
      <p className='mb-5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
      <p >Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="3500"   className= '  w-full md:w-[45%] '>
        <div className='mx-3 md:mx-0'>
      <img src={imag1} className='w-full' alt="Main-image" />

        </div>
    </div>
  </section>
  )
}
