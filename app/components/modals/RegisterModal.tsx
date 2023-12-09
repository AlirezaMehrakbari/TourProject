'use client'
import React, {useState} from 'react'
import Logo from "@/app/components/navbar/Logo";
import Button from "@/app/components/Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    phoneNumber: number,

}
const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const {register, handleSubmit} = useForm<Inputs>()
    const [phoneNumber, setPhoneNumber] = useState<number>()
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(0)

    const handleFirstStep: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        setStep(prev => prev + 1)
        setPhoneNumber(data.phoneNumber)
    }
    const handleSecondStep: SubmitHandler<Inputs> = (data) => {
        setStep(prev => prev + 1)
    }
    const handleThirdStep = ()=>{
        registerModal.onClose()
    }

    let content;
    switch (step) {
        case 0 : {
            content = (
                <form onSubmit={handleSubmit(handleFirstStep)}
                      className='flex flex-col items-center py-12 w-[45%] mx-auto'>
                    <Logo width={'w-full'}/>
                    <h2 className='text-[21.5px] font-kalameh500 pt-12'>عضویت در تریپ تور</h2>
                    <p className='text-[14px] pt-2 text-[#000]'>برای ورود شماره همراه خود را وارد کنید</p>
                    <div
                        className='flex items-center justify-end bg-[#EDECEC] py-3 rounded-[5px] my-4 w-full'>
                        <input
                            className='bg-transparent outline-0 pl-4'
                            type='number'
                            placeholder='09XXXXXXXXX'
                            dir={'ltr'}
                            {...register('phoneNumber')}
                        />
                        <p className='border-r-[1px] px-4 text-[18px]'>98</p>
                    </div>
                    <Button type={'submit'} disabled={isLoading}
                            styles='w-full text-[20px] font-kalameh700 rounded-[5px] py-6'>
                        ادامــه
                    </Button>
                </form>
            )
            break
        }
        case 1: {
            content = (
                <form onSubmit={handleSubmit(handleSecondStep)}
                      className='flex flex-col items-center py-12 w-[45%] mx-auto'>
                    <h2 className='text-[21.5px] font-kalameh500 pt-12'>تایید شماره موبایل</h2>
                    <p className='text-[14px] pt-2 text-[#000]'>کد 5 رقمی ارسـال شده را وارد کنید</p>
                    <div
                        className='flex items-center justify-between bg-[#EDECEC] py-3 px-4 rounded-[5px] mt-4 w-full'>
                        <button type='button' onClick={() => setStep(prev => prev - 1)}
                                className='text-[14px] text-[#979797]'>
                            ویرایش شماره
                        </button>
                        <p className='text-[14px] text-[#979797] font-kalameh500'>{phoneNumber}</p>
                    </div>
                    <div className='flex items-center justify-between py-2'>
                        <input
                            className='w-[20%] bg-[#EDECEC] outline-none px-2 py-3 rounded-[5px]'
                            type={"number"}

                        />
                        <input
                            className='w-[20%] bg-[#EDECEC] outline-none px-2 py-3 rounded-[5px]'
                            type={"number"}
                        />
                        <input
                            className='w-[20%] bg-[#EDECEC] outline-none px-2 py-3 rounded-[5px]'
                            type={"number"}
                        />
                        <input
                            className='w-[20%] bg-[#EDECEC] outline-none px-2 py-3 rounded-[5px]'
                            type={"number"}
                        />
                    </div>
                    <div className='flex items-center justify-between w-full py-2'>
                        <button className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
                                 fill="none">
                                <path d="M1 1.73047V6.15191H5.42144" stroke="black" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path
                                    d="M1.73682 9.84287C2.21462 11.1991 3.11902 12.3622 4.31599 13.159C5.51296 13.9557 7.31332 14.336 8.74883 14.2534C10.1843 14.1707 11.5541 13.6238 12.6518 12.695C13.7494 11.7662 14.5155 10.5058 14.8346 9.10378C15.1536 7.70173 15.0084 6.23397 14.4207 4.92165C13.8331 3.60932 12.8348 2.52353 11.5764 1.82787C10.318 1.13221 8.86761 0.864361 7.44374 1.06469C6.01987 1.26502 4.96514 1.82638 3.94753 2.84227L1.73682 5.42144"
                                    stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className='pr-2 text-[10px]'>ارسال مجدد کد</p>
                        </button>
                        <div className='text-[10px]'>
                            <span className='font-kalameh700'>02:00</span> تا زمان ارسال کد
                        </div>
                    </div>
                    <Button disabled={isLoading} styles='w-full text-[20px] font-kalameh700 rounded-[5px] py-6'>
                        ادامــه
                    </Button>
                </form>
            )
            break
        }
        case 2: {
            content = (
                <form onSubmit={handleSubmit(handleThirdStep)}
                      className='flex flex-col items-center py-12 w-[45%] mx-auto'>
                    <h2 className='text-[21.5px] font-kalameh500 pt-12'>مشخصات شخصی</h2>
                    <p className='text-[14px] pt-2 text-[#000]'>لطفا مشخصات خود را وارد کنید</p>
                    <div className='flex flex-col w-full gap-y-2 py-2'>
                        <input
                            className='bg-[#EDECEC] outline-none px-2 py-3 rounded-[5px]'
                            placeholder='نام'
                            type={"text"}

                        />
                        <input
                            className='bg-[#EDECEC] outline-none px-2 py-3 rounded-[5px]'
                            placeholder='نام خانوادگی'
                            type={"text"}
                        />
                    </div>
                    <Button disabled={isLoading} styles='w-full text-[20px] font-kalameh700 rounded-[5px] mt-10 py-6'>
                        ثبت
                    </Button>
                </form>
            )
        }

    }

    return (
        <div
            className={`${registerModal.isOpen ? 'block' : 'hidden'} translate duration-300 fixed bg-neutral-800/70 inset-0 z-50 overflow-y-hidden flex justify-center items-center`}>
            <div className="relative inset-x-0 mx-auto w-[80%] bg-[#FFF] rounded-[5px] md:w-[40%]">
                <button
                    onClick={() => {
                        registerModal.onClose();
                        setStep(0)
                    }
                    }
                    className="btn btn-sm btn-ghost absolute left-6 top-6 bg-[#F00] text-white flex justify-center items-center">✕
                </button>
                {content}
            </div>
        </div>
    )
}

export default RegisterModal
