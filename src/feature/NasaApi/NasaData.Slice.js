import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: null,
    isLoading: false,
}
const nasaSlice = createSlice({
    name: "nasadata",
    initialState,
    reducers: {
        getNasaData: (state) => {
            state.isLoading = true;
        },
        getNasaSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.result
        },
        getNasaFailed: (state) => {
            state.isLoading=false;
            state.data = [];
        }
    }
})
export const {getNasaData,getNasaFailed,getNasaSuccess}=nasaSlice.actions
export default nasaSlice.reducer