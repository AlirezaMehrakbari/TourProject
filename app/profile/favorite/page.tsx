'use client'
import Image from "next/image";
import {CiLocationOn} from "react-icons/ci";
import testImage from '@/public/images/HomePic.png'
import {TfiMoney} from "react-icons/tfi";
import {useQuery} from "@tanstack/react-query";
import {tripTourApi} from "@/axios-instances";
import Loading from "@/app/components/Loading";
import {useAppSelector} from "@/app/redux/store";

const Favorite = () => {
    const userSession = useAppSelector(state => state.userSlice)
    const fetchFavoritePlace = async (): Promise<Villa[]> => {
        const res = await tripTourApi.get('users/getFavoritePlaces', {
            headers: {
                Authorization: `Bearer ${userSession.value.token}`
            }
        })
        return res.data['user favorites']
    }

    const {data, isLoading} = useQuery({
        queryKey: ['favoritePlace'],
        queryFn: () => fetchFavoritePlace()
    })
    if (isLoading) return <Loading/>
    if (!data) return <p>Not found!!</p>
    return (
        <div className='md:w-[60%] px-4 items-center w-full flex flex-col justify-center'>
            <div className="w-full flex flex-col justify-b etween pb-10 pt-7 md:flex-row gap-x-8">
                <div className='w-full mx-auto flex flex-col rounded-md  md:mt-[-38px]'>
                    <h1 className="font-kalameh700 pb-12 max-md:pt-10 max-md:text-center">مورد علاقه ها</h1>
                    <div
                        className="w-full mx-auto flex flex-col items-center rounded-md justify-between md:mt-[-2rem] md:flex md:flex-row md:flex-wrap md:w-[100%]">

                        {
                            data.map((item) => (
                                <div
                                    className="w-[60%] flex flex-col text-[#706E6E] hover:text-[#000] md:w-[50%] lg:w-[32%] px-1 ">
                                    <Image
                                        className='rounded-md w-full max-h-[160px] object-cover object-center shadow-md hover:shadow-lg cursor-pointer '
                                        src={testImage}
                                        alt={'none'}
                                    />
                                    <div className="flex flex-row justify-between py-2 px-[2.98px]">
                                        <div className="flex flex-row justify-center">
                                            <p className="text-[9.85px]">{item.rating_comment.totalComments}</p>
                                            <p className="text-[9.85px] px-2">دیدگاه</p>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <p className="text-[9.85px] px-1">
                                                {Math.round(item.rating_comment.averageRating)}
                                            </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                                                 viewBox="0 0 11 11" fill="none">
                                                <path
                                                    d="M5.8182 1.0918L7.1999 4.03519L10.2897 4.51009L8.05396 6.79992L8.58159 10.0348L5.8182 8.50671L3.0548 10.0348L3.58244 6.79992L1.34668 4.51009L4.4365 4.03519L5.8182 1.0918Z"
                                                    fill="#FFF500" stroke="#FFF500" strokeWidth="1.1924"
                                                    strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>

                                    </div>
                                    <h1 className='font-kalameh500 text-[13.72px] text-[#000] px-[2.98px]'>{item.title} </h1>
                                    <div className="flex flex-row py-2 px-[2.98px]">
                                        <CiLocationOn/>
                                        <p className="px-1 text-[8.372px] ">{item.address.state} | </p>
                                        <p className="px-1 text-[8.372px] "> {item.address.city}</p>
                                    </div>

                                    <div className="flex flex-row justify-between pb-[52px] px-[2.98px]">
                                        <div className="flex flex-row">
                                            <TfiMoney/>
                                            <p className="text-[8.372px]">قیمت برای هر شب</p>
                                        </div>

                                        <div className="flex flex-row">
                                            <p className="text-[8.372px] font-kalameh400 ">{item.pricePerNight} تومان</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Favorite


