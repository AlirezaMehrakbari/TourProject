import Picture404 from '@/public/images/404.png'
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div >
            <Image
                className='w-[45%] mx-auto max-h-[700px]'
                src={Picture404}
                alt={'Error 404!!'}
            />
            <Link className='flex justify-center items-center font-kalameh700 text-orange' href={'/'}>برگشت به صفحه اصلی</Link>
        </div>

    )
}

export default NotFound
