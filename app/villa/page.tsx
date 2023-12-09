'use client'
import Navbar from "@/app/components/navbar/Navbar";
import Image from "next/image";
import VillaHomePicture from '@/public/images/VillaHomePicture.png'
import Layout from "@/app/components/Layout";
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";
import React, {useState} from "react";
import imageee from "@/public/images/TakhfifPicture1.png";
import VillaList from "@/app/components/villa/VillaList";
import Footer from "@/app/components/footer/footer";
import {Metadata} from "next";

const VillaHomePage = () => {
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
    const [destination, setDestination] = useState('مقصد')
    const [date, setDate] = useState('تاریخ سفـر مشخص کنید')
    const [passengers, setPassengers] = useState(0)
    const villa = [
        {
            id: 1,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 2,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 3,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 4,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 5,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 6,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 7,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 8,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 9,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
    ]
    const handleIncreasePassenger = () => {
        setPassengers(prev => prev + 1)
    }
    const handleDecreasePassenger = () => {
        if (passengers === 0) {
            return
        }
        setPassengers(prev => prev - 1)
    }

    return (
        <div>
            <Navbar/>
            <section className='w-[80%] mx-auto'>
                <div className='pt-[12rem] relative'>
                    <Image
                        className='rounded-[25px] max-h-[564px] object-cover'
                        src={VillaHomePicture}
                        alt={'Villa Home Picture'}
                    />
                    <div className='w-[90%] mx-auto absolute bottom-[-30px] inset-x-0'>
                        <Layout>
                            <form className='flex justify-between items-center gap-x-8 w-full'>
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
                                <div>
                                    <div className='flex flex-col gap-y-4'>
                                        <p className='text-[20.6px] font-kalameh700 text-white'> کجـا میخوای بـری ؟!</p>
                                        <SelectDropDown main label={date}
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
                                                <div className='flex items-center'>
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
                <h1 className='text-[32px] font-kalameh700 pt-[110px] pb-10'>اجــاره ویـلا در سراسر کشــور</h1>
                <VillaList data={villa}/>
            </section>
            <Footer/>
        </div>
    )
}

export default VillaHomePage
