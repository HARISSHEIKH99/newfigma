import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between items-center py-14 px-4 md:flex gap-0 mr-20   '>
    <div className="bg-[#2A254B] py-12 px-6 md:flex items-center mt-20 ml-[150px] pl-[50px] w-[760px] ">
    {/* Left Content */}
 
    <div className="md:w-1.5/ pl- pr-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white justify-center">
        The furniture brand for the </h1>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white justify-center">future, with timeless designs
      </h1>

      <button className="bg-[#F9F9F926] text-white px-6 py-2 rounded-md hover:bg-gray-700 p-20 mb-20 mt-8">
        View collection
      </button>
      <p className="mb-6 gap-10 justify-center text-white mt-10  ">
        A new era of sleek furniture with Avion,
         the french luxury retail brand<br/>
          with nice fonts, tasteful colors and a beautiful way to display things digitally<br/>
         using modern web tecnologie.
      </p>
     
    </div>
   </div>
  
       
    {/* Right Image */}
    {/* <div className="md:w-1/3 h-[100%] flex justify-center mt-9 md:mt-0 p-10"> */}
      <Image
        src="/kursi.png" 
        alt="Stylish Chair"
        width={500}
        height={500}
        className="w-[550px] h-[495px] mt-20 mr-[80px]"
      />
  
    </div>
   
    {/* </div> */}
 
  </>
  )
}

export default Hero