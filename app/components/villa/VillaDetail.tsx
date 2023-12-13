import DatePicker, {Calendar} from "react-multi-date-picker"
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import Picture from '@/public/images/TakhfifPicture.png'
import Picture1 from '@/public/images/VillaHomePicture.png'
import Stepper from "@/app/components/Stepper";
import UserProfile from '@/public/images/UserProfile.png'
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";
import Map from "@/app/components/Map";
import Comments from "@/app/components/Comments";
import Footer from "@/app/components/footer/footer";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import Button from "@/app/components/Button";
import useStep from "@/app/hooks/useStep";
import toast from "react-hot-toast";

const VillaDetail = () => {
    const step = useStep()
    const [firstMonth, setFirstMonth] = useState([
        new DateObject({calendar: persian}).setDay(5),
        new DateObject({calendar: persian}).setDay(12),
    ])
    const [secondMonth, setSecondMonth] = useState([
        new DateObject({calendar: persian}).add(1, "month"),
    ])
    const [entryDate, setEntryDate] = useState()
    const [outDate, setOutDate] = useState()
    const [passengers, setPassengers] = useState<number>(0)

    const pictures = [
        {id: 1, src: Picture1},
        {id: 2, src: Picture1},
        {id: 3, src: Picture1},

    ]
    const possibilities = [
        {id: 1, possibility: 'منظره مناسب'},
        {id: 2, possibility: 'سیستم گرمایشی'},
        {id: 3, possibility: 'سیستم سرمایشی'},
        {id: 4, possibility: 'پارکینگ'},
        {id: 5, possibility: 'لوازم سرو غذا'},
        {id: 6, possibility: 'سرویس فرنگی '},
    ]

    return (
        <div>
            <Stepper isVilla/>
            <div className='w-[80%] mx-auto lg:pt-[10rem]'>
                <section className='py-16 border-b-[0.7px] border-[#9E9E9E]'>
                    <div className='flex flex-col lg:flex-row pb-20'>
                        <div
                            className='flex flex-col lg:flex-row justify-between gap-x-[30px] gap-y-8 w-full lg:w-[70%]'>
                            <div className='relative lg:w-[80%]'>
                                <Image
                                    className='rounded-[12px] object-cover object-center shadow-md hover:shadow-lg cursor-pointe h-full'
                                    src={Picture}
                                    alt={'Villa Picture'}
                                />
                                <svg className='absolute left-[24px] top-[24px] group-hover:cursor-pointer'
                                     xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21"
                                     fill="none">
                                    <path
                                        d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
                                        fill="black" fillOpacity="0.3" stroke="white" strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='lg:w-[25%] flex flex-row lg:flex-col justify-between'>
                                {pictures.map(picture => {
                                    return (
                                        <>
                                            <Image
                                                className='rounded-[12px] shadow-md max-lg:w-[30%]'
                                                src={picture.src}
                                                alt={'Villa Picture'}
                                            />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='w-full lg:w-[30%] lg:pr-6 self-center max-lg:py-4'>
                            <div className="relative flex pb-4 items-center">
                                <div className="lg:hidden flex-grow border-t border-[#DDD]"></div>
                                <span className="flex-shrink pl-4 text-[17px] font-kalameh700">امـکانات اقـامتگاه</span>
                                <div className="flex-grow border-t border-[#DDD]"></div>
                            </div>
                            <div className='flex flex-col gap-y-4 lg:gap-y-8 lg:pt-4 '>
                                {possibilities.map(item => {
                                    return (
                                        <p
                                            key={item.id}
                                            className='text-[17px] font-kalameh400 last:line-through'>
                                            {item.possibility}
                                        </p>
                                    )
                                })}
                                <button
                                    className='self-end text-[17px] text-[#4E69CA] border-[0.3px] border-[#9A9A9A] rounded-[12px] px-3'>
                                    مشاهده همـه امکانــات
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between gap-x-16 gap-y-4 items-center'>
                        <div
                            className='relative lg:w-[50%] border-[1px] border-[#E8E8E8] rounded-[30px] px-[20px] sm:px-[95px] py-[30px]'>
                            <p className='text-[#565656] text-justify'>
                                سـفر خــوشی را بـرای شــما عزیـزان آرزومندیم و امیـدواریم میـــزبانـان
                                خـوبی برای شما باشیـم تا بتوانیم خاطرات خوبـی را برایتان رقم بزنیم
                                مجموعه ما با سابقه کاری چندساله ...
                            </p>
                            <div className='absolute flex items-center top-[-2rem] right-8'>
                                <Image
                                    className='w-[64px] h-[64px] rounded-[62px] object-top object-cover z-10'
                                    src={UserProfile}
                                    alt={'User Profile'}
                                />
                                <div className='flex items-center bg-[#F0F0F0] rounded-[10px] px-4 py-2 mr-[-10px]'>
                                    <p className='text-[11px] font-kalameh400'>به مـیزبانی :</p>
                                    <p className='text-[17px] font-kalameh500 pr-2'>علـی حسـینی</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[50%] flex flex-col gap-y-4'>
                            <div
                                className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                                <div className='bg-[#F8F8F8] w-full rounded-[6px]'>
                                    <p className='text-[12px] font-kalameh400 py-[12px] px-4'>متراژ</p>
                                </div>
                                <div className='bg-[#F8F8F8] w-full rounded-[6px]'>
                                    <p className='text-[12px] font-kalameh400 py-[12px] px-4'>مناسب برای</p>
                                </div>
                                <div className='bg-[#F8F8F8] w-full rounded-[6px]'>
                                    <p className='text-[12px] font-kalameh400 py-[12px] px-4'>تعداد اتاق</p>
                                </div>
                            </div>
                            <div
                                className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                                <div className='bg-[#F8F8F8] w-full rounded-[6px]'>
                                    <p className='text-[12px] font-kalameh400 py-[12px] px-4'>ظرفیت</p>
                                </div>
                                <div className='bg-[#F8F8F8] w-full rounded-[6px]'>
                                    <p className='text-[12px] font-kalameh400 py-[12px] px-4'>سال ساخت</p>
                                </div>
                                <div className='bg-[#F8F8F8] w-full rounded-[6px]'>
                                    <p className='text-[12px] font-kalameh400 py-[12px] px-4'>طبـقه</p>
                                </div>
                            </div>
                            <div
                                className='flex flex-col sm:flex-row items-center justify-between w-full gap-x-4 gap-y-3'>
                                <div className='bg-[#F8F8F8] w-full rounded-[6px]'>
                                    <p className='text-[12px] font-kalameh400 py-[12px] px-4'>قیمت برای هر شب</p>
                                </div>
                                <div className='bg-[#F8F8F8] w-full rounded-[6px]'>
                                    <p className='text-[12px] font-kalameh400 py-[12px] px-4'>قیمت برای هر نفر</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex gap-x-4 justify-between items-baseline'>
                    <section className='w-full lg:w-[50%]'>
                        {/*بخش روزهای رزرو شده*/}
                        <div className='flex flex-col border-b-[0.7px] border-[#9E9E9E]'>
                            <div className='flex items-center pt-8'>
                                <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"
                                     fill="none">
                                    <path
                                        d="M36 17.4457V19.0097C35.9979 22.6756 34.8108 26.2427 32.6159 29.1788C30.4209 32.115 27.3356 34.2629 23.8201 35.3023C20.3046 36.3418 16.5473 36.2169 13.1086 34.9465C9.66986 33.6761 6.73391 31.3281 4.73863 28.2527C2.74335 25.1774 1.79565 21.5394 2.03685 17.8815C2.27806 14.2235 3.69525 10.7415 6.07707 7.95475C8.4589 5.16802 11.6777 3.22588 15.2535 2.41798C18.8293 1.61008 22.5704 1.9797 25.919 3.47173"
                                        stroke="black" strokeWidth="3.4" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path d="M35.9999 5.41016L18.9999 22.4272L13.8999 17.3272" stroke="black"
                                          strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <h1 className='text-[24px] lg:text-[32px] font-kalameh400 pr-2'>روز هـای رزرو شـده</h1>
                            </div>
                            {/*قسمت روزهای رزرو شده باید اصلاح گردد*/}
                            <div
                                className='flex flex-col xl:flex-row gap-y-4 items-center justify-between gap-x-4 py-10 z-0'>
                                <Calendar
                                    buttons={false}
                                    value={firstMonth}
                                    readOnly
                                    calendar={persian}
                                    locale={persian_fa}
                                />
                                <Calendar
                                    buttons={false}
                                    value={secondMonth}
                                    readOnly
                                    calendar={persian}
                                    locale={persian_fa}
                                />
                            </div>
                        </div>

                        {/*بخش موقعیت مکانی*/}
                        <div className='border-b-[1px] border-[#9E9E9E] py-8'>
                            <div className='flex items-center'>
                                <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48"
                                     fill="none">
                                    <path
                                        d="M38 20C38 34 20 46 20 46C20 46 2 34 2 20C2 15.2261 3.89642 10.6477 7.27208 7.27208C10.6477 3.89642 15.2261 2 20 2C24.7739 2 29.3523 3.89642 32.7279 7.27208C36.1036 10.6477 38 15.2261 38 20Z"
                                        stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M20 26C23.3137 26 26 23.3137 26 20C26 16.6863 23.3137 14 20 14C16.6863 14 14 16.6863 14 20C14 23.3137 16.6863 26 20 26Z"
                                        stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <h2 className='lg:text-[32px] font-kalameh400 pr-2'>موقعیـت مکانــی</h2>
                            </div>
                            <div className='pt-4'>
                                <Map position={[35.7, 51.5]} popup={'ویلا'}/>
                                <p className='whitespace-pre  lg:text-[24px] text-[#888888]'>گیلان ، آسـتارا ،جاده
                                    مهدیخان
                                    محله
                                    <br/>نرسیده به علی آباد ...</p>
                            </div>
                        </div>
                        <div className='pt-20'>
                            <Comments disabled/>
                        </div>
                        {/*حالت موبایل انتخاب رزرو*/}
                        <div
                            className='flex lg:hidden sticky h-[320px] top-[10rem] w-[70%] rounded-[15px] bg-[#D9D9D9] mx-auto'>
                            <form className='flex flex-col w-[90%] mx-auto gap-y-[3px] pt-4'>
                                <div className='w-full flex items-center gap-x-[3px] overflow-hidden'>
                                    <div className='w-full flex flex-col bg-[#EFEFEF] pt-4 pb-10 px-6 rounded-tr-[17px]'>
                                        <p className='flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 fill="none">
                                                <path
                                                    d="M21 6.30566H3C1.89543 6.30566 1 7.22597 1 8.36122V20.6946C1 21.8298 1.89543 22.7501 3 22.7501H21C22.1046 22.7501 23 21.8298 23 20.6946V8.36122C23 7.22597 22.1046 6.30566 21 6.30566Z"
                                                    stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M1 12.4727H23" stroke="#FF7512" strokeWidth="2"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"/>
                                                <path
                                                    d="M8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2L8.5 2ZM5.5 2L5.5 8L8.5 8L8.5 2L5.5 2Z"
                                                    fill="#FF7512"/>
                                                <path
                                                    d="M18.5 2C18.5 1.17157 17.8284 0.5 17 0.5C16.1716 0.5 15.5 1.17157 15.5 2L18.5 2ZM15.5 2L15.5 8L18.5 8L18.5 2L15.5 2Z"
                                                    fill="#FF7512"/>
                                            </svg>
                                            <span className='pr-2'>تــاریـخ ورود</span>
                                        </p>
                                        <DatePicker
                                            inputClass='bg-transparent outline-none mt-8'
                                            minDate={new DateObject()}
                                            placeholder={'روز  /  مــاه  /  سـال'}
                                            value={entryDate}
                                            //@ts-ignore
                                            onChange={setEntryDate}
                                            fixMainPosition={true}
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="bottom"
                                        />
                                    </div>
                                    <div className='w-full flex flex-col bg-[#EFEFEF] pt-4 pb-10 px-6 rounded-tl-[17px]'>
                                        <p className='flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M21 6.30566H3C1.89543 6.30566 1 7.22597 1 8.36122V20.6946C1 21.8298 1.89543 22.7501 3 22.7501H21C22.1046 22.7501 23 21.8298 23 20.6946V8.36122C23 7.22597 22.1046 6.30566 21 6.30566Z"
                                                    stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M1 12.4727H23" stroke="#FF7512" strokeWidth="2"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                <path
                                                    d="M8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2L8.5 2ZM5.5 2L5.5 8L8.5 8L8.5 2L5.5 2Z"
                                                    fill="#FF7512"/>
                                                <path
                                                    d="M18.5 2C18.5 1.17157 17.8284 0.5 17 0.5C16.1716 0.5 15.5 1.17157 15.5 2L18.5 2ZM15.5 2L15.5 8L18.5 8L18.5 2L15.5 2Z"
                                                    fill="#FF7512"/>
                                            </svg>
                                            <span className='pr-2'>تــاریـخ خروج</span>
                                        </p>
                                        <DatePicker
                                            disabled={!entryDate}
                                            inputClass={`bg-transparent outline-none mt-8`}
                                            //@ts-ignore
                                            minDate={new DateObject(entryDate)}
                                            placeholder={'روز  /  مــاه  /  سـال'}
                                            value={outDate}
                                            //@ts-ignore
                                            onChange={setOutDate}
                                            fixMainPosition={true}
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="bottom"
                                        />
                                    </div>
                                </div>
                                <div
                                    className='flex justify-between w-full bg-[#EFEFEF]  pt-4 pb-10 px-6 rounded-br-[17px] rounded-bl-[17px]'>
                                    <div className='flex items-cneter'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22"
                                             fill="none">
                                            <path
                                                d="M18.4545 21.1823V18.9399C18.4545 17.7505 17.9948 16.6097 17.1764 15.7687C16.3581 14.9276 15.2482 14.4551 14.0909 14.4551H5.36363C4.20632 14.4551 3.09642 14.9276 2.27808 15.7687C1.45974 16.6097 1 17.7505 1 18.9399V21.1823"
                                                stroke="#FF7512" strokeWidth="1.57091" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M9.7274 9.96969C12.1374 9.96969 14.091 7.96175 14.091 5.48484C14.091 3.00793 12.1374 1 9.7274 1C7.31743 1 5.36377 3.00793 5.36377 5.48484C5.36377 7.96175 7.31743 9.96969 9.7274 9.96969Z"
                                                stroke="#FF7512" strokeWidth="1.57091" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M24.9998 21.1821V18.9397C24.9991 17.946 24.6773 16.9807 24.0849 16.1953C23.4925 15.4099 22.6632 14.849 21.7271 14.6006"
                                                stroke="#FF7512" strokeWidth="1.57091" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M17.3638 1.14551C18.3024 1.39251 19.1344 1.95357 19.7285 2.74022C20.3226 3.52687 20.645 4.49437 20.645 5.4902C20.645 6.48603 20.3226 7.45353 19.7285 8.24018C19.1344 9.02683 18.3024 9.58789 17.3638 9.83489"
                                                stroke="#FF7512" strokeWidth="1.57091" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        <span>تعداد نفرات</span>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <button className='border-2 px-2 rounded-md'
                                                onClick={() => setPassengers(prev => prev + 1)} type='button'>+
                                        </button>
                                        <span>{passengers}</span>
                                        <button className='border-2 px-2 rounded-md' onClick={() => setPassengers(prev => {
                                            return prev === 0 ? 0 : prev - 1
                                        })}  type='button'>-
                                        </button>
                                    </div>
                                </div>
                                <Button onClick={step.increase2Step} styles='w-full mx-auto rounded-lg mt-2 py-6'>
                                    انتخاب تاریخ رزرو
                                </Button>
                            </form>
                        </div>
                    </section>

                    <section
                        className='hidden lg:block sticky lg:h-[450px] xl:h-[320px] top-[10rem] w-[40%] rounded-[15px] bg-[#D9D9D9]'>
                        <form className='flex flex-col w-[90%] mx-auto gap-y-[3px] pt-4'>
                            <div className='w-full flex flex-col xl:flex-row items-center gap-x-[3px] overflow-hidden gap-y-2'>
                                <div className='w-full flex flex-col bg-[#EFEFEF] pt-4 pb-10 px-6 rounded-md xl:rounded-tr-[17px]'>
                                    <p className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M21 6.30566H3C1.89543 6.30566 1 7.22597 1 8.36122V20.6946C1 21.8298 1.89543 22.7501 3 22.7501H21C22.1046 22.7501 23 21.8298 23 20.6946V8.36122C23 7.22597 22.1046 6.30566 21 6.30566Z"
                                                stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path d="M1 12.4727H23" stroke="#FF7512" strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                            <path
                                                d="M8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2L8.5 2ZM5.5 2L5.5 8L8.5 8L8.5 2L5.5 2Z"
                                                fill="#FF7512"/>
                                            <path
                                                d="M18.5 2C18.5 1.17157 17.8284 0.5 17 0.5C16.1716 0.5 15.5 1.17157 15.5 2L18.5 2ZM15.5 2L15.5 8L18.5 8L18.5 2L15.5 2Z"
                                                fill="#FF7512"/>
                                        </svg>
                                        <span className='pr-2'>تــاریـخ ورود</span>
                                    </p>
                                    <DatePicker
                                        inputClass='bg-transparent outline-none mt-8'
                                        minDate={new DateObject()}
                                        placeholder={'روز  /  مــاه  /  سـال'}
                                        value={entryDate}
                                        //@ts-ignore
                                        onChange={setEntryDate}
                                        fixMainPosition={true}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom"
                                    />
                                </div>
                                <div className='w-full flex flex-col bg-[#EFEFEF] pt-4 pb-10 px-6 rounded-md xl:rounded-tl-[17px]'>
                                    <p className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 6.30566H3C1.89543 6.30566 1 7.22597 1 8.36122V20.6946C1 21.8298 1.89543 22.7501 3 22.7501H21C22.1046 22.7501 23 21.8298 23 20.6946V8.36122C23 7.22597 22.1046 6.30566 21 6.30566Z"
                                                stroke="#FF7512" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path d="M1 12.4727H23" stroke="#FF7512" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                            <path
                                                d="M8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2L8.5 2ZM5.5 2L5.5 8L8.5 8L8.5 2L5.5 2Z"
                                                fill="#FF7512"/>
                                            <path
                                                d="M18.5 2C18.5 1.17157 17.8284 0.5 17 0.5C16.1716 0.5 15.5 1.17157 15.5 2L18.5 2ZM15.5 2L15.5 8L18.5 8L18.5 2L15.5 2Z"
                                                fill="#FF7512"/>
                                        </svg>
                                        <span className='pr-2'>تــاریـخ خروج</span>
                                    </p>
                                    <DatePicker
                                        disabled={!entryDate}
                                        inputClass={`bg-transparent outline-none mt-8`}
                                        //@ts-ignore
                                        minDate={new DateObject(entryDate)}
                                        placeholder={'روز  /  مــاه  /  سـال'}
                                        value={outDate}
                                        //@ts-ignore
                                        onChange={setOutDate}
                                        fixMainPosition={true}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom"
                                    />
                                </div>
                            </div>
                            <div
                                className='flex justify-between w-full bg-[#EFEFEF]  pt-4 pb-10 px-6 rounded-br-[17px] rounded-bl-[17px]'>
                                <div className='flex items-cneter'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22"
                                         fill="none">
                                        <path
                                            d="M18.4545 21.1823V18.9399C18.4545 17.7505 17.9948 16.6097 17.1764 15.7687C16.3581 14.9276 15.2482 14.4551 14.0909 14.4551H5.36363C4.20632 14.4551 3.09642 14.9276 2.27808 15.7687C1.45974 16.6097 1 17.7505 1 18.9399V21.1823"
                                            stroke="#FF7512" strokeWidth="1.57091" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M9.7274 9.96969C12.1374 9.96969 14.091 7.96175 14.091 5.48484C14.091 3.00793 12.1374 1 9.7274 1C7.31743 1 5.36377 3.00793 5.36377 5.48484C5.36377 7.96175 7.31743 9.96969 9.7274 9.96969Z"
                                            stroke="#FF7512" strokeWidth="1.57091" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M24.9998 21.1821V18.9397C24.9991 17.946 24.6773 16.9807 24.0849 16.1953C23.4925 15.4099 22.6632 14.849 21.7271 14.6006"
                                            stroke="#FF7512" strokeWidth="1.57091" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M17.3638 1.14551C18.3024 1.39251 19.1344 1.95357 19.7285 2.74022C20.3226 3.52687 20.645 4.49437 20.645 5.4902C20.645 6.48603 20.3226 7.45353 19.7285 8.24018C19.1344 9.02683 18.3024 9.58789 17.3638 9.83489"
                                            stroke="#FF7512" strokeWidth="1.57091" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                    <span>تعداد نفرات</span>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <button className='border-2 px-2 rounded-md'
                                            onClick={() => setPassengers(prev => prev + 1)} type='button'>+
                                    </button>
                                    <span>{passengers}</span>
                                    <button className='border-2 px-2 rounded-md' onClick={() => setPassengers(prev => {
                                        return prev === 0 ? 0 : prev - 1
                                    })}  type='button'>-
                                    </button>
                                </div>
                            </div>
                            <Button onClick={step.increase2Step} styles='w-full mx-auto rounded-lg mt-2 py-6'>
                                انتخاب تاریخ رزرو
                            </Button>
                        </form>
                    </section>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default VillaDetail
