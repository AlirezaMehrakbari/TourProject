import React, {useEffect} from 'react'
import Footer from "@/app/components/footer/footer";
import Button from "@/app/components/Button";
import useStep from "@/app/hooks/useStep";
import Stepper from "@/app/components/Stepper";
import {useAppSelector} from "@/app/redux/store";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {toast, ToastContainer} from "react-toastify";

type ConfirmInformationProps = {
    isVilla?: boolean,
    villaDetails?: VillaDetails,
    tourDetail ?: Tour
}
const ConfirmInformation: React.FC<ConfirmInformationProps> = ({isVilla, villaDetails,tourDetail}) => {
    const villaReserveDetail = useAppSelector(state => state.villaReserve)
    const tourReserveDetail = useAppSelector(state => state.tourReserve)
    const step = useStep()
    const userSession = useAppSelector(state => state.userSlice)
    const registerModal = useRegisterModal()

    const handleSubmit = () => {
        if (!userSession.value.isLoggedIn) {
            toast.warn('برای ادامه لطفا وارد حساب کاربری خود شوید.')
            registerModal.onOpen()
            return
        }

        step.nextStep()
    }
    return (
        <div>
            <Stepper isVilla={isVilla}/>
            <div className='md:w-[60%] bg-[#FAFAF9] rounded-[14px] mx-auto mt-[10rem] shadow-md '>
                <div className='p-4'>
                    <table className='text-center w-full'>
                        <tbody className='text-center'>
                        {isVilla ? (
                            <>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>نوع
                                        اقامتگاه
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>ویلایــی</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>مقصد</td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{villaDetails?.address.state} - {villaDetails?.address.city}</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>
                                        متـراژ
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{villaDetails?.meter} متر</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>
                                        تعداد خواب
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{villaDetails?.numberOfRooms} خوابه</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>
                                        ظرفیت
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>حداکثر {villaDetails?.capacity} نفر</td>
                                </tr>
                                <tr>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>
                                        تاریخ سفر
                                    </td>
                                    {//@ts-ignore
                                        <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{villaReserveDetail.entryDate.day} {villaReserveDetail.entryDate.month.name} - {villaReserveDetail.exitDate.day} {villaReserveDetail.exitDate.month.name}</td>}
                                </tr>
                            </>
                        ) : (
                            <>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>مبدا</td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{tourDetail?.origin}</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>مقصد</td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{tourDetail?.destination}</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>تور
                                        مسافرتی
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{tourDetail?.tourManager}</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>تاریخ
                                        سفر
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{tourReserveDetail.entryDate.day} {tourReserveDetail.entryDate.month.name} - {tourReserveDetail.exitDate.day} {tourReserveDetail.exitDate.month.name}</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>شماره
                                        پرواز
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{tourDetail?.flightNumber}</td>
                                </tr>
                                <tr>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>کلاس
                                        پروازی
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>{tourDetail?.flightClass}</td>
                                </tr>
                            </>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Button
                styles='text-[28px] font-kalameh500 mx-auto px-8 py-6 rounded-[16px] mt-20'
                onClick={handleSubmit}
            >
                تایید اطلاعات سفر
            </Button>
            <Footer/>
        </div>
    )
}

export default ConfirmInformation
