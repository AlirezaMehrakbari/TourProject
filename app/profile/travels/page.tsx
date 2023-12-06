'use client'
import Button from '@/app/components/Button'
import ButtnosAdmin from '@/app/components/profile/ProfileNavbar'
import Reserve from '@/app/components/profile/Reserve'
import Sidebar from '@/app/components/profile/Sidebar'
import Link from 'next/link'

const Travels = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col'>
            <div className="py-8">
                <ButtnosAdmin />
            </div>
            <h1 className="font-kalameh700 mr-[338px]">سفر های من</h1>
            <div className="w-[full]  flex flex-row-reverse justify-between pb-10 pt-7">
                <div className="w-[70%] mr-[70px] mx-auto flex flex-col rounded-md  py-8">
                    <div className='flex w-[40%] border-b border-[#D3D3D3]  '>
                        <Link href={'./travels'}>
                        
                        <p className='pb-2 font-kalameh500 text-[#000] border-b-2'>اخرین رزرو</p>
                        </Link>
                        <Link href={'./travels/prevReserve'}>
                        <p className='mx-7 pb-2 font-kalameh500 text-[#8B8B8B] text-[15px] '> رزروهای قبلی</p>
                        </Link>
                    </div>
                    <div className='flex w-[75%] border-b border-[#D3D3D3] mx-4 mt-[77px] '>
                        <p className='pb-4 font-kalameh400 text-[18.97] text-[#000]'>جزئیات اخرین رزرو شما</p>
                    </div>
                    <Reserve />
                </div>
                <Sidebar />
            </div>

        </div>
    )
}

export default Travels