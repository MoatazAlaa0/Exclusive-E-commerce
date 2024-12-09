import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, deleteProduct, incrementQuantity, removeCart } from '../../Redux/CartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartItems } = useSelector(store => store.CartSlice)
    const dispatch = useDispatch()

    const totalCart = cartItems.reduce((tot, pro) => tot + pro.price * pro.quantity, 0);


    if (cartItems.length == 0) {
        return (<div className="flex flex-col mt-36 mb-24 items-center justify-center h-64 p-6">

            <i className="fa-solid fa-cart-shopping cursor-pointer text-7xl text-gray-700 mb-1"></i>

            <h2 className="text-xl font-semibold text-gray-700">Your Cart is Empty</h2>
            <p className="text-gray-500 mt-2 text-center">
                Looks like you haven't added anything to your cart yet.
            </p>

            <Link to={"/Home"}>

                <button

                    className="mt-6 px-6 py-2 cursor-pointer bg-[#DB4444] text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
                >
                    Return to Shop
                </button>
            </Link>
        </div >
        )
    }

    return (
        <div className='container mx-auto mt-28'>
            <div className="bg-white rounded-lg p-6 w-full">
                {/* Product Table */}
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b shadow-sm ">
                            <th className="py-3 font-semibold px-3">Product</th>
                            <th className="py-3 font-semibold">Price</th>
                            <th className="py-3 font-semibold">Quantity</th>
                            <th className="py-3 font-semibold">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cartItems.map(pro => (
                            <tr key={pro.id} className="border-b shadow-sm">
                                <td className="py-4 flex items-center space-x-4 px-3 relative">


                                    <img src={pro.thumbnail} alt={pro.title} className="w-16 h-16 rounded" />
                                    <span className="font-medium">{pro.title.split(" ").splice(0, 2).join(" ")}</span>

                                    <div onClick={() => dispatch(deleteProduct(pro))} className=' absolute w-5 h-5 cursor-pointer bg-[#DB4444]  rounded-full top-2 -left-3 flex items-center justify-center text-center text-white'>
                                        <i className="fa-solid fa-xmark text-xs"></i>

                                    </div>
                                </td>
                                <td className="py-4 ">${pro.price}</td>
                                <td className="py-4">
                                    <div className="relative w-16 h-8">

                                        <input

                                            min="1"
                                            value={pro.quantity}
                                            className="w-full pe-5 h-full text-center border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gray-300"
                                        />

                                        <button
                                            className="absolute right-1 -top-1 w-6 h-4 text-center text-gray-500 hover:text-gray-700"
                                            onClick={() => dispatch(incrementQuantity(pro))}
                                        >
                                            <i className="fa-solid fa-angle-up text-[15px]"></i>
                                        </button>

                                        <button
                                            className="absolute right-1 bottom-2 w-6 h-4 text-center text-gray-500 hover:text-gray-700"
                                            onClick={() => dispatch(decrementQuantity(pro))}
                                        >

                                            <i className="fa-solid fa-angle-down text-[15px]"></i>
                                        </button>
                                    </div>
                                </td>



                                <td className="py-4">${(pro.price * pro.quantity).toFixed(2)}</td>

                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className='flex  items-center justify-between mt-5'>
                    <Link to={"/Home"}  >
                        <button className='md:py-4 py-2 px-6 md:px-12 border border-black border-opacity-[0.3]  font-medium'>Return To Shop</button>
                    </Link>
                    <button onClick={() => dispatch(removeCart())} className='md:py-4 py-2 px-6 md:px-12 border border-black border-opacity-[0.3] font-medium'>Remove Cart</button>

                </div>
                <div className="mt-6 flex flex-col md:flex-row items-start justify-between gap-4">
                    <div className="flex items-center gap-3 w-[90%] -mx-4 md:mx-0">
                        <input type="text" placeholder="Coupon Code" className="border border-black border-opacity-[0.6] rounded px-4 py-2 w-64" />
                        <button className="bg-[#DB4444] text-white px-6 py-2  md:px-12 md:py-2 rounded hover:bg-red-600">ApplyCoupon</button>
                    </div>
                    <div className='border border-black w-[95%] md:w-96 text-black border-opacity-[0.6]  p-5'>
                        <h2 className='text-xl font-medium mb-5'>Cart Total</h2>
                        <div className='flex items-center justify-between border-b pb-3 border-black border-opacity-[0.6]'>
                            <p>Subtotal:</p>
                            <span>${totalCart.toFixed(2)}</span>
                        </div>
                        <div className='flex items-center mt-3 justify-between border-b pb-3 border-black border-opacity-[0.6]'>
                            <p>Shipping:</p>
                            <span>Free</span>
                        </div>
                        <div className='flex items-center my-3 justify-between pb-3'>
                            <p>Total:</p>
                            <span>${totalCart.toFixed(2)}</span>
                        </div>
                        <div className=' flex items-center justify-center'>
                            <Link to={"/CheckOut"}>
                            
                            <button className='bg-[#DB4444]  text-white rounded py-4 px-12 font-medium'>Procees to checkout</button>
                            </Link>

                        </div>
                    </div>

                </div>


            </div>


        </div>


    )
}
