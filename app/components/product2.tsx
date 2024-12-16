import Image from 'next/image'
import React from 'react'

 export const Product2 = () => {
  return (
    <>
    <div>
        <h3 className='flex justify-start mt-20 mb-5 ml-28 font-normal w-[330px] h-[48px] text-2xl text-[#2A254B]'>Our popular products</h3>
   <div className='flex flex-row gap-5 justify-center' >
    <p className='text-xl m-2 text-[#2A254B]'>  
    <Image src="/sofa.png" alt="chair" width={500} height={500} className='pb-5 w-[700px] h-[450px]'  />
    The Dandy Cair <br/>
    <span className='"pt-2'>$260</span></p>
   
   
    
    
    <p className='text-xl m-2 text-[#2A254B]'>  
    <Image src="/kursi.png" alt="chair" width={250} height={100} className='pb-5 w-[300px] h-[450px]' />
    Rustic Vase Set <br/>
    <span className='"pt-2'>$260</span></p>
    

    <p className='text-xl m-2 text-[#2A254B]'>  
    <Image src="/old.png" alt="chair" width={250} height={100} className='pb-7 w-[300px] h-[450px]'/>
    The Silky Vase<br/>
    <span className='"pt-2'>$125</span></p>
    

    </div>
    <div className='mt-5 flex justify-center pt-10 pb-40'>
    <button className='bg-gray-200 px-2 py-2 w-40 h-10 flex justify-center items-center text-center transition-all
      duration-300 hover:text-blue-950 border-6 text-[#2A254B]'>View collection</button>
    </div>
   </div>
    
   
    </>
  )
}