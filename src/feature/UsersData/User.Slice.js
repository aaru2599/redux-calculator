import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: null,
    isLoading: false
}
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUser: (state) => {

            state.isLoading = true;
        },
        getUserSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.result
            console.log("state.data",state.data);
        },
        getUserFailed: (state) => {
            state.isLoading = false;
            state.data = []
        }

    }
})
export const { getUser, getUserFailed, getUserSuccess } = userSlice.actions
export default userSlice.reducer