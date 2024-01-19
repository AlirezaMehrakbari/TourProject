'use client'
import React, {useEffect, useId, useState} from 'react'
import Navbar from "@/app/components/navbar/Navbar";
import {Metadata} from "next";
import Image from "next/image";
import TourHomePicture from '@/public/images/TourHomePicture.png'
import TourHomePicture1 from '@/public/images/TourHomePicture1.png'
import TourHomePicture2 from '@/public/images/TourHomePicture2.png'
import TourHomePicture3 from '@/public/images/TourHomePicture3.png'
import TourGillan from '@/public/images/TourGillan.png'
import Layout from "@/app/components/Layout";
import TourList from "@/app/components/tour/TourList";
import Link from "next/link";
import Footer from "@/app/components/footer/footer";
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";
import useStep from "@/app/hooks/useStep";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, {Calendar} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import DateObject from "react-date-object";
import moment from "jalali-moment";
//@ts-ignore
import opacity from "react-element-popper/animations/opacity"
import DatePickerPlugin from "@/app/components/plugin/DatePickerPlugin";
import {tripTourApi} from "@/axios-instances";
import Loading from "@/app/components/Loading";
import {useInfiniteQuery} from "@tanstack/react-query";


const TourHomePage = () => {
    const jazebeTouristi = [
        {
            id: 1,
            src: TourGillan,
            title: 'گیلان'
        },
        {
            id: 2,
            src: TourGillan,
            title: 'تخت جمشید'
        }, {
            id: 3,
            src: TourGillan,
            title: 'تخت جمشید'
        }, {
            id: 4,
            src: TourGillan,
            title: 'تخت جمشید'
        }, {
            id: 5,
            src: TourGillan,
            title: 'یزد'
        }, {
            id: 6,
            src: TourGillan,
            title: 'شیراز'
        }, {
            id: 7,
            src: TourGillan,
            title: 'شیراز'
        }, {
            id: 8,
            src: TourGillan,
            title: 'شیراز'
        },
    ]
    const questions = [
        {
            id: 1,
            question: '1.چطور میتوانم ثبت نام کنم؟',
            answer: `برای اینکار ابتدا باید حساب کاربری خود را بسازید از قسمت عضویت \nمیتوانید اینکار را انجام دهید`
        },
        {
            id: 2,
            question: '2.چگونه میتوانم اقامتگاه مورد نظر خود را رزرو کنم؟',
            answer: 'ابتدا اقامتگاه مورد نظرتان را بر اسـاس نام شهر ، تاریخ سفر ، و تعداد مسافران \n' +
                'انتخاب کنید'
        },
        {
            id: 3,
            question: '3.بعد از پایان سفر امکان ثبت نظر دارم؟',
            answer: 'بعد از پایان سفر لینک نظر سنجی از طرف تریپ تور برای شما ارسال میشود \n' +
                'با ورود به لینک میتوانید نظر خود را ثبت کنید '
        },
    ]
    const provinces = [
        {
            id: 1,
            provinceName: 'تهران'
        },
        {
            id: 2,
            provinceName: 'اصفهان'
        },
        {
            id: 3,
            provinceName: 'شیراز'
        },
        {
            id: 4,
            provinceName: 'سمنان'
        },
        {
            id: 5,
            provinceName: 'البرز'
        },
    ]

    const [origin, setOrigin] = useState('مبدا')
    const [destination, setDestination] = useState('مقصد')
    const [passengers, setPassengers] = useState(0)
    const [values, setValues] = useState([])
    const [filterValue, setFilterValue] = useState('فیلتر')
    const [activeButton, setActiveButton] = useState('cheapest')

    const handleFilter = (e: any, text?: string) => {
        setActiveButton(e.target.name)
        text && setFilterValue(text)

    }

    const fetchAllTour = async ({pageParam = 1}): Promise<Tours> => {
        const res = await tripTourApi.get(`tours/all?paginate=4&page=${pageParam}&filter=${activeButton}`)
        return res.data
    }

    const {data, isLoading, isFetching,isRefetching, hasNextPage, fetchNextPage} = useInfiniteQuery({
        queryKey: ['allTour', activeButton],
        //@ts-ignore
        queryFn: fetchAllTour,
        getNextPageParam: (lastPage, page) => {
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1
            } else {
                return undefined
            }
        },
        initialPageParam: undefined
    })
    const entryDate = new DateObject({
        //@ts-ignore
        year: values[0]?.year,
        //@ts-ignore
        month: values[0]?.month,
        //@ts-ignore
        day: values[0]?.day,

    }).format()
    const exitDate = new DateObject({
        //@ts-ignore
        year: values[1]?.year,
        //@ts-ignore
        month: values[1]?.month,
        //@ts-ignore
        day: values[1]?.day,

    }).format()
    // console.log(moment.from(entryDate, 'fa', 'YYYY/MM/DD').format('YYYY-MM-DD'))
    // console.log(moment.from(exitDate, 'fa', 'YYYY/MM/DD').format('YYYY-MM-DD'))
    const handleIncreasePassenger = () => {
        setPassengers(prev => prev + 1)
    }
    const handleDecreasePassenger = () => {
        if (passengers === 0) {
            return
        }
        setPassengers(prev => prev - 1)
    }

    if (isLoading) return <Loading/>
    if (!data) return <p className='flex justify-center items-center font-kalameh500'>مشکلی رخ داده. لطفا اینترنت بررسی
        کن :)</p>

    return (
        <div className='flex flex-col'>
            <Navbar/>
            <Image
                className='rounded-xl mt-[12rem] max-h-[564px] xl:max-w-[1164px] lg:max-w-[900px] md:max-w-[700px] mx-auto object-cover'
                src={TourHomePicture}
                alt='Tour Picture'/>
            <div className='mx-auto mt-[-30px]'>
                <Layout>
                    <form className='xl:w-[1020px] grid xl:grid-cols-5 md:grid-cols-2 gap-8'>
                        <div className='flex flex-col gap-y-4'>
                            <p className='text-[20.6px] font-kalameh700 text-white'>از کجا میخوای بـری؟!</p>
                            <SelectDropDown main label={origin}
                                            dropDownStyles={'absolute bg-[#FFF] top-10 w-full shadow-md rounded-md text-[#000] left-[2px] px-4 py-2'}>
                                <div className='flex flex-col divide-y divide-[#D3D3D3]'>
                                    {provinces.map(province => {
                                        return (
                                            <div key={province.id} className='py-2 cursor-pointer'
                                                 onClick={() => setOrigin(province.provinceName)}>{province.provinceName}</div>
                                        )
                                    })}
                                </div>
                            </SelectDropDown>
                        </div>
                        <div>
                            <div className='flex flex-col gap-y-4'>
                                <p className='text-[20.6px] font-kalameh700 text-white'> کجـا میخوای بـری ؟!</p>
                                <SelectDropDown main label={destination}
                                                dropDownStyles={'absolute bg-[#FFF] top-10 w-full shadow-md rounded-md text-[#000] left-[2px] px-4 py-2'}>
                                    <div className='flex flex-col divide-y divide-[#D3D3D3]'>
                                        {provinces.map(province => {
                                            return (
                                                <div key={province.id} className='py-2 cursor-pointer'
                                                     onClick={() => setDestination(province.provinceName)}>{province.provinceName}</div>
                                            )
                                        })}
                                    </div>
                                </SelectDropDown>
                            </div>
                        </div>
                        <div className='z-0'>
                            <div className='flex flex-col gap-y-4'>
                                <p className='text-[20.6px] font-kalameh700 text-white'> کِی میخوای بـری ؟!</p>
                                <DatePicker
                                    //@ts-ignore
                                    plugins={[<DatePickerPlugin entryDate={entryDate} exitDate={exitDate} position='top'/>]}
                                    dateSeparator=' تا '
                                    animations={[opacity()]}
                                    inputClass='cursor-pointer w-full bg-transparent text-white border-b-[1px] rounded-md outline-none placeholder:text-white text-[14px] font-kalameh400 px-2'
                                    minDate={new DateObject()}
                                    placeholder={'تاریخ سفر را مشخص کنید'}
                                    value={values}
                                    //@ts-ignore
                                    onChange={setValues}
                                    range
                                    fixMainPosition={true}
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom"
                                />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-y-4'>
                                <p className='text-[20.6px] font-kalameh700 text-white'>چند نفـر ؟!</p>
                                <SelectDropDown main isCounter
                                                label={(passengers > 0 ? `${passengers} مسافر` : 'تعداد مسافران')}
                                                dropDownStyles={'absolute bg-[#FFF] top-10 w-[300px] inset-x-0  rounded-md text-[#000] mx-auto shadow-md px-4 py-2'}>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="23"
                                                 viewBox="0 0 27 23" fill="none">
                                                <path
                                                    d="M19.1818 21.4549V19.1822C19.1818 17.9766 18.7029 16.8205 17.8505 15.9681C16.998 15.1156 15.8419 14.6367 14.6364 14.6367H5.54545C4.33992 14.6367 3.18377 15.1156 2.33133 15.9681C1.47889 16.8205 1 17.9766 1 19.1822V21.4549"
                                                    stroke="black" strokeWidth="1.70455" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M10.0909 10.0909C12.6013 10.0909 14.6363 8.05584 14.6363 5.54545C14.6363 3.03507 12.6013 1 10.0909 1C7.58048 1 5.54541 3.03507 5.54541 5.54545C5.54541 8.05584 7.58048 10.0909 10.0909 10.0909Z"
                                                    stroke="black" strokeWidth="1.70455" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M25.9999 21.4537V19.1809C25.9992 18.1738 25.664 17.1954 25.0469 16.3995C24.4299 15.6035 23.566 15.035 22.5908 14.7832"
                                                    stroke="black" strokeWidth="1.70455" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M18.0454 1.14844C19.0232 1.39878 19.8898 1.96742 20.5086 2.7647C21.1275 3.56198 21.4634 4.54256 21.4634 5.55185C21.4634 6.56113 21.1275 7.54171 20.5086 8.33899C19.8898 9.13628 19.0232 9.70491 18.0454 9.95526"
                                                    stroke="black" strokeWidth="1.70455" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                            <p className='font-kalameh400'>تعداد نفــرات</p>
                                        </div>
                                        <div className='flex items-center justify-between w-[80px]'>
                                            <button type='button' onClick={handleIncreasePassenger}
                                                    className='w-[24px] h-[24px] bg-[#1270B0] rounded-full text-white'>+
                                            </button>
                                            <span className='px-2'>{passengers}</span>
                                            <button type='button' onClick={handleDecreasePassenger}
                                                    className='w-[24px] h-[24px] border-[2px] border-[#1270B0] rounded-full'>-
                                            </button>
                                        </div>
                                    </div>

                                </SelectDropDown>
                            </div>
                        </div>
                        <div className='flex justify-center items-center md:col-span-2 xl:col-span-1'>
                            <button
                                className='text-[22px] font-kalameh500 bg-[#83734E] text-white px-8 py-2 rounded-full'>
                                جست و جو
                            </button>
                        </div>
                    </form>
                </Layout>
            </div>

            {/*قسمت تورها*/}
            <section className='w-[70%] mx-auto'>
                {/*قسمت فیلتر تورها*/}
                <div className='flex justify-between pt-20 '>
                    <h4 className='sm:text-[20.6px] font-kalameh700 flex justify-center items-center'>دسـته بندی بر
                        اسـاس</h4>
                    {/*768 به بالا*/}
                    <div className='hidden lg:flex items-center justify-between lg:gap-x-2 xl:w-[70%]'>
                        <button
                            name={'suggested'}
                            onClick={(e) => handleFilter(e)}
                            className={`bg-[#F0F0F0] rounded-[50px] text-[14px] font-kalameh500 p-2 w-full ${activeButton === 'suggested' && 'bg-orange text-white border-[2px] border-white shadow-md'}`}>
                            پیـشــنهاد
                            مــا
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1" height='40' viewBox="0 0 1 115" fill="none">
                            <path d="M0.5 1L0.499995 114" stroke="#000" strokeOpacity="0.67" strokeWidth="0.8"
                                  strokeLinecap="round"/>
                        </svg>
                        <button
                            name={'latest'}
                            onClick={(e) => handleFilter(e)}
                            className={`bg-[#F0F0F0] rounded-[50px] text-[14px] font-kalameh500 p-2 w-full ${activeButton === 'latest' && 'bg-orange text-white border-[2px] border-white shadow-md'}`}
                        >به
                            روزترین
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1" height='40' viewBox="0 0 1 115" fill="none">
                            <path d="M0.5 1L0.499995 114" stroke="#000" strokeOpacity="0.67" strokeWidth="0.8"
                                  strokeLinecap="round"/>
                        </svg>
                        <button
                            name={'cheapest'}
                            onClick={(e) => handleFilter(e)}
                            className={`bg-[#F0F0F0] rounded-[50px] text-[14px] font-kalameh500 p-2 w-full ${activeButton === 'cheapest' && 'bg-orange text-white border-[2px] border-white shadow-md'}`}>ارزانترین
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1" height='40' viewBox="0 0 1 115" fill="none">
                            <path d="M0.5 1L0.499995 114" stroke="#000" strokeOpacity="0.67" strokeWidth="0.8"
                                  strokeLinecap="round"/>
                        </svg>
                        <button
                            name={'expensive'}
                            onClick={(e) => handleFilter(e)}
                            className={`bg-[#F0F0F0] rounded-[50px] text-[14px] font-kalameh500 p-2 w-full ${activeButton === 'expensive' && 'bg-orange text-white border-[2px] border-white shadow-md'}`}>گران
                            ترین
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1" height='40' viewBox="0 0 1 115" fill="none">
                            <path d="M0.5 1L0.499995 114" stroke="#000" strokeOpacity="0.67" strokeWidth="0.8"
                                  strokeLinecap="round"/>
                        </svg>
                        <button
                            name={'nearest'}
                            onClick={(e) => handleFilter(e)}
                            className={`bg-[#F0F0F0] rounded-[50px] text-[14px] font-kalameh500 p-2 w-full ${activeButton === 'nearest' && 'bg-orange text-white border-[2px] border-white shadow-md'}`}>نزدیک
                            ترین
                            تاریـخ
                        </button>
                    </div>
                    {/*قسمت فیلتر برای موبایل*/}
                    <SelectDropDown
                        label={filterValue}
                        styles={'flex lg:hidden relative bg-orange text-white px-4 py-2 rounded-[8px] flex flex-col items-center cursor-pointer w-[40%] sm:w-[20%]'}
                        labelStyles={'font-kalameh500'}
                        dropDownStyles={'absolute w-full text-[12px]'}
                    >
                        <div
                            className='absolute bg-orange text-white top-[22px] py-4 px-2 w-full rounded-br-[7.6px] rounded-bl-[7.6px] font-kalameh500'>
                            <ul className='flex flex-col gap-y-2 justify-center items-center'>
                                <button className='hover:text-yellow-200' name={'suggested'} onClick={(e) => handleFilter(e, 'پیشنهاد ما')}>پیـشــنهاد
                                    مــا
                                </button>
                                <button className='hover:text-yellow-200' name={'latest'} onClick={(e) => handleFilter(e, 'به روزترین')}>به روز تریــن
                                </button>
                                <button className='hover:text-yellow-200' name={'cheapest'} onClick={(e) => handleFilter(e, 'ارزانترین')}>ارزانترین
                                </button>
                                <button className='hover:text-yellow-200' name={'expensive'} onClick={(e) => handleFilter(e, 'گرانترین')}>گران ترین
                                </button>
                                <button className='hover:text-yellow-200' name={'nearest'} onClick={(e) => handleFilter(e, 'نزدیک ترین تاریخ')}>نزدیک ترین
                                    تاریخ
                                </button>
                            </ul>
                        </div>
                    </SelectDropDown>
                </div>
                {isRefetching ? <span className="loading loading-dots loading-md bg-orange mx-auto flex justify-center items-center mt-8"></span>  : <TourList data={data}/>}
                {hasNextPage && !isFetching &&
                    <div onClick={() => fetchNextPage()}
                         className='flex flex-col justify-center items-center pt-4 cursor-pointer'>
                        <p className='text-[22.4px] font-kalameh500 text-cblue pb-2'>مشاهده تورهای بیشتر</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                            <path d="M6.5 8.625L13 14.375L19.5 8.625" stroke="#3672B7" strokeWidth="1.92262"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <svg className='mt-[-15px]' xmlns="http://www.w3.org/2000/svg" width="26" height="23"
                             viewBox="0 0 26 23" fill="none">
                            <path d="M6.5 8.625L13 14.375L19.5 8.625" stroke="#3672B7" strokeWidth="1.92262"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                }
                {isFetching && !isRefetching  &&
                    <span className="loading loading-dots loading-md bg-orange mx-auto flex justify-center items-center mt-8"></span>}
                <div className='hidden md:block relative w-full'>
                    <Image
                        className='mx-auto rounded-[20px] my-4 h-[464px] object-cover'
                        src={TourHomePicture1}
                        alt='Tour Picture'
                    />
                    <div
                        className='absolute text-white inset-0  bg-[#00000099] rounded-[20px] flex flex-col justify-center items-center group'>
                        <h1 className='text-[48px] font-bold group-hover:text-[#FAFF00] group-hover:text-[67.3px]'>شروع
                            یک هیجان تازه!</h1>
                        <div className='absolute text-[24px] top-[340px] group-hover:top-[300px] pl-20'>
                            <p className='pb-2'>-خرید مناسب تور های پایـیزه</p>
                            <div className='flex items-center'>
                                <p>-تخفیف هــای ویـژه</p>
                                <span
                                    className='hidden
                                    group-hover:flex
                                    bg-[#D18A00]
                                    font-kalameh700
                                    text-[22px]
                                    w-[93px]
                                    justify-center items-center
                                    rounded-tl-[8px]
                                    rounded-bl-[8px] mr-2
                                    border-l-[2px] border-white'
                                >
                                    خرید
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*قسمت جاذبه توریستی*/}
            <section className='py-8 w-[70%] mx-auto'>
                {/*border*/}
                <div className="relative flex py-5 items-baseline">
                    <div className="flex-grow border-t border-[#5F5F5F99]"></div>
                    <span
                        className="flex-shrink mx-4 text-gray-400 text-[32.4px] font-kalameh500">جاذبـه های توریستی</span>
                    <div className="flex-grow border-t border-[#5F5F5F99]"></div>
                </div>
                {/*border */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                    {jazebeTouristi.map(item => {
                        return (
                            <div className='relative cursor-pointer group'>
                                <Image
                                    className='rounded-md max-h-[230px] object-cover object-center '
                                    src={item.src}
                                    alt={item.title}
                                />
                                <div
                                    className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-30% inset-0 rounded-md'></div>
                                <div
                                    className='hidden absolute group-hover:flex flex-col justify-center items-center text-white inset-0 bg-[#0000004D]'>
                                    <h1 className='text-[28.3px] font-kalameh500'>{"گیلان"}</h1>
                                    <p className='bg-[#D2BA00] text-[20px] font-kalameh500 px-4 rounded-[8px]'>جزئیات
                                        خرید</p>
                                </div>
                            </div>

                        )
                    })}
                </div>
                {/*border*/}
                <div className="flex-grow border-t border-[#5F5F5F99] mt-[3rem]"></div>
                {/*border */}
            </section>

            {/*قسمت سوالات متداول و غیره*/}
            <section className='w-[70%] mx-auto'>
                <div className='grid lg:grid-cols-2 gap-4 py-4'>
                    <div className='relative group'>
                        <Image
                            className='rounded-bl-lg rounded-br-lg'
                            src={TourHomePicture3}
                            alt='Tour Picture'
                        />
                        <p className='absolute top-[92px] left-[35px] font-kalameh700 bg-[#D2BA00] text-white px-2 py-1 rounded-md z-10 group-hover:shadow-sm group-hover:shadow-white'>تجربـه
                            های خوب</p>
                        <div className='hidden group-hover:block bg-[#00000066] absolute inset-0'></div>
                    </div>
                    <div className='relative group'>
                        <Image
                            className='rounded-bl-lg rounded-br-lg'
                            src={TourHomePicture2}
                            alt='Tour Picture'
                        />
                        <Link href={'/'}
                              className='absolute bottom-[34px] right-[63px] font-kalameh700 bg-[#044189] text-white px-2 py-1 rounded-md z-10 group-hover:shadow-sm group-hover:shadow-white'>اقامتگاهت
                            و رزرو کن</Link>
                        <div className='hidden group-hover:block bg-[#00000066] absolute inset-0'></div>
                    </div>
                </div>

                {/*سوالات متداول*/}
                <div className='mt-[6rem] flex flex-col gap-y-4'>
                    <h1 className='text-[20px] md:text-[32.4px] font-kalameh500 pr-2'>سوالات متداول</h1>
                    {questions.map(item => {
                        return (
                            <div key={item.id}
                                 className="collapse collapse-arrow bg-[#F4FDFB] max-md:overflow-x-scroll">
                                <input type="radio" name="my-accordion-2"/>
                                <div className="collapse-title lg:text-[24px] text-[#15247B] font-kalameh400">
                                    {item.question}
                                </div>
                                <div className="collapse-content">
                                    <p className='lg:text-[28px] whitespace-pre'>{item.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <Footer/>

        </div>
    )
}

export default TourHomePage
