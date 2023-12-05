import React from 'react'
import VillaItem, {VillaItemProps} from "@/app/components/villa/VillaItem";

type VillaListProps = {
    data: VillaItemProps[]
}
const VillaList: React.FC<VillaListProps> = ({data})=>{
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {data.map(item=>{
                return (
                    <VillaItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        Satisfaction={item.Satisfaction}
                        opinion={item.opinion}
                        province={item.province}
                        city={item.city}
                        price={item.price}
                    />
                )
            })}
        </div>
    )
}
    export default VillaList
