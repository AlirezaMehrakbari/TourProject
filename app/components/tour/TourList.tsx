import React from 'react'
import TourItem, {TourItemProps} from "@/app/components/tour/TourItem";

type TourListProps = {
    data: Tour[]
}
const TourList: React.FC<TourListProps> = ({data}) => {
    return (
        <div className='flex flex-col gap-y-4 pt-8'>
            {data.map(item => {
                return (
                    <TourItem
                        id={item.id}
                        key={item.id}
                        origin={item.origin}
                        destination={item.destination}
                        price={item.price.adult}
                        startDateTour={item.date[0].start}
                        endDateTour={item.date[0].end}
                        vehicle = {item.vehicle}
                        tourManager = {item.tourManager}
                    />
                )
            })}
        </div>
    )
}

export default TourList
