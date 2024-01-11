'use client'
import ButtnosAdmin from '@/app/components/profile/ProfileNavbar'
import PaymentDetails from '@/app/components/profile/PaymentDetails'
import Sidebar from '@/app/components/profile/Sidebar'
import React from 'react'
import ProfileNavbar from "@/app/components/profile/ProfileNavbar";
import {tripTourApi} from "@/axios-instances";
import {useAppSelector} from "@/app/redux/store";
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/components/Loading";

const Transaction = () => {
    // const data = [1, 2, 3]

    const userSession = useAppSelector(state => state.userSlice)
    const fetchTransaction = async (): Promise<Villa[]> => {
        const res = await tripTourApi.get('/users/getUserTransaction', {
            headers: {
                Authorization: `Bearer ${userSession.value.token}`
            }
        })
        return res.data['user transactions']
    }

    const {data, isLoading} = useQuery({
        queryKey: ['transaction'],
        queryFn: () => fetchTransaction()
    })
    if (isLoading) return <Loading/>
    if (!data) return <p>Not found!!</p>

    return (
        <div className='w-[90%] md:w-[65%] sm:w-[70%] mx-auto flex flex-col'>
            <div className="w-full  flex flex-col justify-between pb-10 pt-7 md:flex-row">
                <div className="w-full flex flex-col rounded-md  md:mt-[-2rem]">
                    <h1 className="font-kalameh700 pb-8 max-md:pt-8 max-md:text-center">تراکنش های من</h1>

                    <div className='flex pb-4'>
                        <p className=''> تراکنش ابان 1402 </p>
                        <svg className='my-3 mx-[10px]' xmlns="http://www.w3.org/2000/svg" width="50%" height="2" viewBox="0 0 731 2" fill="none">
                            <path d="M730 1L0.999991 1" stroke="#D3D3D3" strokeWidth="0.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        {data.map(item => {
                            return (
                                <PaymentDetails />
                            )
                        })}
                    </div>
                    <div className='flex my-4'>
                        <p className=''> تراکنش مهر 1402 </p>
                        <svg className='my-3 mx-[10px]' xmlns="http://www.w3.org/2000/svg" width="50%" height="2" viewBox="0 0 731 2" fill="none">
                            <path d="M730 1L0.999991 1" stroke="#D3D3D3" strokeWidth="0.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        {data.map(item => {
                            return (
                                <PaymentDetails />
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Transaction