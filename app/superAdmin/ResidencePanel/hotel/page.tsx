'use client'
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SuperAdminNavbar from "@/app/components/superAdmin/SuperAdminNavbar";
import SuperAdminSidebar from "@/app/components/superAdmin/SuperAdminSidebar";

const ResidencePanel = () => {
    const pathName = usePathname()
    const financialReport = [
        {
            id: 1,
            owner: 'صادق یوقی',
            state: 'مازندران',
            city: 'ساری',
            meter: '127 متر',
            score: '5,7',
        },
        {
            id: 2,
            owner: 'حمید اسماعیلی',
            state: 'مازندران',
            city: 'ساری',
            meter: '127 متر',
            score: '5,7',
        },
        {
            id: 3,
            owner: 'حمید اسماعیلی',
            state: 'مازندران',
            city: 'ساری',
            meter: '127 متر',
            score: '5,7',
        },
        {
            id: 4,
            owner: 'حمید اسماعیلی',
            state: 'مازندران',
            city: 'ساری',
            meter: '127 متر',
            score: '5,7',
        },
        {
            id: 5,
            owner: 'حمید اسماعیلی',
            state: 'مازندران',
            city: 'ساری',
            meter: '127 متر',
            score: '5,7',
        }, {
            id: 6,
            owner: 'حمید اسماعیلی',
            state: 'مازندران',
            city: 'ساری',
            meter: '127 متر',
            score: '5,7',
        },
        {
            id: 7,
            owner: 'حمید اسماعیلی',
            state: 'مازندران',
            city: 'ساری',
            meter: '127 متر',
            score: '5,7',
        },
        {
            id: 8,
            owner: 'حمید اسماعیلی',
            state: 'مازندران',
            city: 'ساری',
            meter: '127 متر',
            score: '5,7',
        },

    ];
    return (
        <div>
            <SuperAdminNavbar/>
            <div className='w-full justify-start py-8 flex gap-x-[7%]'>
                <SuperAdminSidebar/>
                {/*<div className='w-[23%] flex flex-col justify-start gap-y-10  '>*/}
                {/*    <Link*/}
                {/*        className={`${pathName.startsWith('/superAdmin/ResidencePanel') && 'text-white bg-orange rounded-l-full'}`}*/}
                {/*        href={'/superAdmin/ResidencePanel'}>*/}
                {/*        <div className='flex justify-center'>*/}
                {/*            <p className='font-kalameh500 py-3 text-[28px]'>پنل های اقامتگاه</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*    <div className='flex justify-center'>*/}
                {/*        <p className='font-kalameh500 text-[28px]'>توردرحال اجرا</p>*/}
                {/*    </div>*/}
                {/*    <div className='flex justify-center'>*/}
                {/*        <p className='font-kalameh500 text-[28px]'>تبلیغات سایت</p>*/}
                {/*    </div>*/}
                {/*    <div className='flex justify-center'>*/}
                {/*        <p className='font-kalameh500 text-[28px]'>گزارشات</p>*/}
                {/*    </div>*/}
                {/*    <div className='flex justify-center'>*/}
                {/*        <p className='font-kalameh500 text-[28px]'>نظرات</p>*/}
                {/*    </div>*/}
                {/*    <div className='flex justify-center'>*/}
                {/*        <p className='font-kalameh500 text-[28px]'>درخواست ها</p>*/}
                {/*    </div>*/}


                {/*</div>*/}
                <table className='w-[90%] mx-auto text-center md:w-[60%]'>
                    <thead>
                    <tr className='text-white bg-[#3D4576] text-[12px] sm:text-[23px]'>
                        <th className='py-3 rounded-tr-[10px]'>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <p className='font-kalameh500 text-[16px]'>صاحب اقامتگاه</p>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <p className='font-kalameh500 text-[16px]'>استان</p>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <p className='font-kalameh500 text-[16px]'>شهر</p>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <p className='font-kalameh500 text-[16px]'>متراژ</p>
                            </div>
                        </th>
                        <th className='rounded-tl-[10px]'>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <p className='font-kalameh500 text-[16px]'>امتیاز</p>
                            </div>
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {financialReport.map(report => {
                        return (
                            <tr className='even:bg-[#F0F0F0] odd:bg-[#E9E4E4]'>
                                <td className='py-4'>{report.owner}</td>
                                <td>{report.state}</td>
                                <td>{report.city}</td>
                                <td>{report.meter}</td>
                                <td>
                                    <div className='flex flex-row justify-center items-center gap-x-1'>
                                        {report.score}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                             viewBox="0 0 17 17" fill="none">
                                            <path
                                                d="M8.5 1L10.8175 5.93691L16 6.73344L12.25 10.5741L13.135 16L8.5 13.4369L3.865 16L4.75 10.5741L1 6.73344L6.1825 5.93691L8.5 1Z"
                                                fill="#FFD600" stroke="#FFD600" stroke-width="2" stroke-linecap="round"
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
    )
}

export default ResidencePanel
