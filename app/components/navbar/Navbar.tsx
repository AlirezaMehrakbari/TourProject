import React from 'react'
import Logo from "@/app/components/navbar/Logo";
import {usePathname} from "next/navigation";
import Link from "next/link";
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";
import {useAppDispatch, useAppSelector} from "@/app/redux/store";
import Button from "@/app/components/Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {logOut} from "@/app/redux/slices/user-slice";
import {toast} from "react-hot-toast";

const Navbar = () => {
    const pathname = usePathname()
    const registerModal = useRegisterModal()
    const dispatch = useAppDispatch()
    const userSession = useAppSelector(state => state.userSlice)
    return (
        <div
            className='w-full flex justify-between items-center px-[2rem] xl:px-[10rem] py-8 shadow-lg rounded-br-[30px] rounded-bl-[30px] fixed bg-white z-50'>
            <div className='flex items-center'>
                <Link href={'/'} className='pl-6'><Logo width={'w-[100px] h-[60px] sm:w-[190px] sm:h-[90px]'}/></Link>
                <ul className='hidden items-center lg:text-[20.6px] font-kalameh400 lg:gap-x-[53px] lg:flex'>
                    <Link href={'/villa'} className={(pathname === '/villa' ? 'active' : '')}>
                        <li>ویلا</li>
                    </Link>
                    <Link href={'/'}>
                        <li>آپارتمان</li>
                    </Link>
                    <Link href={'/'}>
                        <li>ساحلی</li>
                    </Link>
                    <Link href={'/'}>
                        <li>هتل</li>
                    </Link>
                    <Link href={'/tour'} className={(pathname === '/tour' ? 'active' : '')}>
                        <li>خرید تور</li>
                    </Link>
                </ul>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-[5px]'>
                <h1 className='lg:text-[20.6px] font-kalameh500'>021-77805</h1>
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
                                    <li className='hover:text-[#2C2AAF] cursor-pointer'>اطلاعات حساب کاربری</li>
                                </Link>
                                <Link href={'/profile'}>
                                    <li className='hover:text-[#2C2AAF] cursor-pointer' onClick={()=>{dispatch(logOut())
                                        toast.error('از حساب کاربری خود خارج شدید.')}}>خروج از حساب کاربری</li>
                                </Link>
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
    )
}

export default Navbar
