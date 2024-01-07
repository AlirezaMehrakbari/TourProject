'use client'
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SuperAdminNavbar from "@/app/components/superAdmin/SuperAdminNavbar";
import SuperAdminSidebar from "@/app/components/superAdmin/SuperAdminSidebar";
import Inputs from "@/app/components/superAdmin/inputs";

const Accounts = () => {
    const pathName = usePathname()
    const financialReport = [
        {
            id: 1,
            firstname: 'علی',
            lastname: 'جعفری',
            phone: '0913***4500',
        },
        {
            id: 2,
            firstname: 'علی',
            lastname: 'جعفری',
            phone: '0913***4500',
        },
        {
            id: 3,
            firstname: 'علی',
            lastname: 'جعفری',
            phone: '0913***4500',
        },
        {
            id: 4,
            firstname: 'علی',
            lastname: 'جعفری',
            phone: '0913***4500',
        },
        {
            id: 5,
            firstname: 'علی',
            lastname: 'جعفری',
            phone: '0913***4500',
        },
        {
            id: 6,
            firstname: 'علی',
            lastname: 'جعفری',
            phone: '0913***4500',
        },

    ];
    return (
        <div className='flex flex-col gap-y-24'>
            <SuperAdminNavbar
                titelea='' titeleb='' titelec='' titeled=''
            />
            <div className='w-full justify-start py-8 flex gap-x-[7%]'>
                <SuperAdminSidebar/>
                <div className='w-full flex flex-col items-center gap-y-2 '>
                    <div className='w-[90%] flex justify-between  '>
                        <Inputs
                            className3='hidden' className2='hidden' placeholder1='نام کاربر را وارد کنید'
                        />
                        <button className='w-[10%] rounded-md bg-[#533FA1] py-2 text-white '>فیلتر</button>
                    </div>
                    <table className='w-[90%] mx-auto text-center '>
                        <thead>
                        <tr className='text-white bg-[#3D4576] text-[12px] sm:text-[23px]'>
                            <th className='py-3 rounded-tr-[10px]'>
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>نام</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>نام خانوادگی</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>شماره موبایل</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>غیرفعال</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>حذف</p>
                                </div>
                            </th>
                            <th>
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>ویرایش</p>
                                </div>
                            </th>

                            <th className='rounded-tl-[10px]'>
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <p className='font-kalameh500 text-[16px]'>مشاهده</p>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {financialReport.map(report => {
                            return (
                                <tr className='even:bg-[#F0F0F0] odd:bg-[#E9E4E4] text-center mx-auto'>
                                    <td className='py-4'>{report.firstname}</td>
                                    <td>{report.lastname}</td>
                                    <td>{report.phone}</td>
                                    <td >
                                        <div className='flex flex-row justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                                                    stroke="black" stroke-width="1.2" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                                <path d="M3.05078 3.05078L12.9488 12.9488" stroke="black" stroke-width="1.2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                       <div className='flex flex-row justify-center items-center'>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                               <path d="M1 3.7998H2.55556H15" stroke="black" stroke-width="0.777778"
                                                     stroke-linecap="round" stroke-linejoin="round"/>
                                               <path
                                                   d="M13.4436 3.8V13.6C13.4436 13.9713 13.2797 14.3274 12.988 14.5899C12.6962 14.8525 12.3006 15 11.888 15H4.11024C3.69768 15 3.30202 14.8525 3.0103 14.5899C2.71858 14.3274 2.55469 13.9713 2.55469 13.6V3.8M4.88802 3.8V2.4C4.88802 2.0287 5.05191 1.6726 5.34363 1.41005C5.63536 1.1475 6.03102 1 6.44358 1H9.55469C9.96725 1 10.3629 1.1475 10.6546 1.41005C10.9464 1.6726 11.1102 2.0287 11.1102 2.4V3.8"
                                                   stroke="black" stroke-width="0.777778" stroke-linecap="round"
                                                   stroke-linejoin="round"/>
                                           </svg>
                                       </div>
                                    </td>
                                    <td>
                                       <div className='flex flex-row justify-center items-center'>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                               <path
                                                   d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z"
                                                   stroke="black" stroke-width="0.655624" stroke-linecap="round"
                                                   stroke-linejoin="round"/>
                                           </svg>
                                       </div>
                                    </td>
                                    <td>
                                       <div className='flex flex-row justify-center items-center'>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                               <path d="M4.88867 1H14.9992" stroke="black" stroke-linecap="round"
                                                     stroke-linejoin="round"/>
                                               <path d="M4.88867 8H14.9992" stroke="black" stroke-linecap="round"
                                                     stroke-linejoin="round"/>
                                               <path d="M4.88867 15H14.9992" stroke="black" stroke-linecap="round"
                                                     stroke-linejoin="round"/>
                                               <path d="M1 1H1.00707" stroke="black" stroke-linecap="round"
                                                     stroke-linejoin="round"/>
                                               <path d="M1 8H1.00707" stroke="black" stroke-linecap="round"
                                                     stroke-linejoin="round"/>
                                               <path d="M1 15H1.00707" stroke="black" stroke-linecap="round"
                                                     stroke-linejoin="round"/>
                                           </svg>
                                       </div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Accounts
