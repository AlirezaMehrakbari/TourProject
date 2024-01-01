import Image from "next/image";
import PaymentDetailPicture from '@/public/images/PaymentDetailPicture.png'
import Footer from "@/app/components/footer/footer";
import useStep from "@/app/hooks/useStep";
import Stepper from "@/app/components/Stepper";
import React from "react";
import {useAppSelector} from "@/app/redux/store";
import formatCurrency from "@/app/utils/FormatCurrency";
import {tripTourApi} from "@/axios-instances";
import DateObject from "react-date-object";
import {formatDateToShamsi} from "@/app/utils/FormatDateToShamsi";
import {useRouter} from "next/navigation";
import {toast} from 'react-toastify'

type PaymentDetailProps = {
    isVilla?: boolean,
    villaDetails?: VillaDetails
}
const PaymentDetail: React.FC<PaymentDetailProps> = ({isVilla, villaDetails}) => {
    const step = useStep()
    const villaReserveDetail = useAppSelector(state => state.villaReserve)
    const userSession = useAppSelector(state => state.userSlice)
    const router = useRouter()

    let checkIn = formatDateToShamsi(new DateObject(
        {
            //@ts-ignore
            year: villaReserveDetail.entryDate?.year,
            //@ts-ignore
            month: villaReserveDetail.entryDate?.month,
            //@ts-ignore
            day: villaReserveDetail.entryDate?.day,

        }).format())
    let checkOut = formatDateToShamsi(new DateObject(
        {
            //@ts-ignore
            year: villaReserveDetail.exitDate?.year,
            //@ts-ignore
            month: villaReserveDetail.exitDate?.month,
            //@ts-ignore
            day: villaReserveDetail.exitDate?.day,

        }).format())
    const handlePayment = (e: any) => {
        e.preventDefault()
        tripTourApi.post('reservations/reservationPlace', {
            place_id: villaDetails?.id,
            checkIn,
            checkOut,
            number: villaReserveDetail.passengers
        }, {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${userSession.value.token}`
            }
        }).then(res => {
            step.nextStep()
            toast.success('رزور شما با موفقیت انجام شد.')
            // tripTourApi.get(`transactions/pay/${res.data.data.id}`, {
            //     headers: {
            //         Authorization: `Bearer ${userSession.value.token}`
            //     }
            // }).then(res => {
            //     router.push(`${res.data.paymentUrl}`)
            // })
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <Stepper isVilla={isVilla}/>
            <form
                className='flex flex-col-reverse md:flex-row items-center gap-x-[6rem] w-[80%] mx-auto mt-4 md:mt-[10rem]'>
                <div className='flex flex-col gap-y-6 w-[50%] border-b-[1px] pb-8 border-[#BFBFBF]'>
                    <h1 className='md:text-[28.2px] font-kalameh400 border-b-[1px] border-[#BFBFBF] py-4'>جزئـیات خـریـد
                        شـما</h1>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25"
                             fill="none">
                            <path
                                d="M24.1579 5.47363H3.31579C2.03681 5.47363 1 6.51045 1 7.78942V21.6842C1 22.9631 2.03681 23.9999 3.31579 23.9999H24.1579C25.4369 23.9999 26.4737 22.9631 26.4737 21.6842V7.78942C26.4737 6.51045 25.4369 5.47363 24.1579 5.47363Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1 12.4209H26.4737" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M9.44727 2C9.44727 1.17157 8.77569 0.5 7.94727 0.5C7.11884 0.5 6.44727 1.17157 6.44727 2L9.44727 2ZM6.44727 2L6.44727 8.94737L9.44727 8.94737L9.44727 2L6.44727 2Z"
                                fill="black"/>
                            <path
                                d="M21.0264 2C21.0264 1.17157 20.3548 0.5 19.5264 0.5C18.6979 0.5 18.0264 1.17157 18.0264 2L21.0264 2ZM18.0264 2L18.0264 8.94737L21.0264 8.94737L21.0264 2L18.0264 2Z"
                                fill="black"/>
                        </svg>
                        <div className='flex flex-col'>
                            <p className='text-[11.2px] text-[#777]'>تـاریـخ سفـر</p>
                            {//@ts-ignore
                                <p className='font-kalameh500'> {villaReserveDetail.entryDate.day} {villaReserveDetail.entryDate.month.name}</p>}
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26"
                             fill="none">
                            <path
                                d="M22.3333 25V22.3333C22.3333 20.9188 21.7714 19.5623 20.7712 18.5621C19.771 17.5619 18.4145 17 17 17H6.33333C4.91884 17 3.56229 17.5619 2.5621 18.5621C1.5619 19.5623 1 20.9188 1 22.3333V25"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M11.6663 11.6667C14.6119 11.6667 16.9997 9.27885 16.9997 6.33333C16.9997 3.38781 14.6119 1 11.6663 1C8.72082 1 6.33301 3.38781 6.33301 6.33333C6.33301 9.27885 8.72082 11.6667 11.6663 11.6667Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M30.334 24.9995V22.3329C30.3331 21.1512 29.9398 20.0032 29.2158 19.0693C28.4918 18.1353 27.4782 17.4683 26.334 17.1729"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M21 1.17285C22.1472 1.46659 23.164 2.13379 23.8902 3.06926C24.6163 4.00474 25.0105 5.15529 25.0105 6.33952C25.0105 7.52374 24.6163 8.67429 23.8902 9.60977C23.164 10.5452 22.1472 11.2124 21 11.5062"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className='flex flex-col'>
                            <p className='text-[11.2px] text-[#777]'>تعـداد مسافران</p>
                            <p className='font-kalameh500'>{villaReserveDetail.passengers} نفــر</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27"
                             fill="none">
                            <path
                                d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.5 16C8.5 16 10.375 18.5 13.5 18.5C16.625 18.5 18.5 16 18.5 16"
                                  stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.75 9.75H9.762" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M17.25 9.75H17.262" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        <div className='flex flex-col'>
                            <p className='text-[11.2px] text-[#777]'>اطلاعات کاربــر</p>
                            <p className='font-kalameh500'>{userSession.value.fullName}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29"
                             fill="none">
                            <path d="M14.5225 5V25.25" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M19.125 8.68164H12.2216C11.3672 8.68164 10.5477 9.02106 9.94358 9.62522C9.33942 10.2294 9 11.0488 9 11.9032C9 12.7577 9.33942 13.5771 9.94358 14.1812C10.5477 14.7854 11.3672 15.1248 12.2216 15.1248H16.8239C17.6783 15.1248 18.4977 15.4642 19.1019 16.0684C19.706 16.6726 20.0455 17.492 20.0455 18.3464C20.0455 19.2008 19.706 20.0203 19.1019 20.6244C18.4977 21.2286 17.6783 21.568 16.8239 21.568H9"
                                stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M14.5 28C21.9558 28 28 21.9558 28 14.5C28 7.04416 21.9558 1 14.5 1C7.04416 1 1 7.04416 1 14.5C1 21.9558 7.04416 28 14.5 28Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className='flex flex-col'>
                            <p className='text-[11.2px] text-[#777]'>
                                {isVilla ? 'هزینه اقامت هرشب' : 'هزینه پرداختی'}
                            </p>
                            <p className='font-kalameh500'>{villaDetails && formatCurrency(+villaDetails.pricePerNight)} تومـان</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        {isVilla ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27"
                                 fill="none">
                                <path
                                    d="M26 14.6261C25.7811 16.9953 24.8919 19.2532 23.4366 21.1355C21.9812 23.0178 20.0199 24.4467 17.7822 25.255C15.5444 26.0633 13.1227 26.2176 10.8004 25.6997C8.47813 25.1819 6.35137 24.0135 4.66895 22.3311C2.98654 20.6486 1.81806 18.5219 1.30025 16.1996C0.782443 13.8773 0.936715 11.4556 1.74502 9.21785C2.55332 6.98006 3.98222 5.01876 5.86453 3.56343C7.74683 2.1081 10.0047 1.21894 12.3739 1C10.9868 2.87657 10.3193 5.18868 10.4928 7.51579C10.6664 9.8429 11.6694 12.0304 13.3195 13.6805C14.9696 15.3306 17.1571 16.3336 19.4842 16.5072C21.8113 16.6807 24.1234 16.0132 26 14.6261Z"
                                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                 fill="none">
                                <path
                                    d="M15 23.4375C14.4875 23.4375 14.0625 23.0125 14.0625 22.5V21.25C14.0625 20.7375 14.4875 20.3125 15 20.3125C15.5125 20.3125 15.9375 20.7375 15.9375 21.25V22.5C15.9375 23.0125 15.5125 23.4375 15 23.4375Z"
                                    fill="#292D32"/>
                                <path
                                    d="M15 28.4375C14.4875 28.4375 14.0625 28.0125 14.0625 27.5V26.25C14.0625 25.7375 14.4875 25.3125 15 25.3125C15.5125 25.3125 15.9375 25.7375 15.9375 26.25V27.5C15.9375 28.0125 15.5125 28.4375 15 28.4375Z"
                                    fill="#292D32"/>
                                <path
                                    d="M2.49963 28.4371C2.42463 28.4371 2.34963 28.4246 2.27463 28.4121C1.77463 28.2871 1.46213 27.7746 1.58713 27.2746L2.83713 22.2746C2.96213 21.7746 3.46213 21.4621 3.97463 21.5871C4.47463 21.7121 4.78713 22.2246 4.66213 22.7246L3.41213 27.7246C3.29963 28.1496 2.92463 28.4371 2.49963 28.4371Z"
                                    fill="#292D32"/>
                                <path
                                    d="M27.1908 28.1283C26.7658 28.1283 26.3908 27.8408 26.2783 27.4158L25.0283 22.4158C24.9033 21.9158 25.2033 21.4033 25.7158 21.2783C26.2158 21.1533 26.7283 21.4533 26.8533 21.9658L28.1033 26.9658C28.2283 27.4658 27.9283 27.9783 27.4158 28.1033C27.3408 28.1158 27.2658 28.1283 27.1908 28.1283Z"
                                    fill="#292D32"/>
                                <path
                                    d="M23.9248 6.625C23.9248 7 23.6123 7.3 23.2498 7.3H6.91231C6.53731 7.3 6.2373 6.9875 6.2373 6.625C6.2373 6.25 6.54981 5.95 6.91231 5.95H7.8373L8.18731 4.3125C8.51231 2.7125 9.18731 1.25 11.8873 1.25H18.2498C20.9498 1.25 21.6373 2.7125 21.9623 4.3L22.3123 5.9375H23.2373C23.6123 5.9375 23.9248 6.25 23.9248 6.625Z"
                                    fill="#292D32"/>
                                <path
                                    d="M24.3122 11.7496C24.1747 10.2496 23.7747 8.66211 20.8622 8.66211H9.28719C6.37469 8.66211 5.98719 10.2621 5.83719 11.7496L5.32469 17.2746C5.26219 17.9621 5.48719 18.6496 5.96219 19.1746C6.44969 19.6996 7.12469 19.9996 7.84969 19.9996H9.54969C11.0247 19.9996 11.2997 19.1621 11.4872 18.5996L11.6747 18.0496C11.8872 17.4246 11.9372 17.2746 12.7497 17.2746H17.3997C18.2122 17.2746 18.2372 17.3621 18.4747 18.0496L18.6622 18.5996C18.8372 19.1621 19.1247 19.9996 20.5872 19.9996H22.2872C22.9997 19.9996 23.6872 19.6996 24.1747 19.1746C24.6497 18.6621 24.8747 17.9621 24.8122 17.2746L24.3122 11.7496ZM12.3497 13.6496H9.63719C9.26219 13.6496 8.96219 13.3371 8.96219 12.9746C8.96219 12.6121 9.27469 12.2996 9.63719 12.2996H12.3622C12.7372 12.2996 13.0372 12.6121 13.0372 12.9746C13.0372 13.3371 12.7247 13.6496 12.3497 13.6496ZM20.5122 13.6496H17.7872C17.4122 13.6496 17.1122 13.3371 17.1122 12.9746C17.1122 12.6121 17.4247 12.2996 17.7872 12.2996H20.5122C20.8872 12.2996 21.1872 12.6121 21.1872 12.9746C21.1872 13.3371 20.8872 13.6496 20.5122 13.6496Z"
                                    fill="#292D32"/>
                            </svg>
                        )}
                        <div className='flex flex-col'>
                            {isVilla ? (
                                <>
                                    <p className='text-[11.2px] text-[#777]'>مـدت اقامـت</p>
                                    <p className='font-kalameh500'>{villaReserveDetail.duration.length} شـب</p>
                                </>
                            ) : (
                                <>
                                    <p className='text-[11.2px] text-[#777]'>حمل و نقـل</p>
                                    <p className='font-kalameh500'>هواپــیــما</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%] bg-[#F9F9F9] px-[30px] lg:pr-[56px] py-[32px] rounded-[12px] shadow-md'>
                    <div className='flex max-md:items-center flex-col lg:flex-row gap-x-6'>
                        <Image
                            className='w-[50%] rounded-[15px]'
                            src={PaymentDetailPicture}
                            alt={'PaymentDetail Picture'}
                        />
                        <div className='flex flex-col py-2'>
                            {isVilla ? (
                                <>
                                    <p className='text-[14.3px] font-kalameh400'>{villaDetails?.title}</p>
                                    <p className='text-[11px] text-[#777676]'>{villaDetails?.address.state}</p>
                                </>
                            ) : (
                                <>
                                    <p className='text-[14.3px] font-kalameh400'>تـور زمینی تهران - استانبول</p>
                                    <p className='text-[11px] text-[#777676]'>هـتل پنج ســتاره استانبول</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col lg:w-[70%] pt-6 gap-y-2'>
                        <h4 className='text-[17.3px] font-kalameh500'>جزئـیات پرداخت</h4>
                        {isVilla ? (
                            <>
                                {villaReserveDetail.duration.map(day => {
                                    return (
                                        <div className='text-[10.6px] text-[#808080] flex justify-between'>
                                            <p>{day.weekDay.name} {day.month.number} {day.month.name} ماه {day.year}</p>
                                            <p>{villaDetails?.pricePerNight && formatCurrency(+villaDetails?.pricePerNight)} تومــان</p>
                                        </div>
                                    )
                                })}
                            </>
                        ) : (
                            <>
                                <div className='text-[10.6px] text-[#808080] flex justify-between'>
                                    <p>مسافر 1 : امیـر محمدی</p>
                                    <p>800.000 تومــان</p>
                                </div>
                                <div className='text-[10.6px] text-[#808080] flex justify-between'>
                                    <p>مسافر 2 : علیرضا دارابی</p>
                                    <p>800.000 تومــان</p>
                                </div>
                                <div className='text-[10.6px] text-[#808080] flex justify-between'>
                                    <p>مسافر 3 : ارسلان دارابی</p>
                                    <p>800.000 تومــان</p>
                                </div>
                            </>
                        )}
                    </div>
                    <button
                        className='bg-[#15C431] mt-8 w-full lg:w-[80%] rounded-[15px] text-[31px] font-kalameh500 py-2 text-white'
                        onClick={handlePayment}
                    >
                        پــــرداخــــت
                    </button>
                </div>
            </form>
            <Footer/>

        </div>
    )
}

export default PaymentDetail
