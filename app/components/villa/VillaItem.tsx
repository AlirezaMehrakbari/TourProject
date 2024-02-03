import React, {useEffect, useState} from 'react'
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {useAppSelector} from "@/app/redux/store";
import {tripTourApi} from "@/axios-instances";
import {toast} from "react-toastify";
import formatCurrency from "@/app/utils/FormatCurrency";


export type VillaItemProps = {
    id: number
    image: string,
    title: string,
    Satisfaction: number,
    opinion: number,
    province: string,
    city: string,
    price: string,
    initialFavorite: boolean
}

const VillaItem: React.FC<VillaItemProps> = ({
                                                 image,
                                                 title,
                                                 opinion,
                                                 Satisfaction,
                                                 province,
                                                 city,
                                                 price,
                                                 id,
                                                 initialFavorite
                                             }) => {
    const userSession = useAppSelector(state => state.userSlice)
    const [isFavorite, setIsFavorite] = useState(initialFavorite)
    const handleFavorite = () => {
        setIsFavorite(prev => !prev)
        tripTourApi.post(`users/manageFavoritePlaces/${id}`).then(res => {
            if (res.data.message === 'insert to favorites') {
                toast.success('به لیست علاقه مندی افزوده شد.')
            } else {
                toast.warning('از لیست علاقه مندی حذف شد.')
            }
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="flex flex-col hover:text-[#000] group">
            <div className='relative'>
                <Link href={`/reserve/place/${id}`}>
                    <div className='h-[250px]'>
                        <Image
                            className='rounded-[12px] object-cover object-center shadow-md hover:shadow-lg cursor-pointer h-[250px] '
                            src={image}
                            alt={title}
                            fill={true}
                        />
                    </div>
                </Link>

                {userSession.value.isLoggedIn ?
                    isFavorite ?
                        (
                            <svg className='absolute left-[15px] top-[18px] cursor-pointer' onClick={handleFavorite}
                                 xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 23 21"
                                 fill="none">
                                <path
                                    d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
                                    fill="#EC0606" stroke="#EC0606" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>

                        ) : (
                            <svg className='absolute left-[15px] top-[18px] cursor-pointer' onClick={handleFavorite}
                                 xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 23 21" fill="none">
                                <path
                                    d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
                                    fill="black" fillOpacity="0.3" stroke="white" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                        )
                    : ''
                }


            </div>
            <Link href={`/reserve/place/ ${id}`}>
                <div className="flex flex-row justify-between py-2 px-[2.98px]">
                    <div className="flex text-[16.5px]">
                        <p>{opinion}</p>
                        <p className="px-1">دیدگاه</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="text-[16.5px] px-1">
                            {Satisfaction}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path
                                d="M8.5 1L10.8175 5.93691L16 6.73344L12.25 10.5741L13.135 16L8.5 13.4369L3.865 16L4.75 10.5741L1 6.73344L6.1825 5.93691L8.5 1Z"
                                fill="#FFF500" stroke="#FFF500" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    </div>

                </div>
                <h1 className='font-kalameh500 text-[23px] text-[#000]'>{title} </h1>
                <div
                    className="flex flex-row py-2 px-[2.98px] text-[#706E6E] group-hover:text-[#000] group-hover:font-kalameh500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path
                            d="M16.625 7.91699C16.625 13.4587 9.5 18.2087 9.5 18.2087C9.5 18.2087 2.375 13.4587 2.375 7.91699C2.375 6.02732 3.12567 4.21505 4.46186 2.87886C5.79806 1.54266 7.61033 0.791992 9.5 0.791992C11.3897 0.791992 13.2019 1.54266 14.5381 2.87886C15.8743 4.21505 16.625 6.02732 16.625 7.91699Z"
                            stroke="#9D9A9A" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M9.5 10.292C10.8117 10.292 11.875 9.22867 11.875 7.91699C11.875 6.60532 10.8117 5.54199 9.5 5.54199C8.18832 5.54199 7.125 6.60532 7.125 7.91699C7.125 9.22867 8.18832 10.292 9.5 10.292Z"
                            stroke="#9D9A9A" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="px-1 text-[14px] ">{province} | </p>
                    <p className="px-1 text-[14px] "> {city}</p>
                </div>

                <div
                    className="flex flex-row justify-between pb-[52px] px-[2.98px] text-[#706E6E] group-hover:text-[#000] group-hover:font-kalameh500">
                    <div className="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                            <path d="M7 1V23" stroke="#9D9A9A" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M12 5H4.5C3.57174 5 2.6815 5.36875 2.02513 6.02513C1.36875 6.6815 1 7.57174 1 8.5C1 9.42826 1.36875 10.3185 2.02513 10.9749C2.6815 11.6313 3.57174 12 4.5 12H9.5C10.4283 12 11.3185 12.3687 11.9749 13.0251C12.6313 13.6815 13 14.5717 13 15.5C13 16.4283 12.6313 17.3185 11.9749 17.9749C11.3185 18.6313 10.4283 19 9.5 19H1"
                                stroke="#9D9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-[14px]">قیمت برای هر شب</p>
                    </div>

                    <div className="flex flex-row">
                        <p className="text-[14px] font-kalameh400 text-[#706E6E] group-hover:text-[#000] group-hover:font-kalameh500">{formatCurrency(+price)} تومان</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default VillaItem
