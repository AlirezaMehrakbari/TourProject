
import {configureStore} from "@reduxjs/toolkit";
import StepSliceReducer from '@/app/redux/StepSlice'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
const store = configureStore({
    reducer : {stepSlice : StepSliceReducer}
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store