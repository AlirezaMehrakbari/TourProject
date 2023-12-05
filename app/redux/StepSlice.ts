
import {createSlice} from "@reduxjs/toolkit";

type InitialState = {
    step: number
}
const initialState: InitialState = {
    step: 0,


}
const StepSlice = createSlice({
    name: 'StepProcess',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step++
        },
        prevStep: (state) => {
            state.step--
        },
        resetStep: (state) => {
            state.step = 0
        }
    }

})

export const {nextStep,prevStep,resetStep} = StepSlice.actions

export default StepSlice.reducer