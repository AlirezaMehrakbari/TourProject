import React from "react";

type DatePickerPluginProps = {
    entryDate: string,
    exitDate: string
}
const DatePickerPlugin: React.FC<DatePickerPluginProps> = ({entryDate, exitDate}) => {
    return (
        <div className='relative flex py-4 px-2' dir='rtl'>
            <div className='flex flex-col border-2 rounded-tl-lg rounded-bl-lg bg-[#FFF] z-10 px-4 py-2'>
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                        <path
                            d="M14.976 3.09766H2.8876C2.14579 3.09766 1.54443 3.70228 1.54443 4.44811V12.5508C1.54443 13.2967 2.14579 13.9013 2.8876 13.9013H14.976C15.7179 13.9013 16.3192 13.2967 16.3192 12.5508V4.44811C16.3192 3.70228 15.7179 3.09766 14.976 3.09766Z"
                            stroke="black" strokeWidth="1.22969" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.54468 7.14844H16.3195" stroke="black" strokeWidth="1.22969" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M6.496 1.07227C6.496 0.562911 6.08308 0.149998 5.57373 0.149998C5.06438 0.149998 4.65146 0.562911 4.65146 1.07227L6.496 1.07227ZM4.65146 1.07227L4.65146 5.12363L6.496 5.12363L6.496 1.07227L4.65146 1.07227Z"
                            fill="black"/>
                        <path
                            d="M13.2118 1.07227C13.2118 0.562911 12.7989 0.149998 12.2896 0.149998C11.7802 0.149998 11.3673 0.562911 11.3673 1.07227L13.2118 1.07227ZM11.3673 1.07227L11.3673 5.12363L13.2118 5.12363L13.2118 1.07227L11.3673 1.07227Z"
                            fill="black"/>
                    </svg>
                    <span className='pr-[3px] text-[12px]'>تــاریـخ ورود</span>
                </div>
                <p>{entryDate}</p>
            </div>
            <div className='absolute right-28 flex flex-col border-2 pr-3 pl-2 py-2 rounded-tl-lg rounded-bl-lg'>
                <div className='flex items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                        <path
                            d="M14.976 3.09766H2.8876C2.14579 3.09766 1.54443 3.70228 1.54443 4.44811V12.5508C1.54443 13.2967 2.14579 13.9013 2.8876 13.9013H14.976C15.7179 13.9013 16.3192 13.2967 16.3192 12.5508V4.44811C16.3192 3.70228 15.7179 3.09766 14.976 3.09766Z"
                            stroke="black" strokeWidth="1.22969" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.54468 7.14844H16.3195" stroke="black" strokeWidth="1.22969" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M6.496 1.07227C6.496 0.562911 6.08308 0.149998 5.57373 0.149998C5.06438 0.149998 4.65146 0.562911 4.65146 1.07227L6.496 1.07227ZM4.65146 1.07227L4.65146 5.12363L6.496 5.12363L6.496 1.07227L4.65146 1.07227Z"
                            fill="black"/>
                        <path
                            d="M13.2118 1.07227C13.2118 0.562911 12.7989 0.149998 12.2896 0.149998C11.7802 0.149998 11.3673 0.562911 11.3673 1.07227L13.2118 1.07227ZM11.3673 1.07227L11.3673 5.12363L13.2118 5.12363L13.2118 1.07227L11.3673 1.07227Z"
                            fill="black"/>
                    </svg>
                    <span className='pr-[3px] text-[12px]'>تــاریـخ خروج</span>
                </div>
                <p>{exitDate}</p>
            </div>
        </div>
    )
}

export default DatePickerPlugin
