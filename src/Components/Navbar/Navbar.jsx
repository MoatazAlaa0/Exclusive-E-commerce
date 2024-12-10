import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import { useSelector } from "react-redux";


export default function Navbar() {

    const { Token, setToken } = useContext(authContext)
    const navigate = useNavigate()
    const { cartItems } = useSelector(store => store.CartSlice)
    const {wishlist} = useSelector( store => store.wishlistReducer);
    console.log(wishlist);
    
    const [MenuToggle, setMenuToggle] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const toggleMenu = () => {
        setMenuToggle((prev) => !prev);
    };

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    function handleLogout() {
        setToken(null)
        localStorage.clear()
        navigate("Signup")

    }



    return (
        <>
            <nav className="bg-white  border border-opacity-5 border-black fixed z-30 top-0 w-full ">
                <div className='h-12 text-center bg-black text-white flex items-center justify-center '>
                    <p className='text-xs md:text-[16px]'> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <Link to={"Home"} className='ms-2  border-b-2 '>ShopNow</Link></p>
                    <div className='cursor-pointer flex items-center mr-3'>
                        <h1 className=' ml-5 md:ml-52 '>English</h1>
                        <i className="fa-solid fa-chevron-down ms-1"></i>

                    </div>
                </div>

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link  to={Token ? "Home" : "About"}>
                        <h1 className="text-2xl font-bold">Exclusive</h1>
                    </Link>

                    <div className="flex md:order-2 items-center">
                        {/* Search Input for Medium Screens */}
                        <div className="relative hidden md:block me-3">
                            <div className="absolute inset-y-0 end-0 flex items-center pe-3 ps-2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input
                                type="text"
                                id="search-navbar"
                                value={searchInput}
                                onChange={handleSearchChange}
                                className="block w-full p-2 pe-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="What are you looking for?"
                            />
                        </div>


                        {Token ? <div className="flex items-center space-x-3 relative">
                            {/* Other Icons */}




                            <Link to={"Wishlist"}>
                                <div className="space-x-3 relative ">

                                    <i className="fa-regular fa-heart cursor-pointer"></i>
                                    {wishlist.length == 0 ? "" : <div className="bg-[#DB4444] text-[#FAFAFA] absolute text-center -top-1 -right-[9px]  flex items-center justify-center w-4 h-4 rounded-full">
                                        <span className="text-xs ">{wishlist.length}</span>
                                    </div>}

                                </div>
                            </Link>


                            <Link to={"Cart"}>
                                <div className="space-x-3 relative ">

                                    <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
                                    {cartItems.length == 0 ? "" : <div className="bg-[#DB4444] text-[#FAFAFA] absolute text-center -top-1 -right-[9px]  flex items-center justify-center w-4 h-4 rounded-full">
                                        <span className="text-xs ">{cartItems.length}</span>
                                    </div>}

                                </div>
                            </Link>


                            {/* User Icon with Dropdown */}
                            <div className="relative group">
                                {/* User Icon */}
                                <div className=" w-7 rounded-full h-7 flex items-center transition-all group-hover:bg-[#DB4444] justify-center bg-white  ">

                                    <i className="fa-solid fa-user cursor-pointer  group-hover:text-white"></i>
                                </div>

                                {/* Dropdown Menu */}
                                <div className="absolute top-[70%] right-0 mt-2 backdrop-blur-md bg-black/40 shadow-lg rounded-lg p-4 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 transform translate-y-4">
                                    <ul className="text-gray-700">
                                        <li className="flex items-center cursor-pointer space-x-2 py-2 text-yellow-50 rounded ">
                                            <i className="fa-solid fa-user-circle"></i>
                                            <Link to={"MyAccount"} >Manage Account</Link>
                                        </li>
                                        <li className="flex items-center cursor-pointer space-x-2 py-2 text-yellow-50 rounded ">
                                            <i className="fa-solid fa-box"></i>
                                            <span>My Order</span>
                                        </li>
                                        <li className="flex items-center cursor-pointer space-x-2 py-2 text-yellow-50 rounded ">
                                            <i className="fa-solid fa-ban"></i>
                                            <span>My Cancellations</span>
                                        </li>
                                        <li className="flex items-center cursor-pointer space-x-2 py-2 text-yellow-50 rounded ">
                                            <i className="fa-solid fa-star"></i>
                                            <span>My Reviews</span>
                                        </li>
                                        <li className="flex items-center cursor-pointer space-x-2 py-2 text-yellow-50 rounded ">
                                            <i className="fa-solid fa-sign-out-alt"></i>
                                            <span onClick={handleLogout} >Logout</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> : ""}





                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className=" mx-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-search"
                            aria-expanded={MenuToggle}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`items-center justify-between ${MenuToggle ? "flex" : "hidden"
                            } w-full md:flex md:w-auto md:order-1`}
                        id="navbar-search"
                    >
                        <ul className="flex w-full flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            {Token && <li>
                                <NavLink
                                    onClick={() => setMenuToggle(false)}
                                    to="Home"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive
                                            ? "border-b-2 border-black"
                                            : "hover:border-b-2 transition-all hover:border-black"
                                        } text-gray-900 md:bg-transparent md:p-0`
                                    }
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>}


                            <li>
                                <NavLink
                                    onClick={() => setMenuToggle(false)}
                                    to="Contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive
                                            ? "border-b-2 border-black"
                                            : "hover:border-b-2 transition-all hover:border-black"
                                        } text-gray-900 md:bg-transparent md:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => setMenuToggle(false)}
                                    to="About"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive
                                            ? "border-b-2 border-black"
                                            : "hover:border-b-2 transition-all hover:border-black"
                                        } text-gray-900 md:bg-transparent md:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            {Token == null ? <li>
                                <NavLink
                                    onClick={() => setMenuToggle(false)}
                                    to="Signup"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 ${isActive
                                            ? "border-b-2 border-black"
                                            : "hover:border-b-2 transition-all hover:border-black"
                                        } text-gray-900 md:bg-transparent md:p-0`
                                    }
                                >
                                    Sign Up
                                </NavLink>
                            </li> : ""}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
