import React from 'react'

const PopularFood = () => {

const foods = [
  {id:1,
    name:"Italian Sauce Mushroom
    $19.00
    Image
    Salted Fried Chicken
    $19.00
    Image
    Fried Potato w/ Garlic
    $19.00
    Image
    Shrimp and olive
    $19.00
    Drinks
    4/4
    Image
    Italian Sauce Mushroom
    $19.00
    Image
    Salted Fried Chicken
    $19.00
    Image
    Fried Potato w/ Garlic
    $19.00
    Image
    Shrimp and olive
    $19.00
    Breakfast
    1/4
    Image
    Italian Sauce Mushroom"
    url:"https://preview.colorlib.com/theme/meal2/images/img_1.jpg"
  }
]


  return (
    <div className='bg-[#F9E2B2] h-screen'>
      <div>
        <h1 className='text-4xl text-center madimi-one-regular'>Popular <span className='text-[#E74F2B]'>Foods</span></h1>
      </div>

      <div className='flex my-4 items-center justify-center gap-x-5'>
        <button className='bg-white flex items-center gap-5 text-sm poppins rounded-2xl py-2 px-3'><img className='w-[50px] h-[50px]'  src="https://preview.colorlib.com/theme/meal2/images/1x/noodles.png"  />Breakfast</button>
        <button className='bg-white flex items-center gap-5 text-sm poppins rounded-2xl py-2 px-3'><img className='w-[50px] h-[50px]'  src="https://preview.colorlib.com/theme/meal2/images/1x/chicken.png" alt="" />Lunch</button>
        <button className='bg-white flex items-center gap-5 text-sm poppins rounded-2xl py-2 px-3'><img className='w-[50px] h-[50px]'  src="https://preview.colorlib.com/theme/meal2/images/1x/hotdog.png" alt="" />Dinner</button>
        <button className='bg-white flex items-center gap-5 text-sm poppins rounded-2xl py-2 px-3'><img className='w-[50px] h-[50px]'  src="https://preview.colorlib.com/theme/meal2/images/1x/drinks.png" alt="" />Drinks</button>
      </div>

    </div>
  )
}

export default PopularFood
