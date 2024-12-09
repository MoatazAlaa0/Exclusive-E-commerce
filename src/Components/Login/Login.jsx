import React, { useContext, useState } from 'react'
import img1 from "../../assets/images/Register.jfif"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik, } from "formik"
import * as Yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";
import { authContext } from '../../Context/AuthContext';
import { ThreeDots } from 'react-loader-spinner';


export default function Login() {

   const {setToken} = useContext(authContext)

    const [IsCliked, setIsCliked] = useState(false)


    const navigate = useNavigate()


    function getValues(values) {

        setIsCliked(true)

        axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
            .then((res) => {
                console.log(res.data.token)
                setIsCliked(false)
                toast.success("Login Successfull 🎉")

                const token = res.data.token
                setToken(token)
                localStorage.setItem("Token",token)
                setTimeout(() => {
                    navigate("/Home")
                }, 1000);
            })
            .catch((err) => {
                
                setIsCliked(false)
                toast.error(err.response.data.message)


            })


    }


    const resgisterFormik = useFormik({
        initialValues: {
            email: "",
            password: "",

        },
        onSubmit: getValues,
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").max(20, "Password must be at most 20 characters").required("Password is required"),


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
                        <h2 className='text-black font-medium text-4xl mx-3'>Log in to Exclusive</h2>
                        <p className='text-black text-sm mx-3 my-5'>Enter your details below</p>
                        <form onSubmit={resgisterFormik.handleSubmit} className=" rounded-xl mx-3 ">

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



                            <div className='flex items-center justify-between'>
                                <button type="submit" className="text-white px-10  bg-[#db4444e7] hover:bg-[#db4444]  font-medium rounded-md text-sm   py-2.5 text-center">
                                    {IsCliked ? <ThreeDots
                                        visible={true}
                                        height="30"
                                        width="30"
                                        color="#ffffff"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    /> : "Login"}
                                </button>
                                <p className='text-[#DB4444] text-sm mx-3 my-5 cursor-pointer'>Forget Password?</p>

                            </div>
                        </form>
                    </div>


                </div>


            </div>
        </div>
    )
}
