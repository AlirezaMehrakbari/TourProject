'use client'
import Button from "@/app/components/Button";
import Sidebar from "../../components/profile/Sidebar";
<<<<<<< HEAD
import ProfileNavbar from "../../components/profile/ProfileNavbar";
=======
import ButtnosAdmin from "../../components/profile/ProfileNavbar";
>>>>>>> main
import imageee from '../../../public/images/TakhfifPicture1.png'
import Image from "next/image";
import { IoStarHalfOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

import { TfiMoney } from "react-icons/tfi";
const Favorite = () => {
    const villa = [
        {
            id: 1,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 2,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 3,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 4,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 5,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 6,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 7,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 8,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
        {
            id: 9,
            image: imageee,
            title: 'اجاره ویلا دو خواب فول امکانات',
            province: 'استان گیلان',
            city: 'آستارا',
            price: 1500000,
            opinion: 20,
            Satisfaction: 5.7
        },
    ]
    return (
        <div className='w-[90%] mx-auto flex flex-col justify-center '>
            <div className="py-8 pb-14">
            <ProfileNavbar />
            </div>

            <h1 className="font-kalameh700 mr-[295px]">مورد علاقه ها</h1>
            <div className="w-full flex flex-row-reverse justify-end pb-10 pt-7">

                <div className="w-[61%] h-[100%] mr-5 flex flex-row flex-wrap justify-around rounded-md 
                 ">
                    {
                        villa.map((item) => (
                            <div className="w-[220.595] flex flex-col text-[#706E6E] hover:text-[#000]">
                                <Image
                                    className='rounded-md w-[219px] max-h-[160px] object-cover object-center shadow-md hover:shadow-lg cursor-pointer '
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className="flex flex-row justify-between py-2 px-[2.98px]">
                                    <div className="flex flex-row">
                                        <p className="text-[9.85px]">{item.opinion}</p>
                                        <p className="text-[9.85px] px-2">دیدگاه</p>
                                     </div>
                                    <div className="flex flex-row items-center">
                                        <p className="text-[9.85px] px-1">
                                            {item.Satisfaction}
                                        </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path d="M5.8182 1.0918L7.1999 4.03519L10.2897 4.51009L8.05396 6.79992L8.58159 10.0348L5.8182 8.50671L3.0548 10.0348L3.58244 6.79992L1.34668 4.51009L4.4365 4.03519L5.8182 1.0918Z" fill="#FFF500" stroke="#FFF500" stroke-width="1.1924" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                </div>
                                <h1 className='font-kalameh500 text-[13.72px] text-[#000] px-[2.98px]'>{item.title} </h1>
                                <div className="flex flex-row py-2 px-[2.98px]">
                                    <CiLocationOn />
                                    <p className="px-1 text-[8.372px] ">{item.province} | </p>
                                    <p className="px-1 text-[8.372px] "> {item.city}</p>
                                </div>

                                <div className="flex flex-row justify-between pb-[52px] px-[2.98px]">
                                    <div className="flex flex-row">
                                        <TfiMoney />
                                        <p className="text-[8.372px]">قیمت برای هر شب</p>
                                    </div>

                                    <div className="flex flex-row">
                                        <p className="text-[8.372px] font-kalameh400 ">{item.price} تومان</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Sidebar />

            </div>

        </div>
    )
}

export default Favorite