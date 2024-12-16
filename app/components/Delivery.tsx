import React from 'react';
import { BsThunderbolt } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { PiFlowerTulip } from "react-icons/pi";

export const Delivery = () => {
  return (
    <div>
      <h2 className=' flex justify-center items-center mt-32 text-2xl text-[#2A254B] mb-20'>What makes our brands diffrent</h2>
      <div className='w-full sm:h-[500px] lg:h-[300px] '>
        <div className="sm:w-full lg:w[70%] sm:justify-center gap-y-4 sm:items-center
         flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4">

          {/* Box 1 */}
          <div className=''>
           <div className='flex justify-evenly gap-10'>
          <div className='w-[260px] h-[130px] items-center'>
            <div className='w-[24px] h-[24px] text-[#2A254B] invalid:items-center'>
              <TbTruckDelivery />
            </div>

            <div className=''>
              <h1 className='font-normal text-[#2A254B] w-[199px] h-[28px] text-center text-xl'>Next day as atandard</h1>
              <p className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B] mt-2'>Order before 3pm and get your order<br/>
                <span className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B]'> the next day as standard</span></p>
            </div>
          </div>


          {/* Box 2 */}
           
          <div className='w-[260px] h-[130px] items-center'>
            <div className='w-[24px] h-[24px] text-[#2A254B]'>
            <BsThunderbolt />
            </div>
            <div>
           <h1 className='font-normal text-[#2A254B] w-[199px] h-[28px] text-center text-xl -mr-80'>Unbeatable price</h1>
              <p className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B] mt-2'>For our materials andquality you<br/>
              <span className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B]'>wont find better price anywhere</span></p>
            </div>
          </div>
          {/* Box 3 */}

          <div className='w-[260px] h-[130px] flex-col '>
            <div className='w-[28px] h-[28px] invalid:items-center'>
              <CiCircleCheck />
            </div>

            <div>
              <h1 className='font-normal text-[#2A254B] w-[199px] h-[28px] text-center text-xl'>Made by true artisans</h1>
              <p className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B] mt-2'>Handmade crafted goods made with<br/>
                <span className='text-sm text-center font-extralight w-[270] h-[48px] text-[#2A254B]'> real passion and craftmanship</span></p>
            </div>
          </div>

        
          <div className='w-[260px] h-[130px] flex-col '>
            <div className='w-[28px] h-[28px] invalid:items-center'>
            <PiFlowerTulip />
          </div>
            
             <div>
              <h1 className='font-normal text-[#2A254B] w-[199px] h-[28px] text-center text-xl'>Recycled packaging</h1>
              <p  className='text-sm font-extralight w-[270] h-[48px] text-[#2A254B] mt-2'>We use 100% recycled packaging to<br/>
                <span className='ml-2 text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B]'>
                   ensure our footprint is manageable</span></p>
            </div>
        
            </div>
          </div>
          </div>

</div></div>

        </div>
  

  
    

  );
}

// export default Delivery 
