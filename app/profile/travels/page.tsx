'use client'
import Button from '@/app/components/Button'
import ButtnosAdmin from '@/app/components/profile/ButtnosAdmin'
import Sidebar from '@/app/components/profile/Sidebar'
import React from 'react'

const Travels = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col'>
            <div className="py-8">
                <ButtnosAdmin />
            </div>

            <h1 className="font-kalameh700 mr-[338px]">سفر های من</h1>
            <div className="w-[full]  flex flex-row-reverse justify-between pb-10 pt-7">

                <div className="w-[70%] mr-[70px] mx-auto flex flex-col rounded-md shadow-2xl py-8">
                    <div className='title'>

                    </div>
                    <div className='title details'>
                        <div className='right'>
                            <div className='logo'></div>
                            <div className='matn'>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                        <div className='left'>
                            <div className='top'>
                                <div className='image'></div>
                                <div className='matn'>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                            <div className='vasat'></div>
                            <div className='bttom'>
                                <div className='right'>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div className='left'>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <Sidebar />

            </div>

        </div>
    )
}

export default Travels