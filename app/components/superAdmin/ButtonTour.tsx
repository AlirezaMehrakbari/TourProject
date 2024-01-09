import React, {ImgHTMLAttributes} from "react";


type ButtonProps = {
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    icon?: ImgHTMLAttributes<HTMLImageElement>,
    outline?: boolean
    height?: string,
    styles?: string,
    type?:'submit'
}

const ButtonTour: React.FC<ButtonProps> = ({
                                           children,
                                           type,
                                           onClick,
                                           disabled,
                                           icon,
                                           outline,
                                           height,
                                           styles
                                       }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={
                `
                flex 
                items-center
                justify-center
            disabled:opacity-70
            h-[40px]
            ${styles ? `${styles}` : ''}
            ${outline ? 'bg-white' : 'bg-[#242A50]'}
            ${outline ? 'text-[#242A50]' : 'text-white'}
            ${outline ? 'border-[2px] border-[#242A50]' : 'border-transparent'}
            `
            }

        >
            {/*{icon &&*/}
            {/*    <Image*/}
            {/*        src={icon}*/}
            {/*        alt={'icon'}*/}
            {/*    />*/}
            {/*}*/}

            {children}
        </button>
    )
}

export default ButtonTour
