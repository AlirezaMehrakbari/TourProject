import React, {useState} from 'react'
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {useAppDispatch, useAppSelector} from "@/app/redux/store";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import DateObject from "react-date-object";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import {resetPassenger, setPassengers} from "@/app/redux/slices/tourReserve-slice";
import {toast} from "react-toastify";

const PassengerForm = ({tourDetail, index, childPassenger}: {
    tourDetail: Tour,
    index: number,
    childPassenger?: boolean
}) => {
    const dispatch = useAppDispatch()
    const passengers = useAppSelector(state => state.tourReserve.passengers)
    const [childBirthDate, setChildBirthDate] = useState(new DateObject().subtract(12, 'years'))
    const [adultBirthDate, setAdultBirthDate] = useState(new DateObject().subtract(18,'years'))
    const [expirationDatePassport, setExpirationDatePassport] = useState(new DateObject().add(1,'month'))
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isNationalCodeDisabled, setIsNationalCodeDisabled] = useState(false)
    const tourReserveDetail = useAppSelector(state => state.tourReserve)
    const {handleSubmit, register, formState: {errors}} = useForm()
    const handleAddPassenger: SubmitHandler<FieldValues> = (data) => {
        if(passengers.some(item=>item.nationalCode === data.nationalCode)){
            toast.error('کد ملی تکراری است!')
            return
        }
        let birthDate_convert;
        if(childPassenger){
        birthDate_convert = new DateObject({date: childBirthDate}).convert(gregorian, gregorian_en).format('YYYY-MM-DD')
        }else{
            birthDate_convert = new DateObject({date: adultBirthDate}).convert(gregorian, gregorian_en).format('YYYY-MM-DD')
        }

        let expirationDatePassport_convert = new DateObject({date: expirationDatePassport}).convert(gregorian, gregorian_en).format('YYYY-MM-DD')
        const newData = {
            ...data,
            tour_id: tourDetail.id,
            birthDate: birthDate_convert,
            expirationDatePassport: expirationDatePassport_convert
        }
        setIsEdit(true)
        dispatch(setPassengers(newData))
        setIsNationalCodeDisabled(true)
    }

    const handleEditPassenger : SubmitHandler<FieldValues> = (data)=>{
        setIsEdit(false)
        dispatch(resetPassenger(data.nationalCode))
    }
    return (
        <form
            className='flex flex-col justify-between w-[80%] lg:w-[50%] bg-[#F7F7F6] mx-auto my-20 py-[20px] lg:px-[50px] xl:px-[100px] lg:py-[64px] rounded-[14px]'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-y-4'>
                <div className='flex items-center gap-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="38" viewBox="0 0 46 38"
                         fill="none">
                        <path
                            d="M33 37V33C33 30.8783 32.1571 28.8434 30.6568 27.3431C29.1566 25.8429 27.1217 25 25 25H9C6.87827 25 4.84344 25.8429 3.34315 27.3431C1.84285 28.8434 1 30.8783 1 33V37"
                            stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        <path
                            d="M17 17C21.4183 17 25 13.4183 25 9C25 4.58172 21.4183 1 17 1C12.5817 1 9 4.58172 9 9C9 13.4183 12.5817 17 17 17Z"
                            stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        <path
                            d="M45.0005 36.9998V32.9998C44.9992 31.2272 44.4092 29.5053 43.3232 28.1044C42.2372 26.7035 40.7167 25.7029 39.0005 25.2598"
                            stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        <path
                            d="M31 1.25977C32.7208 1.70037 34.2461 2.70117 35.3353 4.10439C36.4245 5.5076 37.0157 7.23342 37.0157 9.00976C37.0157 10.7861 36.4245 12.5119 35.3353 13.9151C34.2461 15.3184 32.7208 16.3192 31 16.7598"
                            stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                    <div>
                        <h4 className='text-[19.7px] font-kalameh500'>مشخـصات
                            مسافر {index + 1} {childPassenger && 'کودک'}</h4>
                        <p className='text-[17px] text-[#616060]'> {tourDetail.title}</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="39" viewBox="0 0 43 39"
                         fill="none">
                        <path
                            d="M38.2727 7.59082H4.72727C2.66876 7.59082 1 9.25958 1 11.3181V33.6817C1 35.7402 2.66876 37.409 4.72727 37.409H38.2727C40.3312 37.409 42 35.7402 42 33.6817V11.3181C42 9.25958 40.3312 7.59082 38.2727 7.59082Z"
                            stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        <path d="M1 18.7725H42" stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M13.6816 2C13.6816 1.17157 13.0101 0.5 12.1816 0.5C11.3532 0.5 10.6816 1.17157 10.6816 2L13.6816 2ZM10.6816 2L10.6816 13.1818L13.6816 13.1818L13.6816 2L10.6816 2Z"
                            fill="#FF7512"/>
                        <path
                            d="M32.3184 2C32.3184 1.17157 31.6468 0.5 30.8184 0.5C29.9899 0.5 29.3184 1.17157 29.3184 2L32.3184 2ZM29.3184 2L29.3184 13.1818L32.3184 13.1818L32.3184 2L29.3184 2Z"
                            fill="#FF7512"/>
                    </svg>
                    <div>
                        <h4 className='text-[19.7px] font-kalameh500'>تاریـخ سفر</h4>
                        <p className='text-[17px] text-[#616060]'>{tourReserveDetail.entryDate.day} {tourReserveDetail.entryDate.month.name} - {tourReserveDetail.exitDate.day} {tourReserveDetail.exitDate.month.name}</p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-x-8 w-[90%] mx-auto'>
                <div
                    className={`bg-gradient-to-t from-[#000] to-[#F7F7F6] to-90% p-[1px]  rounded-md relative mt-10`}>
                    <input
                        className={`bg-[#F7F7F6] p-2 outline-0 w-full rounded-md `}
                        dir={'ltr'}
                        disabled={isEdit}
                        {...register('latinFirstName', {required: true})}
                    />
                    <p className={`absolute top-[-12px] text-[#8C8C8C] text-[17px] right-[8px] ${errors.latinFirstName?.type === 'required' && 'text-red-500'}`}>نام
                        لاتین</p>
                </div>
                <div
                    className="bg-gradient-to-t from-[#000] to-[#F7F7F6] to-90% p-[1px]  rounded-md relative mt-10">
                    <input
                        className='bg-[#F7F7F6] p-2 outline-0 w-full rounded-md'
                        dir={'ltr'}
                        disabled={isNationalCodeDisabled}
                        {...register('nationalCode', {required: true})}
                    />
                    <p className={`absolute top-[-12px] text-[#8C8C8C] text-[17px] right-[8px] ${errors.latinFirstName?.type === 'required' && 'text-red-500'}`}>کد
                        ملی</p>
                </div>
                <div
                    className="bg-gradient-to-t from-[#000] to-[#F7F7F6] to-90% p-[1px]  rounded-md relative mt-10">
                    <input
                        className='bg-[#F7F7F6] p-2 outline-0 w-full rounded-md'
                        dir={'ltr'}
                        disabled={isEdit}
                        {...register('latinLastName', {required: true})}
                    />
                    <p className={`absolute top-[-12px] text-[#8C8C8C] text-[17px] right-[8px] ${errors.latinFirstName?.type === 'required' && 'text-red-500'}`}>نـام
                        خـانوادگی
                        لاتین</p>
                </div>
                <div
                    className="bg-gradient-to-t from-[#000] to-[#F7F7F6] to-90% p-[1px]  rounded-md relative mt-10">
                    <input
                        className='bg-[#F7F7F6] p-2 outline-0 w-full rounded-md'
                        disabled={isEdit}
                        {...register('nationality', {required: true})}
                    />
                    <p className={`absolute top-[-12px] text-[#8C8C8C] text-[17px] right-[8px] ${errors.latinFirstName?.type === 'required' && 'text-red-500'}`}>ملیت</p>
                </div>
                <div
                    className="bg-gradient-to-t from-[#000] to-[#F7F7F6] to-90% p-[1px]  rounded-md relative mt-10">
                    <select
                        className='bg-[#F7F7F6] p-2 outline-0 w-full rounded-md'
                        disabled={isEdit}
                        {...register('gender', {required: true})}
                    >
                        <option>زن</option>
                        <option>مرد</option>
                    </select>
                    <p className={`absolute top-[-12px] text-[#8C8C8C] text-[17px] right-[8px] ${errors.latinFirstName?.type === 'required' && 'text-red-500'}`}>جنسیـت</p>
                </div>
                <div
                    className="bg-gradient-to-t from-[#000] to-[#F7F7F6] to-90% p-[1px] rounded-md relative mt-[45px]">
                    <div className='w-full'>
                        {!childPassenger &&
                            <DatePicker
                                inputClass='bg-[#F7F7F6] p-2 outline-0 w-full rounded-md'
                                value={adultBirthDate}
                                maxDate={new DateObject().subtract(18, 'years')}
                                disabled={isEdit}
                                //@ts-ignore
                                onChange={setAdultBirthDate}
                                fixMainPosition={true}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom"
                            />

                        }
                        {childPassenger &&
                            <DatePicker
                                inputClass='bg-[#F7F7F6] p-2 outline-0 w-full rounded-md'
                                value={childBirthDate}
                                minDate={new DateObject().subtract(12, 'years')}
                                disabled={isEdit}
                                //@ts-ignore
                                onChange={setChildBirthDate}
                                fixMainPosition={true}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom"
                            />
                        }
                    </div>
                    <p className={`absolute top-[-12px] text-[#8C8C8C] text-[17px] right-[8px] ${errors.latinFirstName?.type === 'required' && 'text-red-500'}`}>تاریخ
                        تولد</p>
                </div>
                <div
                    className="bg-gradient-to-t from-[#000] to-[#F7F7F6] to-90% p-[1px]  rounded-md relative mt-10">
                    <input
                        className='bg-[#F7F7F6] p-2 outline-0 w-full rounded-md'
                        dir={'ltr'}
                        disabled={isEdit}
                        {...register('passportNumber', {required: true})}

                    />
                    <p className={`absolute top-[-12px] text-[#8C8C8C] text-[17px] right-[8px] ${errors.latinFirstName?.type === 'required' && 'text-red-500'}`}>شماره
                        پاسپورت</p>
                </div>
                <div
                    className="bg-gradient-to-t from-[#000] to-[#F7F7F6] to-90% p-[1px]  rounded-md relative mt-10">
                        <DatePicker
                            inputClass='bg-[#F7F7F6] p-2 outline-0 w-full rounded-md'
                            value={expirationDatePassport}
                            minDate={new DateObject().add(1,'month')}
                            disabled={isEdit}
                            //@ts-ignore
                            onChange={setExpirationDatePassport}
                            fixMainPosition={true}
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom"
                        />
                    <p className={`absolute top-[-12px] text-[#8C8C8C] text-[17px] right-[8px] ${errors.latinFirstName?.type === 'required' && 'text-red-500'}`}>تاریخ
                        انقضاء
                        پاسپورت</p>
                </div>
            </div>
            {isEdit ? (
                <button
                    type='button'
                    onClick={handleSubmit(handleEditPassenger)}
                    className='bg-[#000] text-white font-kalameh400 w-[30%] mx-auto h-[45px] mt-10 rounded-[8px]'
                >
                    ویرایش اطلاعات
                </button>
            ) : (
                <button
                    type='button'
                    onClick={handleSubmit(handleAddPassenger)}
                    className='bg-[#212F81] text-white font-kalameh400 w-[30%] mx-auto h-[45px] mt-10 rounded-[8px]'
                >
                    ثبت اطلاعات
                </button>
            )}
        </form>
    )
}

export default PassengerForm
