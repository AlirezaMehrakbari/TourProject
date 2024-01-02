import Image from 'next/image'
import Layout from "@/app/components/Layout";
import VillaPic from '@/public/images/house-2.svg'
import Apartment from '@/public/images/buildings.svg'
import Sahel from '@/public/images/Sahel.svg'
import Hotel from '@/public/images/Hotel.svg'
import Airplane from '@/public/images/airplane-square.svg'
import AutumnPicture from '@/public/images/autumnPicture.png'
import NaturePicture from '@/public/images/NaturePicture.png'
import MountainPicture from '@/public/images/MountainPicture.png'
import YazdPicture from '@/public/images/YazdPicture.png'
import AppSwiper from "@/app/components/AppSwiper";
import SwiperPicture from '@/public/images/SwiperPicture.png'
import Star from '@/public/icons/Star.svg'
import TakhfifPicture from '@/public/images/TakhfifPicture.png'
import TakhfifPicture1 from '@/public/images/TakhfifPicture1.png'
import TakhfifPicture2 from '@/public/images/TakhfifPicture2.png'
import Circle from '@/public/icons/Circle.svg'
import PlayIcon from '@/public/icons/Play.svg'
import PersentIcon from '@/public/icons/PersentIcon.svg'
import SuggestPicture from '@/public/images/SuggestPicture.png'
import Footer from "@/app/components/footer/footer";
import Link from "next/link";
import React from "react";
import LandingNavbar from "@/app/components/navbar/LandingNavbar";
import {tripTourApi} from "@/axios-instances";
import {useQuery} from "@tanstack/react-query";

export default async function Home() {
    const category = [
        {
            id: 1,
            category: 'ویلا',
            url: '/villa',
            icon: VillaPic
        },
        {
            id: 2,
            category: "آپارتمان",
            url: '/',
            icon: Apartment
        },
        {
            id: 3,
            category: "ساحلی",
            url: '/',
            icon: Sahel
        },
        {
            id: 4,
            category: "هتل",
            url: '/',
            icon: Hotel
        },
        {
            id: 5,
            category: "خرید تور",
            url: '/tour',
            icon: Airplane
        }
    ]
    const swiperData = [
        {
            id: 1,
            title: 'اجاره اقامتگاه درکیش',
            src: SwiperPicture
        },
        {
            id: 2,
            title: 'اجــاره اقامتگاه در ســاری',
            src: SwiperPicture
        },
        {
            id: 3,
            title: 'اجــاره اقامتگاه در کردسـتان',
            src: SwiperPicture
        },
        {
            id: 4,
            title: 'اجــاره خانــه در کرمان ',
            src: SwiperPicture
        },
        {
            id: 5,
            title: 'اجاره اقامتگاه در مازندران',
            src: SwiperPicture
        }, {
            id: 5,
            title: 'اجاره اقامتگاه در مازندران',
            src: SwiperPicture
        }, {
            id: 5,
            title: 'اجاره اقامتگاه در مازندران',
            src: SwiperPicture
        }, {
            id: 5,
            title: 'اجاره اقامتگاه در مازندران',
            src: SwiperPicture
        }, {
            id: 5,
            title: 'اجاره اقامتگاه در مازندران',
            src: SwiperPicture
        }, {
            id: 5,
            title: 'اجاره اقامتگاه در مازندران',
            src: SwiperPicture
        },


    ]
    const suggestVilla = [
        {
            id: 1,
            title: 'اجـاره سوئـیت در کیـش',
            price: 'میانگین قیمت هرشب 850.000 تومان',
            src: SuggestPicture
        }, {
            id: 2,
            title: 'اجـاره سوئـیت در مشهد',
            price: 'میانگین قیمت هرشب 850.000 تومان',
            src: SuggestPicture
        }, {
            id: 3,
            title: 'اجـاره سوئـیت در کرمانشاه',
            price: 'میانگین قیمت هرشب 850.000 تومان',
            src: SuggestPicture
        }, {
            id: 4,
            title: 'اجـاره سوئـیت در ماسوله',
            price: 'میانگین قیمت هرشب 850.000 تومان',
            src: SuggestPicture
        }, {
            id: 5,
            title: 'اجـاره سوئـیت در اصفهان',
            price: 'میانگین قیمت هرشب 850.000 تومان',
            src: SuggestPicture
        }, {
            id: 6,
            title: 'اجـاره سوئـیت در شیراز',
            price: 'میانگین قیمت هرشب 850.000 تومان',
            src: SuggestPicture
        },
    ]

    return (
        <div className='mx-auto'>
            <div>
                <LandingNavbar/>
                <div
                    className='mt-[-40px] z-10  absolute inset-x-0 sm:w-[500px] md:w-[750px] lg:w-[936px] max-h-[126px] mx-auto'>
                    <Layout>
                        {category.map(item => {
                            return (
                                <Link href={item.url} key={item.id}>
                                    <div className='flex flex-col items-center cursor-pointer'
                                         key={item.id}>
                                        <Image
                                            className='w-[50%] sm:w-[70%] md:w-[90%] lg:w-full'
                                            src={item.icon}
                                            alt={item.category}
                                        />
                                        <h3 className='text-white font-kalameh700'>{item.category}</h3>
                                    </div>
                                </Link>
                            )
                        })}
                    </Layout>
                </div>

                <div className='px-[72px]'>
                    {/*قسمت دسته بندی (عکس های طبیعت)*/}
                    <div
                        className='flex py-[50px] sm:py-[100px] md:py-[150px] mx-auto justify-center items-center gap-x-[47px]'>
                        <div className='overflow-hidden rounded-[20px] relative group max-xl:hidden'>
                            <Image
                                src={NaturePicture}
                                alt={'NaturePicture'}
                                className='max-w-[346px] max-h-[512px] rounded-[20px] group-hover:scale-105 transition cursor-pointer '
                            />
                            <div className='absolute text-white bottom-[37px] right-[28px] z-10 group cursor-pointer'>
                                <p className=''>یه پیشنهاد عالی برای شما</p>
                                <h2 className='font-kalameh700 text-[23px]'>سفربه بهشت ایران</h2>
                            </div>
                            <div
                                className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                        </div>
                        <div className='flex flex-col gap-y-[40px]'>
                            <div
                                className='overflow-hidden rounded-[20px] relative group w-[300px] mx-auto sm:w-[510px] sm:h-[235px]'>
                                <Image
                                    src={MountainPicture}
                                    alt={'Mountain Picture'}
                                    className='rounded-[20px] object-cover  group-hover:scale-105 transition cursor-pointer'
                                />
                                <div
                                    className='absolute text-white bottom-[37px] right-[28px] group cursor-pointer z-10'>
                                    <h2 className='font-kalameh700 text-[23px]'>ماجراجویی و هیجان</h2>
                                </div>
                                <div
                                    className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                            </div>
                            <div
                                className='overflow-hidden rounded-[20px] relative group w-[300px] mx-auto sm:w-[510px] sm:h-[235px]'>
                                <Image
                                    src={YazdPicture}
                                    alt={'Yazd Picture'}
                                    className='rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                                />
                                <div
                                    className='absolute text-white bottom-[37px] right-[28px] group cursor-pointer z-10'>
                                    <h2 className='font-kalameh700 text-[23px]'>سفر به تاریخ ایران</h2>
                                </div>
                                <div
                                    className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                            </div>
                        </div>
                        <div className='overflow-hidden rounded-[20px] relative group max-xl:hidden'>
                            <Image
                                src={AutumnPicture}
                                alt='Autumn Picture'
                                className='max-w-[346px] max-h-[512px] rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                            />
                            <div className='absolute text-white bottom-[37px] right-[28px] cursor-pointer group z-10'>
                                <p className=''>کجا میخوای بری؟!</p>
                                <h2 className='font-kalameh700 text-[23px]'>اقامت شما با ما</h2>
                            </div>
                            <div
                                className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                        </div>
                    </div>

                    {/*قسمت محبوب ترین مقصد ها*/}
                    <div className='pb-20'>
                        <div className='flex justify-between pb-4'>
                            <h1 className='font-kalameh500 text-[12px] sm:text-[26px]'>محبوب ترین مقصد ها</h1>
                            <p className='text-[#4E69CA] text-[12px] sm:text-[22px] '>مشاهده همه</p>
                        </div>
                        <AppSwiper data={swiperData}/>
                    </div>

                    {/*قسمت تخفیف ویژه*/}
                    <div className='flex items-center xl:flex-row justify-between flex-col md:pb-[18rem] lg:pb-20'>
                        <div className='w-fit max-xl:pb-8'>
                            <h1 className='pb-[28px] text-[26px] font-kalameh500'>تخفیف های ویژه</h1>
                            <div
                                className='relative  bg-gradient-to-l from-[#000] to-white to-60%  py-[2px] px-[2px] rounded-xl'>
                                <ul className='list-disc list-inside px-3 py-[59px] rounded-lg w-[269px] h-[352px] bg-white '>
                                    <li className='text-[20px] '>ویلای دوبلکس فول امکانات</li>
                                    <li className='text-[20px] '>مازندران | رامسر</li>
                                    <li className='text-[20px] '>متراژ : 150 متر</li>
                                    <li className='text-[20px] '>ظرفیت : 7 نفـر</li>
                                    <li className='text-[20px] '>مناسب برای خـانواده</li>
                                </ul>
                                <div className='absolute flex items-center gap-2 bottom-[-8px] left-0'>
                                    <span>7.5</span>
                                    <Image src={Star} alt='Star'/>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between pt-4 items-center'>
                                    <p className='text-[24px] font-kalameh400'>با تخفیف</p>
                                    <p className='line-through text-[#868383] text-[24px]'>3.000.000</p>
                                </div>
                                <div
                                    className='bg-[#DD7123] text-white text-center text-[27px] font-kalameh500 rounded-[10px]'>2.100.000
                                    تومان
                                </div>
                            </div>
                        </div>

                        <div
                            className='flex flex-col lg:flex-row gap-4 self-end max-lg:items-center justify-between max-xl:w-full'>
                            <div className='relative md:max-w-[510px] md:h-[475px]'>
                                <Image src={TakhfifPicture} alt='Villa Picture'
                                       className='rounded-[20px] object-cover h-full'/>
                                <div
                                    className='max-md:hidden absolute inset-0 mx-auto flex justify-center items-center bg-[#00000054] rounded-[20px] '>
                                    <Image src={Circle} alt='Circle'/>
                                    <Image src={PersentIcon} alt='Percen Icon' className='absolute top-[-30px] left-8'/>
                                    <p className='absolute text-white top-[-15px] left-10 font-kalameh700'>%30</p>
                                    <div className='absolute left-[235px] flex justify-center items-center'>
                                        <Image src={PlayIcon} alt='PlayIcon'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-4 justify-between md:max-w-[349px] md:max-h-[222px] '>
                                <Image src={TakhfifPicture1} alt='Villa Picture'
                                       className='rounded-[20px]'/>
                                <Image src={TakhfifPicture2} alt='Villa Picture'
                                       className='rounded-[20px]'/>
                            </div>
                        </div>
                    </div>

                    {/*قسمت پیشنهاد های ویلا*/}
                    <h1 className='sm:text-[26px] font-kalameh500 py-4'>سـفر بعـدی شما میتـونه ایـنجا باشه !</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {suggestVilla.map(item => {
                            return (
                                <div className='flex items-center gap-6'>
                                    <div>
                                        <Image src={item.src} alt='Suggest Villa'
                                               className='w-[92px] h-[60px] sm:h-[92px] rounded-[20px]'/>
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <h2 className='sm:text-[20px] font-kalameh400 '>{item.title}</h2>
                                        <p className='text-[13px]  text-[#3C3B3B]'>{item.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className='grid md:grid-cols-2 sm:pr-12 pt-[50px] sm:pt-[100px] md:pt-[214px]'>
                        <div>
                            <h1 className='pb-[51px] sm:text-[26px] font-kalameh700'>اطمینان از پرداخت</h1>
                            <p className='sm:text-[19.5px]'>
                                از طریق تریپ تور امکان پرداخت از طریق کارت‌های شتاب را دارید.<br/>
                                برای پرداخت آنلاین که تنها لازم است روند خرید را پیگیری کنید و<br/>
                                به درگاه پرداخت امن انتقال یابید.
                            </p>
                        </div>
                        <div className='max-md:pt-8'>
                            <h1 className='pb-[51px] sm:text-[26px] font-kalameh700'>اطمینان از خدمات پشتیبانی</h1>
                            <p className='sm:text-[17px]'>
                                پس از روند خرید هر مشکلی را می‌توانید از طریق همکاران پشتیبانی ما برطرف کنید.<br/>
                                می‌توانید از طریق پنل کاربری خود بر روی رزرو مدنظر درخواست پشتیبانی دهید.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>


        </div>
    )
}
