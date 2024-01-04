'use client'
import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SuperAdminNavbar from "@/app/components/superAdmin/SuperAdminNavbar";
import {right} from "@popperjs/core";
import Button from "@/app/components/Button";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, {Calendar} from "react-multi-date-picker";
import useStep from "@/app/hooks/useStep";
import DateObject from "react-date-object";
import DatePickerPlugin from "@/app/components/plugin/DatePickerPlugin";


const SuperAdmin = () => {
    const [values, setotherValues] = useState([
        new DateObject({ calendar: persian }).subtract(4, "days"),
        new DateObject({ calendar: persian }).add(4, "days")
    ])

    const [valuees, setValues] = useState([])



    const entryDate = new DateObject({
        //@ts-ignore
        year: valuees[0]?.year,
        //@ts-ignore
        month: valuees[0]?.month,
        //@ts-ignore
        day: valuees[0]?.day,

    }).format()
    const exitDate = new DateObject({
        //@ts-ignore
        year: valuees[1]?.year,
        //@ts-ignore
        month: valuees[1]?.month,
        //@ts-ignore
        day: valuees[1]?.day,

    }).format()
    const data = [
        {
            id: 1,
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M19.9834 9.41861C19.9834 8.52598 19.5438 7.69997 18.7977 7.20702L13.4686 3.64984C12.576 3.05031 11.4036 3.05031 10.5109 3.64984L5.18182 7.20702C4.44907 7.69997 3.99609 8.52598 3.99609 9.41861V16.9859C3.99609 17.359 4.2892 17.6521 4.66223 17.6521H19.3173C19.6903 17.6521 19.9834 17.359 19.9834 16.9859V9.41861ZM11.9898 14.3214C10.7108 14.3214 9.65828 13.2689 9.65828 11.9899C9.65828 10.7109 10.7108 9.65842 11.9898 9.65842C13.2688 9.65842 14.3213 10.7109 14.3213 11.9899C14.3213 13.2689 13.2688 14.3214 11.9898 14.3214Z"
                    fill="#FF7512"/>
                <path
                    d="M29.3108 28.3113H27.6188V24.3145C28.8845 23.9014 29.8037 22.7157 29.8037 21.3168V18.6523C29.8037 16.907 28.3782 15.4814 26.6329 15.4814C24.8876 15.4814 23.4621 16.907 23.4621 18.6523V21.3168C23.4621 22.7024 24.368 23.8748 25.6071 24.3011V28.3113H19.9848V20.3176C19.9848 19.9446 19.6917 19.6515 19.3187 19.6515H4.66364C4.2906 19.6515 3.9975 19.9446 3.9975 20.3176V28.3113H2.66522C2.11899 28.3113 1.66602 28.7643 1.66602 29.3105C1.66602 29.8567 2.11899 30.3097 2.66522 30.3097H26.553C26.5796 30.3097 26.5929 30.323 26.6196 30.323C26.6462 30.323 26.6596 30.3097 26.6862 30.3097H29.3108C29.857 30.3097 30.31 29.8567 30.31 29.3105C30.31 28.7643 29.857 28.3113 29.3108 28.3113ZM10.992 24.3145C10.992 23.7682 11.4449 23.3152 11.9912 23.3152C12.5374 23.3152 12.9904 23.7682 12.9904 24.3145V28.3113H10.992V24.3145Z"
                    fill="#FF7512"/>
            </svg>,
            title: 'اقامت گاه'
        },
        {
            id: 2,
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M24.9276 12.6429C24.7944 12.6429 24.6612 12.6162 24.528 12.5629C24.0217 12.3364 23.7952 11.7502 24.0084 11.244C24.2615 10.6711 24.1149 9.83176 23.6486 9.13897C23.1824 8.43287 22.4762 7.95325 21.8367 7.99322C21.2505 7.99322 20.8375 7.55356 20.8242 7.00733C20.8242 6.44777 21.2639 6.00812 21.8101 5.9948C23.1824 5.96815 24.4747 6.7542 25.314 8.01986C26.1667 9.29885 26.3665 10.831 25.8469 12.03C25.687 12.4164 25.314 12.6429 24.9276 12.6429Z"
                    fill="#FF7512"/>
                <path
                    d="M29.0703 13.9631C28.9771 13.9631 28.8971 13.9498 28.8039 13.9231C28.271 13.7766 27.9645 13.2303 28.1111 12.6974C28.6174 10.8855 28.191 8.72724 26.9787 6.91534C25.7663 5.10344 23.9277 3.89107 22.0492 3.66458C21.503 3.59797 21.1166 3.10503 21.1832 2.55879C21.2499 2.01256 21.7561 1.61287 22.289 1.69281C24.7271 1.98591 27.0986 3.53136 28.6307 5.82287C30.1628 8.11439 30.6824 10.8855 30.0296 13.257C29.9097 13.67 29.51 13.9631 29.0703 13.9631Z"
                    fill="#FF7512"/>
                <path
                    d="M22.8095 15.6949C22.8095 16.0946 22.4765 16.4276 22.0768 16.4276H4.57064C4.17096 16.4276 3.83789 16.0946 3.83789 15.6949C3.83789 15.2952 4.17096 14.9621 4.57064 14.9621H5.55653L5.92957 13.2035C6.27596 11.4982 7.00871 9.93945 9.91308 9.93945H16.7477C19.652 9.93945 20.3715 11.5115 20.7312 13.2035L21.1042 14.9621H22.0901C22.4765 14.9621 22.8095 15.2952 22.8095 15.6949Z"
                    fill="#FF7512"/>
                <path
                    d="M23.222 21.1973C23.0754 19.5985 22.6491 17.8799 19.5316 17.8799H7.11475C3.99721 17.8799 3.57088 19.5985 3.42433 21.1973L2.8781 27.1259C2.81149 27.8586 3.0513 28.6047 3.55756 29.1643C4.07715 29.7238 4.79658 30.0436 5.58263 30.0436H7.40785C8.97994 30.0436 9.28636 29.1376 9.4862 28.5514L9.68604 27.9652C9.91253 27.2991 9.96582 27.1259 10.8451 27.1259H15.8278C16.7072 27.1259 16.7338 27.2192 16.9869 27.9652L17.1868 28.5514C17.3866 29.151 17.6797 30.0436 19.2651 30.0436H21.0903C21.8631 30.0436 22.5958 29.7238 23.1154 29.1643C23.6217 28.6047 23.8615 27.872 23.7949 27.1259L23.222 21.1973ZM10.4055 23.2223H7.48778C7.0881 23.2223 6.75503 22.8892 6.75503 22.4896C6.75503 22.0899 7.0881 21.7568 7.48778 21.7568H10.4055C10.8052 21.7568 11.1382 22.0899 11.1382 22.4896C11.1382 22.8892 10.8052 23.2223 10.4055 23.2223ZM19.1585 23.2223H16.2409C15.8412 23.2223 15.5081 22.8892 15.5081 22.4896C15.5081 22.0899 15.8412 21.7568 16.2409 21.7568H19.1585C19.5582 21.7568 19.8913 22.0899 19.8913 22.4896C19.8913 22.8892 19.5582 23.2223 19.1585 23.2223Z"
                    fill="#FF7512"/>
            </svg>,
            title: 'ایاب وذهاب درون شهری'
        },
        {
            id: 3,
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M22.4096 2.54492H9.56642C6.74199 2.54492 4.42383 4.86309 4.42383 7.68752V26.4593C4.42383 28.8574 6.14247 29.87 8.24747 28.7109L14.749 25.1004C15.4418 24.714 16.5609 24.714 17.2403 25.1004L23.7419 28.7109C25.8469 29.8833 27.5655 28.8707 27.5655 26.4593V7.68752C27.5522 4.86309 25.2473 2.54492 22.4096 2.54492ZM20.8109 12.0307L15.4817 17.3599C15.2819 17.5597 15.0288 17.653 14.7756 17.653C14.5225 17.653 14.2694 17.5597 14.0695 17.3599L12.0711 15.3614C11.6847 14.9751 11.6847 14.3356 12.0711 13.9492C12.4575 13.5629 13.097 13.5629 13.4833 13.9492L14.7756 15.2415L19.3986 10.6185C19.785 10.2322 20.4245 10.2322 20.8109 10.6185C21.1972 11.0049 21.1972 11.6444 20.8109 12.0307Z"
                    fill="#FF7512"/>
            </svg>,
            title: 'بیمه مسافران'
        },
        {
            id: 4,
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                <path d="M0.957031 30.4482H29.014" stroke="#FF7512" stroke-width="1.91515" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M2.66406 26.6433C3.17922 23.7087 4.62825 21.4054 6.90273 19.4809C9.1772 17.5563 12.0545 16.4901 15.0338 16.4678C18.0072 16.4747 20.8813 17.5376 23.1438 19.4668C25.4063 21.3961 26.9099 24.0662 27.3865 27.0011"
                    fill="#FF7512"/>
                <path
                    d="M2.66406 26.6433C3.17922 23.7087 4.62825 21.4054 6.90273 19.4809C9.1772 17.5563 12.0545 16.4901 15.0338 16.4678C18.0072 16.4747 20.8813 17.5376 23.1438 19.4668C25.4063 21.3961 26.9099 24.0662 27.3865 27.0011"
                    stroke="#FF7512" stroke-width="1.91515" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M15.0346 16.372C16.4096 16.372 17.5243 15.2573 17.5243 13.8823C17.5243 12.5073 16.4096 11.3926 15.0346 11.3926C13.6596 11.3926 12.5449 12.5073 12.5449 13.8823C12.5449 15.2573 13.6596 16.372 15.0346 16.372Z"
                    stroke="#FF7512" stroke-width="1.91515" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0352 3.8291V7.37211" stroke="#FF7512" stroke-width="1.91515" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M7.66016 7.55566V11.0029" stroke="#FF7512" stroke-width="1.91515" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M22.4062 6.22363V9.67091" stroke="#FF7512" stroke-width="1.91515" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>,
            title: 'وعده های غذایی'
        },
        {
            id: 5,
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M15.9868 2.66504C8.64599 2.66504 2.66406 8.64697 2.66406 15.9878C2.66406 23.3287 8.64599 29.3106 15.9868 29.3106C23.3277 29.3106 29.3096 23.3287 29.3096 15.9878C29.3096 8.64697 23.3277 2.66504 15.9868 2.66504ZM21.7823 20.7441C21.5957 21.0638 21.2627 21.237 20.9163 21.237C20.7431 21.237 20.5699 21.197 20.41 21.0905L16.2799 18.6257C15.2541 18.0129 14.4947 16.6673 14.4947 15.4816V10.0192C14.4947 9.47298 14.9477 9.02001 15.4939 9.02001C16.0401 9.02001 16.4931 9.47298 16.4931 10.0192V15.4816C16.4931 15.9612 16.8928 16.6673 17.3058 16.9071L21.4359 19.3718C21.9155 19.6516 22.0754 20.2644 21.7823 20.7441Z"
                    fill="#FF7512"/>
            </svg>,
            title: 'مدت زمان سفر'
        },
        {
            id: 6,
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                <path
                    d="M23.2307 23.6482V20.7921C23.2307 19.2772 22.6452 17.8243 21.6029 16.7531C20.5606 15.6819 19.147 15.0801 17.673 15.0801H6.55768C5.08369 15.0801 3.67007 15.6819 2.62781 16.7531C1.58554 17.8243 1 19.2772 1 20.7921V23.6482"
                    fill="#FF7512"/>
                <path
                    d="M23.2307 23.6482V20.7921C23.2307 19.2772 22.6452 17.8243 21.6029 16.7531C20.5606 15.6819 19.147 15.0801 17.673 15.0801H6.55768C5.08369 15.0801 3.67007 15.6819 2.62781 16.7531C1.58554 17.8243 1 19.2772 1 20.7921V23.6482"
                    stroke="#FF7512" stroke-width="2.00077" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M19.3419 10.1701C21.0301 10.1701 22.3986 8.80155 22.3986 7.11337C22.3986 5.42518 21.0301 4.05664 19.3419 4.05664C17.6537 4.05664 16.2852 5.42518 16.2852 7.11337C16.2852 8.80155 17.6537 10.1701 19.3419 10.1701Z"
                    fill="#FF7512" stroke="#FF7512" stroke-width="2.00077" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path
                    d="M12.1163 12.4241C15.1857 12.4241 17.674 9.86674 17.674 6.71206C17.674 3.55738 15.1857 1 12.1163 1C9.04685 1 6.55859 3.55738 6.55859 6.71206C6.55859 9.86674 9.04685 12.4241 12.1163 12.4241Z"
                    fill="#FF7512" stroke="#F0F0F0" stroke-width="0.764182" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path
                    d="M28.0921 21.61V18.754C28.0912 17.4883 27.6813 16.2589 26.9269 15.2586C26.1724 14.2584 25.1161 13.5439 23.9238 13.2275"
                    stroke="#FF7512" stroke-width="1.22269" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            title: 'بازه سنی'
        }
  ]
    
    return (
        <div>
            <SuperAdminNavbar/>
            <div className='w-full flex-col'>

                <div className='w-full flex flex-col mt-7'>
                    <div className='flex py-4 px-12 gap-x-3'>
                        <div className='w-[5px] h-[47px] bg-[#E6AE07] rounded-l-full'></div>
                        <p className='font-kalameh500 text-[32px]'> ویژگی تور </p>
                    </div>
                    <div className=' w-full flex justify-evenly '>
                        <div className='w-full flex flex-wrap gap-x-4 gap-y-7 justify-center'>
                            {
                                data.map((item) => (
                                    <div className='w-[30%] flex flex-col bg-[#F0F0F0] rounded-2xl px-4 py-4 gap-y-2'>
                                        {item.logo}
                                        <p className='font-kalameh500 text-[21px] text-[#A7A8A9]'> {item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col mt-7'>
                    <div className='flex py-4 px-12 gap-x-3'>
                        <div className='w-[5px] h-[47px] bg-[#E6AE07] rounded-l-full'></div>
                        <p className='font-kalameh500 text-[32px]'>جزئیات و تاریخ تور </p>
                    </div>
                    <div className=' w-full flex justify-evenly '>
                        <div className='w-full flex flex-col gap-x-4 gap-y-7 justify-center'>
                            <div className='flex flex-wrap justify-between px-12'>
                                <p className='font-kalameh400 text-[24px]'>نوع تور :</p>
                                <div className='flex justify-between gap-x-7'>
                                    <div className="flex items-center mb-4 gap-x-2">
                                        <label
                                               className=" font-kalameh400 text-[24px] text-gray-900 dark:text-gray-300"> داخلی</label>
                                        <input type="radio" name='test'
                                               className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    </div>
                                    <div className="flex items-center mb-4 gap-x-2">
                                        <label
                                               className="font-kalameh400 text-[24px] text-gray-900 dark:text-gray-300"> خارجی</label>
                                        <input type="radio" name='test'
                                               className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-between px-12'>
                                <p className='font-kalameh400 text-[24px]'>ایاب ذهاب :</p>
                                <div className='flex justify-between gap-x-7 '>
                                    <div className="flex items-center  gap-x-2">
                                        <select  className='bg-[#E9E9E9] rounded-md w-[178px] p-1 ' name="selectedFruit">
                                            <option value="apple">هواپیما</option>
                                            <option value="banana">قطار</option>
                                            <option value="orange">اتوبوس</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-x-2  ">
                                        <select className='bg-[#E9E9E9] rounded-md w-[178px] p-1' name="selectedFruit">
                                            <option value="apple">هواپیما</option>
                                            <option value="banana">قطار</option>
                                            <option value="orange">اتوبوس</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-between px-12'>
                               <div className='flex rounded-full bg-[#E9E9E9]'>
                                   <p className='bg-[#E6AE07] p-2 rounded-full text-white'>شماره پرواز</p>
                                   <input className='rounded-l-full bg-[#E9E9E9] px-2' placeholder='.........'/>
                               </div>
                                <div className='flex rounded-full bg-[#E9E9E9]'>
                                    <p className='bg-[#E6AE07] p-2 rounded-full text-white'>کلاس پرواز</p>
                                    <select className='w-[170px] rounded-l-full bg-[#E9E9E9]' name="selectedFruit">
                                        <option value="apple">هواپیما</option>
                                        <option value="banana">قطار</option>
                                        <option value="orange">اتوبوس</option>
                                    </select>
                                </div>
                            </div>


                            <div className='flex flex-wrap justify-between px-12'>
                                <p className='font-kalameh400 text-[24px]'>مبدا :</p>
                                <div className='flex justify-between gap-x-7 '>
                                    <div className="flex items-center mb-4 gap-x-2">
                                        <select className='bg-[#E9E9E9] w-[427px] h-[41px] rounded-md px-1' name="selectedFruit">
                                            <option value="apple">هواپیما</option>
                                            <option value="banana">قطار</option>
                                            <option value="orange">اتوبوس</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-between px-12'>
                                <div className='flex justify-between gap-x-7 '>
                                    <div className="flex items-center mb-4 gap-x-2">
                                        <input className='bg-[#E9E9E9] w-[540px] h-[41px] rounded-md px-1' placeholder='ظرفیت خود را مشخص کنید' type="number"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-x-4 gap-y-7 justify-center'>
                            <div className='flex flex-col flex-wrap justify-between gap-y-2'>
                               <input  placeholder='تاریخ برگذاری تور را مشخص کنید' className='bg-[#E9E9E9] w-[90%] h-[41px] rounded-md px-1'/>
                               <div className='w-[90%] bg-[#F2F2F2]'>
                                   <Calendar
                                       //@ts-ignore
                                       plugins={[<DatePickerPlugin entryDate={entryDate} exitDate={exitDate} position='top'/>]}
                                       dateSeparator=' تا '
                                       minDate={new DateObject()}
                                       value={values}
                                       //@ts-ignore
                                       onChange={setValues}
                                       range
                                       fixMainPosition={true}
                                       calendar={persian}
                                       locale={persian_fa}
                                       style={{
                                           width : '100%',
                                           backgroundColor : '#F2F2F2'
                                       }}
                                   />

                                  <div className='w-[80%] flex justify-end'> <button className='w-[20%] rounded-md bg-[#533FA1] py-2 text-white '>ثبت تاریخ </button></div>

                               </div>
                                <button className='w-[30%] rounded-md bg-[#533FA1] py-2 text-white '>افزودن تاریخ جدید +</button>

                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-col mt-7 gap-y-7'>
                    <div className='flex py-4 px-12 gap-x-3'>
                        <div className='w-[5px] h-[47px] bg-[#E6AE07] rounded-l-full'></div>
                        <p className='font-kalameh500 text-[32px]'> برنامه ریزی تور </p>
                    </div>
                    <div className='w-[90%] mx-auto flex flex-col gap-x-4 gap-y-7 justify-center '>
                        <p className='font-kalameh400 text-[20px]'>در این قسمت باید خلاصه ای از سفر خود را به
                            کاربر
                            توضیح دهید</p>
                        <textarea
                            className=' placeholder:mt-10 bg-[#F0F0F0] h-[165px] flex justify-start items-start rounded-lg px-3 pt-3 w-full'
                            placeholder='بزرگسال برحسب نفر'
                        />
                        <div className='flex justify-between'>
                            <textarea placeholder='بـرنامه روز اول سفر را به کاربر توضیح دهید'
                                      className='w-[75%] h-[210px] bg-[#F0F0F0] flex justify-start items-start rounded-lg px-3 pt-3'/>
                            <label
                                className='flex flex-col w-[20%] bg-[#CAC7C7] rounded-2xl items-center cursor-pointer'>
                                <p className='font-kalameh400 text-[126px] text-white'>+</p>
                                <p className='font-kalameh400 text-[27px] text-white mt-[-40px] '>بارگذاری تصویر</p>
                                <input type='file' className='hidden'/>
                            </label>
                        </div>
                        <div className='flex justify-between'>
                            <textarea placeholder='بـرنامه روز دوم سفر را به کاربر توضیح دهید'
                                      className='w-[75%] h-[210px] bg-[#F0F0F0] flex justify-start items-start rounded-lg px-3 pt-3'/>
                            <label
                                className='flex flex-col w-[20%] bg-[#CAC7C7] rounded-2xl items-center cursor-pointer'>
                                <p className='font-kalameh400 text-[126px] text-white'>+</p>
                                <p className='font-kalameh400 text-[27px] text-white mt-[-40px] '>بارگذاری تصویر</p>
                                <input type='file' className='hidden'/>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col mt-7'>
                    <div className='flex py-4 px-12 gap-x-3'>
                        <div className='w-[5px] h-[47px] bg-[#E6AE07] rounded-l-full'></div>
                        <p className='font-kalameh500 text-[32px]'> هزینه تور </p>
                    </div>
                    <div className=' w-full flex justify-evenly '>
                        <div className='w-full flex flex-wrap gap-x-4 gap-y-7 justify-center '>
                            <input placeholder='بزرگسال برحسب نفر'
                                   className='bg-[#F0F0F0] w-[45%] h-[72px] rounded-lg px-3'/>
                            <input placeholder='کودکان زیر 12 سال بر حسب نفر'
                                   className='bg-[#F0F0F0] w-[45%] h-[72px] rounded-lg px-3'/>

                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col mt-7 gap-y-7'>
                    <div className='flex py-4 px-12 gap-x-3'>
                        <div className='w-[5px] h-[47px] bg-[#E6AE07] rounded-l-full'></div>
                        <p className='font-kalameh500 text-[32px]'> تصاویر </p>
                    </div>
                    <div className='w-[90%] mx-auto flex gap-x-4 gap-y-7 justify-center '>
                        <div className='w-[30%] flex flex-col justify-center gap-y-2'>
                            <p>ابعاد تصویر باید <b>160*80</b> پیکسل باشد</p>
                            <p>حجم قابل قبول تصویر شما<b> 20 مگابایت</b> میباشد</p>
                            <p>فقط میتوانید <b>چهار تصویر</b> بارگذاری کنید</p>
                        </div>
                        <div className='w-[55%] h-full'>
                            <label
                                className='flex flex-col w-full bg-[#CAC7C7] rounded-2xl items-center cursor-pointer py-24'>
                                <p className='font-kalameh400 text-[126px] text-white'>+</p>
                                <p className='font-kalameh400 text-[27px] text-white mt-[-40px] '>تصویراصلی </p>
                                <input type='file' className='hidden'/>
                            </label>
                        </div>
                        <div className='w-[15%] flex flex-col gap-y-3 '>
                            <label
                                className='flex flex-col w-full bg-[#CAC7C7] rounded-2xl items-center cursor-pointer '>
                                <div className='mb-3'>
                                    <p className='font-kalameh400 text-[80px] text-white'>+</p>
                                    <p className='font-kalameh400 text-[18px] text-white mt-[-40px] '>تصویر2</p>
                                </div>
                                <input type='file' className='hidden'/>
                            </label>
                            <label
                                className='flex flex-col w-full bg-[#CAC7C7] rounded-2xl items-center cursor-pointer'>
                                <div className='mb-3'>
                                    <p className='font-kalameh400 text-[80px] text-white'>+</p>
                                    <p className='font-kalameh400 text-[18px] text-white mt-[-40px] '>تصویر2</p>
                                </div>
                                <input type='file' className='hidden'/>
                            </label>
                            <label
                                className='flex flex-col w-full bg-[#CAC7C7] rounded-2xl items-center cursor-pointer'>
                                <div className='mb-3'>
                                    <p className='font-kalameh400 text-[80px] text-white'>+</p>
                                    <p className='font-kalameh400 text-[18px] text-white mt-[-40px] '>تصویر2</p>
                                </div>
                                <input type='file' className='hidden'/>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-20">
                    <Button styles={'w-[15%] rounded-md bg-[#000]'}>ثبت اطلاعات</Button>
                </div>
            </div>
        </div>
    )
}

export default SuperAdmin