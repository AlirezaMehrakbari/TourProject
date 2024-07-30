'use client'
import useStep from "@/app/hooks/useStep";
import ConfirmInformation from "@/app/components/process/ConfirmInformation";
import PaymentDetail from "@/app/components/process/PaymentDetail";
import Receipt from "@/app/components/process/Receipt";
import VillaDetail from "@/app/components/villa/VillaDetail";


const VillaDetailPage = ({params: {data}}: any) => {
    const step = useStep()
    const dummyData_detail = {
            id: 1,
            user_id: 5,
            title: 'ویلا سه خواب مستر آستارا',
            address: {
                state: "گیلان",
                city: "آستارا",
                region: "",
                street: "امام خمینی",
                alley: "ستارخان",
                plaque: "34",
                lng: "38.426807",
                lat: "48.8707204"
            },
            meter: "120",
            suitableFor: "خانواده",
            numberOfRooms: "3",
            capacity: "8",
            type: "",
            layer: "1",
            pricePerNight: '4000000',
            pricePerAdditionalPerson: "500000",
            rules: "آخرین ورودی و خروجی 12 شب",
            deleted_at: "",
            created_at: "",
            updated_at: "",
            medias: [],
            rating_comment: {
                averageRating: 4,
                totalComments: 15
            },
            facilities: [
                {
                    id: 312,
                    facility: 'سرویس بهداشتی ایرانی / فرنگی',
                    type: "",
                    deleted_at: "",
                    created_at: "",
                    updated_at: "",
                    pivot: {
                        place_id: "2342",
                        facility_id: "153"
                    }
                },
                {
                    id: 687654,
                    facility: 'موزیک ولوازم صوتی',
                    type: "",
                    deleted_at: "",
                    created_at: "",
                    updated_at: "",
                    pivot: {
                        place_id: "2342",
                        facility_id: "153"
                    }
                },{
                    id: 324312,
                    facility: 'نزدیک به دریا',
                    type: "",
                    deleted_at: "",
                    created_at: "",
                    updated_at: "",
                    pivot: {
                        place_id: "2342",
                        facility_id: "153"
                    }
                },
                {
                    id: 12223,
                    facility: 'حمام',
                    type: "",
                    deleted_at: "",
                    created_at: "",
                    updated_at: "",
                    pivot: {
                        place_id: "2342",
                        facility_id: "153"
                    }
                },
                {
                    id: 899768,
                    facility: 'استخر',
                    type: "",
                    deleted_at: "",
                    created_at: "",
                    updated_at: "",
                    pivot: {
                        place_id: "2342",
                        facility_id: "153"
                    }
                },
                {
                    id: 453,
                    facility: 'سیستم گرمایشی / سرمایشی',
                    type: "",
                    deleted_at: "",
                    created_at: "",
                    updated_at: "",
                    pivot: {
                        place_id: "2342",
                        facility_id: "153"
                    }
                },


            ],
            comments: [
                {
                    id: 534,
                    commentable_type: "",
                    commentable_id: "342",
                    user_id: "423",
                    comment: 'بسیار تمیزومرتب',
                    rating: "5",
                    parent_id: "",
                    created_at: "",
                    updated_at: "",
                }
            ],
            user: {
                id: 21312,
                firstName: 'علیرضا',
                lastName: 'مهراکبری',
                phoneNumber: '09190475421',
                nationalCode: "0312720637",
                birthDate: "",
                description: "",
                city: "",
                deleted_at: "",
                created_at: "",
                updated_at: "",
                role: [],
                permission: [],
                medias: []
            }
        }

    // const fetchVillaDetails = async (): Promise<VillaDetails> => {
    //     const res = await tripTourApi.get(`places/show/${villaId}`)
    //     return res.data.place[0]
    // }
    //
    // const {data, isLoading, isError} = useQuery({
    //     queryKey: ['villaDetails'],
    //     queryFn: () => fetchVillaDetails()
    // })
    // useEffect(() => {
    //     step.resetStep()
    // }, [])
    // if (isLoading) return <Loading/>
    // if (isError) return <p>Something Went Wrong!!!x</p>
    // if (!data) return <p>Not Found!!</p>
    const getSectionComponent = () => {
        window.scrollTo(0, 0)
        switch (step.step) {
            case 0:
                return <VillaDetail villaDetails={dummyData_detail}/>
            case 2:
                return <ConfirmInformation villaDetails={dummyData_detail} isVilla/>
            case 3:
                return <PaymentDetail villaDetails={dummyData_detail} isVilla/>
            case 4:
                return <Receipt villaDetails={dummyData_detail} isVilla/>
        }
    }

    return getSectionComponent()
}

export default VillaDetailPage
