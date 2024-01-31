'use client'
import {useAppDispatch, useAppSelector} from "@/app/redux/store";
import Loading from "@/app/components/Loading";
import {useRouter} from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import React, {useState} from "react";
import Input from "@/app/components/Input";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Button from "@/app/components/Button";
import {tripTourApi} from "@/axios-instances";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import {logIn} from "@/app/redux/slices/user-slice";
import Image from "next/image";

type Inputs = {
    firstName: string,
    lastName: string,
    nationalCode: string,
    phoneNumber: string,
    city: string
}
const AdminPage = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [birthDate, setBirthDate] = useState(new DateObject().subtract(18, 'years'))
    const router = useRouter()
    const userSession = useAppSelector(state => state.userSlice)
    const registerModal = useRegisterModal()
    const [step, setStep] = useState(0)
    const [uploadProfileImage, setUploadProfileImage] = useState('')

    const handleCompleteProfile: SubmitHandler<FieldValues> = (data) => {
        let birthDate_convert = new DateObject({date: birthDate}).convert(gregorian, gregorian_en).format('YYYY-MM-DD')
        const userInformation = {
            ...data,
            birthDate: birthDate_convert
        }
        console.log(userInformation)
        tripTourApi.post('users/completeProfile', {
            userInformation
        }, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        }).then(res => {
            dispatch(logIn(
                {
                    id: res.data.usere.id,
                    firstName: res.data.usere.firstName,
                    lastName: res.data.usere.lastName,
                    phoneNumber: res.data.usere.phoneNumber,
                    role: res.data.usere.role[0],
                    token: res.data.token,
                    nationalCode: res.data.nationalCode,
                    birthDate: res.data.birthDate,
                    city: res.data.usere.city,
                    description: res.data.usere.description
                }))
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }

    // if (!userSession.value.isLoggedIn || userSession.value.role !== 'advertiser') {
    //     router.push('/')
    //     return
    // }
    // console.log(userSession.value)
    return (
        <div className='flex flex-col mt-[5rem] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto'>
            <h1 className='text-[30px] font-kalameh500'><span className='font-kalameh700'>پروفایل</span> شما</h1>
            <form onSubmit={handleSubmit(handleCompleteProfile)}>
                <div className="w-fit relative">
                    <div className="pt-[40px]">
                        <div className='w-full'>
                            {uploadProfileImage ?
                                <Image
                                    width={80}
                                    height={80}
                                    className='w-[80px] h-[80px] rounded-full'
                                    src={uploadProfileImage}
                                    alt={'Your Profile Image'}
                                />
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 56 56"
                                 fill="none">
                                <circle cx="28" cy="28" r="28" fill="#D9D9D9"></circle>
                            </svg>
                            }
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 13 13"
                             fill="none">
                            <circle cx="6.5" cy="6.5" r="5.91667" fill="#A0A0A0" stroke="#A0A0A0"
                                    strokeWidth="1.16667">
                            </circle>
                        </svg>
                        <label
                            className="absolute inset-0 flex justify-center items-center rounded-full text-white cursor-pointer">
                            {//@ts-ignore
                                <input onChange={(e) => setUploadProfileImage(URL.createObjectURL(e.target.files[0]))}
                                       className='hidden' type='file'/>}
                            +
                        </label>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4 pt-6'>
                    <div className='w-full flex flex-col sm:flex-row justify-between gap-y-4 gap-x-6'>
                        <div className='flex w-full bg-[#F0F0F0] px-2 outline-none rounded-[10px] gap-x-4'>
                            <Input
                                id={'firstName'}
                                label={'نام'}
                                defaultValue={userSession.value.firstName}
                                register={register}
                                errors={errors}/>
                        </div>
                        <div className='flex w-full bg-[#F0F0F0] px-2 outline-none rounded-[10px] gap-x-4'>
                            <Input
                                id={'lastName'}
                                label={'نام خانوادگی'}
                                defaultValue={userSession.value.lastName}
                                register={register}
                                errors={errors}/>
                        </div>
                    </div>

                    <div className='w-full flex flex-col sm:flex-row justify-between gap-y-4 gap-x-6'>
                        <div className='flex w-full bg-[#F0F0F0] px-2 outline-none rounded-[10px] gap-x-4'>
                            <Input
                                id={'nationalCode'}
                                label={'کد ملی'}
                                defaultValue={userSession.value.nationalCode}
                                register={register}
                                errors={errors}/>
                        </div>
                        <div className='flex w-full bg-[#F0F0F0] px-2 outline-none rounded-[10px] gap-x-4'>
                            <p className='w-full pt-3 text-[#A0A0A0]'>تاریخ تولد</p>
                            <DatePicker
                                inputClass='w-full h-full pt-3 bg-transparent p-2 outline-0 w-full rounded-md'
                                value={birthDate ? birthDate : userSession.value.birthDate}
                                maxDate={new DateObject().subtract(18, 'years')}
                                //@ts-ignore
                                onChange={setBirthDate}
                                fixMainPosition={true}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom"
                            />
                        </div>
                    </div>

                    <div className='w-full flex flex-col sm:flex-row justify-between gap-y-4 gap-x-6'>
                        <div className='flex w-full bg-[#F0F0F0] px-2 outline-none rounded-[10px] gap-x-4'>
                            <Input
                                id={'phoneNumber'}
                                label={'شماره تماس'}
                                defaultValue={userSession.value.phoneNumber}
                                register={register}
                                errors={errors}/>
                        </div>
                        <div className='flex w-full bg-[#F0F0F0] px-2 outline-none rounded-[10px] gap-x-4'>
                            <Input
                                id={'city'}
                                label={'شهر مورد نظر'}
                                defaultValue={userSession.value.city}
                                register={register}
                                errors={errors}/>
                        </div>
                    </div>

                    <div className='pt-8'>
                        <p className='text-[18px]'>در این قسمت میتوانید توضیحاتی درباره <span
                            className='font-kalameh500'>خود و اقامتگاه خود</span> به مهمانان دهید تا آنها شمارا بهتر
                            بشناسند</p>
                        <textarea
                            className='w-full bg-[#F0F0F0] px-4 py-2 outline-none rounded-[10px] focus:shadow-md transition mt-2'
                            placeholder={'پیامی به مهمانان خود بدهید...'}
                        />
                    </div>
                </div>
                <Button type={'submit'} styles='w-[20%] my-4 mx-auto rounded-[10px]'>
                    ثبت
                </Button>
            </form>

        </div>
    )
}

export default AdminPage
