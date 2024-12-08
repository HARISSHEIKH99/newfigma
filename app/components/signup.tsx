import React from 'react'

const Signup = () => {
  return (
    <div>
    <div className='bg-gray-100 h-screen mt-20 gap-10'>
        <div className='flex justify-center text-center text-blue-950'>
         <h1 className='font-sans mt-28 text-4xl mb-10'>Join the club and get the benefits</h1>
        </div>
        <p className='flex justify-center text-center'>Sign up for our newsletter and receive
             exclusive offers</p> <p className='flex justify-center text-center'>on new ranges, sales, pop up stores and more</p>

             <div className='flex justify-center items-center m-20'>
                <input type="text" placeholder='your@email.com' className='p-5 ml-10'/>
                <button className='bg-blue-950 text-white p-5'>Sign up</button>
             </div>
    </div>

{/*  */}

<section className="py-12 px-6 md:flex items-center justify-between mt-20 ml-20 z-40 mr-20">
    {/* Left Content */}
    <div className="md:w-1.5/">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950 justify-center">
        From a studio in London to a global brand with Over 400 outlets
      </h1>

      {/* <button className="bg-gray-500 px-6 py-2 rounded-md hover:bg-gray-700 p-20 mb-20">
        View collection
      </button> */}
      <p className="mb-6 gap-10 justify-center text-blue-950">
      When we started Avion, the idea was simlpe. Make high quality furniture 
      affordable and available for the mass market.
      </p>

      <p>Handmade, and loving crafted furniture and homeware is what we live,
        breathe and design so our chelsea boutuque become the hotbed for the London interior design community.
      </p>
     
    </div>
       
    {/* Right Image */}
    <div className="md:w-1/2 h-[100%] flex justify-center mt-9 md:mt-0 p-10">
      <img
        src="/flawer.png" // Replace with the actual image path
        alt="flawer"
        width={500}
        height={500}
        className="max-w-full h-auto "
      />
    </div>
    </section>
  













    {/* <div>
        <div className='text-blue-950 flex flex-col space-y-5 sm:w[180px] md:w[300px] lg:w-[300px]'>
        <div className='flex justify-end items-end'>        
        
        </div>
            <h1 className='text-2xl'>From studio in Londen to a global brand With
            </h1>
            <h1 className='text-justify text-2xl'>over 400 outlets</h1>
            <img src="/flawer.png" alt="flower" height={500} className=' flex justify-end'/>
            <p>When we started Avion, the idea simple. Make high quality</p>
         <p>furniture affordable and available for the mass market. </p>
       
        </div>
      
    
            <p className='text-justify justify-start space-y-5'>Handmade and loving crafted furniture and homeware is what<br/> we live, 
            breath and design so our Chelsea boutique become the hotbed for the <br/>Londen interior design community.</p>
        
        {/* <div className='flex justify-end ml-auto'>
            <img src="/flawer.png" alt="flower" height={500} className=' flex justify-row'/>
        </div> */}
    </div>

  )
}

export default Signup