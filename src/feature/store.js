import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "./Calculator/Calculator.Slice";

const store = configureStore({
    reducer: {
      myCalculator:CalculatorSlice

    },

})
export default store