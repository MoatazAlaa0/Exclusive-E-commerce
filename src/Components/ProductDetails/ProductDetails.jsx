import axios from 'axios';
import React from 'react'
import { Oval } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound';
import useAllCategories from '../../CustomHooks/useAllCategories';
import HeaderShape from '../Home/HeaderShape';
import toast from 'react-hot-toast';
import { addProductToCart, decrementQuantity, incrementQuantity } from '../../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartSlice from './../../Redux/CartSlice';
import { addProduct } from '../../Redux/wishlistSlice';

export default function ProductDetails() {
    const { wishlist } = useSelector(store => store.wishlistReducer);
    const { id, cate } = useParams()
    const { data: CategoryData } = useAllCategories(cate)
    const dispatch = useDispatch()
    const { cartItems } = useSelector(store => store.CartSlice)

    function StarRating({ rating, totalStars = 5 }) {
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            if (rating >= i) {
                stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                );
            } else if (rating >= i - 0.5) {
                stars.push(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <defs>
                            <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="50%" stopColor="#FFD700" />
                                <stop offset="50%" stopColor="#D3D3D3" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#halfFill)" stroke="none" d="M12 2l3.09 6.26 6.91 1-5 4.87L17.18 22 12 18.77 6.82 22 8 14.13l-5-4.87 6.91-1L12 2z" />
                    </svg>

                );
            } else {
                stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#D3D3D3" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zM12 15.4l-3.76 2.27L9.5 13.5l-3.28-2.85 4.28-.36L12 6.1l1.5 4.19 4.28.36-3.28 2.85.76 3.97L12 15.4z" />
                    </svg>
                );
            }
        }

        return <div className="flex gap-1">{stars}</div>;
    }


    function getProductDetails() {
        return axios.get(`https://dummyjson.com/products/${id}`);
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['SingleProductDetails', id],
        queryFn: getProductDetails

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
  

    const handleWishlistToggle = (product) => {
        const isInWishlist = wishlist.some((item) => item.id === product.id);
        dispatch(addProduct(product));
        toast.success(isInWishlist ? "Product removed from wishlist 💔" : "Product added to wishlist ❤");
    };
    const res = data.data

    return (
        <section className='container mx-auto'>

            <div className="flex flex-col mt-40 mb-24 lg:flex-row items-center lg:items-start bg-white   max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:items-start lg:w-2/3">
                    <div className="flex gap-2 lg:flex-col md:order-1 order-2 mx-3">

                        {res.images.map((img, index) => (
                            <div key={index}>

                                <img src={img} alt="Thumbnail 1" className="w-32 h-32 lg:w-32 lg:h-32 rounded-lg border" />
                            </div>

                        ))
                        }


                    </div>
                    <div className="w-[98%] md:w-[74%] mx-3 order-1 md:order-2 lg:h-auto overflow-hidden rounded-lg border">
                        <img src={res.thumbnail} alt="Main Gamepad" className="w-full object-contain" />
                    </div>
                </div>
                <div className="lg:w-1/3 md:pl-0 pl-3 mt-3  md:mt-0">
                    <h2 className="text-2xl lg:text-2xl font-semibold text-black">{res.title.split(" ").splice(0, 5).join(" ")}</h2>
                    <div className="flex items-center gap-2 mt-2">
                        <StarRating rating={res.rating} />
                        <span className="text-sm text-gray-600">({(res.reviews).length} Reviews)</span>
                        <span className="text-[#00FF66] border-s border-black border-opacity-[0.5] ps-3 text-sm font-semibold ml-4">{res.availabilityStatus}</span>
                    </div>
                    <p className="text-xl lg:text-2xl   text-black mt-4">${res.price}</p>
                    <p className="text-sm lg:text-base text-black border-b-2 border-black border-opacity-[0.3] pb-5 mt-[10px]">
                        {res.description.split(" ").splice(0, 25).join(" ")}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <h3 className=" text-black text-xl">Colours:</h3>
                        <div className="flex items-center gap-2  ">
                            <div className="w-4 h-4 rounded-full cursor-pointer bg-[#A0BCE0] border-2 border-gray-300" />
                            <div className="w-4 h-4 rounded-full cursor-pointer bg-red-500 border-2 border-gray-300" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center  gap-3">
                        <h3 className=" text-black text-xl">Size:</h3>
                        <div className="flex items-center gap-2 ">
                            <button className="w-8 h-8 rounded-lg border  hover:text-white bg-gray-100 hover:bg-[#DB4444] transition-all text-xs font-medium">XS</button>
                            <button className="w-8 h-8 rounded-lg border hover:text-white bg-gray-100 hover:bg-[#DB4444] transition-all text-xs font-medium">S</button>
                            <button className="w-8 h-8 rounded-lg border hover:text-white bg-gray-100 hover:bg-[#DB4444] transition-all text-xs font-medium">M</button>
                            <button className="w-8 h-8 rounded-lg border hover:text-white bg-gray-100 hover:bg-[#DB4444] transition-all text-xs font-medium">L</button>
                            <button className="w-8 h-8 rounded-lg border hover:text-white bg-gray-100 hover:bg-[#DB4444] transition-all text-xs font-medium">XL</button>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                            <button disabled={!cartItems.find(pro => pro.id === res.id) || cartItems.find(pro => pro.id === res.id)?.quantity <= 1} onClick={() => dispatch(decrementQuantity({ id: res.id }))} className="w-10 h-10 bg-gray-200 text-black hover:bg-[#DB4444] hover:text-white transition-all text-xl ">-</button>
                            <span className="w-10 h-10 flex items-center justify-center border-l border-r text-xl font-medium">  {cartItems.find(pro => pro.id === res.id)?.quantity || 0}</span>
                            <button onClick={() => dispatch(incrementQuantity({ id: res.id }))} className="w-10 h-10 bg-gray-200 text-black hover:bg-[#DB4444] hover:text-white transition-all text-xl">+</button>
                        </div>
                        <button onClick={() => {
                            dispatch(addProductToCart(res))
                            toast.success(
                                `Product added to cart successfully! 👏`
                            )

                        }} className="px-12 py-[10px] bg-[#DB4444] text-white font-medium rounded-lg hover:bg-red-700">Buy Now</button>
                        <div
                            onClick={() => handleWishlistToggle(res)}
                            className={`w-10 h-10 rounded border border-black border-opacity-[0.5] hover:border-0 cursor-pointer  flex items-center justify-center transition-all ${wishlist.some(item => item.id === res.id)
                                ? "bg-white  hover:border border-black border-opacity-[0.3] text-[#DB4444]"
                                : "bg-white text-black hover:bg-[#DB4444] hover:text-white"
                                }`}
                        >
                            <i className={`fa-${wishlist.some(item => item.id === res.id) ? "solid" : "regular"} fa-heart`}></i>
                        </div>

                    </div>
                    <div className="mt-6">
                        <div className="flex flex-col  text-black rounded border border-black border-opacity-[0.3] ">
                            <div className=' border-b p-5 border-black border-opacity-[0.3] flex gap-3 items-center '>
                                <div>
                                    <i className="fa-solid fa-truck text-xl"></i>
                                </div>
                                <div>

                                    <p className="font-medium">Free Delivery</p>
                                    <p className="text-xs font-medium border-b border-opacity-[0.5] border-black">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className='p-5 flex gap-3 items-center '>
                                <div className=''>
                                    <i className="fa-solid fa-rotate-left fa-flip-both text-xl"></i>
                                </div>
                                <div>
                                    <p className="font-medium">Return Delivery</p>

                                    <p className="text-xs font-medium">{res.returnPolicy}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=''>
                <HeaderShape title={"Related Item"} />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-16 mb-24">
                    {CategoryData?.data?.products.slice(0, 4).map((pro) => (
                        <div key={pro.id} className="product-card px-3 group ">
                            <div className="product-image relative group-hover:shadow-lg rounded-t-xl transition-all overflow-hidden">
                                <img src={pro.thumbnail} className="w-full rounded-b" alt={pro.title} />
                                <div onClick={() => {
                                    dispatch(addProductToCart(pro))
                                    toast.success(
                                        `Product added to cart successfully! 👏`
                                    )

                                }} className="absolute cursor-pointer bg-black h-10 font-medium text-white flex items-center justify-center group-hover:translate-y-0 transition-all translate-y-full rounded-b bottom-0 w-full">
                                    Add To Cart
                                </div>
                                {pro.discountPercentage && Math.round(pro.discountPercentage) !== 0 && (
                                    <div className="absolute top-3 left-3 text-white bg-[#DB4444] rounded px-3 py-1">
                                        - {Math.round(pro.discountPercentage)}%
                                    </div>
                                )}
                                <div className="flex items-center  justify-center flex-col absolute top-3 gap-1 right-3 transition-all group-hover:opacity-100 opacity-0">
                                    <div
                                        onClick={() => handleWishlistToggle(pro)}
                                        className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center transition-all ${wishlist.some(item => item.id === pro.id)
                                            ? "bg-white border border-black border-opacity-[0.3] text-[#DB4444]"
                                            : "bg-white text-black hover:bg-[#DB4444] hover:text-white"
                                            }`}
                                    >
                                        <i className={`fa-${wishlist.some(item => item.id === pro.id) ? "solid" : "regular"} fa-heart`}></i>
                                    </div>


                                    <Link to={`/ProductDetails/${pro.id}/${pro.category}`} className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center hover:bg-[#DB4444] hover:text-white text-black bg-white">
                                        <i className="fa-regular fa-eye"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="product-details bg-orange-300 rounded-b-xl p-3 group-hover:shadow-lg transition-all ">
                                <h3 className="font-medium">{pro.title.split("").splice(0, 20).join("")}</h3>
                                <div className="product-price font-medium space-x-2">
                                    <span className="text-red-700">
                                        ${(pro.price - (pro.price * pro.discountPercentage) / 100).toFixed(2)}
                                    </span>
                                    <span className="line-through text-gray-700">${pro.price}</span>
                                </div>
                                <div className="flex items-center space-x-1 ">
                                    <i className="fa-solid fa-star text-yellow-500"></i>
                                    <span className="font-medium">{`(${pro.rating})`}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
}
