import {createSlice} from "@reduxjs/toolkit";
type durationType = {
    weekDay : {
        name : string
    }
    month : {
        number : number,
        name : string
    }
    year : number

}

type InitialState = {
    passengers : number,
    entryDate : string,
    exitDate : string,
    duration : durationType[]
}

const initialState : InitialState = {
    passengers: 0,
    entryDate: '',
    exitDate: '',
    duration : []
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