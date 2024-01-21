'use client'
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {useAppSelector} from "@/app/redux/store";
import {redirect, useRouter} from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {router} from "next/client";
import {tripTourApi} from "@/axios-instances";


const ProfilePage = () => {
    const router = useRouter()
    const [dateBirth, setDateBirth] = useState()
    const userSession = useAppSelector(state => state.userSlice)
    const registerModal = useRegisterModal()
    // let content;
    // useLayoutEffect(() => {
    //     if (!userSession.value.isLoggedIn) {
    //         redirect('/profile')
    //     }
    // }, [])
    const HandleAddUser = () => {
        tripTourApi.post('/users/completeProfile' , {
            firstName : userSession.value.firstName ,
            lastName : userSession.value.lastName,
        })
    }

    return (
        <div className='md:w-[60%] flex flex-col max-md:w-[80%] mx-auto'>
            <div className="w-full flex flex-col pb-10 gap-8 md:pl-4">
                <h1 className="font-kalameh700 max-md:mt-20 max-md:text-center">حساب کاربری</h1>
                <div className="flex flex-col rounded-md bg-[#F8F8F8] py-8 shadow-[0px_0px_20px_0px_#808080a3]">
                    <form>
                        <div className="flex border-b border-[#B6B6B6] pb-4">
                            <div className="relative">
                                <div className="px-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"
                                         fill="none">
                                        <circle cx="28" cy="28" r="28" fill="#D9D9D9"/>
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"
                                         fill="none">
                                        <circle cx="6.5" cy="6.5" r="5.91667" fill="#A0A0A0" stroke="#A0A0A0"
                                                strokeWidth="1.16667"/>
                                    </svg>
                                    <div
                                        className="absolute inset-0 flex justify-center items-center text-[10px] rounded-full text-white">+
                                    </div>
                                </div>
                            </div>
                            <h3 className="px-[36px] text-[15px] font-kalameh400 self-center">افزودن عکس پروفایل</h3>
                        </div>
                        <div className='flex flex-col md:w-[80%] lg:w-[70%] pt-4 gap-y-8 sm:pr-8 sm:pl-4'>
                            <div className="flex flex-col sm:flex-row gap-y-4 items-center justify-between">
                                <p className="font-kalameh400 text-[12px]">نام و نام خانوادگی</p>
                                <div className='flex justify-between w-[95%] sm:w-[70%] gap-x-4'>
                                    <input
                                        onChange={(e)=>{
                                            e.target.value
                                        }}
                                        className="w-full py-2 rounded-md border border-solid bg-transparent text-center"
                                        type="text" placeholder="نام" value={userSession.value.firstName}/>
                                    <input
                                        className="w-full py-2 rounded-md border border-solid bg-transparent text-center"
                                        type="text" placeholder="نام خانوادگی" value={userSession.value.lastName}/>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-y-4 items-center justify-between">
                                <p className="font-kalameh400 text-[12px] ">کد ملی</p>
                                <input
                                    value={userSession.value.nationalCode}
                                    className="w-[95%] sm:w-[70%] py-2 rounded-md border border-solid bg-transparent text-center"
                                    type="text"/>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-y-4 items-center justify-between">
                                <p className="font-kalameh400 text-[12px]">تاریخ تولد</p>
                                <DatePicker
                                    inputClass='w-[200px] py-2 rounded-md border border-solid  bg-transparent text-center'
                                    placeholder={'تاریخ تولد خود را انتخاب کنید'}
                                    value={userSession.value.nationalCode === '' ? userSession.value.nationalCode : '1402-12-12'}
                                    //@ts-ignore
                                    onChange={setDateBirth}
                                    fixMainPosition={true}
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-y-4 items-center justify-between">
                                <p className="font-kalameh400 text-[12px]">شماره همراه</p>
                                <input

                                    className="w-[95%] sm:w-[70%] py-2 rounded-md border border-solid bg-transparent text-center"
                                    type="number" value={userSession.value.phoneNumber} disabled/>
                            </div>
                            <div className="flex w-full pt-7 gap-x-4">
                                <button onClick={HandleAddUser}
                                        className='w-[30%] mx-auto rounded-md bg-[#000] text-white py-2'>ثبت
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

{/* <div className='w-full mx-auto flex justify-center items-center'>
<Button outline styles={'w-[100px] rounded-md'}>نام کاربری</Button>
</div> */
}