import type {Metadata} from 'next'
import AdminNavbar from "@/app/components/admin/AdminNavbar";


export const metadata: Metadata = {
    title: 'پنل ادمین',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fa">
        <body className='font-body'>
        <AdminNavbar/>
        {children}
        </body>
        </html>
    )
}
