import React, {useId} from 'react'
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

export const metadata: Metadata = {
    title: 'Reserve Tour',
    description: 'You Can go anywhere with us :)',
}

const TourHomePage = () => {
    const tourData = [
        {
            id: 1,
            origin: 'تهران',
            destination: 'استانبول',
            price: '800.000'
        },
        {
            id: 2,
            origin: 'مشهد',
            destination: 'عراق',
            price: '800.000'
        },
        {
            id: 3,
            origin: 'قم',
            destination: 'تایلند',
            price: '800.000'
        },
        {
            id: 4,
            origin: 'تهران',
            destination: 'دبی',
            price: '800.000'
        },
        {
            id: 5,
            origin: 'اصفهان',
            destination: 'ابوظبی',
            price: '800.000'
        },
        {
            id: 6,
            origin: 'شیراز',
            destination: 'شانگ های',
            price: '800.000'
        },
    ]
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

    // const options = [
    //     {label: 'ali', value: 'ali'},
    //     {label: 'ali', value: 'ali'},
    //     {label: 'ali', value: 'ali'},
    // ]
    // const colorStyles = {
    //     control: (styles: any) => (
    //         {
    //             ...styles,
    //             backgroundColor: '#FF7512',
    //             border: '2px solid #FF7512',
    //             width: '80px'
    //         }
    //     )
    // }
    return (
        <div className='flex flex-col'>
            <Navbar/>
            <Image
                className='rounded-xl mt-[12rem] max-h-[564px] xl:max-w-[1164px] lg:max-w-[900px] md:max-w-[700px] mx-auto object-cover'
                src={TourHomePicture}
                alt='Tour Picture'/>
            <div className='mx-auto mt-[-20px]'>
                <Layout>
                    <form className='xl:w-[1020px]'>
                        <div>
                            <h2 className='text-[20.6px]'>کجا میخوای بـری؟!</h2>
                            {/*<DropDown onClick={} label={'مبد'}/>*/}
                            {/*<Select*/}
                            {/*    options={options}*/}
                            {/*    styles={colorStyles}*/}
                            {/*/>*/}
                        </div>
                        <div></div>
                        <div></div>
                    </form>
                </Layout>
            </div>

            {/*قسمت تورها*/}
            <section className='w-[70%] mx-auto'>
                <TourList data={tourData}/>
                <div className='flex flex-col justify-center items-center pt-4'>
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
                            <div key={item.id} className="collapse collapse-arrow bg-[#F4FDFB] max-md:overflow-x-scroll">
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
