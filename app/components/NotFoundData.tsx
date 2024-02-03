import React from 'react'
import Image from "next/image";
import notFoundImg from '@/public/images/Profile-NotFound.jpg'

const NotFoundData = ({text} : {text : string}) => {
    return (
        <div className='flex flex-col w-[50%]'>
                <Image
                    className='w-[40%] mx-auto'
                    src={notFoundImg}
                    alt={'Not found...!'}
                />
            <p className='mx-auto'>{text}</p>
        </div>
    )
}

export default NotFoundData
