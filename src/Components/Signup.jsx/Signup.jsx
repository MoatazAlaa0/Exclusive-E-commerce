import React, { useState } from 'react'
import img1 from "../../assets/images/Register.jfif"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik, } from "formik"
import * as Yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";
import {ThreeDots} from "react-loader-spinner"




export default function Signup() {
    const [IsCliked, setIsCliked] = useState(false)


    const navigate = useNavigate()

    function getValues(values, { resetForm }) {

        setIsCliked(true)

        axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
            .then((res) => {
                
                localStorage.setItem("userInf", JSON.stringify(values))
                setIsCliked(false)
                toast.success("successful 👏 Click 'Login' to proceed")
                resetForm()
                setTimeout(() => {

                    navigate("/login")
                }, 1000);
            })
            .catch((err) => {
                setIsCliked(false)
                toast.error(err.response.data.message)



            })


    }


    const resgisterFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
        },
        onSubmit: getValues,
        validationSchema: Yup.object().shape({
            name: Yup.string().min(3, "Name must be at least 3 characters").max(10, "Name must be at most 10 characters").required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").max(20, "Password must be at most 20 characters").required("Password is required"),
            rePassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('rePassword is required'),
            phone: Yup.string().required("phone is required")


        })
    })







    return (
        <div>
            <div className='   mb-24 mt-40 '>



                <div className=' flex items-center justify-between flex-wrap flex-col md:flex-row' >

                    <div className=' w-full md:w-[60%]'>
                        <img src={img1} className='w-full' alt="Register-Image" />
                    </div>


                    <div className='rounded-xl w-full md:w-[30%]  p-3  mt-5  md:mx-auto  bg-white md:mt-10'>
                        <h2 className='text-black font-medium text-4xl mx-3'>Create an account</h2>
                        <p className='text-black text-sm mx-3 my-5'>Enter your details below</p>
                        <form onSubmit={resgisterFormik.handleSubmit} className=" rounded-xl mx-3 ">
                            <div className="relative z-0 w-full mb-5 group">
                                <input value={resgisterFormik.values.name} onChange={resgisterFormik.handleChange} onBlur={resgisterFormik.handleBlur} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User name</label>
                                {resgisterFormik.errors.name && resgisterFormik.touched.name ? <div className="p-4 mb-4 text-sm mt-1 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    {resgisterFormik.errors.name}
                                </div> : undefined}

                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input value={resgisterFormik.values.email} onChange={resgisterFormik.handleChange} onBlur={resgisterFormik.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                {resgisterFormik.errors.email && resgisterFormik.touched.email ? <div className="p-4 mb-4 text-sm mt-1 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    {resgisterFormik.errors.email}
                                </div> : undefined}

                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input value={resgisterFormik.values.password} onChange={resgisterFormik.handleChange} onBlur={resgisterFormik.handleBlur} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                {resgisterFormik.errors.password && resgisterFormik.touched.password ? <div className="p-4 mb-4 text-sm mt-1 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    {resgisterFormik.errors.password}
                                </div> : undefined}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input value={resgisterFormik.values.rePassword} onChange={resgisterFormik.handleChange} onBlur={resgisterFormik.handleBlur} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                {resgisterFormik.errors.rePassword && resgisterFormik.touched.rePassword ? <div className="p-4 mb-4 text-sm mt-1 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    {resgisterFormik.errors.rePassword}
                                </div> : undefined}

                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input value={resgisterFormik.values.phone} onChange={resgisterFormik.handleChange} onBlur={resgisterFormik.handleBlur} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                                {resgisterFormik.errors.phone && resgisterFormik.touched.phone ? <div className="p-4 mb-4 text-sm mt-1 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    {resgisterFormik.errors.phone}
                                </div> : undefined}

                            </div>


                            <button type="submit" className="text-white w-full bg-[#db4444e7] flex items-center justify-center hover:bg-[#db4444]  font-medium rounded-lg text-sm   px-5 py-2.5 text-center">
                                {IsCliked ? <ThreeDots
                                    visible={true}
                                    height="30"
                                    width="30"
                                    color="#ffffff"
                                    ariaLabel="triangle-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                /> : "Create Account"}
                            </button>
                            <button type="button" className="text-black w-full border border-black border-opacity-5 mt-3 bg-gray-100 hover:bg-gray-200  font-medium rounded-lg text-sm   px-5 py-2.5 text-center"> <i className="fa-brands fa-google me-1"></i> Sign up with Google</button>
                            <p className='text-black text-center mt-5 font-light'>Already have account ? <Link to={"/Login"} className='pb-1 font-normal cursor-pointer border-b border-black '>Login</Link></p>
                        </form>
                    </div>


                </div>


            </div>
        </div>
    )
}
