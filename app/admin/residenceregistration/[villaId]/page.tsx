'use client'
import React, {useEffect, useState} from 'react'
import {useQuery} from "@tanstack/react-query";
import {tripTourApi} from "@/axios-instances";
import Loading from "@/app/components/Loading";
import Map from "@/app/components/Map";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Image from "next/image";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {useAppSelector} from "@/app/redux/store";

type FacilityType = {
    id: number,
    type: string,
    facility: string
}
type UploadImages = {
    address : string
}
const ResidenceEditPage = ({params: {villaId}}: any) => {
    const router = useRouter()
    const userSession = useAppSelector(state=>state.userSlice)
    const [uploadImages, setUploadImages] = useState<UploadImages[]>([])
    const [uploadVideo,setUploadVideo] = useState()
    const [facilities, setFacilities] = useState<FacilityType[]>([])
    const [selectedLocation, setSelectedLocation] = useState<number[]>()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const handleSetLocation = (data: number[]) => {
        setSelectedLocation(data)
    }

    const handleAddVilla: SubmitHandler<FieldValues> = (data) => {
        if (data.type === 'نوع اقامتگاه' || data.suitableFor === 'مناسب برای') {
            toast.error('لطفا مقادیر نوع اقامتگاه و مناسب واجدین را انتخاب نمایید.')
            return
        }
        tripTourApi.post(`places/completeStore/${villaId}`, {
            address: {
                state: data.state,
                city: data.city,
                region: data.region,
                street: data.street,
                alley: data.alley,
                plaque: data.plaque,
                lng: selectedLocation ? selectedLocation[0] : villaDetail?.address.lng,
                lat: selectedLocation ? selectedLocation[1] : villaDetail?.address.lat
            },
            meter: data.meter,
            suitableFor: data.suitableFor,
            numberOfRooms: data.numberOfRooms,
            capacity: data.capacity,
            type: data.type,
            layer: data.layer,
            pricePerNight: data.pricePerNight,
            pricePerAdditionalPerson: data.pricePerAdditionalPerson,
            rules: data.rules,
            facilities: facilities.map(item => item.id)
        }).then(res => {
            toast.success('ویلا شما با موفقیت ثبت شد.')
            setTimeout(() => {
                router.push('/admin/residences')
            }, 2000)
        }).catch(error => {
            toast.error('مشکلی رخ داده است.')
        })
    }
    const fetchAllFacilities = async (): Promise<Facilities[]> => {
        const res = await tripTourApi.get('facilities/all')
        return res.data.data
    }

    const fetchVillaDetail = async (): Promise<VillaDetails> => {
        const res = await tripTourApi.get(`places/show/${villaId}`)
        return res.data.place[0]
    }
    const {data, isLoading} = useQuery({
        queryKey: ['facilities'],
        queryFn: fetchAllFacilities
    })

    const {data: villaDetail} = useQuery({
        queryKey: ['villaDetail'],
        queryFn: fetchVillaDetail
    })
    useEffect(() => {
        let prevFacility = villaDetail?.facilities.map(item => item)
        if (prevFacility) {
            setFacilities(prevFacility)
        }
    }, [villaDetail]);

    const handleAddFacility = (facilityId: number, facilityType: string, facilityName: string) => {
        let existingItem = facilities.find(item => item.id === facilityId)
        if (!existingItem) {
            setFacilities(prev => [...prev, {id: facilityId, facility: facilityName, type: facilityType}])
        } else {
            const newFacilitiesList = facilities.filter(item => item.id !== facilityId)
            setFacilities(newFacilitiesList)
        }
    }

    if (isLoading) return <Loading/>
    if (!data) return <p>Something went wrong!</p>
    if (!villaDetail) return null
    return (
        <form className='w-[95%] lg:w-[80%] xl:w-[65%] mx-auto' onSubmit={handleSubmit(handleAddVilla)}>
            <h1 className='pt-[10rem] text-[32px] font-kalameh500'>ویلا - گیلان / آستارا</h1>
            <div className='flex flex-col items-center justify-center pt-8'>
                <div className='grid grid-cols-2 gap-4 justify-items-center pb-4'>
                    {uploadImages && uploadImages.map(item => {
                        return (
                            <div
                                className='first:col-span-2 relative first:w-[800px] w-[390px] h-[200px] rounded-[15px] shadow-md'>
                                {//@ts-ignore
                                    <Image src={item.address} alt={'test'}
                                           className='object-cover object-center rounded-[15px]' fill={true}/>}
                            </div>
                        )
                    })}
                    {villaDetail.medias && villaDetail.medias.map(item => {
                        return (
                            <div
                                className='first:col-span-2 relative first:w-[800px] w-[390px] h-[200px] rounded-[15px] shadow-md'>
                                {//@ts-ignore
                                    <Image src={item} alt={'test'}
                                           className='object-cover object-center rounded-[15px]' fill={true}/>}
                            </div>
                        )
                    })}
                </div>
                <label
                    className='flex flex-col w-[60%] bg-[#F0F0F0] rounded-2xl items-center cursor-pointer'>
                    <p className='font-kalameh400 text-[126px] text-white'>+</p>
                    <input type='file' className='hidden'
                           onChange={(e) => {
                               //@ts-ignore
                               setUploadImages(prev => [...prev, {address: URL.createObjectURL(e.target.files[0])}])
                               //@ts-ignore
                               console.log(e.target.files[0])

                               tripTourApi.post(`places/store/media/${villaId}`,{
                                   mediaName : villaDetail.title,
                                   //@ts-ignore
                                   media : e.target.files[0]
                               },{
                                   headers : {
                                       "Content-Type" : 'multipart/form-data'
                                   }
                               }).then(res=>{
                                   console.log(res.data)
                               }).catch(error=>{
                                   console.log(error)
                               },)
                           }
                           }/>
                </label>
                <p className='text-[18px]'>حتما باید <span className='font-kalameh500'>چهار تصویر</span> از اقامتگاه خود
                    بارگذاری کنید</p>
            </div>

            <div className='pt-20'>
                <div className='flex items-baseline gap-x-2'>
                    <p className='text-[24px] font-kalameh700'>بارگذاری ویدئو اقامتگاه</p>
                    <p className='text-[12px]'>(این قسمت اختیــاری میباشد)</p>
                </div>
                <label
                    className='flex flex-col w-[60%] bg-[#F0F0F0] rounded-2xl items-center cursor-pointer'>
                    <p className='font-kalameh400 text-[126px] text-white'>+</p>
                    <input type='file' className='hidden'
                           onChange={(e) => {
                               //@ts-ignore
                               setUploadVideo(e.target.files[0])


                               tripTourApi.post(`places/store/media/${villaId}`,{
                                   mediaName : 'ویدیو اقامتگاه',
                                   //@ts-ignore
                                   media : e.target.files[0]
                               },{
                                   headers : {
                                       "Content-Type" : 'multipart/form-data'
                                   }
                               }).then(res=>{
                                   console.log(res.data)
                               }).catch(error=>{
                                   console.log(error)
                               },)
                           }
                           }/>
                </label>
                <video onPlay={true} width="400" controls>
                    <source src={uploadVideo} type="video/mp4"/>

                         Your browser does not support HTML video.
                </video>
            </div>

            <div className="flex-grow border-t border-dashed border-[#5F5F5F99] mt-[3rem] pt-20"></div>

            <div className='flex flex-col max-md:items-center'>
                <p className='font-kalameh400 text-[30px]'><span
                    className='font-kalameh700'>امکانات اقامتـگاه</span> شما</p>
                <div className='pt-8 pr-4 grid md:grid-cols-3 gap-y-8'>
                    <div className='flex flex-col'>
                        <div className='relative'>
                            <p className='bg-[#f44336] text-white text-[24px] font-kalameh700 w-fit px-8 py-1 rounded-lg'>امـکانات
                                رفاهی</p>
                            <div
                                className='absolute top-3 right-[-2px] border-t-[12px] border-t-transparent border-r-[20px] border-r-[#FAFAFA] border-b-transparent border-b-[12px] rounded-tl-full'></div>
                        </div>
                        {facilities.filter(item => {
                            return item.type === 'رفاهی'
                        }).map(item => {
                            return (
                                <div className='flex items-center gap-x-2 pt-8'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18"
                                        fill="none">
                                        <path d="M1 4.19922H2.6H15.4" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M13.7996 4.2V15.4C13.7996 15.8243 13.631 16.2313 13.331 16.5314C13.0309 16.8314 12.624 17 12.1996 17H4.19961C3.77526 17 3.3683 16.8314 3.06824 16.5314C2.76818 16.2313 2.59961 15.8243 2.59961 15.4V4.2M4.99961 4.2V2.6C4.99961 2.17565 5.16818 1.76869 5.46824 1.46863C5.7683 1.16857 6.17526 1 6.59961 1H9.79961C10.224 1 10.6309 1.16857 10.931 1.46863C11.231 1.76869 11.3996 2.17565 11.3996 2.6V4.2"
                                            stroke="black" strokeWidth="0.8" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M6.59961 8.19922V12.9992" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.80078 8.19922V12.9992" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p>{item.facility}</p>
                                </div>
                            )
                        })}
                        <div>
                            <button
                                type='button'
                                className="w-[70%] bg-[#7A7A7A] rounded-[13px] text-white text-[22px] mt-4 mr-2"
                                //@ts-ignore
                                onClick={() => document.getElementById('my_modal_1').showModal()}>
                                امکانات جدیــد +
                            </button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box px-8">
                                    <div className='flex items-center border-b-[1px] border-[#BEBEBE]'>
                                        <form method="dialog">
                                            <button
                                                className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕
                                            </button>
                                        </form>
                                        <p className='text-[24px] font-kalameh500 pb-4'>امکانات رفاهی</p>
                                    </div>
                                    <div className='grid grid-cols-2 justify-items-start pt-4 gap-y-2'>
                                        {data.filter(item => {
                                            return item.type === 'رفاهی'
                                        }).map(item => {
                                            return (
                                                <div className='flex items-center gap-x-2'>
                                                    <span
                                                        onClick={() => handleAddFacility(item.id, item.type, item.facility)}
                                                        className={`cursor-pointer inline-block w-[12px] h-[12px] border-[1px] ${facilities.find(facility => facility.id === item.id) ? 'bg-[#47BE3C]' : 'bg-[#FFF]'}`}></span>
                                                    {item.facility}
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='relative'>
                            <p className='bg-[#f44336] text-white text-[24px] font-kalameh700 w-fit px-8 py-1 rounded-lg'>امـکانات
                                بهداشتی</p>
                            <div
                                className='absolute top-3 right-[-2px] border-t-[12px] border-t-transparent border-r-[20px] border-r-[#FAFAFA] border-b-transparent border-b-[12px] rounded-tl-full'></div>
                        </div>
                        {facilities.filter(item => {
                            return item.type === 'بهداشتی'
                        }).map(item => {
                            return (
                                <div className='flex items-center gap-x-2 pt-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18"
                                         fill="none">
                                        <path d="M1 4.19922H2.6H15.4" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M13.7996 4.2V15.4C13.7996 15.8243 13.631 16.2313 13.331 16.5314C13.0309 16.8314 12.624 17 12.1996 17H4.19961C3.77526 17 3.3683 16.8314 3.06824 16.5314C2.76818 16.2313 2.59961 15.8243 2.59961 15.4V4.2M4.99961 4.2V2.6C4.99961 2.17565 5.16818 1.76869 5.46824 1.46863C5.7683 1.16857 6.17526 1 6.59961 1H9.79961C10.224 1 10.6309 1.16857 10.931 1.46863C11.231 1.76869 11.3996 2.17565 11.3996 2.6V4.2"
                                            stroke="black" strokeWidth="0.8" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M6.59961 8.19922V12.9992" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.80078 8.19922V12.9992" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p>{item.facility}</p>
                                </div>
                            )
                        })}
                        <div>
                            <button
                                type='button'
                                className="w-[70%] bg-[#7A7A7A] rounded-[13px] text-white text-[22px] mt-4 mr-2"
                                //@ts-ignore
                                onClick={() => document.getElementById('my_modal_2').showModal()}>
                                امکانات جدیــد +
                            </button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box px-8">
                                    <div className='flex items-center border-b-[1px] border-[#BEBEBE]'>
                                        <form method="dialog">
                                            <button
                                                className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕
                                            </button>
                                        </form>
                                        <p className='text-[24px] font-kalameh500 pb-4'>امکانات بهداشتی</p>
                                    </div>
                                    <div className='grid grid-cols-2 justify-items-start pt-4 gap-y-2'>
                                        {data.filter(item => {
                                            return item.type === 'بهداشتی'
                                        }).map(item => {
                                            return (
                                                <div className='flex items-center gap-x-2'>
                                                    <span
                                                        onClick={() => handleAddFacility(item.id, item.type, item.facility)}
                                                        className={`cursor-pointer inline-block w-[12px] h-[12px] border-[1px] ${facilities.find(facility => facility.id === item.id) ? 'bg-[#47BE3C]' : 'bg-[#FFF]'}`}></span>
                                                    {item.facility}
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='relative'>
                            <p className='bg-[#f44336] text-white text-[24px] font-kalameh700 w-fit px-8 py-1 rounded-lg'>امـکانات
                                آشپزخانه</p>
                            <div
                                className='absolute top-3 right-[-2px] border-t-[12px] border-t-transparent border-r-[20px] border-r-[#FAFAFA] border-b-transparent border-b-[12px] rounded-tl-full'></div>
                        </div>
                        {facilities.filter(item => {
                            return item.type === 'آشپزی'
                        }).map(item => {
                            return (
                                <div className='flex items-center gap-x-2 pt-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18"
                                         fill="none">
                                        <path d="M1 4.19922H2.6H15.4" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M13.7996 4.2V15.4C13.7996 15.8243 13.631 16.2313 13.331 16.5314C13.0309 16.8314 12.624 17 12.1996 17H4.19961C3.77526 17 3.3683 16.8314 3.06824 16.5314C2.76818 16.2313 2.59961 15.8243 2.59961 15.4V4.2M4.99961 4.2V2.6C4.99961 2.17565 5.16818 1.76869 5.46824 1.46863C5.7683 1.16857 6.17526 1 6.59961 1H9.79961C10.224 1 10.6309 1.16857 10.931 1.46863C11.231 1.76869 11.3996 2.17565 11.3996 2.6V4.2"
                                            stroke="black" strokeWidth="0.8" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M6.59961 8.19922V12.9992" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.80078 8.19922V12.9992" stroke="black" strokeWidth="0.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p>{item.facility}</p>
                                </div>
                            )
                        })}
                        <div>
                            <button
                                type='button'
                                className="w-[70%] bg-[#7A7A7A] rounded-[13px] text-white text-[22px] mt-4 mr-2"
                                //@ts-ignore
                                onClick={() => document.getElementById('my_modal_3').showModal()}>
                                امکانات جدیــد +
                            </button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box px-8">
                                    <div className='flex items-center border-b-[1px] border-[#BEBEBE]'>
                                        <form method="dialog">
                                            <button
                                                className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕
                                            </button>
                                        </form>
                                        <p className='text-[24px] font-kalameh500 pb-4'>امکانات آشپزخانه</p>
                                    </div>
                                    <div className='grid grid-cols-2 justify-items-start pt-4 gap-y-2'>
                                        {data.filter(item => {
                                            return item.type === 'آشپزی'
                                        }).map(item => {
                                            return (
                                                <div className='flex items-center gap-x-2'>
                                                    <span
                                                        onClick={() => handleAddFacility(item.id, item.type, item.facility)}
                                                        className={`cursor-pointer inline-block w-[12px] h-[12px] border-[1px] ${facilities.find(facility => facility.id === item.id) ? 'bg-[#47BE3C]' : 'bg-[#FFF]'}`}></span>
                                                    {item.facility}
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow border-t border-dashed border-[#5F5F5F99] mt-[3rem] pt-20"></div>

            <div className='w-full py-8 flex flex-col md:flex-row justify-between items-center gap-2'>
                <div className='w-full sm:w-[60%]'>
                    <Map position={villaDetail.address ? [+villaDetail.address?.lng, +villaDetail.address?.lat] : [35.6720367,51.40755,11]} popup={'لوکیشن شما'} input selectedLocation={handleSetLocation}/>
                </div>
                <div className='lg:w-[35%] grid md:grid-cols-2 lg:grid-cols-1 max-md:grid-cols-2 gap-4'>
                    <Input
                        id={'state'}
                        label={'استان اقامتگاه'}
                        register={register}
                        errors={errors}
                        required={true}
                        defaultValue={villaDetail.address?.state}
                    />
                    <Input
                        id={'city'}
                        label={'شهر اقامتگاه'}
                        register={register}
                        errors={errors}
                        required={true}
                        defaultValue={villaDetail.address?.city}
                    />
                    <Input
                        id={'region'}
                        label={'محله/منطقه'}
                        register={register}
                        errors={errors}
                        required={true}
                        defaultValue={villaDetail.address?.region}
                    />
                    <Input
                        id={'street'}
                        label={'خیابان'}
                        register={register}
                        errors={errors}
                        required={true}
                        defaultValue={villaDetail.address?.street}
                    />
                    <Input
                        id={'alley'}
                        label={'کوچه'}
                        register={register}
                        errors={errors}
                        required={true}
                        defaultValue={villaDetail.address?.alley}
                    />
                    <Input
                        id={'plaque'}
                        label={'پلاک'}
                        register={register}
                        errors={errors}
                        required={true}
                        defaultValue={villaDetail.address?.plaque}
                    />
                </div>
            </div>

            <div className="flex-grow border-t border-dashed border-[#5F5F5F99] mt-[3rem] pt-20"></div>

            <div className='w-full flex flex-col gap-y-4'>
                <div
                    className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                    <Input
                        id={'meter'}
                        label={'متراژ'}
                        register={register}
                        errors={errors}
                        required={true}
                        type={'number'}
                        defaultValue={villaDetail.meter}
                    />
                    <select
                        className={`w-full px-4 py-2.5 rounded-xl text-[#A0A0A0] bg-[#F0F0F0] outline-none`}
                        {...register('suitableFor', {required: true})}>
                        <option disabled selected hidden>مناسب برای</option>
                        <option>خانواده</option>
                        <option>برای مجرد</option>
                    </select>
                    {errors.suitableFor && <p className='text-rose-500'>فیلد الزامیست</p>}
                    <Input
                        id={'numberOfRooms'}
                        label={'تعداد اتاق'}
                        register={register}
                        errors={errors}
                        required={true}
                        type={'number'}
                        defaultValue={villaDetail?.numberOfRooms}
                    />
                </div>
                <div
                    className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                    <Input
                        id={'capacity'}
                        label={'ظرفیت'}
                        register={register}
                        errors={errors}
                        required={true}
                        type={'number'}
                        defaultValue={villaDetail?.capacity}
                    />
                    <select
                        {...register('type', {required: true})}
                        className='w-full px-4 py-2.5 rounded-xl text-[#A0A0A0] bg-[#F0F0F0] outline-none'>
                        <option disabled selected hidden>نوع اقامتگاه</option>
                        <option>ویلا</option>
                        <option>هتل</option>
                        <option>ساحلی</option>
                    </select>
                    {errors.type && <p className='text-rose-500'>فیلد الزامیست</p>}
                    <Input
                        id={'layer'}
                        label={'طبقه'}
                        register={register}
                        errors={errors}
                        required={true}
                        defaultValue={villaDetail?.layer}
                    />
                </div>
                <div
                    className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                    <Input
                        id={'pricePerNight'}
                        label={'قیمت برای هرنفر'}
                        register={register}
                        errors={errors}
                        required={true}
                        type={'number'}
                        defaultValue={villaDetail?.pricePerNight}
                    />
                    <Input
                        id={'pricePerAdditionalPerson'}
                        label={'افزایش قیمت به ازای هرنفر'}
                        register={register}
                        errors={errors}
                        required={true}
                        type={'number'}
                        defaultValue={villaDetail?.pricePerAdditionalPerson}
                    />
                </div>
            </div>


            <div className='pt-20'>
                <h2 className='text-[30px] font-kalameh400'><span
                    className='font-kalameh700'>قوانین اقامتـگاه</span> شما</h2>
                <div>
                    <p className='text-[22px] pt-4'>
                        در این قسمت میتوانید قوانین مربوط به اقامتگاه خود رابرای مهمانان ذکر کنید .
                    </p>
                    <textarea
                        {...register('rules')}
                        defaultValue={villaDetail.rules}
                        className='bg-[#EAEAEA] rounded-[14px] w-full outline-none mt-2 lg:h-[150px] p-4'
                    />
                </div>
            </div>

            <Button type='submit' styles='mx-auto px-8 rounded-[10px] my-4'>
                ثبت اطلاعات
            </Button>

        </form>
    )
}

export default ResidenceEditPage
