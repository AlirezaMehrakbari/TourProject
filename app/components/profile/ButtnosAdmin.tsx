import React from 'react'
import Button from '../Button'
import DropDown from '../navbar/DropDown'

const ButtnosAdmin = () => {
    return (
        <div className="w-full flex flex-row justify-end mt-4">
            <div className="mx-1">
                <Button outline styles={'w-[100px] rounded-md'}>صفحه اصلی</Button>
            </div>
            <div className="mx-1">
                <DropDown label={'امیر ولی زاده'}
                    styles='w-[150px] text-[14px] font-kalameh500 rounded-[7.6px] flex item-center gap-x-3'
                    onClick={() => {
                    }}>
                    <div
                        className=' bg-orange text-white py-4 px-2 w-full rounded-br-[7.6px] rounded-bl-[7.6px] text-[15px]'>
                        <ul className='flex flex-col gap-y-2 justify-center items-center'>
                            <li className='hover:text-[#2C2AAF] cursor-pointer'>اطلاعات حساب کاربری</li>
                            <li className='hover:text-[#2C2AAF] cursor-pointer'>خروج از حساب کاربری</li>
                        </ul>
                    </div>
                </DropDown>
            </div>
        </div>
    )
}

export default ButtnosAdmin