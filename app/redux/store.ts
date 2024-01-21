
import {configureStore} from "@reduxjs/toolkit";
import UserSliceReducer from '@/app/redux/slices/user-slice'
import VillaReserveSliceReducer from '@/app/redux/slices/villaReserve-slice'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import TourReserveSliceReducer from '@/app/redux/slices/tourReserve-slice'

const store = configureStore({
    reducer : {userSlice : UserSliceReducer ,  villaReserve : VillaReserveSliceReducer,tourReserve : TourReserveSliceReducer}
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store