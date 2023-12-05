import type {Metadata} from 'next'
import Stepper from "@/app/components/Stepper";


export const metadata: Metadata = {
    title: 'رزرو اقامتگاه در سراسر ایران ، با بهترین قیمت',
    description: 'رزرو اقامتگاه ها',

}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fa">
        <body className='font-body'>
        {children}
        </body>
        </html>
    )
}
