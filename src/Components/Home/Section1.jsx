import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from "axios"
import NotFound from '../NotFound/NotFound'
import { Oval } from 'react-loader-spinner'
import CategorySlider from './CategorySlider'
import { Navigate } from 'react-router-dom'

export default function Section1() {

  const [GetCategoryName, setGetCategoryName] = useState(null)



  useEffect(() => {

    handleCategoryName("smartphones")


  }, [])



  function handleCategoryName(nam) {
    axios.get(`https://dummyjson.com/products/category/${nam}?limit=7`).then(res => {
      setGetCategoryName(res.data.products)
     

    })

      .catch(err => console.log(err))
  }





  function getCategoryList() {
    return axios.get('https://dummyjson.com/products/category-list')
  }


  const { data, isLoading, isError } = useQuery({
    queryKey: ['categoryList'],
    queryFn: getCategoryList,
  })

  if (isLoading) {
    return <div className='h-screen flex items-center justify-center'>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#000000"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  }
  if (isError) {
    // return   <NotFound />
    return <Navigate to={"*"} />
  }



  const res = data.data


  return (
    <section className='container mx-auto  my-32'>

      <div className='flex items-center justify-between '>

        <div className='border-r border-black  overflow-auto h-[300px] border-opacity-[0.3] px-5  md:w-[15%] w-[40%]'>
          <h1 className='text to-black font-bold'>Click on 👇</h1>
          <ul className='list-disc'>

            {res.map((cat, index) => (
              <li key={index} onClick={() => handleCategoryName(cat)} className='text-black text-[14px] cursor-pointer'>{cat}</li>
            ))}

          </ul>
        </div>
        <div className=' md:w-[80%]  w-[60%]'>
          <CategorySlider cat={GetCategoryName} />

        </div>
      </div>

    </section >
  )
}
