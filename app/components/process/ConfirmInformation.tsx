import React from 'react'
import Footer from "@/app/components/footer/footer";
import Button from "@/app/components/Button";
import useStep from "@/app/hooks/useStep";
import Stepper from "@/app/components/Stepper";

const ConfirmInformation = () => {
    const step = useStep()
    return (
        <div>
            <Stepper/>
            <div className='flex flex-col gap-y-4 w-[60%] bg-[#FAFAF9] rounded-[14px] mx-auto mt-8 p-8 shadow-md'>
                <div className='flex items-center justify-between border-b-[1px] border-[#D2D2D2] py-2 '>
                    <p className='text-[20px] font-kalameh400'>مبدا</p>
                    <p className='text-[20px] font-kalameh500'>تهران</p>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-[#D2D2D2] py-2 '>
                    <p className='text-[20px] font-kalameh400'>مقصد</p>
                    <p className='text-[20px] font-kalameh500'>استانبول</p>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-[#D2D2D2] py-2 '>
                    <p className='text-[20px] font-kalameh400'>تور مسافرتی</p>
                    <p className='text-[20px] font-kalameh500'>تور سفیـران</p>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-[#D2D2D2] py-2 '>
                    <p className='text-[20px] font-kalameh400'>تاریخ سفر</p>
                    <p className='text-[20px] font-kalameh500'>17 - 20 آبان</p>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-[#D2D2D2] py-2 '>
                    <p className='text-[20px] font-kalameh400'>شماره پرواز</p>
                    <p className='text-[20px] font-kalameh500'>AR 5046</p>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-[#D2D2D2] py-2 '>
                    <p className='text-[20px] font-kalameh400'>کلاس پروازی</p>
                    <p className='text-[20px] font-kalameh500'>اکونومـی</p>
                </div>
            </div>
            <Button
                styles='text-[28px] font-kalameh500 mx-auto px-8 py-6 rounded-[16px] mt-20'
                onClick={step.nextStep}
            >
                تایید اطلاعات سفر
            </Button>
            <Footer/>
        </div>
    )
}

export default ConfirmInformation
