import Link from 'next/link';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5"
const Header = () => {
    return (
        <>
            <header className='bg-white border-b border-spacing-8 '>
                <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
                    <CiSearch />
                    <h1 className='text-xl'>
                        <Link href="/">Avion</Link>
                    </h1>
                    <div className='flex gap-2'> <IoCartOutline /> <IoPersonCircleOutline />
                    </div>

                </div>
            </header>
            <div>
                <nav className='flex'>
                     <ul className='flex justify-center items-center gap-8 content-center mt-4 text-sm text-center ml-[30%]'>
                        <li><Link href="/">Plant Pots</Link></li>
                        <li><Link href="/">Ceramics</Link></li>
                        <li><Link href="/">Tables</Link></li>
                        <li><Link href="/">Cairs</Link></li>
                        <li><Link href="/">Crokery</Link></li>
                        <li><Link href="/">TableWare</Link></li>
                        <li><Link href="/">Cutlery</Link></li>
                     </ul>
                </nav>
            </div>






        </>
    )
}

export default Header