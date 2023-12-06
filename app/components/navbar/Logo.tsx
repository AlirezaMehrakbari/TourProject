import logo from '@/public/images/Logo.png'
import Image from "next/image";
import React from "react";
type LogoProps = {
    width ?: string,
    height ?: string
}
const Logo : React.FC<LogoProps> = ({width,height}) => {
    return (
        <Image
            src={logo}
            alt={'trip tour Logo'}
            className={`cursor-pointer ${width ? width :'w-[80px]'} ${height ? height :'h-[50px]'}  object-cover`}
        />
    )
}

export default Logo
