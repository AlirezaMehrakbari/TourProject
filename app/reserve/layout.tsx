import type {Metadata} from 'next'
import Stepper from "@/app/components/Stepper";


export const metadata: Metadata = {
    title: 'رزرو اقامتگاه در سراسر ایران ، با بهترین قیمت',
    description: 'رزرو اقامتگاه ها',

}

export default function VillaLayout({
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
