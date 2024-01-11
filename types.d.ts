type Villa = {
    id: number,
    user_id: 5,
    title: string,
    address: {
        state: string,
        city: string,
        region: string,
        street: string,
        alley: string,
        plaque: string,
        lng: string,
        lat: string
    },
    meter: string,
    suitableFor: string,
    numberOfRooms: string,
    capacity: string,
    type: string,
    layer: string,
    pricePerNight: string,
    pricePerAdditionalPerson: string,
    rules: string,
    deleted_at: string | null,
    created_at: string,
    updated_at: string,
    medias: string[],
    rating_comment: {
        averageRating: number,
        totalComments: number
    }
    is_favorite : boolean
}
type PaginateVilla = {
    data : Villa[],
    links: {
        first: string,
        last: string,
        prev: string,
        next: string
    },
    meta: {
        current_page: number,
        from: number,
        last_page: number,
        path: string,
        per_page: number,
        to: number,
        total: number
    }
}
type Facilities = {
    id: number,
    facility: string,
    type: string,
    deleted_at: string,
    created_at: string,
    updated_at: string,
    pivot: {
        place_id: string,
        facility_id: string
    }
}
type Comments = {
    id: number,
    commentable_type: string,
    commentable_id: string,
    user_id: string,
    comment: string,
    rating: string,
    parent_id: string,
    created_at: string,
    updated_at: string,
    user : User
}
type User = {
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    nationalCode: string,
    birthDate: string,
    description: string,
    city: string,
    deleted_at: string,
    created_at: string,
    updated_at: string,
    role: string[]
    permission: string[],
    medias: string[]
}
type VillaDetails = {
    id: number,
    user_id: 5,
    title: string,
    address: {
        state: string,
        city: string,
        region: string,
        street: string,
        alley: string,
        plaque: string,
        lng: string,
        lat: string
    },
    meter: string,
    suitableFor: string,
    numberOfRooms: string,
    capacity: string,
    type: string,
    layer: string,
    pricePerNight: string,
    pricePerAdditionalPerson: string,
    rules: string,
    deleted_at: string | null,
    created_at: string,
    updated_at: string,
    medias: string[],
    rating_comment: {
        averageRating: number,
        totalComments: number
    }
    facilities: Facilities[],
    comments: Comments[],
    user: User,
    is_favorite : boolean
}
