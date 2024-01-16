'use client'

import Reserve from '@/app/components/profile/Reserve'
import Link from 'next/link'
import {tripTourApi} from "@/axios-instances";
import {useQuery} from "@tanstack/react-query";
import {useAppSelector} from "@/app/redux/store";
import Loading from "@/app/components/Loading";
import React from "react";

const Travels = () => {
    const userSession = useAppSelector(state => state.userSlice)

    const fetchMyTour = async (): Promise<{}> => {
        const res = await tripTourApi.get(`users/reservations/places`, {
            headers: {
                Authorization: `${userSession.value.token}`
            }
        })
        // console.log(res)
        return res.data["user reservations"]
    }
    const {data: myTourData, isLoading, isError} = useQuery({
        queryKey: ['myTour'],
        queryFn: () => fetchMyTour()
    })
    if (!isLoading){
    //@ts-ignore
        console.log()
    }
    if (!myTourData) return <p>Not found!!</p>
    return (
        isLoading ?
            <Loading/>
        :
            <>
                <div className='w-full md:w-[60%] flex flex-col pr-8'>
                    <h1 className="font-kalameh700 ">سفر های من</h1>
                    <div className="w-full  flex flex-col justify-between pb-10 pt-7 md:flex-row">
                        <div className="w-full flex flex-col rounded-md  py-8">
                            <div className='flex w-[100%] border-b border-[#D3D3D3] md:w-[40%] '>
                                <Link href={'./travels'}>

                                    <p className='pb-2 font-kalameh500 text-[#000] border-b-2'>اخرین رزرو</p>
                                </Link>
                                <Link href={'./travels/prevReserve'}>
                                    <p className='mx-7 pb-2 font-kalameh500 text-[#8B8B8B] text-[15px] '> رزروهای قبلی</p>
                                </Link>
                            </div>
                            {/*<div className='flex w-[75%] border-b border-[#D3D3D3] mx-4 mt-[77px] '>*/}
                            {/*    <p className='pb-4 font-kalameh400 text-[18.97] text-[#000]'>جزئیات اخرین رزرو شما</p>*/}
                            {/*</div>*/}
                            {/*@ts-ignore*/}
                            {myTourData.map(item =>{
                                return(
                                    <div className='w-full md:w-[75%] gap-y-8'>
                                        {/*@ts-ignore*/}
                                        <Reserve item={item}/>
                                    </div>
                                )
                            })}

                        </div>

                    </div>

                </div>
            </>
    )
}

export default Travels