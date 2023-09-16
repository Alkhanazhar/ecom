import { useAppSelector } from '@/redux/hook'
import Link from 'next/link'
import React from 'react'


const Navbar = ({setshowcart}) => {
  const cartCount=useAppSelector((state)=>state.cartreducer.length);
  return (
    <div className='py-2 bg-white sticky top-0 z-10 '>
    <div className='container flex justify-between items-center'>
      <Link href="/" className='cursive lg:text-6xl font-semibold hover:text-accent md:text-5xl '>Cosmo</Link>
      <ul className='gap-6 hidden sm:flex'>
        <Link href="/" className='navLink'>Home</Link>
        <li className='navLink'>shop</li>
        <li className='navLink'>blog</li>
        <li className='navLink'>pages</li>
        <li className='navLink'>contact</li>
      </ul>
      <div className="flex gap-6">
        <div className='relative cursor-pointer w-[26px] h-[26px] items-center content-center' onClick={()=>setshowcart(true)}>
            🛒
            <div className='absolute top-[15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center'>{cartCount}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
