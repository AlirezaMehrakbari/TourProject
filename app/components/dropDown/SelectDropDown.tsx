'use client'
import React, {useEffect, useRef, useState} from "react";


type SelectDropDownProps = {
    styles?: string,
    label: string | number,
    children?: React.ReactNode,
    isCounter?: boolean,
    main?: boolean,
    dropDownStyles?: string,
    icon?: any,
    labelStyles?: string,
    arrowBlack?: boolean
}
const SelectDropDown: React.FC<SelectDropDownProps> = ({
                                                           styles,
                                                           label,
                                                           children,
                                                           isCounter,
                                                           main,
                                                           dropDownStyles,
                                                           icon,
                                                           labelStyles,
                                                           arrowBlack
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
                    "flex flex-col items-center relative border-b-[1px] rounded-md py-[4px] px-2 text-white text-[14px] font-kalameh400 cursor-pointer"
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
                    {isOpen ? (
                        <svg className={`${arrowBlack ? 'stroke-[#000]' : 'stroke-white'} rotate-180`} xmlns="http://www.w3.org/2000/svg" width="11" height="6"
                             viewBox="0 0 11 6"
                             fill="none">
                            <path d="M1.05347 0.731445L5.66061 5.33859L10.2678 0.731445"
                                  strokeWidth="1.15179"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg className={`${arrowBlack ? 'stroke-[#000]' : 'stroke-white'}`} xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6"
                             fill="none">
                            <path d="M1.05347 0.731445L5.66061 5.33859L10.2678 0.731445"
                                  strokeWidth="1.15179" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )
                    }
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
