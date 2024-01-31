import ReceiptPicture from '@/public/images/ReceiptPicture.png'
import Image from "next/image";
import Stepper from "@/app/components/Stepper";
import React from "react";
import {useAppSelector} from "@/app/redux/store";
import formatCurrency from "@/app/utils/FormatCurrency";
import {getAllDatesInRange} from "react-multi-date-picker";
import useStep from "@/app/hooks/useStep";

type ReceiptProps = {
    isVilla?: boolean,
    villaDetails?: VillaDetails,
    tourDetail?: Tour
}
const Receipt: React.FC<ReceiptProps> = ({isVilla, villaDetails, tourDetail}) => {
    const userSession = useAppSelector(state => state.userSlice)
    const villaReserveDetail = useAppSelector(state => state.villaReserve)
    const tourReserveDetail = useAppSelector(state => state.tourReserve)
    return (
        <div className='bg-[#F5F5F5] min-h-screen flex flex-col items-center'>
            <Stepper isVilla={isVilla}/>
            <div className='flex flex-col md:w-[80%] lg:w-[60%]'>
                <div
                    className='flex items-center self-end w-fit border-[1px] border-[#000] rounded-[9px] px-4 md:mt-[10rem] mb-3'>
                    <button className='sm:text-[25.6px] self-end'>دانلود بلیط</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                        <path
                            d="M17.6204 12.7793V16.4621C17.6204 16.9505 17.4264 17.4188 17.0811 17.7642C16.7358 18.1095 16.2674 18.3035 15.779 18.3035H2.88925C2.40088 18.3035 1.93251 18.1095 1.58718 17.7642C1.24186 17.4188 1.04785 16.9505 1.04785 16.4621V12.7793"
                            stroke="black" strokeWidth="1.8414" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.73047 8.17578L9.33396 12.7793L13.9375 8.17578" stroke="black" strokeWidth="1.8414"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.33398 12.7789V1.73047" stroke="black" strokeWidth="1.8414" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className='bg-white rounded-[10px] py-8 shadow-md'>
                    <div className='relative w-[60%] sm:w-[80%] mx-auto'>
                        <Image
                            className='rounded-[78px] sm:h-[288px] object-cover'
                            src={ReceiptPicture}
                            alt={'Receipt Picture'}
                        />
                        <div
                            className='absolute bg-[#1F2D80] text-white text-[12px] sm:text-[27.8px] font-kalameh500 rounded-[82px] py-2 px-4 border-t-[2px] border-white bottom-[-18px] inset-x-0 w-fit mx-auto'>
                            {isVilla ? (
                                <p>
                                    رزرو شما با <span className='text-orange font-kalameh700'>موفقیت</span> ثبت شــد
                                </p>
                            ) : (
                                <p>
                                    تــور شما با <span className='text-orange font-kalameh700'>موفقیت</span> خریداری
                                    شــد
                                </p>
                            )}
                        </div>
                    </div>

                    <div className='flex item-center justify-between pt-[54px] px-8'>
                        <div>
                            <div className='sm:text-[25.5px] flex items-center'>
                                <p className='text-[#777575]'>به نام :</p>
                                <p>{userSession.value.fullName}</p>
                            </div>
                            <div className='sm:text-[25.5px] flex items-center'>
                                {isVilla ? (
                                    <p className='text-[#777575]'>مدت اقامت :</p>
                                ) : (
                                    <p className='text-[#777575]'>مدت تور :</p>
                                )}
                                <p>3 روزه</p>
                            </div>
                            <div className='sm:text-[25.5px] flex items-center'>
                                <p className='text-[#777575]'>مبلغ پرداختی : </p>
                                {
                                    isVilla ? (
                                        <p>{villaDetails ? formatCurrency((+villaReserveDetail.duration.length) * (+villaDetails?.pricePerNight)) : ''} تومان </p>
                                    ) : (
                                        <p>{!isVilla && tourDetail && formatCurrency((tourDetail.price.child * (tourReserveDetail.passengersCount.child2 + tourReserveDetail.passengersCount.childFrom2to12)) + (tourDetail.price.adult * (tourReserveDetail.passengersCount.adult1 + tourReserveDetail.passengersCount.adult2)))} تومان </p>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='sm:text-[25.5px] flex items-center'>
                                    <p className='text-[#777575]'>تاریخ رفت : </p>
                                    {isVilla ? (
                                        //@ts-ignore
                                        <p>{villaReserveDetail.entryDate.day} {villaReserveDetail.entryDate.month.name} ماه</p>
                                    ) : (
                                        //@ts-ignore
                                        <p>{tourReserveDetail.entryDate.day} {tourReserveDetail.entryDate.month.name} ماه</p>
                                    )}
                                </div>
                                <div className='sm:text-[25.5px] flex items-center'>
                                    <p className='text-[#777575]'>تاریخ برگشت : </p>
                                    {isVilla ? (
                                        //@ts-ignore
                                        <p>{villaReserveDetail.exitDate.day} {villaReserveDetail.exitDate.month.name} ماه</p>
                                    ) : (
                                        //@ts-ignore
                                        <p>{tourReserveDetail.exitDate.day} {tourReserveDetail.exitDate.month.name} ماه</p>
                                    )}
                                </div>
                                <div className='sm:text-[25.5px] flex items-center'>
                                    <p className='text-[#777575]'>تعداد مسافران : </p>
                                    {isVilla ? <p>{villaReserveDetail.passengers} نفر</p> :
                                        <p>{tourReserveDetail.passengers.length} نفر</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Receipt
