'use client'
import React from 'react'
import Button from '../Button'
import Link from 'next/link'
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";
import {useAppDispatch, useAppSelector} from "@/app/redux/store";
import {logOut} from "@/app/redux/slices/user-slice";
import {useRouter} from "next/navigation";
import {toast} from "react-hot-toast";
import storage from "redux-persist/lib/storage";

const ProfileNavbar = () => {
    const router = useRouter()
    const userSession = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    return (
        <div className="w-[90%] mx-auto flex flex-row justify-end pt-10 pb-20">

            <div className="mx-1">
                <Link href={'/'}>
                    <Button outline styles={'w-[100px] rounded-md'}>صفحه اصلی</Button>
                </Link>
            </div>
            <div className="mx-1">
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
                                <li
                                    className='hover:text-[#2C2AAF] cursor-pointer'
                                    onClick={() => {
                                        dispatch(logOut())
                                        router.push('/')
                                    }}
                                >
                                    خروج از حساب کاربری
                                </li>
                        </ul>
                    </div>
                </SelectDropDown>
            </div>
        </div>
    )
}

export default ProfileNavbar