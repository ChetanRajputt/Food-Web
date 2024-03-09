import React from 'react';
import bg from "/public/hero_bg.jpg"; 
import Navbar from '../Navbar/Navbar';

const HeroSection = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='w-full h-screen bg-center bg-cover bg-fixed'>
        <div className='bg-black  h-full w-full bg-opacity-40'></div>

        <div className='absolute top-0 left-0 w-full'>
       <Navbar/>
      <div className='flex items-center flex-col justify-center text-center mt-16 text-white gap-4'>
        <div className="p-8 rounded-lg">
          <h2 className='poppins text-sm'>ENJOY YOUR HEALTHY DELICIOUS MEAL</h2>
          <h1 className='my-6 madimi-one-regular text-7xl'>Treat Yourself</h1>
          <p className='poppins'>Another free template by Colorlib. Far far away, behind the word <br />mountains, far from the countries Vokalia and Consonantia, there <br />live the blind texts.</p>
          <button className='uppercase bg-[#E74F2B] hover:bg-[#6e2616] duration-300 rounded-full px-8 py-4 text-sm poppins mt-4'>Explore Now</button>
        </div>
      </div> 
      </div>
    </div>
  );
};

export default HeroSection;
