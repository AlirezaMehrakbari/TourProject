import React from 'react'
import Logo from "@/app/components/navbar/Logo";
import {usePathname} from "next/navigation";
import Link from "next/link";
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";
const Navbar = () => {
    const pathname = usePathname()
    return (
        <div
            className='w-full flex justify-between items-center px-[2rem] xl:px-[10rem] py-8 shadow-lg rounded-br-[30px] rounded-bl-[30px] fixed bg-white z-50'>
            <div className='flex items-center'>
                <Link href={'/'} className='pl-6'><Logo width={'w-[190px] h-[90px]'}/></Link>
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
                <SelectDropDown
                    label={'امیر ولی زاده'}
                    styles={'relative bg-orange text-white px-4 py-2 rounded-[8px] flex flex-col items-center cursor-pointer'}
                    labelStyles={'text-[14px] font-kalameh500'}
                    dropDownStyles={'absolute w-full'}
                >
                    <div
                        className='absolute bg-orange text-white top-[22px] py-4 px-2 w-full rounded-br-[7.6px] rounded-bl-[7.6px] text-[10px] font-kalameh500'>
                        <ul className='flex flex-col gap-y-2 justify-center items-center'>
                            <Link href={'/profile'}><li className='hover:text-[#2C2AAF] cursor-pointer'>اطلاعات حساب کاربری</li></Link>
                            <Link href={'/profile'}><li className='hover:text-[#2C2AAF] cursor-pointer'>خروج از حساب کاربری</li></Link>
                        </ul>
                    </div>
                </SelectDropDown>
            </div>
        </div>
    )
}

export default Navbar
