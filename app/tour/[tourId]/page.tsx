'use client'
import React, {useEffect} from 'react'
import TourDetail from "@/app/components/tour/TourDetail";
import useStep from "@/app/hooks/useStep";
import Passengers from "@/app/components/process/Passengers";
import ConfirmInformation from "@/app/components/process/ConfirmInformation";
import PaymentDetail from "@/app/components/process/PaymentDetail";
import Receipt from "@/app/components/process/Receipt";
import {useQuery} from "@tanstack/react-query";
import {tripTourApi} from "@/axios-instances";
import Loading from "@/app/components/Loading";

const TourDetailPage = ({params: {tourId}}: any) => {
    const step = useStep()

    const tourDetail = async () => {
        const res = await tripTourApi.get(`tours/show/${tourId}`)
        return res.data.data
    }

    const {data, isLoading, isError} = useQuery({
        queryKey: ['tourDetail'],
        queryFn: tourDetail

    })
    useEffect(() => {
        step.resetStep()
    }, [])
    if (isLoading) return <Loading/>
    if (isError) return <p>مشکلی رخ داده لطفا دوباره سعی کن :)</p>
    if (!data) return <p>Not Found!!</p>
    const getSectionComponent = () => {
        window.scrollTo(0, 0)
        switch (step.step) {
            case 0 :
                return <TourDetail tourDetail={data}/>
            case 1 :
                return <Passengers tourDetail={data}/>
            case 2 :
                return <ConfirmInformation tourDetail={data}/>
            case 3 :
                return <PaymentDetail tourDetail={data}/>
            case 4 :
                return <Receipt tourDetail={data}/>
        }
    }

    return getSectionComponent()
}

export default TourDetailPage
