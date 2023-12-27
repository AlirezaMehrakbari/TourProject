import React, {useEffect, useState} from 'react'
import VillaItem, {VillaItemProps} from "@/app/components/villa/VillaItem";
import image from '@/public/images/VillaHomePicture.png'
import {useAppSelector} from "@/app/redux/store";
import {toast} from "react-toastify";
import {tripTourApi} from "@/axios-instances";

type VillaListProps = {
    data: Villa[]
}
export type FavoriteListType = {
    id: number
}
const VillaList: React.FC<VillaListProps> = ({data}) => {
    const userSession = useAppSelector(state => state.userSlice)
    const [favoriteList, setFavoriteList] = useState<FavoriteListType[]>([])

    const handleFavoritePlace = (villaId: number) => {
        let existingItem = favoriteList.find(item => item.id === villaId)
        if (!existingItem) {
            setFavoriteList(prev => [...prev, {id: villaId}])
        } else {
            const newFavoriteList = favoriteList.filter(item => item.id !== villaId)
            setFavoriteList(newFavoriteList)
        }
        tripTourApi.post(`users/manageFavoritePlaces/${villaId}`, {}, {
            headers: {
                Authorization: `Bearer ${userSession.value.token}`
            }
        }).then(res => {
            if (res.data.message === "insert to favorites") {
                toast.success('به لیست علاقه مندی ها اضافه شد.')
            } else if (res.data.message === "delete from favorites") {
                toast.warn('از لیست علاقه مندی ها حذف شد.')
            }
        }).catch(error => {
            toast.error('مشکلی رخ داده است!')
        })
    }
    console.log(favoriteList)
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {data.map(item => {
                return (
                    <VillaItem
                        onClickFavorite={() => handleFavoritePlace(item.id)}
                        key={item.id}
                        id={item.id}
                        image={image}
                        title={item.title}
                        Satisfaction={Math.round(item.rating_comment.averageRating)}
                        opinion={item.rating_comment.totalComments}
                        province={item.address.state}
                        city={item.address.city}
                        price={item.pricePerNight}
                        favoriteList={favoriteList}
                    />
                )
            })}
        </div>
    )
}
export default VillaList
