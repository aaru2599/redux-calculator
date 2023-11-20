import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    value:0
}
 const calculatorV2Slice=createSlice({
    name:"calculatorV2",
    initialState,
    reducers:{
        add:(state)=>{
            state.isLoading=true
        },
        addSuccess:(state,action)=>{
            state.isLoading=false
            state.value=action.payload.result
        },
        addFailled:(state)=>{
            state.isLoading=false
            state.value=0

        }
        
    }

 })
 export const  {add,addFailled,addSuccess}=calculatorV2Slice.actions
 export default calculatorV2Slice.reducer
