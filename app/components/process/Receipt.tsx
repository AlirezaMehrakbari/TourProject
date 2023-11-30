import ReceiptPicture from '@/public/images/ReceiptPicture.png'
import Image from "next/image";
import Stepper from "@/app/components/Stepper";

const Receipt = () => {
    return (
        <div className='bg-[#F5F5F5] min-h-screen flex flex-col items-center'>
            <Stepper/>
            <div className='flex items-center w-fit border-[1px] rounded-[9px] px-4 my-2'>
                <p className='text-[25.6px]'>دانلود بلیط</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <path d="M17.6204 12.7793V16.4621C17.6204 16.9505 17.4264 17.4188 17.0811 17.7642C16.7358 18.1095 16.2674 18.3035 15.779 18.3035H2.88925C2.40088 18.3035 1.93251 18.1095 1.58718 17.7642C1.24186 17.4188 1.04785 16.9505 1.04785 16.4621V12.7793" stroke="black" strokeWidth="1.8414" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.73047 8.17578L9.33396 12.7793L13.9375 8.17578" stroke="black" strokeWidth="1.8414" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33398 12.7789V1.73047" stroke="black" strokeWidth="1.8414" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className='bg-white mx-auto w-[50%] rounded-[10px] py-8 shadow-md'>
                <div className='relative w-[80%] mx-auto'>
                    <Image
                        className='rounded-[78px] h-[288px] object-cover'
                        src={ReceiptPicture}
                        alt={'Receipt Picture'}
                    />
                    <div
                        className='absolute bg-[#1F2D80] text-white text-[27.8px] font-kalameh500 rounded-[82px] py-2 px-4 border-t-[2px] border-white bottom-[-18px] inset-x-0 w-fit mx-auto'>
                        تــور شما با <span className='text-orange font-kalameh700'>موفقیت</span> خریداری شــد
                    </div>
                </div>

                <div className='flex item-center justify-between pt-[54px] px-8'>
                    <div>
                        <div className='text-[25.5px] flex items-center'>
                            <p className='text-[#777575]'>به نام :</p>
                            <p>امیرمحمدی</p>
                        </div>
                        <div className='text-[25.5px] flex items-center'>
                            <p className='text-[#777575]'>مدت تور :</p>
                            <p>3 روزه</p>
                        </div>
                        <div className='text-[25.5px] flex items-center'>
                            <p className='text-[#777575]'>مبلغ پرداختی : </p>
                            <p>1.800.000</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='text-[25.5px] flex items-center'>
                                <p className='text-[#777575]'>تاریخ رفت : </p>
                                <p>17 آبان ماه</p>
                            </div>
                            <div className='text-[25.5px] flex items-center'>
                                <p className='text-[#777575]'>تاریخ برگشت : </p>
                                <p>17 آبان ماه</p>
                            </div>
                            <div className='text-[25.5px] flex items-center'>
                                <p className='text-[#777575]'>تعداد مسافران : </p>
                                <p>3 نفر</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Receipt
