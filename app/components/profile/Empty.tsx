
import React from 'react'
import Image from "next/image";
import empty from "@/public/images/empty.png";

const Empty= () => {
    return (

        <div className='w-full  flex flex-col '>
            <div className='image'>
                <Image
                    src={empty}
                    alt='sdfjsd'
                />
            </div>

            <h1 className='font-kalameh500'>لیست اقامتگاه های مورد علاقه شما خالی است</h1>
        </div>

    )
}

export default Empty