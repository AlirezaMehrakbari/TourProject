'use client'
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import Button from "@/app/components/Button";


const SuperAdminSidebar =
    () => {
        const pathName = usePathname()
        return (
            <div className='w-[25%] flex flex-col items-start  gap-y-10    '>
                <Link
                    className={`${pathName.startsWith('/superadmin/residencepanel') && 'text-white bg-orange w-[230px] rounded-l-full py-3 '}`}
                    href={'/superadmin/residencepanel'}>
                    <div className='flex text-center '>
                        <p className='font-kalameh500 py-3 px-6 text-[25px]'>پنل های اقامتگاه</p>
                    </div>
                </Link>
                <Link
                    className={`${pathName.startsWith('/superadmin/runningtours') && 'text-white bg-orange w-[230px] rounded-l-full py-3 '}`}
                    href={'/superadmin/runningtours'}>
                    <div className='flex '>
                        <p className='font-kalameh500 py-3 px-6 text-[25px]'>تورهای مسافرتی</p>
                    </div>
                </Link>
                <div className='flex '>
                    <p className='font-kalameh500  px-6 text-[25px]'>تبلیغات سایت</p>
                </div>
                <Link
                    className={`${pathName.startsWith('/superadmin/accounts') && 'text-white bg-orange w-[230px] rounded-l-full py-3 '}`}
                    href={'/superadmin/accounts'}>
                    <div className='flex '>
                        <p className='font-kalameh500 px-6  text-[25px]'>حساب های کاربری</p>
                    </div>
                </Link>
                <div className='flex '>
                    <p className='font-kalameh500 px-6 text-[25px]'>گزارشات</p>
                </div>
                <Link
                    className={`${pathName.startsWith('/superadmin/articles') && 'text-white bg-orange w-[230px] rounded-l-full py-3 '}`}
                    href={'/superadmin/articles'}>
                    <div className='flex '>
                        <p className='font-kalameh500 px-6 text-[25px] '> ثبت مقالات</p>
                    </div>
                </Link>



            </div>
        )
    }
export default SuperAdminSidebar