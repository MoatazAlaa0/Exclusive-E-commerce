import SameContent from './Section4';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';

export default function About() {
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
      <Section1 />
      <Section2/>
      <Section3/>
      <SameContent/>

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
