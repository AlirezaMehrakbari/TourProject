'use client'
import React from 'react'
import {tripTourApi} from "@/axios-instances";
import {useMutation, useQuery} from "@tanstack/react-query";
import Loading from "@/app/components/Loading";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

const ResidencesPage = () => {
    const router = useRouter()
    const fetchUserPlaces = async (): Promise<Villa[]> => {
        const res = await tripTourApi.get('users/getUserPlaces', {
            headers: {
                Authorization: `Bearer 164|aS3cb4A7TCPR6elLOXgI7g4daHq4foQCg07UB8gt00b95389`
            }
        })
        return res.data['user places']
    }
    const deleteVilla = async (id: number) => {
        const res = await tripTourApi.delete(`places/delete/${id}`, {
            headers: {
                Authorization: `Bearer 164|aS3cb4A7TCPR6elLOXgI7g4daHq4foQCg07UB8gt00b95389`
            }
        })
        return res.data
    }


    const {data, isLoading, refetch} = useQuery({
        queryKey: ['userPlaces'],
        queryFn: fetchUserPlaces
    })
    const deleteVillaMutation = useMutation({
        mutationFn: (id: number) => deleteVilla(id),
        onSuccess: () => refetch(),
        onSettled: () => toast.success('ویلا مورد نظر حذف شد.'),
        onError: () => toast.error('مشکلی رخ داده لطفا دوباره سعی کنید.')
    })
    if (isLoading) return <Loading/>
    if (!data) return null
    return (
        <div className='w-[70%] mx-auto flex flex-col justify-center items-center pt-[10rem]'>
            <div className='w-full flex justify-between items-center'>
                <div className='w-[40%] relative flex items-center'>
                    <input
                        className='bg-[#F9F9F9] rounded-[10px] placeholder:font-kalameh400 placeholder:text-[#979696] outline-none px-4 py-3 w-full shadow-md placeholder:'
                        type={'text'}
                        placeholder={'عنوان اقامتگاه را وارد کنید'}
                    />
                    <button
                        className='absolute left-0 text-[20px] font-kalameh500 bg-[#242A50] text-[#FFF] py-[10px] px-8 rounded-lg'>فیلتر
                    </button>
                </div>
                <button className='text-[20px] font-kalameh500 bg-[#242A50] text-[#FFF] py-[10px] px-8 rounded-lg'>
                    افزودن اقامتگاه
                </button>
            </div>
            <table className='w-full text-center mt-10'>
                <thead>
                <tr className='text-white bg-[#3D4576] text-[12px] sm:text-[23px]'>
                    <th className='py-8 text-[14px] font-kalameh500 rounded-tr-xl'>
                        استان
                    </th>
                    <th className='text-[14px] font-kalameh500'>
                        شهر
                    </th>
                    <th className='text-[14px] font-kalameh500'>
                        آدرس
                    </th>
                    <th className='text-[14px] font-kalameh500'>
                        حذف
                    </th>
                    <th className='text-[14px] font-kalameh500'>
                        ویرایش
                    </th>
                    <th className='text-[14px] font-kalameh500 rounded-tl-xl'>
                        مشاهده
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map(villa => {
                    return (
                        <tr className='even:bg-[#F0F0F0] odd:bg-[#E9E4E4]'>
                            <td className='py-4'>{villa.address?.state}</td>
                            <td>{villa.address?.city}</td>
                            <td>{villa.address?.alley} {villa.address?.street}</td>
                            <td>
                                <div
                                    onClick={() => deleteVillaMutation.mutate(villa.id)}
                                    className='flex justify-center items-center cursor-pointer group'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            className='group-hover:stroke-[#f44336]'
                                            d="M1 3.7998H2.55556H15" stroke="black" strokeWidth="0.777778"
                                            strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            className='group-hover:stroke-[#f44336]'
                                            d="M13.4436 3.8V13.6C13.4436 13.9713 13.2797 14.3274 12.988 14.5899C12.6962 14.8525 12.3006 15 11.888 15H4.11024C3.69768 15 3.30202 14.8525 3.0103 14.5899C2.71858 14.3274 2.55469 13.9713 2.55469 13.6V3.8M4.88802 3.8V2.4C4.88802 2.0287 5.05191 1.6726 5.34363 1.41005C5.63536 1.1475 6.03102 1 6.44358 1H9.55469C9.96725 1 10.3629 1.1475 10.6546 1.41005C10.9464 1.6726 11.1102 2.0287 11.1102 2.4V3.8"
                                            stroke="black" strokeWidth="0.777778" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </td>
                            <td>
                                <div
                                    onClick={()=>router.push(`/admin/residenceregistration/${villa.id}`)}
                                    className='flex justify-center items-center cursor-pointer group'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                         fill="none">
                                        <path
                                            className='group-hover:stroke-orange'
                                            d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40914L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z"
                                            stroke="black" strokeWidth="0.655624" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </td>
                            <td>
                                <div className='flex justify-center items-center cursor-pointer group'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            className='group-hover:stroke-orange'
                                            d="M4.88867 1H14.9992" stroke="black" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            className='group-hover:stroke-orange'
                                            d="M4.88867 8H14.9992" stroke="black" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            className='group-hover:stroke-orange'
                                            d="M4.88867 15H14.9992" stroke="black" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            className='group-hover:stroke-orange'
                                            d="M1 1H1.00707" stroke="black" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            className='group-hover:stroke-orange'
                                            d="M1 8H1.00707" stroke="black" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            className='group-hover:stroke-orange'
                                            d="M1 15H1.00707" stroke="black" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default ResidencesPage
