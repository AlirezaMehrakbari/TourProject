'use client'
import DropDown from '@/app/components/navbar/DropDown'
import ButtnosAdmin from '@/app/components/profile/ButtnosAdmin'
import Reserve from '@/app/components/profile/Reserve'
import Sidebar from '@/app/components/profile/Sidebar'
import Link from 'next/link'


const prevReserve = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col'>
            <div className="py-8">
                <ButtnosAdmin />
            </div>
            <h1 className="font-kalameh700 mr-[338px]">سفر های من</h1>
            <div className="w-[full]  flex flex-row-reverse justify-between pb-10 pt-7">
                <div className="w-[70%] mr-[70px] mx-auto flex flex-col rounded-md  py-8">
                    <div className='flex w-[100%] border-b border-[#D3D3D3]  '>
                        <Link href={'./'}>
                            <p className='pb-2 font-kalameh500 text-[#8B8B8B] text-[15px] '>اخرین رزرو</p>
                        </Link>

                        <p className='mx-7 pb-2 font-kalameh500 text-[#000] border-b-2'> رزروهای قبلی</p>

                    </div>
                    <div className='flex justify-end my-3 '>
                        <DropDown label={'دسته بندی براساس ماه'}
                            styles='w-[160px] text-[12.3px] font-kalameh500 rounded-[7.6px] flex item-center gap-x-3 bg-[#465297] p-1'
                            onClick={() => {
                            }}>

                            <div
                                className=' bg-[#465297] text-white py-4 px-2 w-[160px] rounded-br-[7.6px] rounded-bl-[7.6px] text-[15px] p-1'>
                                <ul className='flex flex-col gap-y-2 justify-center items-center '>
                                    <li className='hover:text-[#2C2AAF] cursor-pointer '>مهر1402</li>
                                    <li className='hover:text-[#2C2AAF] cursor-pointer'>شهریور1402</li>
                                    <li className='hover:text-[#2C2AAF] cursor-pointer'>مرداد1402</li>
                                    <li className='hover:text-[#2C2AAF] cursor-pointer'>تیر1402</li>
                                    <li className='hover:text-[#2C2AAF] cursor-pointer'>خرداد1402</li>
                                </ul>
                            </div>
                        </DropDown>
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
                <Sidebar />
            </div>

        </div>

    )
}

export default prevReserve