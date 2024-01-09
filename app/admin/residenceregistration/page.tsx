'use client'
import React, {useState} from 'react'
import Logo from "@/app/components/navbar/Logo";
import Button from "@/app/components/Button";
import {useRouter} from "next/navigation";
import {tripTourApi} from "@/axios-instances";
import {toast} from "react-toastify";

const ResidenceRegistrationPage = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState('')

    const handleAddVilla = (e:any) => {
        e.preventDefault()

        tripTourApi.post('places/store', {
            title
        },{
            headers : {
                Authorization : `Bearer 174|CjRnDOEe9mf2N9xzOOT17zC9IAxw3rTil882RTEO88f67a18`
            }
        }).then(res=>{
            router.push(`/admin/residenceregistration/${res.data.data.id}`)
        }).catch(error=>{
            toast.error('مشکلی رخ داده است')
        })
    }
    return (
        <div
            className={`translate duration-300 fixed bg-neutral-800/70 inset-0 z-50 overflow-y-hidden flex justify-center items-center`}>
            <div
                className="animate-openModal relative inset-x-0 mx-auto w-[95%] md:w-[80%] bg-[#FFF] rounded-[5px] lg:w-[40%]">
                <button
                    onClick={() => {
                        router.back()
                        toast.dismiss()
                    }
                    }
                    className="btn btn-sm btn-ghost absolute left-6 top-6 bg-[#F00] text-white flex justify-center items-center">✕
                </button>
                <form
                    onSubmit={handleAddVilla}
                    className='flex flex-col items-center py-12 w-[45%] mx-auto'>
                    <Logo width={'w-[90%]'}/>
                    <h2 className='text-[21px] font-kalameh500 pt-10'>نوع اقامتگاه خود را مشخص کنید</h2>
                    <div
                        className={`px-2 bg-[#EDECEC] py-3 rounded-[5px] mt-4 w-full `}>
                        <input
                            className={`bg-transparent outline-0`}
                            type='text'
                            placeholder='عنوان اقامتگاه '
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <Button type={'submit'}
                            styles='w-full text-[20px] font-kalameh700 rounded-[5px] py-6 mt-3'>
                        {isLoading ? <span className="loading loading-ring loading-md"></span> : <span>ثبت</span>}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ResidenceRegistrationPage
