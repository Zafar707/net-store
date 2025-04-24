import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
const Starter = () => {
  return (
    <div className='bg-cyan-950 flex justify-between gap-5'>
      <p className='flex gap-3 text-amber-50'> <FaLocationDot/> Shahar:Toshkent</p>

      <p className='text-white'>Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida</p>

    
        <select className='text-white bg-cyan-950 border-none outline-none'>
          <option value="uz">Uz</option>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
    
    </div>
  )
}

export default Starter
