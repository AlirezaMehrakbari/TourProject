'use client'
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import Button from "@/app/components/Button";



const SuperAdminSidebar =
    (

) => {
        const pathName = usePathname()
    return (
        <div className='w-[23%] flex flex-col justify-start gap-y-10  '>
            <Link
                className={`${pathName.startsWith('/superadmin/residencepanel') && 'text-white bg-orange rounded-l-full' }`}
                href={'/superadmin/residencepanel'}>
                <div className='flex justify-center'>
                    <p className='font-kalameh500 py-3 text-[28px]'>پنل های اقامتگاه</p>
                </div>
            </Link>
            <Link
                className={`${pathName.startsWith('/superadmin/runningtours') && 'text-white bg-orange rounded-l-full'}`}
                href={'/superadmin/runningtours'}>
                <div className='flex justify-center'>
                    <p className='font-kalameh500 py-3 text-[28px]'>توردرحال اجرا</p>
                </div>
            </Link>
            <div className='flex justify-center'>
                <p className='font-kalameh500 text-[28px]'>تبلیغات سایت</p>
            </div>
            <div className='flex justify-center'>
                <p className='font-kalameh500 text-[28px]'>گزارشات</p>
            </div>
            <div className='flex justify-center'>
                <p className='font-kalameh500 text-[28px]'>نظرات</p>
            </div>
            <div className='flex justify-center'>
                <p className='font-kalameh500 text-[28px] '>درخواست ها</p>
            </div>
           <div className='flex justify-center'>
               <Button outline styles={'w-[60%] rounded-full'}>تور های برگزار شده</Button>
           </div>

        </div>
    )
}
export default SuperAdminSidebar