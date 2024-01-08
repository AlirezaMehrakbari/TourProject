import React, {useEffect, useState} from 'react'
import VillaItem, {VillaItemProps} from "@/app/components/villa/VillaItem";
import image from '@/public/images/test.jpg'
import {useAppSelector} from "@/app/redux/store";
import {toast} from "react-toastify";
import {tripTourApi} from "@/axios-instances";
import {useQuery} from "@tanstack/react-query";

type VillaListProps = {
    data: Villa[]
}

const VillaList: React.FC<VillaListProps> = ({data}) => {
    const userSession = useAppSelector(state => state.userSlice)

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {data.map(item => {
                return (
                    <VillaItem
                        key={item.id}
                        id={item.id}
                        image={item?.medias[0]}
                        title={item?.title}
                        Satisfaction={Math.round(item.rating_comment?.averageRating)}
                        opinion={item.rating_comment?.totalComments}
                        province={item.address?.state}
                        city={item.address?.city}
                        price={item?.pricePerNight}
                        initialFavorite={item?.is_favorite}
                    />
                )
            })}
        </div>
    )
}
export default VillaList
