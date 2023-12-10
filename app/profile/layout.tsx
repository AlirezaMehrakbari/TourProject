import type {Metadata} from 'next'
import ProfileNavbar from "@/app/components/profile/ProfileNavbar";
import Sidebar from "@/app/components/profile/Sidebar";

export const metadata: Metadata = {
    title: 'پروفایل کاربری',
}

export default function ProfileLayout({
                                          children,
                                      }: {
    children: React.ReactNode
}) {
    return (
        <section>
            <ProfileNavbar/>
            <div className='flex flex-col md:flex-row gap-x-8'>
                <Sidebar/>
                {children}
            </div>
        </section>

    )
}
