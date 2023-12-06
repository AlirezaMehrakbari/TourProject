import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from "next/link";


const sidebar = () => {
  const pathName = usePathname()

  return (
<<<<<<< HEAD
    <div className="w-[266px] h-full rounded-md shadow-xl bg-[#F0F0F0] ">
    <div className='w-[80%] flex flex-col mx-auto divide-y divide-[#D3D3D3] gap-y-4 py-[30px] '>
    <Link href={'/profile/travels'}>
        <h2 className="font-kalameh500 text-[12px] text-right mr-10 ">سفرهای من</h2>
        <p className="font-kalameh400 text-[8px] text-right mr-10">لیست سفرها و درخواست ها </p>
    </Link>

    <Link href={'/profile/favorite'} className=" pt-4 ">
        <h2 className="font-kalameh500 text-[12px] text-right mr-10"> موردعلاقه ها</h2>
        <p className="font-kalameh400 text-[8px]  text-right mr-10">لیست اقامتگاه های مورد علاقه </p>
    </Link>

    <Link href={'/profile/transaction'}  className=" pt-4">
        <h2 className="font-kalameh500 text-[12px] text-right mr-10"> تراکنش های من</h2>
        <p className="font-kalameh400 text-[8px]  text-right mr-10">مشاهده تاریخ و تراکنش های شما</p>
    </Link>
    </div>
=======
    <div className="w-[80%] mx-auto h-full rounded-md shadow-xl bg-[#F0F0F0] md:w-[25%] ">
      <div className='w-[80%] flex flex-col mx-auto divide-y divide-[#D3D3D3] gap-y-4 py-[30px] md:mx-auto '>
        <div>
          <Link className={`${pathName === '/profile/travels' && 'text-orange'}`} href={'/profile/travels'}>
            <h2 className="font-kalameh500 text-[12px] text-right item-center ">سفرهای من</h2>
            <p className="font-kalameh400 text-[8px] text-right mr-10">لیست سفرها و درخواست ها </p>
          </Link>
        </div>

        <div className=" pt-4 ">
          <Link className={`${pathName === '/profile/favorite' && 'text-orange'}`} href={'/profile/favorite'}>
            <h2 className="font-kalameh500 text-[12px] text-right mr-10">موردعلاقه ها</h2>
            <p className="font-kalameh400 text-[8px]  text-right mr-10">لیست اقامتگاه های مورد علاقه </p>
          </Link>
        </div>

        <div className=" pt-4">
          <Link className={`${pathName === '/profile/transaction' && 'text-orange'}`} href={'/profile/transaction'}>
            <h2 className="font-kalameh500 text-[12px] text-right mr-10"> تراکنش های من</h2>
            <p className="font-kalameh400 text-[8px]  text-right mr-10">مشاهده تاریخ و تراکنش های شما</p>
          </Link>
        </div>
      </div>
>>>>>>> main

    </div>
  )
}

export default sidebar