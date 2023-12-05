'use client'
import Stepper from "@/app/components/Stepper";
import {useEffect} from "react";
import useStep from "@/app/hooks/useStep";
import Passengers from "@/app/components/process/Passengers";
import ConfirmInformation from "@/app/components/process/ConfirmInformation";
import PaymentDetail from "@/app/components/process/PaymentDetail";
import Receipt from "@/app/components/process/Receipt";
import VillaDetail from "@/app/components/villa/VillaDetail";

const VillaDetailPage = () => {
    const step = useStep()
    useEffect(() => {
        step.resetStep()
    }, [])
    const getSectionComponent = () => {
        window.scrollTo(0, 0)
        switch (step.step) {
            case 0:
                return <VillaDetail/>
            case 2:
                return <ConfirmInformation isVilla/>
            case 3:
                return <PaymentDetail isVilla/>
            case 4:
                return <Receipt isVilla/>
        }
    }

    return getSectionComponent()
}

export default VillaDetailPage
