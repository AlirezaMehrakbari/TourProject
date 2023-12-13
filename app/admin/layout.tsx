import type {Metadata} from 'next'
import AdminNavbar from "@/app/components/admin/AdminNavbar";


export const metadata: Metadata = {
    title: 'پنل ادمین',
}

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <section>
            <AdminNavbar/>
            {children}
        </section>
    )
}
