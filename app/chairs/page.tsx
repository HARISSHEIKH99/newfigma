import React from 'react'
import Image from 'next/image'
import { PiFlowerTulip } from 'react-icons/pi'
import { CiCircleCheck } from 'react-icons/ci'
import { BsThunderbolt } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaCircleCheck } from "react-icons/fa6";

const page = () => {
    return (
        <div>
            <div className='relative'>
                <Image
                    src="/bg.png"
                    alt="bg-image"
                    width={500}
                    height={550}
                    className='w-[1700px] h-[704px] mt-5 ' />
                <div className='flex justify-end '>
                    <div className='absolute inset-0 bg-white border-solid w-full sm:w-[90%] md:w-[6-%] h-[444px] 
             top-30px left-730px mt-28 ml-[900px] text-[#22202E] flex justify-center flex-col'>
                        <h1 className='w-[513px] h-[90px] font-normal text-3xl ml-10 '>Luxury homeware for people<br /> who love timeless design quality</h1>
                        <br />
                        <br />


                        <p className='ml-10 flex justify-center w-[343px] h-[27px]'>Shop the new Spring 2022 collection today</p>
                        <button className='bg-[#F9F9F9] w-[170px] h-[56px] left-56 top-342px mt-16 ml-16 text[#2A254B'>View collection</button>

                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div>
                {/* End */}

                {/* DElivery  section*/}
                <h2 className=' flex justify-center items-center mt-32 text-2xl text-[#2A254B] mb-20'>What makes our brands diffrent</h2>
                <div className='w-full sm:h-[500px] lg:h-[300px] '>
                    <div className="sm:w-full lg:w[70%] sm:justify-center gap-y-4 sm:items-center
         flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4">

                        {/* Box 1 */}
                        <div className=''>
                            <div className='flex justify-evenly gap-10 '>
                                <div className='w-[305px] h-[250px] items-center bg-[#F9F9F9] pl-10 pt-8'>
                                    <div className='w-[24px] h-[24px] text-[#2A254B] invalid:items-center'>
                                        <TbTruckDelivery />
                                    </div>

                                    <div className=''>
                                        <h1 className='font-normal text-[#2A254B] w-[199px] h-[28px] text-center text-xl'>Next day as atandard</h1>
                                        <p className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B] mt-2'>Order before 3pm and get <br />your order<br />
                                            <span className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B]'> the next day as <br />standard</span></p>
                                    </div>
                                </div>


                                {/* Box 2 */}

                                <div className='w-[305px] h-[250px] items-center bg-[#F9F9F9] pl-10 pt-8'>

                                    <div className='w-[24px] h-[24px] text-[#2A254B]'>
                                        <BsThunderbolt />
                                    </div>
                                    <div>
                                        <h1 className='font-normal text-[#2A254B] w-[199px] h-[28px] text-center text-xl -mr-80'>Unbeatable price</h1>
                                        <p className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B] mt-2'>For our materials andquality<br /> you
                                            <span className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B]'>wont find better prices<br /> anywhere</span></p>
                                    </div>
                                </div>
                                {/* Box 3 */}

                                <div className='w-[305px] h-[250px] items-center bg-[#F9F9F9] pl-10 pt-8'>

                                    <div className='w-[28px] h-[28px] invalid:items-center'>
                                        <CiCircleCheck />
                                    </div>

                                    <div>
                                        <h1 className='font-normal text-[#2A254B] w-[199px] h-[28px] text-center text-xl'>Made by true artisans</h1>
                                        <p className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B] mt-2'>Handmade crafted goods<br /> made with
                                            <span className='text-sm text-center font-extralight w-[270] h-[48px] text-[#2A254B]'> real passion and<br /> craftmanship</span></p>
                                    </div>
                                </div>


                                <div className='w-[305px] h-[250px] items-center bg-[#F9F9F9] pl-10 pt-8'>
                                    <div className='w-[28px] h-[28px] invalid:items-center'>
                                        <PiFlowerTulip />
                                    </div>

                                    <div>
                                        <h1 className='font-normal text-[#2A254B] w-[199px] h-[28px] text-center text-xl'>Recycled packaging</h1>
                                        <p className='text-sm font-extralight w-[270] h-[48px] text-[#2A254B] mt-2'>We use 100% recycled to<br />
                                            <span className='text-sm text-justify font-extralight w-[270] h-[48px] text-[#2A254B]'>ensure our footprint ismore<br />manageable</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div></div>

            </div>
            {/* iamages */}


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
            {/* next sofa image chair */}

            <div className='flex justify-evenly items- gap-8 pr-[80px] pl-[80px] pt-[60px] pb-[60px]'>
                <div className='bg-[#2A254B] w-[900px] h-[600px] border-solid text-white flex flex-col gap-12 font-normal mb-10 '>

                    <h1 className='w-[383px] h-[39px] ml-16 font-sans text-3xl mt-20'>It started with a small idea</h1>
                    <p className='w-[495px] h-[48px] font-xl text-lg ml-16 pb-16'>A global brand with local beginnings, our story begain in a <br />small studio in South London in early 2014</p>
                    <button className='text-white bg-[#F9F9F926] w-[200px] h-[50px] ml-16 mt-48'>View collection</button>

                </div>
                <Image src="/sofa chair.png"
                    alt="sofa"
                    width={500}
                    height={500}
                    className='w-[700px]
         h-[600px]'/>
            </div>

            <div className='relative'>
                <Image src="/bd-sign.png"
                    alt="bgimg"
                    width={300}
                    height={300}
                    className='w-[1600px] h-[444px] ' />

                <div className='absolute inset-0 flex items-center flex-col text-white mt-20 gap-[30px]'>
                    <h1 className=' flex text-justify text-3xl'>Join the club and get the benefits</h1>
                    <p className='text-base'>Sign up for our newsletter and receive exclusive offers on <br />
                        <span className='ml-10'>new ranges, sales, pop up stores and more</span></p>
                     <div className='flex gap-10'>
                     <p className='flex gap-3 h-24 w-[px]'> <FaCircleCheck className='mt-1' />Exclusive offers</p>
                     <p className='flex gap-3 h-24 w-[px]'> <FaCircleCheck  className='mt-1'/>Free events</p>
                     <p className='flex gap-3 h-24 w-[px]'> <FaCircleCheck  className='mt-1'/>Large discounts</p>
                    
                      </div>
                      <div>
                        <input type='text' placeholder='your@email.com' className='w-[400px] h-[57px]'/>
                        <button className='bg-[#2A254B] text-[#FFFFFF] w-[118px] h-[56px]'>Sign up</button>
                     </div>
                </div>
               
              
            </div>
        </div>

    )
}

export default page