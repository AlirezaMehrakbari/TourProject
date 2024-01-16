import React from 'react'

//@ts-ignore
const PaymentDetails = ({item}) => {
    return (

        <div className='w-full  flex flex-col justify-between items-center bg-[#FBFBFB] shadow-lg rounded-[10px] py-6 px-10 lg:flex-row md:w-[70%] lg:w-[60%]'>
            <div>
                <p className='font-kalameh500 text-[14.50px] text-orange'>جزئیات پرداخت</p>
            </div>
            <div className='w-full flex justify-between gap-x-4'>
                <div className='flex flex-col'>
                    <p className=' font-kalameh500 text-[9px] py-2'>{item.price}</p>
                    <p className=' font-kalameh500 text-[9px]'>{item.title}</p>
                </div>
            </div>
        </div>

    )
}

export default PaymentDetails