import Image from 'next/image'
import MainPic from '@/public/images/HomePic.png'
import Layout from "@/app/components/Layout";
import VillaPic from '@/public/images/house-2.svg'
import Apartment from '@/public/images/buildings.svg'
import Sahel from '@/public/images/Sahel.svg'
import Hotel from '@/public/images/Hotel.svg'
import Airplane from '@/public/images/airplane-square.svg'
import Logo from "@/app/components/navbar/Logo";
import Button from "@/app/components/Button";
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

export default function Home() {
    const category = [
        {
            id: 1,
            category: 'ویلا',
            url: '/',
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
                <div className='relative flex'>
                    <Image
                        src={MainPic}
                        alt='Tour Picture'
                        className='w-full max-h-[793px] bg-contain'
                    />
                    <div className='absolute top-[40px] flex justify-between items-center w-full px-[40px]'>
                        <Logo/>
                        <div className='flex gap-4 items-center '>
                            <p className='text-[#FFF] font-kalameh700'>021-77805</p>
                            <div className='flex items-center'>
                                <Link href={'/'}>
                                    <Button styles='rounded-[10px] w-[105px]'>
                                        <span className='pl-1'>عضویت</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19"
                                             viewBox="0 0 23 19"
                                             fill="none">
                                            <path
                                                d="M15.7391 18.0005V16.1752C15.7391 15.2069 15.3692 14.2783 14.7106 13.5937C14.052 12.909 13.1588 12.5244 12.2274 12.5244H5.20403C4.27267 12.5244 3.37945 12.909 2.72088 13.5937C2.0623 14.2783 1.69232 15.2069 1.69232 16.1752V18.0005"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M8.71575 8.87276C10.6552 8.87276 12.2275 7.23827 12.2275 5.22203C12.2275 3.20578 10.6552 1.57129 8.71575 1.57129C6.77628 1.57129 5.20404 3.20578 5.20404 5.22203C5.20404 7.23827 6.77628 8.87276 8.71575 8.87276Z"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path d="M19.2509 6.13477V11.6109" stroke="white" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M21.8846 8.87207H16.6171" stroke="white" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[-40px] z-10  absolute inset-x-0 max-w-[936px] max-h-[126px] mx-auto'>
                    <Layout>
                        {category.map(item => {
                            return (
                                <Link href={item.url} key={item.id}>
                                    <div className='flex flex-col items-center cursor-pointer'
                                         key={item.id}>
                                        <Image
                                            width={48}
                                            height={48}
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
                    <div className='flex py-[150px] mx-auto justify-center items-center gap-x-[47px]'>
                        <div className='overflow-hidden rounded-[20px] relative group'>
                            <Image
                                src={NaturePicture}
                                alt={'NaturePicture'}
                                className='max-w-[346px] max-h-[512px] rounded-[20px] group-hover:scale-105 transition cursor-pointer '
                            />
                            <div className='absolute text-white bottom-[37px] right-[28px] z-10 group cursor-pointer'>
                                <p className=''>یه پیشنهاد عالی برای شما</p>
                                <h2 className='font-kalameh700 text-[23px]'>سفربه بهشت ایران</h2>
                            </div>
                            <div className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                        </div>
                        <div className='flex flex-col gap-y-[40px]'>
                            <div className='overflow-hidden rounded-[20px] relative group'>
                                <Image
                                    src={MountainPicture}
                                    alt={'Mountain Picture'}
                                    className='max-w-[510px] h-[235px] rounded-[20px] object-cover object-center group-hover:scale-105 transition cursor-pointer'
                                />
                                <div className='absolute text-white bottom-[37px] right-[28px] group cursor-pointer z-10'>
                                    <h2 className='font-kalameh700 text-[23px]'>ماجراجویی و هیجان</h2>
                                </div>
                                <div className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                            </div>
                            <div className='overflow-hidden rounded-[20px] relative group'>
                                <Image
                                    src={YazdPicture}
                                    alt={'Yazd Picture'}
                                    className='max-w-[510px] max-h-[235px] rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                                />
                                <div className='absolute text-white bottom-[37px] right-[28px] group cursor-pointer z-10'>
                                    <h2 className='font-kalameh700 text-[23px]'>سفر به تاریخ ایران</h2>
                                </div>
                                <div className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                            </div>
                        </div>
                        <div className='overflow-hidden rounded-[20px] relative group'>
                            <Image
                                src={AutumnPicture}
                                alt='Autumn Picture'
                                className='max-w-[346px] max-h-[512px] rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                            />
                            <div className='absolute text-white bottom-[37px] right-[28px] cursor-pointer group z-10'>
                                <p className=''>کجا میخوای بری؟!</p>
                                <h2 className='font-kalameh700 text-[23px]'>اقامت شما با ما</h2>
                            </div>
                            <div className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                        </div>
                    </div>

                    {/*قسمت محبوب ترین مقصد ها*/}
                    <div className='pb-20'>
                        <div className='flex justify-between pb-4'>
                            <h1 className='font-kalameh500 text-[26px]'>محبوب ترین مقصد ها</h1>
                            <p className='text-[#4E69CA] text-[22px] '>مشاهده همه</p>
                        </div>
                        <AppSwiper data={swiperData}/>
                    </div>

                    {/*قسمت تخفیف ویژه*/}
                    <div className='flex items-center xl:flex-row justify-between flex-col pb-20'>
                        <div className='w-fit'>
                            <h1 className='pb-[28px] text-[26px] font-kalameh500'>تخفیف های ویژه</h1>
                            <div className='relative  bg-gradient-to-l from-[#000] to-white to-60%  py-[2px] px-[2px] rounded-xl'>
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

                        <div className='flex gap-4 self-end'>
                            <div className='relative'>
                                <Image src={TakhfifPicture} alt='Villa Picture'
                                       className='max-w-[510px] h-[475px] rounded-[20px] object-cover'/>
                                <div
                                    className='absolute inset-0 mx-auto flex justify-center items-center bg-[#00000054] rounded-[20px] '>
                                    <Image src={Circle} alt='Circle'/>
                                    <Image src={PersentIcon} alt='Percen Icon' className='absolute top-[-30px] left-8'/>
                                    <p className='absolute text-white top-[-15px] left-10 font-kalameh700'>%30</p>
                                    <div className='absolute left-[235px] flex justify-center items-center'>
                                        <Image src={PlayIcon} alt='PlayIcon'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <Image src={TakhfifPicture1} alt='Villa Picture'
                                       className='max-w-[349px] max-h-[222px] rounded-[20px]'/>
                                <Image src={TakhfifPicture2} alt='Villa Picture'
                                       className='max-w-[349px] max-h-[222px] rounded-[20px]'/>
                            </div>
                        </div>
                    </div>

                    {/*قسمت پیشنهاد های ویلا*/}
                    <h1 className='text-[26px] font-kalameh500 py-3'>سـفر بعـدی شما میتـونه ایـنجا باشه !</h1>
                    <div className='grid grid-cols-3 gap-8 pb-[214px]'>
                        {suggestVilla.map(item => {
                            return (
                                <div className='flex items-center gap-6'>
                                    <div>
                                        <Image src={item.src} alt='Suggest Villa'
                                               className='w-[92px] h-[92px] rounded-[20px]'/>
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <h2 className='text-[20px] font-kalameh400 '>{item.title}</h2>
                                        <p className='text-[13px]  text-[#3C3B3B]'>{item.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className='grid grid-cols-2 pr-12'>
                        <div>
                            <h1 className='pb-[51px] text-[26px] font-kalameh700'>اطمینان از پرداخت</h1>
                            <p className='text-[19.5px]'>
                                از طریق تریپ تور امکان پرداخت از طریق کارت‌های شتاب را دارید.<br/>
                                برای پرداخت آنلاین که تنها لازم است روند خرید را پیگیری کنید و<br/>
                                به درگاه پرداخت امن انتقال یابید.
                            </p>
                        </div>
                        <div>
                            <h1 className='pb-[51px] text-[26px] font-kalameh700'>اطمینان از خدمات پشتیبانی</h1>
                            <p className='text-[17px]'>
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
