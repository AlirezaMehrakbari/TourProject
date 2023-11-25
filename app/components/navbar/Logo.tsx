import logo from '@/public/images/Logo.png'
import Image from "next/image";

const Logo = () => {
    return (
        <Image
            src={logo}
            alt={'trip tour Logo'}
            className='cursor-pointer w-[160px] h-[90px] object-cover'

        />
    )
}

export default Logo
