import React from 'react'
import Footer from "@/app/components/footer/footer";
import Button from "@/app/components/Button";
import useStep from "@/app/hooks/useStep";
import Stepper from "@/app/components/Stepper";

type ConfirmInformationProps = {
    isVilla?: boolean
}
const ConfirmInformation: React.FC<ConfirmInformationProps> = ({isVilla}) => {
    const step = useStep()
    return (
        <div>
            <Stepper isVilla={isVilla}/>
            <div className='w-[60%] bg-[#FAFAF9] rounded-[14px] mx-auto mt-[10rem] shadow-md '>
                <div className='p-4'>
                    <table className='text-center w-full'>
                        <tbody className='text-center'>
                        {isVilla ? (
                            <>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>نوع
                                        اقامتگاه
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>ویلایــی</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>مقصد</td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>گیلان - آسـتارا</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>
                                        متـراژ
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>250 متر</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>
                                        تعداد خواب
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>3 خوابه</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>
                                        ظرفیت
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>حداکثر 10 نفر</td>
                                </tr>
                                <tr>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>
                                        تاریخ سفر
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>7 آبان - 9 آبان</td>
                                </tr>
                            </>
                        ) : (
                            <>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>مبدا</td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>تهران</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>مقصد</td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>استانبول</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>تور
                                        مسافرتی
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>تور سفیـران</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>تاریخ
                                        سفر
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>17 - 20 آبان</td>
                                </tr>
                                <tr className='border-b-[1px] border-[#D2D2D2]'>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>شماره
                                        پرواز
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>AR 5046</td>
                                </tr>
                                <tr>
                                    <td className='border-l-[1px] border-[#D2D2D2]  text-[20px] font-kalameh400 pb-6 pt-6'>کلاس
                                        پروازی
                                    </td>
                                    <td className='text-[20px] font-kalameh500 pr-20 pb-6 pt-6'>اکونومـی</td>
                                </tr>
                            </>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Button
                styles='text-[28px] font-kalameh500 mx-auto px-8 py-6 rounded-[16px] mt-20'
                onClick={step.nextStep}
            >
                تایید اطلاعات سفر
            </Button>
            <Footer/>
        </div>
    )
}

export default ConfirmInformation
