import Link from "next/link";
import useStep from "@/app/hooks/useStep";
import formatCurrency from "@/app/utils/FormatCurrency";
import DateObject from "react-date-object";
import {getAllDatesInRange} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export type TourItemProps = {
    id: number
    origin: string,
    destination: string,
    price: number,
    startDateTour: string,
    endDateTour: string,
    vehicle: {
        come: string,
        comeBack: string
    }
    tourManager: string
}
const TourItem: React.FC<TourItemProps> = ({
                                               id,
                                               origin,
                                               destination,
                                               price,
                                               startDateTour,
                                               endDateTour,
                                               vehicle,
                                               tourManager
                                           }) => {
    const startDate = new DateObject({date: (startDateTour)}).convert(persian, persian_fa)
    const endDate = new DateObject({date: (endDateTour)}).convert(persian, persian_fa)
    const durationTour = getAllDatesInRange([startDate, endDate])
    return (
        <Link href={`/tour/${id}`}>
            <div
                className='w-full flex flex-col lg:flex-row justify-between bg-[#fafafa] rounded-lg mx-auto px-8 py-4 hover:shadow-xl cursor-pointer transition'>
                <div className='pb-4'>
                    <h1 className='font-kalameh500 text-[20.6px] text-[#000] pb-2'>تور
                        {origin} - {destination}
                    </h1>
                    <div className='grid sm:grid-cols-2'>
                        <div>
                            <p>{durationTour.length} شب اقامت</p>
                            <p>{startDate.day} {startDate.month.name} - {endDate.day} {endDate.month.name}</p>
                        </div>
                        <div>
                            <p>رفت : {vehicle.come} - برگشت : {vehicle.comeBack}</p>
                            <p>تور مسافرتی {tourManager}</p>
                        </div>
                    </div>
                </div>

                <span className='border-[1px]  border-cblue'></span>

                <div className='grid justify-items-center text-center pt-4'>
                    <div className='text-cblue text-[20.2px] font-kalameh700 w-full'>
                        قیمت :
                        <span>{formatCurrency(price)} تومان</span>
                    </div>
                    <div
                        className='flex items-center bg-[#C8B616] text-white text-[17.8px] font-kalameh500 rounded-br-lg rounded-bl-lg px-2'>
                        مشاهده تاریخ های تور
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path d="M5.53271 8.2959L11.0654 13.8285L16.598 8.2959" stroke="white" strokeWidth="1.84422"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TourItem
