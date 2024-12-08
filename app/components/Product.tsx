import React from 'react'

 export const Product = () => {
  return (
    <>
    <div>
        <h3 className='flex justify-start mt-20 mb-5 ml-40 text-2xl text-blue-950'>New Caramics</h3>
   <div className='flex flex-row gap-20 justify-center' >
    <p className='text-xl m-2'>  
    <img src="/kursi.png" alt="chair" width={200} className='pb-5' />
    The Dandy Cair
    <p className='pt-2'>$260</p>
    </p>
    
    <p className='text-xl m-2'>  
    <img src="/vase.png" alt="chair" width={200} className='pb-5' />
    Rustic Vase Set
    <p className='pt-2'>$155</p>
    </p>

    <p className='text-xl m-2'>  
    <img src="/lamp.png" alt="chair" width={200}  className='pb-7'/>
    The Silky Vase
    <p className='pt-2'>$125</p>
    </p>

    <p className='text-xl m-2'>  
    <img src="/silky.png" alt="chair" width={200} className='pb-6' />
    The Lucky Lamp
    <p className='pt-2'>$339</p>
    </p>
    </div>
    <div className='mt-5 flex justify-center pt-10 pb-40'>
    <button className='bg-gray-200 px-2 py-2 w-40 h-10 flex justify-center items-center text-center transition-all
      duration-300 hover:text-blue-950 border-6'>View collection</button>
    </div>
   </div>
    
   
    </>
  )
}