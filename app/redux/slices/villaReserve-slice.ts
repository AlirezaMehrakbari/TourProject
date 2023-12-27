import {createSlice} from "@reduxjs/toolkit";

type InitialState = {
    passengers : number,
    entryDate : string,
    exitDate : string,
    duration : string
}

const initialState : InitialState = {
    passengers: 0,
    entryDate: '',
    exitDate: '',
    duration : ''
}

export const VillaReserveSlice = createSlice({
    name : 'ReserveVillaDetail',
    initialState,
    reducers : {
        setVillaReserve : (state,action)=>{
            state.passengers = action.payload.passengers
            state.entryDate = action.payload.entryDate
            state.exitDate = action.payload.exitDate
            state.duration = action.payload.duration
        }
    }
})

export const {setVillaReserve} = VillaReserveSlice.actions

export default VillaReserveSlice.reducer