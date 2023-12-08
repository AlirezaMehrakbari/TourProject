'use client'
import Link from "next/link";
import Logo from "@/app/components/navbar/Logo";
import {usePathname} from "next/navigation";
import {RxHamburgerMenu} from 'react-icons/rx'
import {useState} from "react";
import {IoMdClose} from "react-icons/io";
import {CgProfile} from "react-icons/cg";
import {GiVillage} from "react-icons/gi";
import {LuDollarSign} from "react-icons/lu";
import {LiaComments} from "react-icons/lia";
const AdminNavbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const pathName = usePathname()
    return (
        <div className='relative flex items-center justify-between max-sm:px-8 sm:justify-around bg-[#F5F3F3] shadow-md py-4'>
            <Logo width={'w-[150px] h-[70px] md:w-[190px] md:h-[100px]'}/>
            <ul className='sm:flex items-center gap-x-[30px] md:gap-x-[40px] lg:gap-x-[60px] hidden'>
                {/*بالا تر ازsm*/}
                <Link
                    className={`${pathName === '/admin' ? 'text-orange font-kalameh700' : 'text-[#000000]'} flex flex-col items-center md:text-[24px] font-kalameh500`}
                    href={'/admin'}>
                        <li>پروفایل</li>
                        {pathName === '/admin' &&
                            <svg className='absolute bottom-[-1.5rem]' xmlns="http://www.w3.org/2000/svg" width="54"
                                 height="29"
                                 viewBox="0 0 54 29" fill="none">
                                <path
                                    d="M30.1707 27.2277C28.3273 28.7396 25.6727 28.7396 23.8293 27.2277L2.30335 9.57335C-1.32765 6.5954 0.778084 0.707279 5.47408 0.707279L48.5259 0.707279C53.2219 0.707279 55.3277 6.5954 51.6966 9.57335L30.1707 27.2277Z"
                                    fill="#F5F3F3"/>
                            </svg>
                        }

                </Link>
                <Link
                    className={`${pathName === '/admin/residences' ? 'text-orange font-kalameh700' : 'text-[#000000]'} flex flex-col items-center md:text-[24px] font-kalameh500`}
                    href={'/admin/residences'}>
                        <li>اقامتگاه ها</li>
                        {pathName === '/admin/residences' &&
                            <svg className='absolute bottom-[-1.5rem]' xmlns="http://www.w3.org/2000/svg" width="54"
                                 height="29"
                                 viewBox="0 0 54 29" fill="none">
                                <path
                                    d="M30.1707 27.2277C28.3273 28.7396 25.6727 28.7396 23.8293 27.2277L2.30335 9.57335C-1.32765 6.5954 0.778084 0.707279 5.47408 0.707279L48.5259 0.707279C53.2219 0.707279 55.3277 6.5954 51.6966 9.57335L30.1707 27.2277Z"
                                    fill="#F5F3F3"/>
                            </svg>
                        }
                </Link>
                <Link
                    className={`${pathName === '/admin/financialReport' ? 'text-orange font-kalameh700' : 'text-[#000000]'} flex flex-col items-center md:text-[24px] font-kalameh500`}
                    href={'/admin/financialReport'}>
                        <li>گزارش مالی</li>
                        {pathName === '/admin/financialReport' &&
                            <svg className='absolute bottom-[-1.5rem]' xmlns="http://www.w3.org/2000/svg" width="54"
                                 height="29"
                                 viewBox="0 0 54 29" fill="none">
                                <path
                                    d="M30.1707 27.2277C28.3273 28.7396 25.6727 28.7396 23.8293 27.2277L2.30335 9.57335C-1.32765 6.5954 0.778084 0.707279 5.47408 0.707279L48.5259 0.707279C53.2219 0.707279 55.3277 6.5954 51.6966 9.57335L30.1707 27.2277Z"
                                    fill="#F5F3F3"/>
                            </svg>
                        }
                </Link>
                <Link
                    className={`${pathName === '/admin/comments' ? 'text-orange font-kalameh700' : 'text-[#000000]'} flex flex-col items-center md:text-[24px] font-kalameh500`}
                    href={'/admin/comments'}>
                        <li>نظرات</li>
                        {pathName === '/admin/comments' &&
                            <svg className='absolute bottom-[-1.5rem]' xmlns="http://www.w3.org/2000/svg" width="54"
                                 height="29"
                                 viewBox="0 0 54 29" fill="none">
                                <path
                                    d="M30.1707 27.2277C28.3273 28.7396 25.6727 28.7396 23.8293 27.2277L2.30335 9.57335C-1.32765 6.5954 0.778084 0.707279 5.47408 0.707279L48.5259 0.707279C53.2219 0.707279 55.3277 6.5954 51.6966 9.57335L30.1707 27.2277Z"
                                    fill="#F5F3F3"/>
                            </svg>
                        }
                </Link>
            </ul>

            {/*کوچکتر از sm*/}
            <div className='flex sm:hidden'>
                <div onClick={()=>setIsOpen(prev=>!prev)}>
                    {isOpen ? <IoMdClose size={30}/> :  <RxHamburgerMenu size={30}/>}
                </div>
            </div>
            {isOpen &&
                <div className='absolute sm:hidden inset-x-0 top-[6.5rem] bg-[#FFF] h-screen z-40'>
                    <ul className='flex flex-col px-4 py-4 gap-y-8'>
                        <Link
                            onClick={() => setIsOpen(false)}
                            className={`${pathName === '/admin' ? 'text-orange font-kalameh700' : 'text-[#000000]'} bg-[#F5F3F3] py-2 px-4 rounded-lg text-[24px] font-kalameh500 flex justify-between items-center`}
                            href={'/admin'}>
                            <li>پروفایل</li>
                            <CgProfile/>
                        </Link>
                        <Link
                            onClick={() => setIsOpen(false)}
                            className={`${pathName === '/admin/residences' ? 'text-orange font-kalameh700' : 'text-[#000000]'} bg-[#F5F3F3] py-2 px-4 rounded-lg text-[24px] font-kalameh500 flex justify-between items-center`}
                            href={'/admin/residences'}>
                            <li>اقامتگاه ها</li>
                            <GiVillage/>
                        </Link>
                        <Link
                            onClick={() => setIsOpen(false)}
                            className={`${pathName === '/admin/financialReport' ? 'text-orange font-kalameh700' : 'text-[#000000]'} bg-[#F5F3F3] py-2 px-4 rounded-lg text-[24px] font-kalameh500 flex justify-between items-center`}
                            href={'/admin/financialReport'}>
                            <li>گزارش مالی</li>
                            <LuDollarSign/>
                        </Link>
                        <Link
                            onClick={() => setIsOpen(false)}
                            className={`${pathName === '/admin/comments' ? 'text-orange font-kalameh700' : 'text-[#000000]'} bg-[#F5F3F3] py-2 px-4 rounded-lg  text-[24px] font-kalameh500 flex justify-between items-center`}
                            href={'/admin/comments'}>
                            <li>نظرات</li>
                            <LiaComments/>
                        </Link>
                    </ul>
                </div>
            }
        </div>
    )
}

export default AdminNavbar
