import React, { useRef, useState } from 'react'
import Section6 from '../Home/Section6'
import HeaderShape from '../Home/HeaderShape'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import NotFound from '../NotFound/NotFound'
import { Oval } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../Redux/CartSlice'
import toast from 'react-hot-toast'
import { addProduct } from '../../Redux/wishlistSlice'

export default function Prouducts() {
    const { wishlist } = useSelector(store => store.wishlistReducer);
    const dispatch = useDispatch()
    const [SearchValue, setSearchValue] = useState("")




    function fitchProducts() {
        return axios.get('https://dummyjson.com/products?limit=100')
    }


    const { data, isLoading, isError } = useQuery({
        queryKey: ['OurProducts'],
        queryFn: fitchProducts,

    });


    const filteredProducts = data?.data?.products.filter(pro => pro.title.toLowerCase().includes(SearchValue.toLowerCase())) || [];

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

    return (
        <section className='container mx-auto mb-24 mt-36'>
            <HeaderShape title="Our Products" />
            <div className=" flex items-center  justify-between  mx-1 md:mx-0">
                <h2 className="text-xl md:text-4xl text-black font-semibold">
                    Explore Our Products
                </h2>
            </div>
            <div className="flex justify-center items-center mx-2 md:mx-0 py-5">

                <div className="relative w-full max-w-lg">

                    <input

                        onChange={(e) => setSearchValue(e.target.value)}
                        value={SearchValue}
                        type="text"
                        placeholder="Search for products..."
                        className="w-full pl-10 pr-4 py-3 text-gray-800 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                    />

                    <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                        <i className="fa-solid fa-magnifying-glass text-lg"></i>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredProducts.map((pro) => (
                    <div key={pro.id} className="product-card px-3 group">
                        <div className="product-image relative group-hover:shadow-lg rounded-t-xl transition-all overflow-hidden">
                            <img
                                src={pro.thumbnail}
                                className="w-full rounded-b"
                                alt={pro.title}
                            />
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
                            <div className="flex items-center justify-center flex-col absolute top-3 gap-1 right-3 transition-all group-hover:opacity-100 opacity-0">
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
                        <div className="product-details bg-orange-300 rounded-b-xl p-3 group-hover:shadow-lg transition-all">
                            <h3 className="font-medium">{pro.title.slice(0, 20)}</h3>
                            <div className="product-price font-medium space-x-2">
                                <span className="text-red-700">
                                    $
                                    {(
                                        pro.price -
                                        (pro.price * pro.discountPercentage) / 100
                                    ).toFixed(2)}
                                </span>
                                <span className="line-through text-gray-700">${pro.price}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <StarRating rating={pro.rating} />
                                <span className="font-medium">{`(${pro.rating})`}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
