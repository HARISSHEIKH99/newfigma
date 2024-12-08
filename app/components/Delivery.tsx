import React from 'react';

import { SiAdguard } from "react-icons/si";
import { BsThunderbolt } from "react-icons/bs";
import { PiRecycleThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";

export const Delivery = () => {
  return (
    <div>
      <h2 className='flex justify-center mt-32 text-3xl text-blue-950'>What makes our brands diffrent</h2>
      <div className='w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center'>
        <div className='sm:w-full lg:w[70%] sm:justify-center gap-y-4 sm:items-center
         flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4'>

          {/* Box 1 */}

          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center invalid:items-center
             border-stone-400 border-8'>
              <CiDeliveryTruck />
            </div>

            <div>
              <h1 className='font-bold text-center text-xl mb-2'>Next day as atandard</h1>
              <p className='text-sm text-justify ml-5'>Order before 3pm and get your order 
                <span className='ml-8'>the next day as standard</span></p>
            </div>
          </div>


          {/* Box 2 */}

          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center invalid:items-center border-stone-400 border-8'>
              <BsThunderbolt />
            </div>

            <div>
              <h1 className='font-bold text-center text-xl mb-2' >Unbeatable price</h1>
              <p className='text-sm text-justify ml-8'></p>For our materials andquality you
              <span className='ml-1'>won't find better price anywhere</span>
            </div>
          </div>
          {/* Box 3 */}

          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center invalid:items-center
        border-stone-400 border-8'>
              <SiAdguard />
            </div>

            <div>
              <h1 className='font-bold text-center text-xl mb-2'>Made by true artisans</h1>
              <p className='text-sm ml-5 '>Handmade crafted goods made with
                 <span className='ml-8'>real passion and craftmanship</span></p>
            </div>
          </div>

          {/* Box 4 */}

          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center 
            invalid:items-center border-stone-400 border-8'>
              <PiRecycleThin />
            </div>

            <div>
              <h1 className='font-bold text-center text-xl mb-2' >Recycled packaging</h1>
              <p className='text-sm text-justify ml-8'></p>We use 100% recycled packaging to
               <span className='ml-1'>
                ensure our footprint is manageable</span>
            </div>
          </div>



        </div>
      </div>


    </div>

  );
}

// export default Delivery 
