 import Image from 'next/image'
import React from 'react';
 export const Product = () => {
  return (
    <>
 
 
 <div>
                <h3 className='flex justify-start mt-20 mb-5 ml-36 text-2xl text-[#2A254B]'>New Caramics</h3>
                <div className='flex flex-row justify-center gap-5' >
                    <p className='text-xl m-2'>
                        <Image src="/kursi.png" alt="chair" width={200} height={100} className='pb-5 w-[300px]' />
                        The Dandy Cair
                        <span className='pt-2 text-[#2A254B]'><br />$260</span>
                    </p>

                    <p className='text-xl m-2'>
                        <Image src="/vase.png" alt="chair" width={200} height={100} className='pb-5 w-[300px]' />
                        Rustic Vase Set
                        <span className='pt-2  text-[#2A254B]'> <br />$155</span>
                    </p>

                    <p className='text-xl m-2  text-[#2A254B]'>
                        <Image src="/lamp.png" alt="chair" width={200} height={100} className='pb-7 w-[300px]' />
                        The Silky Vase
                        <span className='pt-2'> <br />$125</span>
                    </p>

                    <p className='text-xl m-2 text-[#2A254B]'>
                        <Image src="/silky.png" alt="chair" width={200} height={100} className='pb-6 w-[300px]' />
                        The Lucky Lamp
                        <span className='pt-2'><br />$339</span>
                    </p>
                </div>
                <div className='mt-5 flex justify-center pt-10 pb-40'>
                    <button className='bg-gray-200 px-2 py-2 w-40 h-10 flex justify-center items-center text-center text-[#2A254B] transition-all
      duration-300 hover:text-blue-950 border-6'>View collection</button>
                </div>
            </div>
          
        

    
   
    </>
  )
}