import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        value: 0
    },
    reducers: {
        add: (state, action) => {
            state.value += Number(action.payload)
        },
        substract: (state, action) => {
            state.value -= Number(action.payload)
        },
        division: (state, action) => {
            if (Number(action.payload) !== 0){

                state.value /= Number(action.payload)

            }
        },
        multiply: (state, action) => {
            state.value *= Number(action.payload)
        },

        clear: (state) => {
            state.value = 0
        }


    }
})
export const { add, substract, multiply, division, clear } = calculatorSlice.actions
export default calculatorSlice.reducer