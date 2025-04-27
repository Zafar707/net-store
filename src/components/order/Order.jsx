import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaBalanceScaleRight, FaHeadphonesAlt } from 'react-icons/fa'

const Order = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1200px] h-[500px] mt-24 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* 1 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white">
              <CiDeliveryTruck size={30} />
            </div>
            <h2 className="text-lg font-bold">BEPUL VA TEZ YETKAZIB BERISH</h2>
            <p className="text-sm text-gray-600">Buyurtmalar uchun bepul yetkazib berish</p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white">
              <FaHeadphonesAlt size={30} />
            </div>
            <h2 className="text-lg font-bold">24/7 MIJOZLARGA XIZMAT KO'RSATISH</h2>
            <p className="text-sm text-gray-600">Do'stona 24/7 mijozlarni qo'llab-quvvatlash</p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white">
              <FaBalanceScaleRight size={30} />
            </div>
            <h2 className="text-lg font-bold">PULNI QAYTARIB BERISH KAFOLATI</h2>
            <p className="text-sm text-gray-600">Biz pulni 30 kun ichida qaytaramiz</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
