import React, {useState} from 'react'
import Footer from "@/app/components/footer/footer";
import Button from "@/app/components/Button";
import useStep from "@/app/hooks/useStep";
import Stepper from "@/app/components/Stepper";
import {useAppSelector} from "@/app/redux/store";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import PassengerForm from "@/app/components/process/PassengerForm";
import {toast} from "react-toastify";
import {tripTourApi} from "@/axios-instances";

const Passengers = ({tourDetail}: { tourDetail: Tour }) => {
    const step = useStep()
    const tourReserveDetail = useAppSelector(state => state.tourReserve)
    const adultCount = tourReserveDetail.passengersCount.adult1 + tourReserveDetail.passengersCount.adult2
    const childCount = tourReserveDetail.passengersCount.child2 + tourReserveDetail.passengersCount.childFrom2to12
    const allCount = adultCount + childCount
    let adultPassengerCount = Array.from({length: adultCount}, (value, index) => index);
    let childPassengerCount = Array.from({length: childCount}, (value, index) => index);

    const handleStep = () => {
        if (allCount !== tourReserveDetail.passengers.length) {
            toast.warn('لطفا اطلاعات مسافران را کامل کنید.')
            return
        }
        step.nextStep()
    }

    return (
        <div>
            <Stepper/>
            <form className='pt-[10rem]'>
                {adultPassengerCount.map((passenger, index) => {
                    return (
                        <PassengerForm tourDetail={tourDetail} index={index}/>
                    )
                })}
                {childPassengerCount &&
                    childPassengerCount.map((passenger, index) => {
                        return (
                            <PassengerForm tourDetail={tourDetail} index={index} childPassenger/>
                        )
                    })
                }
                <Button
                    type={'button'}
                    onClick={handleStep}
                    styles='text-[24px] font-kalameh500 mx-auto h-[61px] mt-10 rounded-[16px] px-4'

                >
                    ثبت اطلاعات نهایی
                </Button>
            </form>
            <Footer/>
        </div>
    )
}

export default Passengers
