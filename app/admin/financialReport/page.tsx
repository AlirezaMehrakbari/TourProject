'use client'
import React, {useState} from 'react'
import DropDown from "@/app/components/navbar/DropDown";
import LineChart from "@/app/components/chart/LineChart";
import PolarChart from "@/app/components/chart/PolarChart";

const FinancialReportPage = () => {
    const financialReport = [
        {
            id: 1,
            date: 'چهارشنبه 12 مهر',
            period: '3 شب',
            people: '3 نفر',
            userGain: '1.800.000 تومـــان',
        },
        {
            id: 2,
            date: 'دوشنبه 10 مهر',
            period: '2 شب',
            people: '2 نفر',
            userGain: '1.200.000 تومـــان',
        },
        {
            id: 3,
            date: 'جمعه 7 مهر',
            period: '3 شب',
            people: '4 نفر',
            userGain: '2.100.000 تومـــان',
        },
        {
            id: 4,
            date: 'یکشنبه 2 مهر',
            period: '3 شب',
            people: '3 نفر',
            userGain: '1.800.000 تومـــان',
        },
    ];
    const data = [
        {
            id: 1,
            date: 'یکشنبه 2 مهر',
            userGain: 1800000,
        },
        {
            id: 2,
            date: 'جمعه 7 مهر',
            userGain: 2100000,
        },
        {
            id: 3,
            date: 'دوشنبه 10 مهر',
            userGain: 1200000,
        },
        {
            id: 4,
            date: 'چهارشنبه 12 مهر',
            userGain: 1800000,
        },
    ];
    const data1 = [
        {
            id: 1,
            label: 'تعداد شب های قابل رزرو',
            userGain: 28,
        },
        {
            id: 2,
            label: 'میزان پیشرفت شما نسبت به ماه گذشته',
            userGain: 5,
        },
        {
            id: 3,
            label: 'تعداد شب های رزرو شده تا این لحظه',
            userGain: 20,
        },
        {
            id: 4,
            label: 'تعداد شب های کنسل شده',
            userGain: 3,
        },
    ];
    const [userData, setUserData] = useState({
        labels: data.map((data) => data.date),
        options: {
            responsive: true,
            title: {
                display: false,
            },
        },
        datasets: [
            {
                label: "مبلغ پرداخت شده",
                data: data.map((data) => data.userGain),
                backgroundColor: [
                    'blue'
                ],
                borderColor: "red",
                borderWidth: 2,

            },
        ],
    });
    const [userData1, setUserData1] = useState({
        labels: data1.map((data) => data.label),
        options: {
            responsive: true,
            title: {
                display: false,
            },
        },
        datasets: [
            {
                label: "مبلغ پرداخت شده",
                data: data1.map((data) => data.userGain),
                backgroundColor: [
                    '#FECA58',
                    '#69C8F9',
                    '#FE68C2',
                    '#6FF07C'
                ],
                borderColor: "transparent",
                borderWidth: 2,

            },
        ],
    });
    return (
        <div className='w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto pt-[10rem]'>
            <div className='flex items-center justify-between'>
                <p className='text-[30px] font-kalameh400'><span className='font-kalameh700'>گزارش مــالی</span> شما</p>
                {/*<DropDown*/}
                {/*    styles='bg-[#465297]'*/}
                {/*    label={'گزارش مالی بر اساس'}>*/}
                {/*    sd*/}
                {/*</DropDown>*/}
            </div>

            {/*قسمت جداول*/}
            <div className='py-8'>
                <h1 className='sm:text-[20px] flex items-center gap-x-2 py-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                        <path d="M0.698516 19.4463L0.698516 21.4138L4.63352 21.4138L4.63352 19.4463L0.698516 19.4463ZM4.63351 5.67379C4.63351 4.58717 3.75264 3.70629 2.66601 3.70629C1.57939 3.70629 0.698515 4.58717 0.698515 5.67379L4.63351 5.67379ZM4.63352 19.4463L4.63351 5.67379L0.698515 5.67379L0.698516 19.4463L4.63352 19.4463Z" fill="black"/>
                        <path d="M5.61648 19.4463L5.61648 21.4138L9.55148 21.4138L9.55148 19.4463L5.61648 19.4463ZM9.55148 2.72254C9.55148 1.63592 8.6706 0.755039 7.58398 0.755039C6.49736 0.755039 5.61648 1.63592 5.61648 2.72254L9.55148 2.72254ZM9.55148 19.4463L9.55148 2.72254L5.61648 2.72254L5.61648 19.4463L9.55148 19.4463Z" fill="black"/>
                        <path d="M10.5364 19.4463L10.5364 21.4138L14.4714 21.4138L14.4714 19.4463L10.5364 19.4463ZM14.4714 10.5925C14.4714 9.50592 13.5905 8.62504 12.5039 8.62504C11.4173 8.62504 10.5364 9.50592 10.5364 10.5925L14.4714 10.5925ZM14.4714 19.4463L14.4714 10.5925L10.5364 10.5925L10.5364 19.4463L14.4714 19.4463Z" fill="black"/>
                        <path d="M15.4544 19.4463L15.4544 21.4138L19.3894 21.4138L19.3894 19.4463L15.4544 19.4463ZM19.3894 7.64129C19.3894 6.55467 18.5085 5.67379 17.4219 5.67379C16.3353 5.67379 15.4544 6.55467 15.4544 7.64129L19.3894 7.64129ZM19.3894 19.4463L19.3894 7.64129L15.4544 7.64129L15.4544 19.4463L19.3894 19.4463Z" fill="black"/>
                    </svg>
                    <span className='md:text-[28.4px] font-kalameh500'>مهرماه - 1402</span> تا این لحظه
                </h1>
                <table className='w-full text-center'>
                    <thead>
                    <tr className='text-white bg-[#3D4576] text-[12px] sm:text-[23px]'>
                        <th className='py-3 rounded-tr-[10px]'>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22"
                                     fill="none">
                                    <path
                                        d="M21.2336 5.16406H3.52609C2.43947 5.16406 1.55859 6.04494 1.55859 7.13156V18.9366C1.55859 20.0232 2.43947 20.9041 3.52609 20.9041H21.2336C22.3202 20.9041 23.2011 20.0232 23.2011 18.9366V7.13156C23.2011 6.04494 22.3202 5.16406 21.2336 5.16406Z"
                                        stroke="white" strokeWidth="1.9675" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path d="M1.55859 11.0664H23.2011" stroke="white" strokeWidth="1.9675"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M8.93656 2.21289C8.93656 1.39793 8.2759 0.737266 7.46094 0.737266C6.64597 0.737266 5.98531 1.39793 5.98531 2.21289L8.93656 2.21289ZM5.98531 2.21289L5.98531 8.11539L8.93656 8.11539L8.93656 2.21289L5.98531 2.21289Z"
                                        fill="white"/>
                                    <path
                                        d="M18.7745 2.21289C18.7745 1.39793 18.1138 0.737266 17.2988 0.737266C16.4839 0.737266 15.8232 1.39793 15.8232 2.21289L18.7745 2.21289ZM15.8232 2.21289L15.8232 8.11539L18.7745 8.11539L18.7745 2.21289L15.8232 2.21289Z"
                                        fill="white"/>
                                </svg>
                                تاریـخ اقامت
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                     fill="none">
                                    <path
                                        d="M11.3062 20.8859C16.7394 20.8859 21.1437 16.4815 21.1437 11.0484C21.1437 5.61534 16.7394 1.21094 11.3062 1.21094C5.87315 1.21094 1.46875 5.61534 1.46875 11.0484C1.46875 16.4815 5.87315 20.8859 11.3062 20.8859Z"
                                        stroke="white" strokeWidth="1.9675" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path d="M11.3066 5.14648V11.049L15.2416 13.0165" stroke="white"
                                          strokeWidth="1.9675" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                مدت اقامت
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22"
                                     fill="none">
                                    <path
                                        d="M18.6788 20.5319V18.3855C18.6788 17.247 18.2266 16.1551 17.4215 15.3501C16.6165 14.545 15.5246 14.0928 14.3861 14.0928H5.80057C4.66206 14.0928 3.57018 14.545 2.76513 15.3501C1.96008 16.1551 1.50781 17.247 1.50781 18.3855V20.5319"
                                        stroke="white" strokeWidth="1.54539" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M10.0935 9.7984C12.4644 9.7984 14.3863 7.87647 14.3863 5.50565C14.3863 3.13482 12.4644 1.21289 10.0935 1.21289C7.72271 1.21289 5.80078 3.13482 5.80078 5.50565C5.80078 7.87647 7.72271 9.7984 10.0935 9.7984Z"
                                        stroke="white" strokeWidth="1.54539" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M25.119 20.5291V18.3827C25.1183 17.4316 24.8017 16.5076 24.219 15.7559C23.6362 15.0042 22.8203 14.4673 21.8994 14.2295"
                                        stroke="white" strokeWidth="1.54539" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M17.6074 1.35254C18.5308 1.58896 19.3492 2.12599 19.9337 2.87895C20.5182 3.63191 20.8354 4.55797 20.8354 5.51115C20.8354 6.46432 20.5182 7.39039 19.9337 8.14335C19.3492 8.89631 18.5308 9.43333 17.6074 9.66975"
                                        stroke="white" strokeWidth="1.54539" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                                نفرات
                            </div>
                        </th>
                        <th className='rounded-tl-[10px]'>
                            <div className='flex items-center gap-x-2 justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                     fill="none">
                                    <path d="M11.2773 4.12988V18.8861" stroke="white" strokeWidth="0.98375"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M14.632 6.81445H9.60149C8.97887 6.81445 8.38176 7.06179 7.9415 7.50205C7.50124 7.9423 7.25391 8.53942 7.25391 9.16204C7.25391 9.78466 7.50124 10.3818 7.9415 10.822C8.38176 11.2623 8.97887 11.5096 9.60149 11.5096H12.9552C13.5778 11.5096 14.1749 11.757 14.6152 12.1972C15.0554 12.6375 15.3028 13.2346 15.3028 13.8572C15.3028 14.4798 15.0554 15.0769 14.6152 15.5172C14.1749 15.9575 13.5778 16.2048 12.9552 16.2048H7.25391"
                                        stroke="white" strokeWidth="0.98375" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M11.2623 20.8859C16.6954 20.8859 21.0998 16.4815 21.0998 11.0484C21.0998 5.61534 16.6954 1.21094 11.2623 1.21094C5.8292 1.21094 1.4248 5.61534 1.4248 11.0484C1.4248 16.4815 5.8292 20.8859 11.2623 20.8859Z"
                                        stroke="white" strokeWidth="1.9675" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                                مبلغ پرداخت شده
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {financialReport.map(report => {
                        return (
                            <tr className='even:bg-[#F0F0F0] odd:bg-[#E9E4E4]'>
                                <td className='py-4'>{report.date}</td>
                                <td>{report.period}</td>
                                <td>{report.people}</td>
                                <td>{report.userGain}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            {/*قسمت چارت*/}
            <div className='w-full flex items-center py-8'>
                <div className='w-[40%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="234" height="233" viewBox="0 0 234 233" fill="none">
                        <path
                            d="M219.319 116.597C219.319 92.9841 211.147 70.0991 196.191 51.8267C181.235 33.5543 160.417 21.0206 137.27 16.3534L117.058 116.597H219.319Z"
                            fill="url(#paint0_linear_949_6734)"/>
                        <path
                            d="M95.7721 226.103C111.686 229.196 128.084 228.784 143.823 224.894C159.561 221.005 174.263 213.732 186.904 203.581C199.546 193.431 209.823 180.647 217.02 166.12C224.217 151.593 228.162 135.671 228.579 119.465L117.058 116.595L95.7721 226.103Z"
                            fill="url(#paint1_linear_949_6734)"/>
                        <path
                            d="M39.8805 183.686C54.2116 200.172 73.4454 211.636 94.7643 216.398L117.058 116.597L39.8805 183.686Z"
                            fill="url(#paint2_linear_949_6734)"/>
                        <path
                            d="M137.238 2.15605C113.912 -1.95688 89.8869 1.15613 68.3798 11.0781C46.8728 21.0001 28.9112 37.2571 16.901 57.6717C4.8908 78.0863 -0.594407 101.683 1.18011 125.302C2.95462 148.921 11.9041 171.434 26.8298 189.825L117.059 116.596L137.238 2.15605Z"
                            fill="url(#paint3_linear_949_6734)"/>
                        <g filter="url(#filter0_d_949_6734)">
                            <circle cx="117.059" cy="116.596" r="69.7233" fill="white"/>
                        </g>
                        <circle cx="117.058" cy="116.595" r="61.1131" stroke="#E4E4E4" strokeWidth="1.72636"/>
                        <defs>
                            <filter id="filter0_d_949_6734" x="40.4305" y="43.4203" width="153.257" height="153.257"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="3.45272"/>
                                <feGaussianBlur stdDeviation="3.45272"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_949_6734"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_949_6734"
                                         result="shape"/>
                            </filter>
                            <linearGradient className='relative' id="paint0_linear_949_6734" x1="117.058" y1="14.3359"
                                            x2="117.058" y2="218.858" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7AD3FF"/>
                                <stop offset="1" stop-color="#4FBAF0"/>
                                <p className='absolute inset-0 bg-[#000]'>20</p>
                            </linearGradient>
                            <linearGradient id="paint1_linear_949_6734" x1="117.058" y1="5.03809" x2="117.058"
                                            y2="228.153" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD95D3"/>
                                <stop offset="1" stop-color="#FF5CBE"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_949_6734" x1="117.058" y1="14.3359" x2="117.058"
                                            y2="218.858" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#99FFA3"/>
                                <stop offset="1" stop-color="#68EE76"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_949_6734" x1="117.059" y1="0.390625" x2="117.059"
                                            y2="232.802" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD572"/>
                                <stop offset="1" stop-color="#FEBD38"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className='flex flex-col gap-y-2 pt-6'>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-[20px] h-[20px] rounded-[4px] bg-[#FECA58]'></div>
                            <span className='text-[10.6px] font-kalameh700 text-[#FECA58]'>تعداد شب های قابل رزرو</span>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-[20px] h-[20px] rounded-[4px] bg-[#69C8F9]'></div>
                            <span className='text-[10.6px] font-kalameh700 text-[#69C8F9]'>میزان پیشرفت شما نسبت به ماه گذشته</span>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-[20px] h-[20px] rounded-[4px] bg-[#FE68C2]'></div>
                            <span className='text-[10.6px] font-kalameh700 text-[#FE68C2]'>تعداد شب های رزرو شده تا این لحظه</span>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-[20px] h-[20px] rounded-[4px] bg-[#6FF07C]'></div>
                            <span className='text-[10.6px] font-kalameh700 text-[#6FF07C]'>تعداد شب های کنسل شده</span>
                        </div>
                    </div>
                </div>
                <div className='w-[60%] flex flex-col items-center'>
                    <LineChart
                        chartData={userData}
                    />
                    <p className='whitespace-pre pt-8 text-[16.7px] text-[#000]'>در این نمودار میتوانید بهترین زمــان<br/>
                        اجاره ماه اخیر خود را مشاهده کنید</p>
                </div>
            </div>
        </div>
    )
}

export default FinancialReportPage
