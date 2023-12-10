import type {Metadata} from 'next'



export const metadata: Metadata = {
    title: 'تورهای داخلی و خارجی ، تریپ تور',
    description: 'تورهای داخلی و خارجی بهترین قیمت',

}

export default function TourLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
       <section>
           {children}
       </section>
    )
}
