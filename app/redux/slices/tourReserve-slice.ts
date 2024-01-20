import {createSlice} from "@reduxjs/toolkit";
import DateObject from "react-date-object";

type PassengersCountType = {
    adult1: number,
    adult2: number,
    childFrom2to12: number,
    child2: number
}
type PassengersType = {
    tour_id: number,
    latinFirstName: string,
    latinLastName: string,
    gender: string,
    passportNumber: string,
    nationalCode: string,
    nationality: string,
    birthDate: string,
    expirationDatePassport: string
}

type InitialState = {
    passengers: PassengersType[]
    passengersCount: PassengersCountType,
    entryDate: DateObject,
    exitDate: DateObject,
}

const initialState: InitialState = {
    passengers: [],
    passengersCount: {
        adult1: 0,
        adult2: 0,
        childFrom2to12: 0,
        child2: 0
    },
    entryDate: new DateObject(),
    exitDate: new DateObject(),

}

export const TourReserveSlice = createSlice({
    name: 'ReserveVillaDetail',
    initialState,
    reducers: {
        setTourReserve: (state, action) => {
            state.passengersCount.adult1 = action.payload.passengersCount.adult1
            state.passengersCount.adult2 = action.payload.passengersCount.adult2
            state.passengersCount.child2 = action.payload.passengersCount.child2
            state.passengersCount.childFrom2to12 = action.payload.passengersCount.childFrom2to12
            state.entryDate = action.payload.entryDate
            state.exitDate = action.payload.exitDate
        },
        setPassengers: (state, action) => {
            const selectedPassenger = action.payload
            const existingPassenger = state.passengers.find(item => item.nationalCode === selectedPassenger.nationalCode)
            if (!existingPassenger) {
                state.passengers.push({
                    tour_id: selectedPassenger.tour_id,
                    latinFirstName: selectedPassenger.latinFirstName,
                    latinLastName: selectedPassenger.latinLastName,
                    gender: selectedPassenger.gender,
                    passportNumber: selectedPassenger.passportNumber,
                    nationalCode: selectedPassenger.nationalCode,
                    birthDate: selectedPassenger.birthDate,
                    expirationDatePassport: selectedPassenger.expirationDatePassport,
                    nationality: selectedPassenger.nationality
                })
            } else {
                existingPassenger.latinFirstName = selectedPassenger.latinFirstName
                existingPassenger.latinLastName = selectedPassenger.latinLastName
                existingPassenger.gender = selectedPassenger.gender
                existingPassenger.passportNumber = selectedPassenger.passportNumber
                existingPassenger.nationalCode = selectedPassenger.nationalCode
                existingPassenger.expirationDatePassport = selectedPassenger.expirationDatePassport
                existingPassenger.nationality = selectedPassenger.nationality

            }

        }
    }
})

export const {setTourReserve, setPassengers} = TourReserveSlice.actions

export default TourReserveSlice.reducer