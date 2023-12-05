import React, {useEffect, useRef, useState} from "react";
import {width} from "@mui/system";


type SelectDropDownProps = {
    styles?: string,
    label: string | number,
    children?: React.ReactNode,
    isCounter?: boolean,
    main?: boolean,
    dropDownStyles?: string,
    icon?: any,
    labelStyles?: string
}
const SelectDropDown: React.FC<SelectDropDownProps> = ({
                                                           styles,
                                                           label,
                                                           children,
                                                           isCounter,
                                                           main,
                                                           dropDownStyles,
                                                           icon,
                                                           labelStyles
                                                       }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            //@ignore-ts
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpen])
    return (

        <div
            ref={ref}
            onClick={isCounter ? () => setIsOpen(true) : () => setIsOpen(prev => !prev)}
            className={
                `
                ${main ? (
                    "relative border-b-[1px]  justify-between rounded-md py-[4px] px-2 gap-x-2 items-baseline text-white text-[14px] font-kalameh400 cursor-pointer flex inset-x-0 mx-auto"
                ) : (
                    styles
                )}
          
        ${styles}
        `
            }>
            <div className='flex w-full items-center justify-between gap-x-2'>
                <div className={`${main ? `text-[14px] font-kalameh400 flex items-center w-[140px]` : labelStyles}`}>
                    {icon}
                    {label}
                </div>
                <div>
                    {main ? (
                        isOpen ? (
                            <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width="11" height="6"
                                 viewBox="0 0 11 6"
                                 fill="none">
                                <path d="M1.05347 0.731445L5.66061 5.33859L10.2678 0.731445" stroke="#FBFBFB"
                                      strokeWidth="1.15179"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6"
                                 fill="none">
                                <path d="M1.05347 0.731445L5.66061 5.33859L10.2678 0.731445" stroke="#FBFBFB"
                                      strokeWidth="1.15179" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )

                    ) : (
                        isOpen ? (
                            <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                 viewBox="0 0 17 17" fill="none">
                                <path d="M4.25 6.375L8.5 10.625L12.75 6.375" stroke="black" strokeWidth="1.41667"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                 fill="none">
                                <path d="M4.25 6.375L8.5 10.625L12.75 6.375" stroke="black" strokeWidth="1.41667"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )
                    )}
                </div>
            </div>
            {isOpen &&
                <div
                    className={`z-10 ${dropDownStyles}`}>
                    {children}
                </div>
            }
        </div>
    )
}

export default SelectDropDown
