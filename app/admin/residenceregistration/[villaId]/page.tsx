'use client'
import React from 'react'
import {useQuery} from "@tanstack/react-query";
import {tripTourApi} from "@/axios-instances";
import Loading from "@/app/components/Loading";
import Map from "@/app/components/Map";
import formatCurrency from "@/app/utils/FormatCurrency";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import {useForm} from "react-hook-form";

const ResidenceEditPage = ({params : {villaId}} : any) => {

    const {register,handleSubmit,formState : {errors}} = useForm()
    const fetchVillaDetail = async (): Promise<VillaDetails> => {
        const res = await tripTourApi.get(`places/show/${villaId}`,{
            headers : {
                Authorization : `Bearer 164|aS3cb4A7TCPR6elLOXgI7g4daHq4foQCg07UB8gt00b95389`
            }
        })
        return res.data.place[0]
    }

    const {data, isLoading} = useQuery({
        queryKey: ['villaDetail'],
        queryFn: fetchVillaDetail
    })
    const {data : facilities} = useQuery({
        queryKey : ['facilities'],
        queryFn : async () : Promise<Facilities[]>=>{
           const res = await tripTourApi.get('facilities/all')
            return res.data.data
        }
    })

    if (isLoading) return <Loading/>
    if (!data) return <p>Something went wrong!</p>
    if (!facilities) return <p>Something went wrong!</p>
    return (
        <form className='w-[95%] lg:w-[80%] xl:w-[60%] mx-auto'>
            <h1 className='pt-[10rem] text-[32px] font-kalameh500'>ویلا - {data.address.state} / {data.address.city}</h1>
            <div className='flex flex-col items-center justify-center pt-8'>
                <label
                    className='flex flex-col w-[60%] bg-[#F0F0F0] rounded-2xl items-center cursor-pointer'>
                    <p className='font-kalameh400 text-[126px] text-white'>+</p>
                    <input type='file' className='hidden'/>
                </label>
                <p className='text-[18px]'>حتما باید <span className='font-kalameh500'>چهار تصویر</span> از اقامتگاه خود
                    بارگذاری کنید</p>
            </div>

            <div className='pt-20'>
                <div className='flex items-baseline gap-x-2'>
                    <p className='text-[24px] font-kalameh700'>بارگذاری ویدئو اقامتگاه</p>
                    <p className='text-[12px]'>(این قسمت اختیــاری میباشد)</p>
                </div>
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
                        {data.facilities.filter(item => {
                            return item.type === 'رفاهی'
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
                                        {facilities.filter(item => {
                                            return item.type === 'رفاهی'
                                        }).map(item => {
                                            return (
                                                <div className='flex items-center gap-x-2'>
                                                    <span
                                                        className={`inline-block w-[12px] h-[12px] border-[1px] ${data.facilities.find(facility=>facility.id === item.id) ? 'bg-[#47BE3C]' : 'bg-[#EFEFEF]'}`}></span>
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
                        {data.facilities.filter(item => {
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
                                        {facilities.filter(item => {
                                            return item.type === 'بهداشتی'
                                        }).map(item => {
                                            return (
                                                <div className='flex items-center gap-x-2'>
                                                    <span
                                                        className={`inline-block w-[12px] h-[12px] border-[1px] ${data.facilities.find(facility=>facility.id === item.id) ? 'bg-[#47BE3C]' : 'bg-[#EFEFEF]'}`}></span>
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
                        {data.facilities.filter(item => {
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
                                        {facilities.filter(item => {
                                            return item.type === 'آشپزی'
                                        }).map(item => {
                                            return (
                                                <div className='flex items-center gap-x-2'>
                                                    <span
                                                        className={`inline-block w-[12px] h-[12px] border-[1px] ${data.facilities.find(facility=>facility.id === item.id) ? 'bg-[#47BE3C]' : 'bg-[#EFEFEF]'}`}></span>
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
                    <Map position={[35.7185937, 51.4457186]} popup={'ss'} input/>
                </div>
                <div className='lg:w-[35%] grid md:grid-cols-2 lg:grid-cols-1 max-md:grid-cols-2 gap-4'>
                    <Input
                       id={'state'}
                       label={'استان اقامتگاه'}
                       register={register}
                       errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'شهر اقامتگاه'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'محله/منطقه'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'خیابان'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'کوچه'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'پلاک'}
                        register={register}
                        errors={errors}
                    />
                </div>
            </div>

            <div className="flex-grow border-t border-dashed border-[#5F5F5F99] mt-[3rem] pt-20"></div>

            <div className='w-full flex flex-col gap-y-4'>
                <div
                    className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                    <Input
                        id={'state'}
                        label={'متراژ'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'مناسب برای'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'تعداد اتاق'}
                        register={register}
                        errors={errors}
                    />
                </div>
                <div
                    className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                    <Input
                        id={'state'}
                        label={'ظرفیت'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'نوع اقامتگاه'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'طبقه'}
                        register={register}
                        errors={errors}
                    />
                </div>
                <div
                    className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                    <Input
                        id={'state'}
                        label={'قیمت برای هرنفر'}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id={'state'}
                        label={'افزایش قیمت به ازای هرنفر'}
                        register={register}
                        errors={errors}
                    />
                </div>
            </div>


            <div className='pt-20'>
                <h2 className='text-[30px] font-kalameh400'> <span className='font-kalameh700'>قوانین اقامتـگاه</span> شما</h2>
                <div>
                    <p className='text-[22px] pt-4'>
                        در این قسمت میتوانید قوانین مربوط به اقامتگاه خود رابرای مهمانان ذکر کنید .
                    </p>
                    <textarea
                        className='bg-[#EAEAEA] rounded-[14px] w-full outline-none mt-2 lg:h-[150px] p-4'
                    />
                </div>
            </div>

            <Button styles='mx-auto px-8 rounded-[10px] my-4'>
                ثبت اطلاعات
            </Button>

        </form>
    )
}

export default ResidenceEditPage
