import React, {useState} from "react";

type SelectDropDownProps = {
    styles?: string,
    label: string | number,
    icon?: any,
    children?: React.ReactNode,
    isCounter?: boolean,
    main: boolean,
    dropDownStyles?: string
}
const SelectDropDown: React.FC<SelectDropDownProps> = ({
                                                           styles,
                                                           label,
                                                           children,
                                                           isCounter,
                                                           main,
                                                           dropDownStyles
                                                       }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (

        <div
            onClick={isCounter ? () => setIsOpen(true) : () => setIsOpen(prev => !prev)}
            onBlur={()=>setIsOpen(false)}
            className={
                `
                ${main ? (
                    "relative border-b-[1px]  justify-between rounded-md py-[4px] px-2 gap-x-2 items-baseline text-white text-[14px] font-kalameh400 cursor-pointer flex"
                ) : (
                    styles
                )}
          
        ${styles}
        `
            }>
            <div className='text-[14px] font-kalameh400'>{label}</div>
            {isOpen ? (
                <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6"
                     fill="none">
                    <path d="M1.05347 0.731445L5.66061 5.33859L10.2678 0.731445" stroke="#FBFBFB" strokeWidth="1.15179"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path d="M1.05347 0.731445L5.66061 5.33859L10.2678 0.731445" stroke="#FBFBFB"
                          strokeWidth="1.15179" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )}
            {isOpen &&
                <div
                    className={dropDownStyles}>
                    {children}
                </div>
            }
        </div>
    )
}

export default SelectDropDown
