import React from 'react'
import Logo from "@/app/components/navbar/Logo";
import Image from "next/image";
import EarthLogo from "@/public/icons/EarthLogo.svg";

const Loading = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='relative w-fit'>
            <svg className='animate-spin' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <path
                    d="M35 3C52.6732 3 67 17.3269 67 35C67 52.6732 52.6732 67 35 67C17.3269 67 3 52.6732 3 35C3 17.3269 17.3269 3 35 3Z"
                    stroke="#7A7A7C" strokeWidth="5.33333" strokeLinecap="round"/>
                <path d="M35 3C52.6732 3 67 17.3269 67 35" stroke="white" strokeWidth="5.33333"
                      strokeLinecap="round"/>
            </svg>
            <div className='absolute inset-0 mx-auto flex justify-center items-center'>
            <Image
                src={EarthLogo}
                alt='Earth Logo'
                className='w-[50px] h-[50px]'
              />
            </div>
        </div>
            <h4 className='text-[17.2px] font-kalameh500 pt-4 text-center'>لطفاً صبور باشیـد ...</h4>
        </div>
    )
}

export default Loading
