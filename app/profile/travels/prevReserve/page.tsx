import Reserve from '@/app/components/profile/Reserve'
import Sidebar from '@/app/components/profile/Sidebar'
import Link from 'next/link'
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";


const prevReserve = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col'>
            <h1 className="font-kalameh700 mr-[338px]">سفر های من</h1>
            <div className="w-[full]  flex flex-row-reverse justify-between pb-10 pt-7">
                <div className="w-[70%] mr-[70px] mx-auto flex flex-col rounded-md  py-8">
                    <div className='flex w-[100%] border-b border-[#D3D3D3]  '>
                        <Link href={'./'}>
                            <p className='pb-2 font-kalameh500 text-[#8B8B8B] text-[15px] '>اخرین رزرو</p>
                        </Link>

                        <p className='mx-7 pb-2 font-kalameh500 text-[#000] border-b-2'> رزروهای قبلی</p>

                    </div>
                    <div className='flex justify-end py-3'>
                        <SelectDropDown label={'دسته بندی براساس ماه'}
                                        styles={'relative bg-[#465297] text-white px-4 py-2 cursor-pointer rounded-[8px] flex flex-col items-center'}
                                        dropDownStyles={'bg-[#465297] absolute w-full bottom-[-8.5rem] rounded-bl-[8px] rounded-br-[8px] py-2 px-4 text-[13px]'}
                                        labelStyles={'text-[10px] sm:text-[13px]'}>
                                <ul className='flex flex-col gap-y-2 justify-center items-center'>
                                    <li className='cursor-pointer hover:text-[#FFE712]'>مهر1402</li>
                                    <li className='cursor-pointer hover:text-[#FFE712]'>شهریور1402</li>
                                    <li className='cursor-pointer hover:text-[#FFE712]'>مرداد1402</li>
                                    <li className='cursor-pointer hover:text-[#FFE712]'>تیر1402</li>
                                    <li className='cursor-pointer hover:text-[#FFE712]'>خرداد1402</li>
                                </ul>
                        </SelectDropDown>
                    </div>
                    <div className='flex flex-col'>

                        <div className='flex w-[75%] border-b border-[#D3D3D3] mx-4 mt-[77px] '>
                            <p className='pb-4 font-kalameh400 text-[18.97] text-[#000]'>جزئیات رزرو شما</p>

                        </div>
                        <Reserve />

                        <div className='flex w-[75%] border-b border-[#D3D3D3] mx-4 mt-[77px] '>
                            <p className='pb-4 font-kalameh400 text-[18.97] text-[#000]'>جزئیات رزرو شما</p>

                        </div>
                        <Reserve />

                        <div className='flex w-[75%] border-b border-[#D3D3D3] mx-4 mt-[77px] '>
                            <p className='pb-4 font-kalameh400 text-[18.97] text-[#000]'>جزئیات رزرو شما</p>

                        </div>
                        <Reserve />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default prevReserve