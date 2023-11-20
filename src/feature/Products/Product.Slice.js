import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    data: null,
}
const productV2Slice = createSlice({
    name: "productsV2",
    initialState,
    reducers: {
        getProduct: (state) => {
            state.isLoading = true;
        },
        productSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.results;
        },
        productFailed: (state) => {
            state.isLoading = false;
            state.data = []
        }
    }
})
export const { getProduct, productFailed, productSuccess } = productV2Slice.actions
export default productV2Slice.reducer