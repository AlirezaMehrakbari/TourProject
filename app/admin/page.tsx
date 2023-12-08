import React from 'react'

const AdminPage = () => {
    return (
        <div className='flex flex-col mt-[5rem] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto'>
            <h1 className='text-[30px] font-kalameh500'><span className='font-kalameh700'>پروفایل</span> شما</h1>
            <form>
                <div className="w-fit relative">
                    <div className="pt-[40px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 56 56" fill="none">
                            <circle cx="28" cy="28" r="28" fill="#D9D9D9"></circle>
                        </svg>
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 13 13" fill="none">
                            <circle cx="6.5" cy="6.5" r="5.91667" fill="#A0A0A0" stroke="#A0A0A0"
                                    strokeWidth="1.16667"></circle>
                        </svg>
                        <div
                            className="absolute inset-0 flex justify-center items-center rounded-full text-white">+
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4 pt-6'>
                    <div className='w-full flex flex-col sm:flex-row justify-between gap-y-4 gap-x-6'>
                        <input
                            className='w-full bg-[#F0F0F0] px-4 py-2 outline-none rounded-[10px]'
                            disabled
                            placeholder={'نام'}
                            type='text'
                        />
                        <input
                            className='w-full bg-[#F0F0F0] px-4 py-2 outline-none rounded-[10px]'
                            disabled
                            placeholder={'نام خانوادگی'}
                            type='text'
                        />
                    </div>

                    <div className='w-full flex flex-col sm:flex-row justify-between gap-y-4 gap-x-6'>
                        <input
                            className='w-full bg-[#F0F0F0] px-4 py-2 outline-none rounded-[10px]'
                            disabled
                            placeholder={'کد ملی'}
                            type='number'
                        />
                        <input
                            className='w-full bg-[#F0F0F0] px-4 py-2 outline-none rounded-[10px]'
                            disabled
                            placeholder={'تاریخ تولد'}
                            type='text'
                        />
                    </div>

                    <div className='w-full flex flex-col sm:flex-row justify-between gap-y-4 gap-x-6'>
                        <input
                            className='w-full bg-[#F0F0F0] px-4 py-2 outline-none rounded-[10px]'
                            disabled
                            placeholder={'شماره تماس'}
                            type='number'
                        />
                        <input
                            className='w-full bg-[#F0F0F0] px-4 py-2 outline-none rounded-[10px]'
                            disabled
                            placeholder={'شهر موردنظر'}
                            type='text'
                        />
                    </div>

                    <div className='pt-8'>
                        <p className='text-[18px]'>در این قسمت میتوانید توضیحاتی درباره <span
                            className='font-kalameh500'>خود و اقامتگاه خود</span> به مهمانان دهید تا آنها شمارا بهتر
                            بشناسند</p>
                        <textarea
                            className='w-full bg-[#F0F0F0] px-4 py-2 outline-none rounded-[10px] focus:shadow-md transition mt-2'
                            placeholder={'پیامی به مهمانان خود بدهید...'}
                        />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AdminPage
