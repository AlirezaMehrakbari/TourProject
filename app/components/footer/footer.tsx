import React from 'react'

import Logo from "@/app/components/navbar/Logo";
import EarthLogo from '@/public/icons/EarthLogo.svg'
import Image from "next/image";
import Link from "next/link";

const footer = () => {
    return (
            <footer className='bg-[#15247B] px-[8rem] text-white py-20 hidden justify-between relative mt-[260px] lg:flex'>
                <div>
                    <div className='flex gap-x-[115px]'>
                        <div className='flex flex-col relative'>
                            <div
                                className='bg-[#D9D9D933] rotate-[-45deg] absolute right-[-100px] top-[25px] opacity-[0.3] rounded-[15px] w-[51.413px] h-[51.808px]'></div>
                            <div
                                className='bg-[#D9D9D933] rotate-[-45deg] absolute right-[-55px] opacity-[0.3] rounded-[15px] w-[107.068px] h-[107.892px]'></div>
                            <h3 className='text-[17px] font-kalameh700 pb-4'>نحوه رزرو اقامتگاه هـا</h3>
                            <ul className='list-disc'>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>راهنمای رزرو
                                    اقامتگاه</Link>
                                </li>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>نحوه پرداخت</Link></li>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>لغو رزرو اقامتگاه</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col relative'>
                            <div
                                className='bg-[#D9D9D933] rotate-[-45deg] absolute right-[-55px] opacity-[0.3] rounded-[15px] w-[107.068px] h-[107.892px]'></div>
                            <h3 className='text-[17px] font-kalameh700 pb-4'>خدمات مشتریان</h3>
                            <ul className='list-disc'>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>پرسش متداول مهمانان</Link>
                                </li>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>پرسش متداول
                                    میــزبانان</Link>
                                </li>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>چطور اقامتگاه ثبت
                                    کنم؟</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col relative'>
                            <div
                                className='bg-[#D9D9D933] rotate-[-45deg] absolute right-[-55px] opacity-[0.3] rounded-[15px] w-[107.068px] h-[107.892px]'></div>
                            <h3 className='text-[17px] font-kalameh700 pb-4'>همراه تریپ تور</h3>
                            <ul className='list-disc'>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>درباره ما</Link></li>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>تماس با ما</Link></li>
                                <li><Link href={'/'} className='text-[15px] font-kalameh500'>شرایط ثبت اقامتگاه</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='pt-[76px] flex items-center'>
                        <svg className='relative bottom-[7px]' xmlns="http://www.w3.org/2000/svg" width="39" height="40"
                             viewBox="0 0 39 40" fill="none">
                            <g cLinkp-path="url(#cLinkp0_187_2634)">
                                <path
                                    d="M34.125 16.2891C34.125 27.6641 19.5 37.4141 19.5 37.4141C19.5 37.4141 4.875 27.6641 4.875 16.2891C4.875 12.4103 6.41584 8.69034 9.15856 5.94763C11.9013 3.20491 15.6212 1.66406 19.5 1.66406C23.3788 1.66406 27.0987 3.20491 29.8414 5.94763C32.5842 8.69034 34.125 12.4103 34.125 16.2891Z"
                                    stroke="white" strokeWidth="1.58333" stroke-Linknecap="round"
                                    stroke-Linknejoin="round"/>
                                <path
                                    d="M19.5 21.1641C22.1924 21.1641 24.375 18.9815 24.375 16.2891C24.375 13.5967 22.1924 11.4141 19.5 11.4141C16.8076 11.4141 14.625 13.5967 14.625 16.2891C14.625 18.9815 16.8076 21.1641 19.5 21.1641Z"
                                    stroke="white" strokeWidth="1.58333" stroke-Linknecap="round"
                                    stroke-Linknejoin="round"/>
                            </g>
                            <defs>
                                {/*<cLinkpPath id="cLinkp0_187_2634">*/}
                                {/*    <rect width="39" height="39" fill="white" transform="translate(0 0.0390625)"/>*/}
                                {/*</cLinkpPath>*/}
                            </defs>
                        </svg>
                        <h4 className='text-[17px] font-kalameh400'>نشـانی ما : تهران ، نارمـک ، خیـابان رسـالت
                            مجتمع الوند ، پلاک 32</h4>
                    </div>
                </div>

                <div className='flex flex-col absolute top-[-50px] xl:left-[169px] left-[20px] items-center'>
                    <Image
                        src={EarthLogo}
                        alt='Earth Logo'
                        className='max-w-[116px] max-h-[116px] rounded-[116px] bg-[#15247B]'/>
                    <h1 className='font-potk text-[28.4px]'>انتخابی با خیال راحت</h1>
                    <div className='w-[221px] h-[39px] mt-[25px] bg-[#000C4D] rounded-[10px]'><Link
                        className='text-[24.7px] font-kalameh500 flex justify-center items-center' href={'/'}>فرصت
                        شغلی</Link></div>
                    <p className='text-[15.6px] font-kalameh400 pt-[20px]'>مارا در شبکه های مجازی دنبال کنید.</p>
                    <div className='flex pt-[29px] gap-x-[23.85px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path
                                d="M19 1H7C3.68629 1 1 3.68629 1 7V19C1 22.3137 3.68629 25 7 25H19C22.3137 25 25 22.3137 25 19V7C25 3.68629 22.3137 1 19 1Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M17.8 12.2444C17.9481 13.2431 17.7775 14.263 17.3125 15.1592C16.8475 16.0553 16.1118 16.7821 15.21 17.236C14.3081 17.6899 13.2861 17.8479 12.2894 17.6875C11.2926 17.5271 10.3717 17.0565 9.65782 16.3426C8.94391 15.6286 8.47329 14.7078 8.31289 13.711C8.15249 12.7142 8.31049 11.6922 8.7644 10.7904C9.21831 9.88859 9.94503 9.15285 10.8412 8.68785C11.7373 8.22285 12.7573 8.05227 13.756 8.20036C14.7747 8.35142 15.7178 8.82612 16.446 9.55433C17.1743 10.2825 17.6489 11.2257 17.8 12.2444Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.6 6.40039H19.6116" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path d="M26.5834 2.41699L13.2917 15.7087" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M26.5834 2.41699L18.125 26.5837L13.2917 15.7087L2.41669 10.8753L26.5834 2.41699Z"
                                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="26" viewBox="0 0 37 26" fill="none">
                            <path
                                d="M34.4394 4.75679C34.255 4.02004 33.8795 3.345 33.3507 2.79985C32.8219 2.25471 32.1586 1.85876 31.4278 1.65201C28.7577 1 18.0772 1 18.0772 1C18.0772 1 7.39675 1 4.72663 1.7141C3.99584 1.92086 3.33255 2.3168 2.80375 2.86195C2.27496 3.4071 1.89939 4.08214 1.71499 4.81889C1.22632 7.52868 0.987282 10.2776 1.00089 13.031C0.983468 15.8052 1.22252 18.5751 1.71499 21.3053C1.91829 22.0192 2.30227 22.6685 2.82983 23.1907C3.35739 23.7128 4.0107 24.09 4.72663 24.2859C7.39675 25 18.0772 25 18.0772 25C18.0772 25 28.7577 25 31.4278 24.2859C32.1586 24.0791 32.8219 23.6832 33.3507 23.138C33.8795 22.5929 34.255 21.9179 34.4394 21.1811C34.9243 18.4917 35.1634 15.7638 35.1535 13.031C35.171 10.2569 34.9319 7.48698 34.4394 4.75679Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.5844 18.1077L23.5106 13.0314L14.5844 7.95508V18.1077Z" stroke="white"
                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </footer>
    )
}

export default footer
