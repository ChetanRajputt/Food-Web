import React from 'react'

const Products = () => {

  const items = [
    {
      name: "Cherry Muffin",
      price: 20,
      img: "https://preview.colorlib.com/theme/meal2/images/1x/dessert_1.png"
    },
    {
      name: "Rose Muffin",
      price: 20,
      img: "https://preview.colorlib.com/theme/meal2/images/1x/dessert_2.png"
    },
    {
      name: "Sweat Donut",
      price: 20,
      img: "https://preview.colorlib.com/theme/meal2/images/1x/dessert_5.png"
    },
    {
      name: "Choco Cake",
      price: 20,
      img: "https://preview.colorlib.com/theme/meal2/images/1x/dessert_4.png"
    },

  ]
  return (
    <main className='py-8 bg-[#F9E2B2] '>
      <div className='text-center'>
        <h2 className='text-[#997C5A] text-sm'>CHOOSE DESSERTS
        </h2>
        <h1 className='text-3xl poppins'>Popular <span className='text-[#E74F2B] madimi-one-regular'>Desserts</span></h1>
      </div>

      <section className='w-full flex items-center gap-2 px-20 justify-center'>
        {
          items.map((item, index) => (
            <div key={index} className='hover:bg-white duration-300 cursor-pointer flex items-center justify-center gap-5 px-3  border w-[280px] h-[170px] m-8'>
              <img src={item.img} />
              <div>
                <h1 className='poppins'>{item.name}</h1>
                <p className='text-red-500'>${item.price}</p>
              </div>
            </div>

          ))
        }
      </section>
    </main>
  )
}

export default Products
