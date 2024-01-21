'use client'
import Navbar from "@/app/components/navbar/Navbar";
import Image from "next/image";
import VillaHomePicture from '@/public/images/VillaHomePicture.png'
import Layout from "@/app/components/Layout";
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";
import React, {useEffect, useRef, useState} from "react";
import VillaList from "@/app/components/villa/VillaList";
import Footer from "@/app/components/footer/footer";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
//@ts-ignore
import opacity from "react-element-popper/animations/opacity"
import DatePickerPlugin from "@/app/components/plugin/DatePickerPlugin";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import Loading from "@/app/components/Loading";
import {Pagination} from "@mui/material";
import {tripTourApi} from "@/axios-instances";
import {useAppSelector} from "@/app/redux/store";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";


const VillaHomePage = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const userSession = useAppSelector(state => state.userSlice)
    const [destination, setDestination] = useState('مقصد')
    const [passengers, setPassengers] = useState(0)
    const [values, setValues] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredVilla, setFilteredVilla] = useState<Villa[]>([])
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
        }, {
            id: 5,
            provinceName: 'آستارا'
        },
    ]
    const checkIn = new DateObject({
        //@ts-ignore
        year: values[0]?.year,
        //@ts-ignore
        month: values[0]?.month,
        //@ts-ignore
        day: values[0]?.day,

    }).format()
    const checkOut = new DateObject({
        //@ts-ignore
        year: values[1]?.year,
        //@ts-ignore
        month: values[1]?.month,
        //@ts-ignore
        day: values[1]?.day,

    }).format()

    useEffect(() => {
        const nextPage = currentPage + 1
        queryClient.prefetchQuery({queryKey: ['VillaData', nextPage], queryFn: () => fetchVilla(nextPage)})
    }, [currentPage]);

    const handleSearch = (e: any) => {
        e.preventDefault()
        if (destination === 'مقصد' || passengers === 0) {
            toast.warn('لطفا فیلد مورد نظر انتخاب کنید.')
            return
        }
        refetch()

    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        window.scrollTo({top: 700, behavior: 'smooth'})
        setCurrentPage(value)
    }
    const fetchVilla = async (currPage: number): Promise<PaginateVilla> => {
        const res = await tripTourApi.get(`places/all?type=ویلا&page=${currPage}&paginate=12&state=${destination !== 'مقصد' ? destination : ''}`)
        return res.data
    }
    const {data: villaData, isLoading, isError, refetch, isRefetching} = useQuery({
        queryKey: ['VillaData', currentPage],
        queryFn: () => fetchVilla(currentPage)
    })

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
    if (isError) return <p className='flex justify-center items-center' dir={'ltr'}>Something went Wrong!!!</p>
    if (!villaData) {
        return
    }


    return (
        <div>
            <Navbar/>
            <section className='w-[80%] mx-auto'>
                <div className='pt-[12rem] relative max-xl:pb-[16rem]'>
                    <Image
                        className='rounded-[25px] max-h-[564px] object-cover'
                        src={VillaHomePicture}
                        alt={'Villa Home Picture'}
                    />
                    <div className='w-[90%] mx-auto absolute bottom-0 xl:bottom-[-2rem] inset-x-0'>
                        <Layout>
                            <form
                                onSubmit={handleSearch}
                                className='flex flex-col xl:flex-row justify-between items-center gap-x-8 gap-y-6 w-full'>
                                <div>
                                    <div className='flex flex-col gap-y-4'>
                                        <p className='sm:text-[20.6px] font-kalameh700 text-white'> کجـا میخوای بـری
                                            ؟!</p>
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
                                <div>
                                    <div className='flex flex-col gap-y-4'>
                                        <p className='sm:text-[20.6px] font-kalameh700 text-white'>کِـی میخوای
                                            بـری؟!</p>
                                        <DatePicker
                                            //@ts-ignore
                                            plugins={[<DatePickerPlugin entryDate={checkIn} exitDate={checkOut} position='top'/>
                                            ]}
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
                                        <p className='sm:text-[20.6px] font-kalameh700 text-white'>چند نفـر ؟!</p>
                                        <SelectDropDown main isCounter
                                                        label={(passengers > 0 ? `${passengers} مسافر` : 'تعداد مسافران')}
                                                        dropDownStyles={'absolute bg-[#FFF] top-10 md:w-[300px] inset-x-0  rounded-md text-[#000] mx-auto shadow-md px-4 py-2'}>
                                            <div
                                                className='flex flex-col sm:flex-row gap-y-2 items-center justify-between'>
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
                                <button
                                    className='text-[22px] font-kalameh500 bg-[#83734E] text-white px-8 py-2 rounded-full'>
                                    فیلتر
                                </button>
                            </form>
                        </Layout>
                    </div>
                </div>
                {/*قسمت اجاره ویلا*/}
                <h1 className='text-[32px] font-kalameh700 pt-[110px] pb-10'>اجــاره ویـلا در سراسر
                    کشــور</h1>
                {villaData.data.length < 1 ?
                    <p className='flex justify-center items-center text-red-500'> ویلایی یافت نشد.</p> : isRefetching ? <span
                            className="text-orange mx-auto flex justify-center items-center loading loading-dots loading-lg"></span>
                        : <VillaList data={villaData.data}/>
                }
            </section>
            <Pagination onChange={handleChange} color="primary" className='pt-10 flex justify-center items-center'
                        count={villaData.meta.last_page}/>
            <Footer/>
        </div>
    )
}

export default VillaHomePage
