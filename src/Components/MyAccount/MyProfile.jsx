import React from 'react'

export default function MyProfile() {
    const { name, email } = JSON.parse(localStorage.getItem("userInf"))
    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-6 text-[#DB4444]">Edit Your Profile</h2>
        <form className="space-y-4">
      
          {/* Name Fields */}
          <div className="flex md:flex-nowrap flex-wrap md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                value={name.toUpperCase()}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#DB4444] focus:border-[#DB4444]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                value="Ramy"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#DB4444] focus:border-[#DB4444]"
              />
            </div>
          </div>
      
          {/* Email and Address Fields */}
          <div className="flex md:flex-nowrap flex-wrap md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#DB4444] focus:border-[#DB4444]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value="Kingston, 5236, United State"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#DB4444] focus:border-[#DB4444]"
              />
            </div>
          </div>
      
          {/* Password Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Password Changes</h3>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="block w-full border border-gray-300 rounded-md p-2 focus:ring-[#DB4444] focus:border-[#DB4444]"
              />
              <input
                type="password"
                placeholder="New Password"
                className="block w-full border border-gray-300 rounded-md p-2 focus:ring-[#DB4444] focus:border-[#DB4444]"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="block w-full border border-gray-300 rounded-md p-2 focus:ring-[#DB4444] focus:border-[#DB4444]"
              />
            </div>
          </div>
      
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-end space-x-4 mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#DB4444] text-white rounded-md hover:bg-red-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      
    )
}
