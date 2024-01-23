'use client'
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SuperAdminNavbar from "@/app/components/superAdmin/SuperAdminNavbar";
import SuperAdminSidebar from "@/app/components/superAdmin/SuperAdminSidebar";
import Button from "@/app/components/Button";
import Inputs from "@/app/components/superAdmin/inputs";
import {tripTourApi} from "@/axios-instances";
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/components/Loading";
import {useAppSelector} from "@/app/redux/store";
import ResidenceInput from "@/app/components/superAdmin/inputs";
const ResidencePanel = () => {
    const pathName = usePathname()
    const userSession = useAppSelector(state=>state.userSlice)
    //@ts-ignore
    const fetchHotelSuper = async (): Promise<{}> => {
        const res = await tripTourApi.get('/places/all')
        return res.data.data

    }

    const {data, isLoading} = useQuery({
        queryKey: ['HotelSuper'],
        queryFn: () => fetchHotelSuper()
    })
    if (isLoading) return <Loading/>
    if (!data) return <p>Not found!!</p>



    return (
        <div className='flex flex-col gap-y-24'>
            <SuperAdminNavbar/>
            <div className='w-full justify-start py-8 flex gap-x-[7%]'>
                <SuperAdminSidebar/>
                <div className='w-full flex flex-col items-center gap-y-2'>
                    <div className='w-[90%] flex justify-between  '>
                        <ResidenceInput/>
                    </div>
                    <table className='w-[90%] mx-auto text-center '>
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
                        {/*@ts-ignore*/}
                        {data.map(report => {
                            return (
                                <tr className='even:bg-[#F0F0F0] odd:bg-[#E9E4E4]'>
                                    <td className='py-4'>{report.owner}</td>
                                    <td>{report.address.state}</td>
                                    <td>{report.address.city}</td>
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

        </div>
    )
}

export default ResidencePanel
