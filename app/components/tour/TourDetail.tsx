
import TourDetail0 from '@/public/images/TourDetail.png'
import TourDetail1 from '@/public/images/TourDetail1.png'
import TourDetail2 from '@/public/images/TourDetail2.png'
import TourDetail3 from '@/public/images/TourDetail3.png'
import Image from "next/image";
import Footer from "@/app/components/footer/footer";
import Comments from "@/app/components/Comments";
import Button from "@/app/components/Button";
import useStep from "@/app/hooks/useStep";
import {Metadata} from "next";
import SelectDropDown from "@/app/components/inputs/SelectDropDown";
import {useState} from "react";
import Stepper from "@/app/components/Stepper";


const TourDetail = () => {
    const [travelDate, setTravelDate] = useState<string>('تاریخ سفر را مشخص کنید')
    const [passengers, setPassengers] = useState({
        adult2: 0,
        adult1: 0,
        childFrom2to12: 0,
        child2: 0

    })
    let quantity = passengers.adult1 + passengers.adult2 + passengers.childFrom2to12 + passengers.child2
    const planForDay = [
        {
            id: 1,
            title: 'برنامــه روز اول سـفر',
            text: 'لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها  لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها',
            img: TourDetail1
        },
        {
            id: 2,
            title: 'برنامــه روز دوم سـفر',
            text: 'لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها  لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها',
            img: TourDetail1
        },
        {
            id: 3,
            title: 'برنامــه روز سوم سـفر',
            text: 'لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها  لـورم ایپـــــســوم متــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بـا استــفاده از طـراحــان گرافیک اســـت، چاپگرها',
            img: TourDetail1
        }
    ]

    const step1 = useStep()

    const handleStep = () => {
        step1.nextStep()
        console.log(step1.step)
    }

    return (
        <div>
            <Stepper/>
            <div className='w-[80%] mx-auto pt-[10rem]'>
                <div className='flex item-center justify-between w-full py-8 h-full'>
                    <Image
                        className='w-[70%] object-cover rounded-[12px]'
                        src={TourDetail0}
                        alt={'Tour Detail Picture'}
                    />
                    <div className='flex gap-y-3 flex-col w-[25%] justify-between'>
                        <Image
                            className='rounded-[12px]'
                            src={TourDetail1}
                            alt={'Tour Detail Picture'}
                        />
                        <Image
                            className='rounded-[12px]'
                            src={TourDetail2}
                            alt={'Tour Detail Picture'}
                        />
                        <Image
                            className='rounded-[12px]'
                            src={TourDetail3}
                            alt={'Tour Detail Picture'}
                        />
                    </div>
                </div>

                <h1 className='text-[30px] font-kalameh500 py-16 pr-1'>{'تور تهران - استانبول'}</h1>

                <div className='flex justify-between'>
                    <div className='md:w-[65%] w-full'>
                        <h4 className='font-kalameh400'>{'تور 3 روزه - هـتل - هواپیما'}</h4>
                        <p className='font-kalameh400'>مدیریت تور :
                            <span className='font-kalameh700 pr-2 text-[#2486B0]'>رضا صالحی</span>
                        </p>

                        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 pt-6'>
                            <div
                                className='bg-gradient-to-b from-[#F1F1F1] to-white to-80% flex flex-col items-start py-2 px-4 rounded-md min-w-[215px] h-[144px] hover:shadow-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M15 7.06984C15 6.39984 14.67 5.77984 14.11 5.40984L10.11 2.73984C9.44 2.28984 8.56 2.28984 7.89 2.73984L3.89 5.40984C3.34 5.77984 3 6.39984 3 7.06984V12.7498C3 13.0298 3.22 13.2498 3.5 13.2498H14.5C14.78 13.2498 15 13.0298 15 12.7498V7.06984ZM9 10.7498C8.04 10.7498 7.25 9.95984 7.25 8.99984C7.25 8.03984 8.04 7.24984 9 7.24984C9.96 7.24984 10.75 8.03984 10.75 8.99984C10.75 9.95984 9.96 10.7498 9 10.7498Z"
                                        fill="#FF7512"/>
                                    <path
                                        d="M22 21.2501H20.73V18.2501C21.68 17.9401 22.37 17.0501 22.37 16.0001V14.0001C22.37 12.6901 21.3 11.6201 19.99 11.6201C18.68 11.6201 17.61 12.6901 17.61 14.0001V16.0001C17.61 17.0401 18.29 17.9201 19.22 18.2401V21.2501H15V15.2501C15 14.9701 14.78 14.7501 14.5 14.7501H3.5C3.22 14.7501 3 14.9701 3 15.2501V21.2501H2C1.59 21.2501 1.25 21.5901 1.25 22.0001C1.25 22.4101 1.59 22.7501 2 22.7501H19.93C19.95 22.7501 19.96 22.7601 19.98 22.7601C20 22.7601 20.01 22.7501 20.03 22.7501H22C22.41 22.7501 22.75 22.4101 22.75 22.0001C22.75 21.5901 22.41 21.2501 22 21.2501ZM8.25 18.2501C8.25 17.8401 8.59 17.5001 9 17.5001C9.41 17.5001 9.75 17.8401 9.75 18.2501V21.2501H8.25V18.2501Z"
                                        fill="#FF7512"/>
                                </svg>
                                <p className='text-[#A7A8A9] font-kalameh400 pb-2'>اقامتگاه</p>
                                <p className='w-full font-kalameh500'>
                                    2 شب هتل استابول<br/>
                                    1 شب هتل آنتالیا
                                </p>
                            </div>
                            <div
                                className='bg-gradient-to-b from-[#F1F1F1] to-white to-80% flex flex-col items-start py-2 px-4 rounded-md min-w-[215px] h-[144px] hover:shadow-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M18.7099 9.48952C18.6099 9.48952 18.5099 9.46952 18.4099 9.42952C18.0299 9.25952 17.8599 8.81952 18.0199 8.43952C18.2099 8.00952 18.0999 7.37952 17.7499 6.85952C17.3999 6.32952 16.8699 5.96952 16.3899 5.99952C15.9499 5.99952 15.6399 5.66952 15.6299 5.25952C15.6299 4.83952 15.9599 4.50952 16.3699 4.49952C17.3999 4.47952 18.3699 5.06952 18.9999 6.01952C19.6399 6.97952 19.7899 8.12952 19.3999 9.02952C19.2799 9.31952 18.9999 9.48952 18.7099 9.48952Z"
                                        fill="#FF7512"/>
                                    <path
                                        d="M21.8199 10.4803C21.7499 10.4803 21.6899 10.4703 21.6199 10.4503C21.2199 10.3403 20.9899 9.93035 21.0999 9.53035C21.4799 8.17035 21.1599 6.55035 20.2499 5.19035C19.3399 3.83035 17.9599 2.92035 16.5499 2.75035C16.1399 2.70035 15.8499 2.33035 15.8999 1.92035C15.9499 1.51035 16.3299 1.21035 16.7299 1.27035C18.5599 1.49035 20.3399 2.65035 21.4899 4.37035C22.6399 6.09035 23.0299 8.17035 22.5399 9.95035C22.4499 10.2603 22.1499 10.4803 21.8199 10.4803Z"
                                        fill="#FF7512"/>
                                    <path
                                        d="M17.1201 11.78C17.1201 12.08 16.8701 12.33 16.5701 12.33H3.43013C3.13013 12.33 2.88013 12.08 2.88013 11.78C2.88013 11.48 3.13013 11.23 3.43013 11.23H4.17013L4.45013 9.90996C4.71013 8.62996 5.26013 7.45996 7.44013 7.45996H12.5701C14.7501 7.45996 15.2901 8.63996 15.5601 9.90996L15.8401 11.23H16.5801C16.8701 11.23 17.1201 11.48 17.1201 11.78Z"
                                        fill="#FF7512"/>
                                    <path
                                        d="M17.43 15.9099C17.32 14.7099 17 13.4199 14.66 13.4199H5.34005C3.00005 13.4199 2.68005 14.7099 2.57005 15.9099L2.16005 20.3599C2.11005 20.9099 2.29005 21.4699 2.67005 21.8899C3.06005 22.3099 3.60005 22.5499 4.19005 22.5499H5.56005C6.74005 22.5499 6.97005 21.8699 7.12005 21.4299L7.27005 20.9899C7.44005 20.4899 7.48005 20.3599 8.14005 20.3599H11.88C12.54 20.3599 12.56 20.4299 12.75 20.9899L12.9 21.4299C13.05 21.8799 13.27 22.5499 14.46 22.5499H15.83C16.41 22.5499 16.96 22.3099 17.35 21.8899C17.73 21.4699 17.91 20.9199 17.86 20.3599L17.43 15.9099ZM7.81005 17.4299H5.62005C5.32005 17.4299 5.07005 17.1799 5.07005 16.8799C5.07005 16.5799 5.32005 16.3299 5.62005 16.3299H7.81005C8.11005 16.3299 8.36005 16.5799 8.36005 16.8799C8.36005 17.1799 8.11005 17.4299 7.81005 17.4299ZM14.38 17.4299H12.19C11.89 17.4299 11.64 17.1799 11.64 16.8799C11.64 16.5799 11.89 16.3299 12.19 16.3299H14.38C14.68 16.3299 14.93 16.5799 14.93 16.8799C14.93 17.1799 14.68 17.4299 14.38 17.4299Z"
                                        fill="#FF7512"/>
                                </svg>
                                <p className='text-[#A7A8A9] font-kalameh400 pb-2'>ایاب و ذهاب</p>
                                <p className='w-full font-kalameh500'>
                                    سرویس بین شهری
                                </p>
                            </div>
                            <div
                                className='bg-gradient-to-b from-[#F1F1F1] to-white to-80% flex flex-col items-start py-2 px-4 rounded-md min-w-[215px] h-[144px] hover:shadow-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M16.8198 1.91016H7.17982C5.05982 1.91016 3.31982 3.65016 3.31982 5.77016V19.8602C3.31982 21.6602 4.60982 22.4202 6.18982 21.5502L11.0698 18.8402C11.5898 18.5502 12.4298 18.5502 12.9398 18.8402L17.8198 21.5502C19.3998 22.4302 20.6898 21.6702 20.6898 19.8602V5.77016C20.6798 3.65016 18.9498 1.91016 16.8198 1.91016ZM15.6198 9.03016L11.6198 13.0302C11.4698 13.1802 11.2798 13.2502 11.0898 13.2502C10.8998 13.2502 10.7098 13.1802 10.5598 13.0302L9.05982 11.5302C8.76982 11.2402 8.76982 10.7602 9.05982 10.4702C9.34982 10.1802 9.82982 10.1802 10.1198 10.4702L11.0898 11.4402L14.5598 7.97016C14.8498 7.68016 15.3298 7.68016 15.6198 7.97016C15.9098 8.26016 15.9098 8.74016 15.6198 9.03016Z"
                                        fill="#FF7512"/>
                                </svg>
                                <p className='text-[#A7A8A9] font-kalameh400 pb-2'>بیمه مسافران</p>
                                <p className='w-full font-kalameh500'>
                                    بیمه 10 هزارلیری<br/>
                                    با پوشش حوادث
                                </p>
                            </div>
                            <div
                                className='bg-gradient-to-b from-[#F1F1F1] to-white to-80% flex flex-col items-start py-2 px-4 rounded-md min-w-[215px] h-[144px] hover:shadow-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24"
                                     fill="none">
                                    <path d="M0.718994 22.8555H21.7784" stroke="#FF7512" strokeWidth="1.4375"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M2 20C2.38668 17.7973 3.4743 16.0685 5.18151 14.6239C6.88872 13.1794 9.04837 12.3791 11.2847 12.3623C13.5164 12.3675 15.6738 13.1653 17.372 14.6134C19.0702 16.0615 20.1988 18.0657 20.5565 20.2686"
                                        fill="#FF7512"/>
                                    <path
                                        d="M2 20C2.38668 17.7973 3.4743 16.0685 5.18151 14.6239C6.88872 13.1794 9.04837 12.3791 11.2847 12.3623C13.5164 12.3675 15.6738 13.1653 17.372 14.6134C19.0702 16.0615 20.1988 18.0657 20.5565 20.2686"
                                        stroke="#FF7512" strokeWidth="1.4375" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M11.2845 12.2902C12.3166 12.2902 13.1533 11.4536 13.1533 10.4215C13.1533 9.38941 12.3166 8.55273 11.2845 8.55273C10.2524 8.55273 9.41577 9.38941 9.41577 10.4215C9.41577 11.4536 10.2524 12.2902 11.2845 12.2902Z"
                                        stroke="#FF7512" strokeWidth="1.4375" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path d="M11.2842 2.875V5.53436" stroke="#FF7512" strokeWidth="1.4375"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.74976 5.67188V8.25938" stroke="#FF7512" strokeWidth="1.4375"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.8184 4.67188V7.25938" stroke="#FF7512" strokeWidth="1.4375"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className='text-[#A7A8A9] font-kalameh400 pb-2'>وعده های غذایی</p>
                                <p className='w-full font-kalameh500'>
                                    3 وعده <br/>
                                    صبحانه ، ناهار ، شام
                                </p>
                            </div>
                            <div
                                className='bg-gradient-to-b from-[#F1F1F1] to-white to-80% flex flex-col items-start py-2 px-4 rounded-md min-w-[215px] h-[144px] hover:shadow-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.21 15.81 15.96 15.94 15.7 15.94C15.57 15.94 15.44 15.91 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z"
                                        fill="#FF7512"/>
                                </svg>
                                <p className='text-[#A7A8A9] font-kalameh400 pb-2'>مدت زمان سفر</p>
                                <p className='w-full font-kalameh500'>
                                    3 شب و 4 روز
                                </p>
                            </div>
                            <div
                                className='bg-gradient-to-b from-[#F1F1F1] to-white to-80% flex flex-col items-start py-2 px-4 rounded-md min-w-[215px] h-[144px] hover:shadow-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19"
                                     fill="none">
                                    <path
                                        d="M17.6862 17.9995V15.8558C17.6862 14.7187 17.2467 13.6282 16.4644 12.8241C15.6821 12.0201 14.621 11.5684 13.5147 11.5684H5.17156C4.06519 11.5684 3.00414 12.0201 2.22182 12.8241C1.4395 13.6282 1 14.7187 1 15.8558V17.9995"
                                        fill="#FF7512"/>
                                    <path
                                        d="M17.6862 17.9995V15.8558C17.6862 14.7187 17.2467 13.6282 16.4644 12.8241C15.6821 12.0201 14.621 11.5684 13.5147 11.5684H5.17156C4.06519 11.5684 3.00414 12.0201 2.22182 12.8241C1.4395 13.6282 1 14.7187 1 15.8558V17.9995"
                                        stroke="#FF7512" strokeWidth="1.50176" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M14.766 7.88267C16.0332 7.88267 17.0604 6.85545 17.0604 5.58831C17.0604 4.32117 16.0332 3.29395 14.766 3.29395C13.4989 3.29395 12.4717 4.32117 12.4717 5.58831C12.4717 6.85545 13.4989 7.88267 14.766 7.88267Z"
                                        fill="#FF7512" stroke="#FF7512" strokeWidth="1.50176" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M9.34343 9.57487C11.6473 9.57487 13.515 7.65532 13.515 5.28744C13.515 2.91955 11.6473 1 9.34343 1C7.03955 1 5.17188 2.91955 5.17188 5.28744C5.17188 7.65532 7.03955 9.57487 9.34343 9.57487Z"
                                        fill="#FF7512" stroke="#F0F0F0" strokeWidth="0.57359" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M21.3362 16.4695V14.3258C21.3355 13.3759 21.0279 12.453 20.4616 11.7023C19.8953 10.9515 19.1025 10.4152 18.2075 10.1777"
                                        stroke="#FF7512" strokeWidth="0.917744" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                                <p className='text-[#A7A8A9] font-kalameh400 pb-2'>بازه سنـی</p>
                                <p className='w-full font-kalameh500'>
                                    مناسب برای <br/>
                                    همه رده های سـنی
                                </p>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-[24px] lg:text-[32px] font-kalameh700 pt-[120px]'>خلاصـه ای از سفر</h1>
                            <p className='text-[18px] font-kalameh400 pt-[20px] text-justify'>
                                لـورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                گرافیک اســـت، چاپگرها و متون بلکه روزنامه و مجله در ستون وسطر سطرآنچنان که لازم است،و
                                برای شرایط فعلی تکنولوژی لـورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                با استفاده از طراحان گرافیک اســـت، چاپگرها و متون بلکه روزنامه .
                            </p>
                            <p className='text-[19px] text-[#3672B7] text-left pb-[180px]'>مشـاهده بیشتر</p>
                            <div className='flex flex-col gap-y-20'>
                                {planForDay.map(item => {
                                    return (
                                        <div key={item.id}>
                                            <h1 className='text-[32px] font-kalameh700 py-4'>{item.title}</h1>
                                            <div className='flex flex-col lg:flex-row'>
                                                <p className='text-[16px] xl:text-[18px] w-full font-kalameh400 text-justify p-3'>{item.text}</p>
                                                <Image
                                                    className='lg:w-[40%] w-full rounded-[20px] object-cover'
                                                    src={item.img}
                                                    alt={`${item.title} Picture`}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/*قسمت ثبت نظر*/} {/*قسمت کامنت ها*/}
                            <Comments disabled={true}/>
                        </div>
                    </div>
                    <div
                        className='hidden md:flex flex-col gap-y-4 sticky top-[10rem] rounded-[12px] md:w-[30%] bg-[#F1F1F1] p-4 max-h-[500px] overflow-hidden'>
                        <h1 className='text-[24px] lg:text-[30.8px] font-kalameh500 text-center pb-6'> انتخـاب تاریـخ
                            تـور</h1>
                        <div className='flex items-center gap-x-[8px]'>
                            <button
                                className='text-[22.8px] font-kalameh400 border-[0.2px] px-[32px] py-[4px] text-[#848282] active:text-[#000] rounded-[10px]'>{'آبان'}</button>
                            <button
                                className='text-[22.8px] font-kalameh400 border-[0.2px] px-[32px] py-[4px] text-[#848282] active:text-[#000] rounded-[10px]'>{'آذر'}</button>
                        </div>
                        <SelectDropDown
                            label={travelDate}
                            styles='flex flex-col  items-baseline justify-between bg-white w-[98%] px-4 py-2 rounded-[10px] cursor-pointer'
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none">
                                <path
                                    d="M21 6.30469H3C1.89543 6.30469 1 7.22499 1 8.36024V20.6936C1 21.8288 1.89543 22.7491 3 22.7491H21C22.1046 22.7491 23 21.8288 23 20.6936V8.36024C23 7.22499 22.1046 6.30469 21 6.30469Z"
                                    stroke="#FF7512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 12.4727H23" stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path
                                    d="M8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2L8.5 2ZM5.5 2L5.5 8L8.5 8L8.5 2L5.5 2Z"
                                    fill="#FF7512"/>
                                <path
                                    d="M18.5 2C18.5 1.17157 17.8284 0.5 17 0.5C16.1716 0.5 15.5 1.17157 15.5 2L18.5 2ZM15.5 2L15.5 8L18.5 8L18.5 2L15.5 2Z"
                                    fill="#FF7512"/>
                            </svg>}
                            dropDownStyles='bg-[#FEFEFE] top-[3.5rem] w-full inset-x-0 mx-auto border-t-[1px] border-[#7B7B7B] pt-2'
                            labelStyles='flex items-center gap-x-4 text-[18px] text-[#9F9F9F] py-2'
                        >
                            <div
                                className='text-[18px] text-[#616161] divide-y-[1px] flex flex-col gap-y-2 py-2 divide-[#D0D0D0]'>
                                <div onClick={() => setTravelDate('17 آبـان - 20 آبـان')}>17 آبـان - 20 آبـان</div>
                                <div onClick={() => setTravelDate('22 آبـان - 25 آبـان')}>22 آبـان - 25 آبـان</div>
                            </div>
                        </SelectDropDown>
                        <SelectDropDown
                            label={`${quantity > 0  ? quantity : 'تعداد مسافران'}`}
                            styles='flex flex-col items-baseline justify-between bg-white w-[98%] px-4 py-2 rounded-[10px] cursor-pointer'
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none">
                                <path
                                    d="M21 6.30469H3C1.89543 6.30469 1 7.22499 1 8.36024V20.6936C1 21.8288 1.89543 22.7491 3 22.7491H21C22.1046 22.7491 23 21.8288 23 20.6936V8.36024C23 7.22499 22.1046 6.30469 21 6.30469Z"
                                    stroke="#FF7512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 12.4727H23" stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path
                                    d="M8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2L8.5 2ZM5.5 2L5.5 8L8.5 8L8.5 2L5.5 2Z"
                                    fill="#FF7512"/>
                                <path
                                    d="M18.5 2C18.5 1.17157 17.8284 0.5 17 0.5C16.1716 0.5 15.5 1.17157 15.5 2L18.5 2ZM15.5 2L15.5 8L18.5 8L18.5 2L15.5 2Z"
                                    fill="#FF7512"/>
                            </svg>}
                            dropDownStyles='bg-[#FEFEFE] top-[3.5rem] w-full inset-x-0 mx-auto border-t-[1px] border-[#7B7B7B] pt-2'
                            labelStyles='flex items-center gap-x-4 text-[18px] text-[#9F9F9F] py-2'
                        >
                            <div className='text-[18px] text-[#616161]'>
                                <div>17 آبـان - 20 آبـان</div>
                                <div>22 آبـان - 25 آبـان</div>
                            </div>
                        </SelectDropDown>
                        <div className='flex items-center justify-between'>
                            <p className='text-[17.5px] font-kalameh400'>مجموع قیمت :</p>
                            <p className='text-[22.8px] font-kalameh500'> 5.000.000 تومـان</p>
                        </div>
                        <Button styles='text-[24px] font-kalameh400 rounded-[5px] h-[56px]' onClick={handleStep}>
                            تایید و ادامـه
                        </Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TourDetail
