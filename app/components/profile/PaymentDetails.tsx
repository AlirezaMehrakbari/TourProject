import React from 'react'

const PaymentِِِDetails = () => {
    return (

        <div className='flex w-[77%] bg-[#FBFBFB] shadow-lg rounded-[10px] my-6'>
            <div>
                <p className='font-kalameh500 text-[14.50px] text-orange pr-[35px] py-[40px]'>جزئیات پرداخت</p>
            </div>
            <div className=' w-[60%] flex pr-[38px]'>
                <div className='flex flex-col py-7'>
                    <p className=' font-kalameh500 text-[9px] py-2'>دوشنبه 5 ابان 1402</p>
                    <p className=' font-kalameh500 text-[9px]'>سه شنبه 6 ابان 1402</p>
                </div>
                <div className='flex flex-col py-7 pr-[60px]'>
                    <p className='pr-[50px] font-kalameh500 text-[9px] py-2'>600,000 تومان</p>
                    <p className='pr-[50px] font-kalameh500 text-[9px] '>600,000 تومان</p>
                </div>
            </div>
        </div>

    )
}

export default PaymentِِِDetails