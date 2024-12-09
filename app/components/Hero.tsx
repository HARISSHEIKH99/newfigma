import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    
    <section className="bg-blue-950 py-12 px-6 md:flex items-center justify-between mt-20 ml-20 z-40 mr-20">
    {/* Left Content */}
    <div className="md:w-1.5/">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white justify-center">
        The furniture brand for the future, with timeless designs
      </h1>

      <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 p-20 mb-20">
        View collection
      </button>
      <p className="mb-6 gap-10 justify-center text-white">
        A new era of sleek furniture with Avion,
         the french luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally 
         using modern web tecnologie.
      </p>
     
    </div>
       
    {/* Right Image */}
    <div className="md:w-1/2 h-[100%] flex justify-center mt-9 md:mt-0 bg-green-100 p-10">
      <Image
        src="/chair.png" 
        alt="Stylish Chair"
        width={100}
        height={100}
        className="max-w-full h-[100px] "
      />
    </div>
    </section>
  
  )
}

export default Hero