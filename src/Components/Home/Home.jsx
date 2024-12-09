import React, { useEffect, useState } from 'react'
import Signup from '../Signup.jsx/Signup'
import Section1 from './Section1'
import Section2 from './Section2'
import HeaderShape from './HeaderShape'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import SameContent from '../About/Section4'
import Section6 from './Section6'
import Section8 from './Section8'
import Section7 from './Section7'
import { Oval } from 'react-loader-spinner'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "visible";
    }, 1000);

  
    return () => {
      clearTimeout(timeout);
    }
  }, [])
  return (
   <>

   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Section5/>
   <Section6/>
   <Section7/>
   <Section8/>
   {isLoading && (
        <div className='fixed bg-white top-0 bottom-0 w-full flex items-center justify-center'>
          <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#000000"
                    ariaLabel="oval-loading"
                />
        </div>
      )}

   
   </>
  )
}
