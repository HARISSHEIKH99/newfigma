import Image from 'next/image'
import React from 'react'

 export const Product2 = () => {
  return (
    <>
    <div>
        <h3 className='flex justify-start mt-20 mb-5 ml-36 text-2xl text-blue-950'>Our popular products</h3>
   <div className='flex flex-row gap-20 justify-center' >
    <p className='text-xl m-2'>  
    <Image src="/sofa.png" alt="chair" width={500} height={500} className='pb-5' />
    The Dandy Cair <br/>
    <span className='"pt-2'>$260</span></p>
   
   
    
    
    <p className='text-xl m-2'>  
    <Image src="/kursi.png" alt="chair" width={250} height={100} className='pb-5' />
    Rustic Vase Set <br/>
    <span className='"pt-2'>$260</span></p>
    

    <p className='text-xl m-2'>  
    <Image src="/old.png" alt="chair" width={250}  className='pb-7'/>
    The Silky Vase<br/>
    <span className='"pt-2'>$125</span></p>
    

    </div>
    <div className='mt-5 flex justify-center pt-10 pb-40'>
    <button className='bg-gray-200 px-2 py-2 w-40 h-10 flex justify-center items-center text-center transition-all
      duration-300 hover:text-blue-950 border-6'>View collection</button>
    </div>
   </div>
    
   
    </>
  )
}