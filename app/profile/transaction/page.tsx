'use client'
import ButtnosAdmin from '@/app/components/profile/ButtnosAdmin'
import PaymentDetails from '@/app/components/profile/PaymentDetails'
import Sidebar from '@/app/components/profile/Sidebar'
import React from 'react'

const Transaction = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col'>
            <div className="py-8">
                <ButtnosAdmin />
            </div>
            <h1 className="font-kalameh700 mr-[338px]">تراکنش های من</h1>
            <div className="w-[full]  flex flex-row-reverse justify-between pb-10 pt-7">
                <div className="w-[61%] mr-[140px] flex flex-col rounded-md  py-8">

                    <div className='flex'>
                        <p className=''> تراکنش ابان 1402 </p>
                        <svg className='my-3 mx-[10px]' xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 731 2" fill="none">
                            <path d="M730 1L0.999991 1" stroke="#D3D3D3" stroke-width="0.5" stroke-linecap="round" />
                        </svg>
                    </div>
                   <PaymentDetails/>
                   <PaymentDetails/>
                   <PaymentDetails/>
                    <div className='flex my-4'>
                        <p className=''> تراکنش مهر 1402 </p>
                        <svg className='my-3 mx-[10px]' xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 731 2" fill="none">
                            <path d="M730 1L0.999991 1" stroke="#D3D3D3" stroke-width="0.5" stroke-linecap="round" />
                        </svg>
                    </div>
                   <PaymentDetails/>
                   <PaymentDetails/>
                   <PaymentDetails/>
                </div>
                <Sidebar />
            </div>

        </div>
    )
}

export default Transaction