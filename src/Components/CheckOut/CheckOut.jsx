import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../Redux/CartSlice';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
   const dispatch= useDispatch()
  const navigate= useNavigate()
    const { cartItems } = useSelector(store => store.CartSlice)
    const totalCart = cartItems.reduce((tot, pro) => tot + pro.price * pro.quantity, 0);

    return (
        <div>
            <div className="container mx-auto px-4 py-8 my-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="bg-white p-6 ">
                        <h2 className="text-4xl text-black font-medium mb-4">Billing Details</h2>
                        <form className="space-y-4">

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">First Name*</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Company Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Company Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Street Address*</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Street Address"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Apartment, floor, etc. (optional)</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Apartment, floor, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Town/City*</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Town/City"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Phone Number*</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Email Address*</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="save-info"
                                    className="w-4 h-4  border-gray-300 rounded  checked:bg-red-600"
                                />
                                <label for="save-info" className="ml-2 text-gray-700">Save this information for faster check-out next time</label>
                            </div>
                        </form>
                    </div>


                    <div className="bg-white p-6 md:mt-20  mt-0">
                        
                        <div className="space-y-4">


                            {cartItems.map(pro => (
                                <div key={pro.id} className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={pro.thumbnail}
                                        alt={pro.title}
                                        className="w-12 h-12 rounded-md"
                                    />
                                    <span className="text-black font-medium">{pro.title.split(" ").splice(0,2).join(" ")}</span>
                                </div>
                                <span className="text-black font-medium">${pro.price}</span>
                            </div>

                            ))}

                            <div className="border-t pt-4">
                                <div className="flex justify-between border-b border-opacity-[0.1] pb-3 border-black">
                                    <span className="text-black ">Subtotal:</span>
                                    <span className="text-black font-medium">${totalCart.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <span className="text-black">Shipping:</span>
                                    <span className="text-black font-medium">Free</span>
                                </div>
                            </div>


                            <div className="border-t pt-4">
                                <div className="flex justify-between text-black font-medium">
                                    <span>Total:</span>
                                    <span>${totalCart.toFixed(2)}</span>
                                </div>
                            </div>


                            <div className="flex flex-col space-y-2 pt-4">
                                <label className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0  md:items-center justify-start md:justify-between ">
                                    <div className='space-x-2'>

                                        <input
                                            type="radio"
                                            name="payment"
                                            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500 checked:bg-red-600 checked:border-red-600"
                                        />
                                        <span className="text-gray-700">Bank</span>
                                    </div>
                                    <div>
                                    <img width="348" height="26" src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/payment_1.png" className="attachment-full  size-full wp-image-515" alt="" srcSet="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/payment_1.png 348w, https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/payment_1-300x22.png 300w" sizes="(max-width: 348px) 100vw, 348px"/>

                                    </div>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="w-4 h-4 text-blue-600 border-gray-300 "
                                    />
                                    <span className="text-gray-700">Cash on delivery</span>
                                </label>
                            </div>


                            <div className="flex items-center md:mx-0 -mx-5 space-x-2 mt-4">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-[#DB4444] text-white px-4 py-2 rounded-lg ">
                                    ApplyCoupon
                                </button>
                            </div>

                            <button onClick={()=> {dispatch(removeCart()) 
                            navigate("/Home")
                            } } className=" bg-[#DB4444]  text-white font-medium py-4 px-12 rounded mt-4 ">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
