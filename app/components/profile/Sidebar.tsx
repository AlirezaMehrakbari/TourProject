'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const sidebar = () => {
  const pathName = usePathname()

  return (
    <div className="relative md:mr-20 h-fit rounded-md shadow-xl bg-[#F0F0F0] max-md:mx-auto w-[70%] md:w-[250px] lg:w-[300px] top-10">
      <div className='w-[80%] flex flex-col mx-auto divide-y divide-[#D3D3D3] gap-y-4 py-[30px]'>
        <div className='flex justify-center items-center'>
          <Link className={`${pathName === '/profile/travels' && 'text-orange'}`} href={'/profile/travels'}>
            <h2 className="font-kalameh500 text-[12px] text-right item-center ">سفرهای من</h2>
            <p className="font-kalameh400 text-[8px] text-right">لیست سفرها و درخواست ها </p>
          </Link>
        </div>

        <div className=" pt-4 flex justify-center items-center">
          <Link className={`${pathName === '/profile/favorite' && 'text-orange'}`} href={'/profile/favorite'}>
            <h2 className="font-kalameh500 text-[12px] text-right ">موردعلاقه ها</h2>
            <p className="font-kalameh400 text-[8px]  text-right ">لیست اقامتگاه های مورد علاقه </p>
          </Link>
        </div>

        <div className=" pt-4 flex justify-center items-center">
          <Link className={`${pathName === '/profile/transaction' && 'text-orange'}`} href={'/profile/transaction'}>
            <h2 className="font-kalameh500 text-[12px] text-right "> تراکنش های من</h2>
            <p className="font-kalameh400 text-[8px]  text-right ">مشاهده تاریخ و تراکنش های شما</p>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default sidebar