'use client'
import Image from "next/image";
import MainPic from "@/public/images/HomePic.png";
import Logo from "@/app/components/navbar/Logo";
import Link from "next/link";
import Button from "@/app/components/Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {useAppDispatch, useAppSelector} from "@/app/redux/store";
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";
import React from "react";
import {logOut} from "@/app/redux/slices/user-slice";
import {toast} from "react-toastify";

const LandingNavbar = () => {
    const registerModal = useRegisterModal()
    const dispatch = useAppDispatch()
    const userSession = useAppSelector(state => state.userSlice)
    return (
        <div className='relative flex'>
            <Image
                src={MainPic}
                alt='Tour Picture'
                className='w-full max-h-[793px] bg-contain'
            />
            <div
                className='absolute top-[15px] sm:top-[40px] flex justify-between items-center w-full px-4 sm:px-[40px]'>
                <Logo width='w-[160px]' height='h-[90px]'/>
                <div className='flex gap-4 items-center '>
                    <p className='text-[#FFF] font-kalameh700 max-sm:text-[12px] cursor-pointer' onClick={()=>console.log(userSession.value)}>021-77805</p>
                    <div className='flex items-center'>
                            {userSession.value.isLoggedIn ? (
                                <SelectDropDown
                                    label={userSession.value.fullName}
                                    styles={'relative bg-orange text-white px-4 py-2 rounded-[8px] flex flex-col items-center cursor-pointer'}
                                    labelStyles={'text-[14px] font-kalameh500'}
                                    dropDownStyles={'absolute w-full'}
                                >
                                    <div
                                        className='absolute bg-orange text-white top-[22px] py-4 px-2 w-full rounded-br-[7.6px] rounded-bl-[7.6px] text-[10px] font-kalameh500'>
                                        <ul className='flex flex-col gap-y-2 justify-center items-center'>
                                            <Link href={'/profile'}>
                                                <li className='hover:text-[#2C2AAF] cursor-pointer'>اطلاعات حساب
                                                    کاربری
                                                </li>
                                            </Link>
                                                <li className='hover:text-[#2C2AAF] cursor-pointer' onClick={()=>{dispatch(logOut())
                                                    toast.warn('از حساب کاربری خود خارج شدید.')}}>خروج از حساب
                                                    کاربری
                                                </li>
                                        </ul>
                                    </div>
                                </SelectDropDown>
                            ) : (
                                <Button
                                    styles='rounded-[10px] px-4 max-sm:px-8  max-sm:w-[50px] max-sm:h-[30px] sm:w-[105px]'
                                    onClick={registerModal.onOpen}>
                                    <span className='pl-1'>عضویت</span>
                                    <svg className='max-sm:hidden' xmlns="http://www.w3.org/2000/svg" width="23"
                                         height="19"
                                         viewBox="0 0 23 19"
                                         fill="none">
                                        <path
                                            d="M15.7391 18.0005V16.1752C15.7391 15.2069 15.3692 14.2783 14.7106 13.5937C14.052 12.909 13.1588 12.5244 12.2274 12.5244H5.20403C4.27267 12.5244 3.37945 12.909 2.72088 13.5937C2.0623 14.2783 1.69232 15.2069 1.69232 16.1752V18.0005"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M8.71575 8.87276C10.6552 8.87276 12.2275 7.23827 12.2275 5.22203C12.2275 3.20578 10.6552 1.57129 8.71575 1.57129C6.77628 1.57129 5.20404 3.20578 5.20404 5.22203C5.20404 7.23827 6.77628 8.87276 8.71575 8.87276Z"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M19.2509 6.13477V11.6109" stroke="white" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M21.8846 8.87207H16.6171" stroke="white" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Button>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingNavbar
