import React from 'react'

export default function Contact() {
  return (
    <div className='h-screen mt-96 mb-48 md:mt-48 md:mb-0 container mx-auto  flex items-center md:items-start md:flex-row flex-col gap-7 justify-center md:justify-between'>


      <div className='bg-white p-7   rounded-lg shadow w-[90%] md:w-[25%]  '>
        <div className='first-part  border-b  border-black'>

          <div className='flex items-center gap-3 group'>
            <div className='w-10 h-10 rounded-full   transition-all text-white flex items-center justify-center group-hover:bg-black bg-[#DB4444] ' >

              <i className="fa-solid fa-phone"></i>
            </div >
            <h1 className=' font-medium black'>Contact Us</h1>
          </div>
          <div className='space-y-3 mt-3 mb-6'>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>
        <div className='second-part mt-5'>
          <div className='flex items-center gap-3 group'>
            <div className='w-10 h-10 rounded-full   transition-all text-white flex items-center justify-center group-hover:bg-black bg-[#DB4444] ' >

              <i className="fa-regular fa-envelope"></i>
            </div >
            <h1 className=' font-medium black'>Write To US</h1>
          </div>
          <div className='space-y-3 mt-3 mb-6'>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails:customer@exclusive.com</p>
            <p>Emails:support@exclusive.com</p>
          </div>
        </div>

      </div>
      <div className='bg-white p-7 mb-20 rounded-lg shadow  w-[90%] md:w-[70%]  '>

        <form >
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name * " required />
            </div>
            <div>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email *" required />
            </div>
            <div>
              <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Phone *" required />
            </div>


          </div>
          <textarea id="message" rows="9" className="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Massage..."></textarea>
         <div className=' flex items-center justify-end'>

          <button type="submit" className=" py-4 px-12 mb-1 text-white rounded hover:bg-black transition-all bg-[#DB4444]">Send Massage</button>
         </div>
        </form>


      </div>


    </div>
  )
}
