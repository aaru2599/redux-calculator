import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: null,
    isLoading: false,
}
const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        getUserDetails: (state) => {
            console.log("state in getUserDetails",state);
            state.isLoading = true;

        },
        getUserDetailsSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.result
            console.log("state.data from userDetails",state.data);
            console.log("action.payload in userDetailsSlice",action.payload);
        },
        getUserDetailsFailed: (state) => {
            state.isLoading = false;
            state.data=[]
        }
    }
})
export  const {getUserDetails,getUserDetailsFailed,getUserDetailsSuccess}=userDetailsSlice.actions
export default userDetailsSlice.reducer