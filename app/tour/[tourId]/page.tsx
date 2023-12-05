'use client'
import React, {useEffect} from 'react'
import TourDetail from "@/app/components/tour/TourDetail";
import useStep from "@/app/hooks/useStep";
import Passengers from "@/app/components/process/Passengers";
import ConfirmInformation from "@/app/components/process/ConfirmInformation";
import PaymentDetail from "@/app/components/process/PaymentDetail";
import Receipt from "@/app/components/process/Receipt";
import {useAppDispatch, useAppSelector} from "@/app/redux/store";
import {resetStep} from "@/app/redux/StepSlice";
const TourDetailPage = () => {
    // const step = useAppSelector(state=>state.stepSlice.step)
    // const dispatch = useAppDispatch()
    const step = useStep()
    useEffect(() => {
        // dispatch(resetStep())
        step.resetStep()
    }, [])
    const getSectionComponent = () => {
        window.scrollTo(0, 0)
        switch (step.step) {
            case 0 :
                return <TourDetail/>
            case 1 :
                return <Passengers/>
            case 2 :
                return <ConfirmInformation/>
            case 3 :
                return <PaymentDetail/>
            case 4 :
                return <Receipt/>
        }
    }

    return getSectionComponent()
}

export default TourDetailPage
