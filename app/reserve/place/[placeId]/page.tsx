'use client'
import {useEffect} from "react";
import useStep from "@/app/hooks/useStep";
import ConfirmInformation from "@/app/components/process/ConfirmInformation";
import PaymentDetail from "@/app/components/process/PaymentDetail";
import Receipt from "@/app/components/process/Receipt";
import VillaDetail from "@/app/components/villa/VillaDetail";
import {tripTourApi} from "@/axios-instances";
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/components/Loading";
import {useAppSelector} from "@/app/redux/store";


const PlaceDetailPage = ({params: {placeId}}: any) => {
    const step = useStep()
    const userSession = useAppSelector(state=>state.userSlice)
    const fetchPlaceDetail = async (): Promise<VillaDetails> => {
        const res = await tripTourApi.get(`places/show/${placeId}`)
        return res.data.place[0]
    }

    const {data, isLoading, isError} = useQuery({
        queryKey: ['placeDetail'],
        queryFn: () => fetchPlaceDetail(),
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
            case 0:
                return <VillaDetail villaDetails={data}/>
            case 2:
                return <ConfirmInformation villaDetails={data} isVilla/>
            case 3:
                return <PaymentDetail villaDetails={data} isVilla/>
            case 4:
                return <Receipt villaDetails={data} isVilla/>
        }
    }

    return getSectionComponent()
}

export default PlaceDetailPage
