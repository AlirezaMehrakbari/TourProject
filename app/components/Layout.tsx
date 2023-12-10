import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className='flex bg-[#FF7512] border-[2px] border-[#FFF] rounded-[20px] md:rounded-[40px] lg:rounded-[60px] py-[10px] sm:py-[20px] px-[20px] sm:px-[57px] mx-auto justify-between w-fit xl:w-full z-10'>
            {children}
        </div>
    )
}

export default Layout
