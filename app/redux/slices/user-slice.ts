import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type UserAuthState = {
    id: number | null
    token: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    role: string,
    isLoggedIn :boolean,
    fullName : string,
    birthDate : string,
    nationalCode : string
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
        role: '',
        isLoggedIn: false,
        fullName : '',
        birthDate : '',
        nationalCode : ''
    }

}
type Action = {
    id: null,
    token: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    role: string,
    birthDate? : string,
    nationalCode? : string
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<Action>) => {
            state.value.id = action.payload.id
            state.value.firstName = action.payload.firstName
            state.value.lastName = action.payload.lastName
            state.value.token = action.payload.token
            state.value.phoneNumber = action.payload.phoneNumber
            state.value.role = action.payload.role
            if(action.payload.nationalCode && action.payload.birthDate){
            state.value.nationalCode = action.payload.nationalCode
            state.value.birthDate = action.payload.birthDate
            }
            state.value.isLoggedIn = !!state.value.token
            state.value.fullName = state.value.firstName + ' ' + state.value.lastName

        },
        logOut: (state) => {
            state.value.token = ''
            state.value.isLoggedIn = !!state.value.token
        }
    }
})

export const {logIn, logOut} = userSlice.actions

export default userSlice.reducer