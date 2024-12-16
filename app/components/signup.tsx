import Image from 'next/image';
import React from 'react';

const Signup = () => {
  return (
    <div>
    <div className='bg-gray-100 h-[500px] mt-20 gap-10'>
        <div className='flex justify-center text-center text-blue-950'>
         <h1 className='font-sans mt-28 text-4xl mb-10'>Join the club and get the benefits</h1>
        </div>
        <p className='flex justify-center text-center'>Sign up for our newsletter and receive
             exclusive offers</p> 
             
             <p className='flex justify-center text-center'>on new ranges, sales, pop up stores and more</p>

             <div className='flex justify-center items-center m-20'>
                <input type="text" placeholder='your@email.com' className='p-5 ml-10'/>
                <button className='bg-[#2A254B] text-white p-5'>Sign up</button>
             </div>
    </div>

{/*  */}






<div className="flex justify-center items-center py-40 px-30 ml-30 w-[1440px]">
    {/* Left Content */}
    <div className="w-[536px] h-[225px] left-84px gap-25px">
      <h1 className="text-xl md:text-4xl text-[#2A254B] w-[750px]">
        From a studio in London to a global brand with Over 400 outlets
      </h1>

    
      <p className="mb-6 gap-10 flex text-justify text-[#2A254B] mt-[50px]">
      When we started Avion, the idea was simlpe. Make high quality furniture <br/>
      affordable and available for the mass market.
      </p>

      <p className="gap-10 flex text-justify text-[#2A254B] mb-40">Handmade, and loving crafted furniture and homeware is what we live,<br/>
        breathe and design so our chelsea boutuque become the hotbed for the<br/> London interior design community.
      </p>

        <button className="bg-[#F9F9F9] text-[#2A254B] px-6 py-2 rounded-md hover:bg-gray-200 w-[150px] h-[56px] top-493px left-84px   ">
        Get in touch
      </button> 
     </div>
   
       
    {/* Right Image */}
    <div className="md:w-1/2 h-[100%] flex justify-center mt-9 md:mt-0 p-10">
      <Image
        src="/flawer.png" 
        alt="flawer"
        width={500}
        height={500}
        className="w-[9000px] h-[703px] left-720px mr-0 ml-96 p-10 mt-40 pr-0 "
      />
    </div>
    </div>
    </div>

  )
}

export default Signup