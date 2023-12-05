import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className='hidden lg:flex bg-[#FF7512] border-[2px] border-[#FFF] rounded-[60px] py-[20px] px-[57px] mx-auto justify-between w-full'>
            {children}
        </div>
    )
}

export default Layout
