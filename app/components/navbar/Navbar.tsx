import React from 'react'
import Logo from "@/app/components/navbar/Logo";
import Button from "@/app/components/Button";
import {usePathname} from "next/navigation";
import Link from "next/link";
import DropDown from "@/app/components/navbar/DropDown";

type Option = {
    value: string,
    label: string
}

const Navbar = () => {
    const pathname = usePathname()
    const options: Option[] = [
        {value: 'اطلاعات حساب کاربری', label: 'اطلاعات حساب کاربری'},
        {value: 'خروج از حساب کاربری', label: 'خروج از حساب کاربری'}
    ]

    return (
        <div
            className='w-full flex justify-between items-center px-[2rem] xl:px-[10rem] py-8 shadow-lg rounded-br-[30px] rounded-bl-[30px] fixed bg-white z-50'>
            <div className='flex items-center'>
                <Link href={'/'} className='pl-6'><Logo/></Link>
                <ul className='hidden items-center lg:text-[20.6px] font-kalameh400 lg:gap-x-[53px] lg:flex'>
                    <Link href={'/villa'} className={(pathname === '/villa' ? 'active' : '')}>
                        <li>ویلا</li>
                    </Link>
                    <Link href={'/'}>
                        <li>آپارتمان</li>
                    </Link>
                    <Link href={'/'}>
                        <li>ساحلی</li>
                    </Link>
                    <Link href={'/'}>
                        <li>هتل</li>
                    </Link>
                    <Link href={'/tour'} className={(pathname === '/tour' ? 'active' : '')}>
                        <li>خرید تور</li>
                    </Link>
                </ul>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-[5px]'>
                <h1 className='lg:text-[20.6px] font-kalameh500'>021-77805</h1>
                <DropDown
                    label={'حساب کاربری'}
                    styles='w-[150px] text-[14px] font-kalameh500 rounded-[7.6px] flex item-center gap-x-3'
                    onClick={() => {
                    }}>
                    <div
                        className='absolute bg-orange text-white top-[32px] py-4 px-2 w-full rounded-br-[7.6px] rounded-bl-[7.6px] text-[15px]'>
                        <ul className='flex flex-col gap-y-2 justify-center items-center'>
                            <li onClick={(e)=>{console.log(e.target)}} className='hover:text-[#2C2AAF] cursor-pointer'>اطلاعات حساب کاربری</li>
                            <li className='hover:text-[#2C2AAF] cursor-pointer'>خروج از حساب کاربری</li>
                        </ul>
                    </div>
                </DropDown>
            </div>
        </div>
    )
}

export default Navbar
