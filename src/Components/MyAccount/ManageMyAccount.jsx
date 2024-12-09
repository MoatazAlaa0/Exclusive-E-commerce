import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


export default function ManageMyAccount() {


    const { name } = JSON.parse(localStorage.getItem("userInf"))
    return (
        <>
        <div className="container mx-auto px-4 mt-48 mb-10">
        {/* Welcome Header */}
        <div className="flex items-center justify-end">
          <h1>
            Welcome! <span className="text-[#DB4444]">{name.toUpperCase()}</span>
          </h1>
        </div>
      
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 py-16">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 bg-white shadow-md p-4 rounded-lg mb-8 lg:mb-0">
            <ul className="space-y-4 text-gray-800">
              {/* Section 1 */}
              <li className="font-bold text-gray-900">Manage My Account</li>
              <li className="px-5 cursor-pointer  ">
                <NavLink
                  to="Profile"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition  cursor-pointer ${
                      isActive
                        ? "bg-red-100 text-red-500 font-semibold"
                        : "hover:bg-gray-100 hover:text-red-500"
                    }`
                  }
                >
                  My Profile
                </NavLink>
              </li>
              <li className="px-5 cursor-pointer">
                <NavLink
                  to="/address-book"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition ${
                      isActive
                        ? "bg-red-100 text-red-500 font-semibold"
                        : "hover:bg-gray-100 hover:text-red-500"
                    }`
                  }
                >
                  Address Book
                </NavLink>
              </li>
              <li className="px-5 cursor-pointer">
                <NavLink
                  to="/payment-options"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition ${
                      isActive
                        ? "bg-red-100 text-red-500 font-semibold"
                        : "hover:bg-gray-100 hover:text-red-500"
                    }`
                  }
                >
                  My Payment Options
                </NavLink>
              </li>
      
              {/* Section 2 */}
              <li className="font-bold text-gray-900 mt-6">My Orders</li>
              <li className="px-5 cursor-pointer">
                <NavLink
                  to="/returns"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition ${
                      isActive
                        ? "bg-red-100 text-red-500 font-semibold"
                        : "hover:bg-gray-100 hover:text-red-500"
                    }`
                  }
                >
                  My Returns
                </NavLink>
              </li>
              <li className="px-5 cursor-pointer">
                <NavLink
                  to="/cancellations"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition ${
                      isActive
                        ? "bg-red-100 text-red-500 font-semibold"
                        : "hover:bg-gray-100 hover:text-red-500"
                    }`
                  }
                >
                  My Cancellations
                </NavLink>
              </li>
      
              {/* Section 3 */}
              <li className="font-bold text-gray-900 mt-6">My Wishlist</li>
              <li className="px-5 cursor-pointer">
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition ${
                      isActive
                        ? "bg-red-100 text-red-500 font-semibold"
                        : "hover:bg-gray-100 hover:text-red-500"
                    }`
                  }
                >
                  My Wishlist
                </NavLink>
              </li>
            </ul>
          </div>
      
          {/* Main Content Area */}
          <div  className="w-full lg:w-3/4">
            <Outlet />
          </div>
        </div>
        
      </div>
      
        </>

    )
}
