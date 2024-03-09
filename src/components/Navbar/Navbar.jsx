import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between px-16 text-white py-5'>
      {/* logo */}
      <h1 className='text-2xl font-bold madimi-one-regular cursor-pointer'>Meal <span className='font-bold text-[#E74F2B]'>.</span></h1>
      {/* mid */}
      <ul className='flex gap-8   poppins text-sm'>
        <li className='hover:text-[#E74F2B] text-gray-300 duration-300 cursor-pointer '>Home</li>
        <li className='hover:text-[#E74F2B] text-gray-300 duration-300 cursor-pointer '>About</li>
        <li className='hover:text-[#E74F2B] text-gray-300 duration-300 cursor-pointer '>Menu</li>
        <li className='hover:text-[#E74F2B] text-gray-300 duration-300 cursor-pointer '>Gallery</li>
        <li className='hover:text-[#E74F2B] text-gray-300 duration-300 cursor-pointer '>Blog</li>
        <li className='hover:text-[#E74F2B] text-gray-300 duration-300 cursor-pointer '>Contact</li>
      </ul>

      {/* right */}
      <button className='uppercase bg-[#E74F2B] hover:bg-[#6e2616] duration-300 rounded-full px-6 py-2 text-sm poppins'>Book A table</button>
    </nav>
  )
}

export default Navbar
