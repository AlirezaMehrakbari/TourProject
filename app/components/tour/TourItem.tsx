import Link from "next/link";

export type TourItemProps = {
    id:number
    origin: string,
    destination: string,
    price: string
}
const TourItem: React.FC<TourItemProps> = ({
                                               id,
                                               origin,
                                               destination,
                                               price
                                           }) => {
    return (
        <Link href={`/tour/${id}`}>
        <div
             className='w-full flex flex-col lg:flex-row justify-between bg-[#fafafa] rounded-lg mx-auto px-8 py-4 hover:shadow-xl cursor-pointer transition'>
            <div className='pb-4'>
                <h1 className='font-kalameh500 text-[20.6px] text-[#000] pb-2'>تور
                    {origin}-{destination}
                </h1>
                <div className='grid sm:grid-cols-2'>
                    <div>
                        <p>2 شب اقامت</p>
                        <p>17 آبان - 20 آبان</p>
                    </div>
                    <div>
                        <p>رفت : هواپیما - برگشت : هواپیما</p>
                        <p>تور مسافرتی ندا سفر</p>
                    </div>
                </div>
            </div>

            <span className='border-[1px]  border-cblue'></span>

            <div className='grid justify-items-center text-center pt-4'>
                <div className='text-cblue text-[20.2px] font-kalameh700 w-full'>
                    قیمت :
                    <span>{price} تومان</span>
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
