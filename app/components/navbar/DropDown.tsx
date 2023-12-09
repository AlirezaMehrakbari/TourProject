'use client'
import React, {useState} from 'react'
import Button from "@/app/components/Button";

type DropDownType = {
    children: React.ReactNode,
    styles?: string,
    label: string
}

const DropDown: React.FC<DropDownType> = ({
                                              children,
                                              label,
                                              styles,
                                          }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='relative'>
            <Button styles={styles} onClick={() => setIsOpen(prev => !prev)}>
                {label}
                {isOpen ? (
                    <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                        <path d="M1.05347 0.731445L5.66061 5.33859L10.2678 0.731445" stroke="#FBFBFB" strokeWidth="1.15179" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                        <path d="M1.05347 0.731445L5.66061 5.33859L10.2678 0.731445" stroke="#FBFBFB"
                              strokeWidth="1.15179" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </Button>
            {isOpen &&
                children
            }

        </div>
    )
}

export default DropDown
