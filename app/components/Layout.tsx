import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className='bg-[#FF7512] border-[2px] border-[#FFF] rounded-[60px] py-[20px] px-[57px] mx-auto flex justify-between w-full'>
            {children}
        </div>
    )
}

export default Layout
