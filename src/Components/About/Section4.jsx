import React from 'react'

export default function Section4() {
    
    return (
        <section  data-aos="fade-down" className='container mx-auto my-40'>
           
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="bg-black p-4 rounded-full flex items-center justify-center w-16 h-16 border-[8px] border-gray-300">
                            <i className="fas fa-shipping-fast text-white text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-semibold">FREE AND FAST DELIVERY</h3>
                        <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
                    </div>


                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="bg-black p-4 rounded-full flex items-center justify-center w-16 h-16 border-[8px] border-gray-300">
                            <i className="fas fa-headset text-white text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-semibold">24/7 CUSTOMER SERVICE</h3>
                        <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
                    </div>


                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="bg-black p-4 rounded-full flex items-center justify-center w-16 h-16 border-[8px] border-gray-300">
                            <i className="fas fa-shield-alt text-white text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-semibold">MONEY BACK GUARANTEE</h3>
                        <p className="text-sm text-gray-600">We return money within 30 days</p>
                    </div>
                </div>
          

        </section>
    )
}
