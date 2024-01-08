'use client'
import React, {useState} from 'react'
import Comments from "@/app/components/Comments";
import {useQuery} from "@tanstack/react-query";
import {tripTourApi} from "@/axios-instances";
import Loading from "@/app/components/Loading";
import SelectDropDown from "@/app/components/dropDown/SelectDropDown";

const CommentsPage = () => {
    const [selectedVilla, setSelectedVilla] = useState('ویلا مورد نظر')

    const handleSwitchVilla = (state:string,city:string) => {
        setSelectedVilla(`${state} - ${city}`)
    }
    const fetchVillaComments = async (): Promise<VillaDetails[]> => {
        const res = await tripTourApi.get('users/getUserPlaces', {
            headers: {
                Authorization: `Bearer 167|9I8FqDwFDx1ndZAykM6tYlIBB3S6XtS8B0l89iff07ce1798`
            }
        })
        return res.data['user places']
    }
    const {data, isLoading} = useQuery({
        queryKey: ['villaDetail'],
        queryFn: fetchVillaComments
    })
    if (isLoading) return <Loading/>
    if (!data) return <p>Something went wrong!</p>
    return (
        <div className='w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto pt-[10rem]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[30px] font-kalameh400'><span className='font-kalameh700'>دیدگاه ها</span> درباره
                    شما
                </h1>
                <SelectDropDown label={selectedVilla}
                                styles={'relative bg-[#465297] text-white px-4 py-2 cursor-pointer rounded-[8px] flex flex-col items-center'}
                                dropDownStyles={'bg-[#465297] absolute w-full top-7 rounded-bl-[8px] rounded-br-[8px] py-2 px-4 text-[12px]'}
                                labelStyles={'text-[10px] sm:text-[13px]'}
                >
                    <ul className='flex flex-col gap-y-1'>
                        {data.map((item,index) => {
                            return (
                                <li className='hover:text-[#FFE712]'
                                    onClick={() => handleSwitchVilla(item.address.state,item.address.city,)}>{item.address.state} - {item.address.city}</li>
                            )
                        })}
                    </ul>
                </SelectDropDown>
            </div>
            {/*<Comments comments={data.} reply/>*/}
        </div>
    )
}

export default CommentsPage
