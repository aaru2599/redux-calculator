import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Product/Cart/Cart.Slice";



const store = configureStore({
    reducer: {

      myCart:CartSlice
    },

})
export default store