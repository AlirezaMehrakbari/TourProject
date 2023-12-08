import React from 'react'
import Comments from "@/app/components/Comments";

const CommentsPage = () => {
    return (
        <div className='w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto pt-[10rem]'>
            <h1 className='text-[30px] font-kalameh400'> <span className='font-kalameh700'>دیدگاه ها</span> درباره شما</h1>
            <Comments reply/>
        </div>
    )
}

export default CommentsPage
