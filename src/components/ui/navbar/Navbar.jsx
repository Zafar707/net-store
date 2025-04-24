import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center' >
      <div className='w-[1200px] border border-amber-400 m-auto' >
      <h2 className='text-black text-[30px]' >
        BrandLogo
        </h2>
        <ul className=' flex gap-9 text-[26px] text-black'>
          <li><NavLink to="/">Bosh sahifa</NavLink></li>
          <li><NavLink to="/">Katalog</NavLink></li>     
          <li><NavLink to="/about">Biz haqimizda</NavLink></li>
          <li><NavLink to="/contact">Aloqa</NavLink></li>  
        </ul>
          <div>
            <input type="text" placeholder='Qidirish' className='border-2 border-black rounded-md p-2' />
            <button type="button" className='bg-black text-white p-2 rounded-md'>Qidirish🔎</button>
          </div>
      </div>
        
    </div>
  )
}

export default Navbar
