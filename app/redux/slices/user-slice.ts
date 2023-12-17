import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type UserAuthState = {
    id: number | null
    token: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    role: string,
    isLoggedIn :boolean,
    fullName : string
}
type InitialState = {
 value : UserAuthState
}
const initialState: InitialState = {
    value :{
        id: null,
        token: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        role: 'user',
        isLoggedIn: false,
        fullName : ''
    }

}
type Action = {
    id: null,
    token: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    role: 'user',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<Action>) => {
            state.value.id = action.payload.id
            state.value.firstName = action.payload.firstName
            state.value.lastName = action.payload.lastName
            state.value.phoneNumber = action.payload.phoneNumber
            state.value.role = action.payload.role
            state.value.isLoggedIn = true
            state.value.fullName = state.value.firstName + ' ' + state.value.lastName
        },
        logOut: (state) => {
            state.value.token = ''
            state.value.isLoggedIn = false
        }
    }
})

export const {logIn, logOut} = userSlice.actions

export default userSlice.reducer