'use client'
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SuperAdminNavbar from "@/app/components/superAdmin/SuperAdminNavbar";
import SuperAdminSidebar from "@/app/components/superAdmin/SuperAdminSidebar";
import Inputs from "@/app/components/superAdmin/inputs";
import Image from "next/image";
import NaturePicture from "@/public/images/NaturePicture.png";
import MountainPicture from "@/public/images/MountainPicture.png";
import YazdPicture from "@/public/images/YazdPicture.png";
import AutumnPicture from "@/public/images/autumnPicture.png";
import Button from "@/app/components/Button";

const Articles = () => {
    const pathName = usePathname()

    return (
        <div className='flex flex-col gap-y-24'>
            <SuperAdminNavbar
                titelea='' titeleb='' titelec='' titeled=''
            />
            <div className='w-full justify-start py-8 flex gap-x-[7%]'>
                <SuperAdminSidebar/>
                <div className='w-[90%] flex flex-col items-center gap-y-20 mt-10 '>

                    <div className='w-[90%] flex justify-between '>
                        <div className='w-[25%] h-[350px] relative '>
                            <label
                                className='flex flex-col w-full bg-[#E7E2E2] rounded-2xl items-center cursor-pointer h-[340px]'>
                                <p className='font-kalameh400 text-[126px] text-white'>+</p>
                                <input type='file' className='hidden'/>

                                <div className='absolute text-white bottom-[30px] right-[28px] z-10'>
                                    <p className='font-kalameh400 text-[10px]'>متن ثانویه</p>
                                    <h2 className='font-kalameh700 text-[14px]'>عنوان بلاگ1</h2>
                                </div>
                                <div
                                    className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-25% inset-0 group cursor-pointer rounded-2xl'></div>
                            </label>
                        </div>


                        <div className='w-[40%] flex flex-col justify-between'>
                            <div className='w-full relative'>
                                <label
                                    className='flex flex-col w-full bg-[#E7E2E2] rounded-2xl items-center cursor-pointer h-[160px]'>
                                    <p className='font-kalameh400 text-[100px] text-white absolute top-[-28px]'>+</p>
                                    <input type='file' className='hidden'/>

                                    <div
                                        className='absolute text-white bottom-[25px] right-[28px] group cursor-pointer z-10'>
                                        <h2 className='font-kalameh700 text-[14px]'>عنوان بلاگ2</h2>
                                    </div>
                                    <div
                                        className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-35% inset-0 group cursor-pointer rounded-2xl'></div>
                                </label>
                            </div>
                            <div className='w-full relative'>
                                <label
                                    className='flex flex-col w-full bg-[#E7E2E2] rounded-2xl items-center cursor-pointer h-[160px]'>
                                    <p className='font-kalameh400 text-[100px] text-white absolute top-[-28px]'>+</p>
                                    <input type='file' className='hidden'/>

                                    <div
                                        className='absolute text-white bottom-[25px] right-[28px] group cursor-pointer z-10'>
                                        <h2 className='font-kalameh700 text-[14px]'>عنوان بلاگ 3</h2>
                                    </div>
                                    <div
                                        className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-35% inset-0 group cursor-pointer rounded-2xl'></div>
                                </label>
                            </div>
                        </div>

                        <div className='w-[25%] h-[350px] relative'>
                            <label
                                className='flex flex-col w-full bg-[#E7E2E2] rounded-2xl items-center cursor-pointer  h-[340px]'>
                                <p className='font-kalameh400 text-[126px] text-white'>+</p>
                                <input type='file' className='hidden'/>
                                <div
                                    className='absolute text-white bottom-[30px] right-[28px] cursor-pointer group z-10'>
                                    <p className='font-kalameh400 text-[10px]'>متن ثانویه</p>
                                    <h2 className='font-kalameh700 text-[14px]'> عنوان بلاگ4</h2>
                                </div>
                                <div
                                    className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-25% inset-0 group cursor-pointer rounded-2xl'></div>
                            </label>
                        </div>
                    </div>

                    <div className='w-[90%] flex flex-wrap gap-y-3 justify-between'>
                        <input type="text" className='bg-[#F9F9F9] rounded-md p-3 w-[48%] border border-yellow-300'
                               placeholder='عنوان بلاگ 1 را بنویسید'/>
                        <input type="text" className='bg-[#F9F9F9] rounded-md p-3 w-[48%] border border-yellow-300 '
                               placeholder='متن ثانویه را بنویسید( اختیاری )'/>
                        <input type="text" className='bg-[#F9F9F9] rounded-md p-3 w-[48%] border border-yellow-300'
                               placeholder='عنوان بلاگ 2 را بنویسید'/>
                        <input type="text" className='bg-[#F9F9F9] rounded-md p-3 w-[48%] border border-yellow-300'
                               placeholder='متن ثانویه را بنویسید( اختیاری )'/>
                        <input type="text" className='bg-[#F9F9F9] rounded-md p-3 w-[48%] border border-yellow-300'
                               placeholder='عنوان بلاگ 3 را بنویسید'/>
                        <input type="text" className='bg-[#F9F9F9] rounded-md p-3 w-[48%] border border-yellow-300'
                               placeholder='متن ثانویه را بنویسید( اختیاری )'/>
                        <input type="text" className='bg-[#F9F9F9] rounded-md p-3 w-[48%] border border-yellow-300'
                               placeholder='عنوان بلاگ 4 را بنویسید'/>
                        <input type="text" className='bg-[#F9F9F9] rounded-md p-3 w-[48%] border border-yellow-300'
                               placeholder='متن ثانویه را بنویسید( اختیاری )'/>
                    </div>


                    <div className='w-[90%] flex flex-col gap-y-28'>

                        <div className='flex justify-start'>
                            <p className='font-kalameh500 text-[#000] text-[24px]'> جاذبه های تاریخی ایران</p>
                        </div>

                        <div className='flex flex-col gap-y-8'>
                            <div className='flex w-full justify-between'>

                                <div className='w-[33%] h-[273px] overflow-hidden rounded-[20px] relative group'>
                                    <Image
                                        src={AutumnPicture}
                                        alt='Autumn Picture'
                                        className='w-full h-full rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                                    />
                                    <div
                                        className='absolute text-white bottom-[37px] right-[28px] cursor-pointer group z-10'>
                                        <p className=''>کجا میخوای بری؟!</p>
                                        <h2 className='font-kalameh700 text-[23px]'>اقامت شما با ما</h2>
                                    </div>
                                    <div
                                        className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                                </div>

                                <div className='w-[63%] h-[273px] overflow-hidden rounded-[20px] relative group'>
                                    <Image
                                        src={AutumnPicture}
                                        alt='Autumn Picture'
                                        className='w-full h-full rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                                    />
                                    <div
                                        className='absolute text-white bottom-[37px] right-[28px] cursor-pointer group z-10'>
                                        <p className=''>کجا میخوای بری؟!</p>
                                        <h2 className='font-kalameh700 text-[23px]'>اقامت شما با ما</h2>
                                    </div>
                                    <div
                                        className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                                </div>

                            </div>


                            <div className='flex w-full justify-between'>

                                <div className='w-[63%] h-[273px] overflow-hidden rounded-[20px] relative group'>
                                    <Image
                                        src={AutumnPicture}
                                        alt='Autumn Picture'
                                        className='w-full h-full rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                                    />
                                    <div
                                        className='absolute text-white bottom-[37px] right-[28px] cursor-pointer group z-10'>
                                        <p className=''>کجا میخوای بری؟!</p>
                                        <h2 className='font-kalameh700 text-[23px]'>اقامت شما با ما</h2>
                                    </div>
                                    <div
                                        className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                                </div>

                                <div className='w-[33%] h-[273px] overflow-hidden rounded-[20px] relative group'>
                                    <Image
                                        src={AutumnPicture}
                                        alt='Autumn Picture'
                                        className='w-full h-full rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                                    />
                                    <div
                                        className='absolute text-white bottom-[37px] right-[28px] cursor-pointer group z-10'>
                                        <p className=''>کجا میخوای بری؟!</p>
                                        <h2 className='font-kalameh700 text-[23px]'>اقامت شما با ما</h2>
                                    </div>
                                    <div
                                        className='absolute bg-gradient-to-t from-[#524F4F] to-[#02020200] to-20% inset-0 group cursor-pointer'></div>
                                </div>


                            </div>
                        </div>


                    </div>

                    <div className='w-[90%] border-b '></div>

                    <div className='w-[90%]'>
                        <textarea className='w-full bg-[#F6F6F6] h-[124px] rounded-md p-4'>
معماری ایرانی به کمک تاریخ غنی این کشور می آید و در کنار هم مدینه ای فاضله از فرهنگ پربار پرشین ها به ذهن القا می کنند. کاشی کاری های زینتی و شاهکارهای مهندسی هوشمندانه، حاکی از قدرت معماری ایرانی طی قرون متمادی اند. با داشتن بیست میراث جهانی یونسکو در ایران هیچ گاه با کمبود مکان های دیدنی مواجه نمی شوید. هم مساجد بی نظیری دارد و هم شهرهای بیابانی و خلاصه آنکه وسعت و تنوع معماری تاریخی ایرانی شگفت انگیز است.
                        </textarea>

                    </div>

                    <div className='w-[90%] flex flex-col gap-y-24'>
                        <div className='w-full flex justify-between '>
                            <div className='w-[36%]'>
                        <textarea className='w-full bg-[#F6F6F6] h-[273px] rounded-md p-4'>
                            مسجد نصیرالملک یکی از جاهای دیدنی شیراز دل‌نواز است. این بنای تاریخی یکی از شاهکارهای معماری شبیه به جعبه ی جواهرات است. این شاهکار معماری قرن نوزده میلادی می باشد. شیشه‌های رنگی که در تزئین بنا به کار رفته‌اند در طول روز در مقابل تلألؤ نور خورشید می‌درخشند و با درخشش حیرت‌انگیز خود منجر به رقص نور و تصویری رنگین در شبستان مسجد می‌شوند. جدای از پنجره های مات و زیبایش، شهرتش را مدیون کاشی کاری های استثنایی اش است. در واقع نام مستعارش، مسجد صورتی، حق مسلم این بنا می باشد.
                        </textarea>
                            </div>
                            <div className='w-[60%] h-[273px] overflow-hidden rounded-[20px] relative group'>
                                <Image
                                    src={AutumnPicture}
                                    alt='Autumn Picture'
                                    className='w-full h-full rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                                />
                                <div
                                    className='absolute text-white bottom-[37px] left-[12px] cursor-pointer group z-10'>
                                    <Button styles={'rounded-md p-3'}> رزرو اقامتگاه</Button>
                                </div>
                            </div>

                        </div>

                        <div className='w-full flex justify-between '>

                            <div className='w-[60%] h-[273px] overflow-hidden rounded-[20px] relative group'>
                                <Image
                                    src={AutumnPicture}
                                    alt='Autumn Picture'
                                    className='w-full h-full rounded-[20px] group-hover:scale-105 transition cursor-pointer'
                                />
                                <div
                                    className='absolute text-white bottom-[37px] left-[12px] cursor-pointer group z-10'>
                                    <Button styles={'rounded-md p-3'}> رزرو اقامتگاه</Button>
                                </div>
                            </div>

                            <div className='w-[36%]'>
                        <textarea className='w-full bg-[#F6F6F6] h-[273px] rounded-md p-4'>
                            مسجد نصیرالملک یکی از جاهای دیدنی شیراز دل‌نواز است. این بنای تاریخی یکی از شاهکارهای معماری شبیه به جعبه ی جواهرات است. این شاهکار معماری قرن نوزده میلادی می باشد. شیشه‌های رنگی که در تزئین بنا به کار رفته‌اند در طول روز در مقابل تلألؤ نور خورشید می‌درخشند و با درخشش حیرت‌انگیز خود منجر به رقص نور و تصویری رنگین در شبستان مسجد می‌شوند. جدای از پنجره های مات و زیبایش، شهرتش را مدیون کاشی کاری های استثنایی اش است. در واقع نام مستعارش، مسجد صورتی، حق مسلم این بنا می باشد.
                        </textarea>
                            </div>
                        </div>

                    </div>
                    <div className="flex w-[90%] justify-center py-20">
                        <Button styles={'w-[25%] p-3 rounded-md'}>ثبت </Button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Articles
