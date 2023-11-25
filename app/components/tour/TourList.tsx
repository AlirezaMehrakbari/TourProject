import React from 'react'
import TourItem, {TourItemProps} from "@/app/components/tour/TourItem";

type TourListProps = {
    data: TourItemProps[]
}
const TourList: React.FC<TourListProps> = ({data}) => {
    return (
        <div className='flex flex-col gap-y-4 pt-8'>
            {data.map(item => {
                return (
                    <TourItem
                        id = {item.id}
                        key={item.id}
                        origin={item.origin}
                        destination={item.destination}
                        price={item.price}
                    />
                )
            })}
        </div>
    )
}

export default TourList
