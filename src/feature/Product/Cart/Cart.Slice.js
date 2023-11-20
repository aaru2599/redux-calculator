import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [],
    
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newData = action.payload;
            const existingProductIndex = state.data.findIndex(item => item.id === newData.id);

            if (existingProductIndex === -1) {
                state.data.push({ ...newData, count: 1 })
                
            }
            else {
                (state.data[existingProductIndex].count++)
            }
            return state

        },
        removeFromCart: (state, action) => {
            // cuonsole.log("state",state);
            const productToRemove = action.payload
            console.log("action.payload", productToRemove);
            const productIndex = state.data.findIndex((item) => item.id === productToRemove.id)
            if (productIndex !== -1) {
                state.data.splice(productIndex, 1)
            }

        },
        updateQuantity: (state, action) => {
            console.log("action.payload for update", action.payload);
            const { productId, quantity } = action.payload
            console.log("productId", action.payload.productId);
            const productToUpdate = state.data.find((item) => item.id === productId)
            // console.log("productToUpdate");
            if (productToUpdate) {
                productToUpdate.count = quantity
                console.log("quantity", quantity);
                if (quantity === 0) {
                    const productIndex = state.data.findIndex((item) => item.id === productId)
                    if (productIndex !== -1) {
                        state.data.splice(productIndex, 1)
                    }
                }
            }

        }
    }

})
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer