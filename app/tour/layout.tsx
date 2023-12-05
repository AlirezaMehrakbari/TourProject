import type {Metadata} from 'next'



export const metadata: Metadata = {
    title: 'تورهای داخلی و خارجی ، تریپ تور',
    description: 'تورهای داخلی و خارجی بهترین قیمت',

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
