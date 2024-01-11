'use client'
import React, {useEffect, useRef, useState} from 'react'
import Logo from "@/app/components/navbar/Logo";
import Button from "@/app/components/Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {SubmitHandler, useForm} from "react-hook-form";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timer from "@/app/components/modals/Timer";
import Axios from 'axios'
import {useAppDispatch, useAppSelector} from "@/app/redux/store";
import {logIn} from "@/app/redux/slices/user-slice";
import {router} from "next/client";
import {usePathname, useRouter} from "next/navigation";


type Inputs = {
    phoneNumber: string,
    digit1: string,
    digit2: string,
    digit3: string,
    digit4: string,
    firstName: string,
    lastName: string

}
const RegisterModal = () => {
    const BASE_URL = 'https://triptour.v1r.ir/api'
    const pathName = usePathname()
    const [input, setInput] = useState()
    const dispatch = useAppDispatch()
    const registerModal = useRegisterModal()
    const {register, handleSubmit, reset, formState: {errors}, setFocus} = useForm<Inputs>()
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(0)
    const [verificationCodeExpired, setVerificationCodeExpired] = useState<boolean>()
    const [userExists, setUserExists] = useState<boolean>()
    const handleInputFocus = (e: any) => {
        setInput(e.target.value);
        if (e.target.value.length >= 1) {
            setFocus('digit2')
        }
    }
    const handleInputTwoFocus = (e: any) => {
        setInput(e.target.value);
        if (e.target.value.length >= 1) {
            setFocus('digit3')
        }
    }
    const handleInputThreeFocus = (e: any) => {
        setInput(e.target.value);
        if (e.target.value.length >= 1) {
            setFocus('digit4')
        }
    }

    const handleFirstStep: SubmitHandler<Inputs> = (data) => {
        let regexPhoneNumber = new RegExp("^(?:|98|\\+98|\\+980|0098|098|00980)?(9\\d{9})$");
        if (data.phoneNumber.length > 10 || data.phoneNumber.length < 10 || !regexPhoneNumber.test(data.phoneNumber)) {
            toast.error('لطفا شماره موبایل معتبر وارد کنید.')
            return
        }
        setIsLoading(true)
        Axios.post(`${BASE_URL}/auth/enter-phoneNumber`, {
            phoneNumber: `0${data.phoneNumber}`
        }).then(res => {
            toast.success('کد تایید به شماره موبایل وارد شده ارسال شد.')
            setStep(prev => prev + 1)
            setUserExists(res.data.userExists)
            setPhoneNumber(data.phoneNumber)
        }).catch(error => {
            if (error.message === 'Network Error') {
                toast.error('لطفا اتصال اینترنت خود را بررسی کنید.')
                return
            }
            toast.error('شماره تلفن همراه خود را بصورت صحیح وارد کنید.')
        }).finally(() => {
            setIsLoading(false)
            reset()
        })
    }
    const handleSecondStep: SubmitHandler<Inputs> = (data) => {
        const allDigit = data.digit1 + data.digit2 + data.digit3 + data.digit4
        setIsLoading(true)
        Axios.post(`${BASE_URL}/auth/phoneNumber-verification`, {
            phoneNumber: `0${phoneNumber}`,
            code: allDigit
        }).then(res => {
            if (userExists) {
                Axios.post(`${BASE_URL}/auth/login`, {
                    phoneNumber: `0${phoneNumber}`
                }).then(res => {
                    localStorage.setItem('token', res.data.token)
                    dispatch(logIn(
                        {
                            id: res.data.user.id,
                            firstName: res.data.user.firstName,
                            lastName: res.data.user.lastName,
                            phoneNumber: res.data.user.phoneNumber,
                            role: res.data.user.role[0],
                            token: res.data.token,
                            nationalCode: res.data.nationalCode,
                            birthDate: res.data.birthDate
                        }))
                    toast.success('خوش اومدی :)')
                    setTimeout(() => {
                        setIsLoading(false)
                        registerModal.onClose()
                        setStep(0)
                        toast.dismiss()
                        reset()
                    }, 3000)
                })
            } else {
                setStep(prev => prev + 1)
                toast.success('لطفا مشخصات خود را وارد کنید.')
                reset()
                setIsLoading(false)
            }
        }).catch(error => {
            toast.error('کد تایید وارد شده نادرست است !')
            setIsLoading(false)
        })
    }
    const handleThirdStep: SubmitHandler<Inputs> = (data) => {
        setIsLoading(true)
        Axios.post(`${BASE_URL}/auth/register`, {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: `0${phoneNumber}`,
            role: pathName === '/admin' ? 'advertiser' : 'user'
        }).then(res => {
            toast.success('ثبت نام شما با موفقیت انجام شد.')
            dispatch(logIn(
                {
                    id: res.data.user.id,
                    firstName: res.data.user.firstName,
                    lastName: res.data.user.lastName,
                    phoneNumber: res.data.user.phoneNumber,
                    role: res.data.role,
                    token: res.data.token,
                }))
            setStep(0)
            registerModal.onClose()
        }).catch(error => {
            toast.error('مشکلی رخ داده است !!')
        }).finally(() => {
            setIsLoading(false)
        })
        reset()
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
                        className={`flex items-center justify-end bg-[#EDECEC] py-3 rounded-[5px] mt-4 w-full ${errors.phoneNumber?.type === 'required' && 'border-[2px] border-[#f44336]'} focus:outline-orange`}>
                        <input
                            className={`bg-transparent outline-0 pl-4`}
                            type='number'
                            inputMode={'tel'}
                            placeholder='9XXXXXXXXX'
                            dir={'ltr'}
                            {...register('phoneNumber', {required: true})}
                            disabled={isLoading}
                        />
                        <p className='border-r-[1px] border-black px-4 text-[18px]'>98</p>
                    </div>
                    {errors.phoneNumber?.type === "required" && (
                        <p role="alert" className='text-[#f44336] w-full mt-2'>شماره تلفن خود را وارد کنید</p>
                    )}
                    <Button type={'submit'} disabled={isLoading}
                            styles='w-full text-[20px] font-kalameh700 rounded-[5px] py-6 mt-3'>
                        {isLoading ? <span className="loading loading-ring loading-md"></span> : <span>ادامه</span>}
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
                    <p className='text-[14px] pt-2 text-[#000]'>کد 4 رقمی ارسـال شده را وارد کنید</p>
                    <div
                        className='flex items-center justify-between bg-[#EDECEC] py-3 px-4 rounded-[5px] mt-4 w-full'>
                        <button type='button' onClick={() => setStep(prev => prev - 1)}
                                className='text-[14px] text-[#979797] hover:text-orange'>
                            ویرایش شماره
                        </button>
                        <p className='text-[14px] text-[#979797] font-kalameh500'>{phoneNumber}</p>
                    </div>
                    <div className='flex items-center justify-between py-2' dir={'ltr'}>
                        <input
                            className='w-[20%] text-center bg-[#EDECEC] focus:bg-[#FFF] px-2 py-3 rounded-[5px] focus:outline-orange'
                            type={"text"}
                            inputMode={'numeric'}
                            min={0}
                            max={9}
                            maxLength={1}
                            {...register('digit1', {required: true})}
                            onChange={handleInputFocus}
                        />
                        <input
                            className='w-[20%] text-center bg-[#EDECEC] focus:bg-[#FFF] px-2 py-3 rounded-[5px] focus:outline-orange'
                            type={"text"}
                            inputMode={'numeric'}
                            min={0}
                            max={9}
                            maxLength={1}
                            {...register('digit2', {required: true})}
                            onChange={handleInputTwoFocus}
                        />
                        <input
                            className='w-[20%] text-center bg-[#EDECEC] focus:bg-[#FFF] px-2 py-3 rounded-[5px] focus:outline-orange'
                            type={"text"}
                            inputMode={'numeric'}
                            min={0}
                            max={9}
                            maxLength={1}
                            {...register('digit3', {required: true})}
                            onChange={handleInputThreeFocus}
                        />
                        <input
                            className='w-[20%] text-center bg-[#EDECEC] focus:bg-[#FFF] px-2 py-3 rounded-[5px] focus:outline-orange'
                            type={"text"}
                            inputMode={'numeric'}
                            maxLength={1}
                            {...register('digit4', {required: true})}
                        />
                    </div>
                    <div className='flex items-center justify-between w-full py-2'>
                        {verificationCodeExpired ? (
                            <button type='button' className='flex items-center'>
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
                        ) : (
                            <div className='flex text-[10px]'>
                            <span className='font-kalameh700'>
                            <Timer minute={2} second={0} expired={(status) => setVerificationCodeExpired(status)}/>
                            </span>
                                تا زمان ارسال کد
                            </div>
                        )}
                    </div>
                    <Button disabled={isLoading} styles='w-full text-[20px] font-kalameh700 rounded-[5px] py-6'
                            type='submit'>
                        {isLoading ? <span className="loading loading-ring loading-md"></span> : <span>ادامه</span>}
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
                            className='bg-[#EDECEC] outline-none px-2 py-3 rounded-[5px] focus:outline-orange focus:bg-[#FFF]'
                            placeholder='نام'
                            type={"text"}
                            {...register('firstName', {required: true})}
                        />
                        <input
                            className='bg-[#EDECEC] outline-none px-2 py-3 rounded-[5px] focus:outline-orange focus:bg-[#FFF]'
                            placeholder='نام خانوادگی'
                            type={"text"}
                            {...register('lastName', {required: true})}
                        />
                    </div>
                    <Button disabled={isLoading} styles='w-full text-[20px] font-kalameh700 rounded-[5px] mt-10 py-6'
                            type='submit'>
                        {isLoading ? <span className="loading loading-ring loading-md"></span> : <span>ادامه</span>}
                    </Button>
                </form>
            )
        }

    }

    return (
        <div
            className={`${registerModal.isOpen ? 'block' : 'hidden'} translate duration-300 fixed bg-neutral-800/70 inset-0 z-50 overflow-y-hidden flex justify-center items-center`}>
            <div
                className="animate-openModal relative inset-x-0 mx-auto w-[95%] md:w-[80%] bg-[#FFF] rounded-[5px] lg:w-[40%]">
                <button
                    onClick={() => {
                        registerModal.onClose();
                        setStep(0)
                        toast.dismiss()
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
