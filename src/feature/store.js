import { configureStore, current } from "@reduxjs/toolkit";
import CartSlice from "./Product/Cart/Cart.Slice";
import rootSaga from "./root-saga";
import createSagaMiddleware from "redux-saga"
import CalculatorV2Slice from "./CalculatorV2/CalculatorV2.Slice";
import productV2Slice from "./Products/Product.Slice"
import UserSlice from "./UsersData/User.Slice";
import NasaDataSlice from "./NasaApi/NasaData.Slice";
import UserDetailsSlice from "./UsersData/UserDetails/UserDetails.Slice";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    myCart: CartSlice,
    addV2: CalculatorV2Slice,
    myProducts: productV2Slice,
    myUser: UserSlice,
    myUserDetails:UserDetailsSlice,
    myNasaData:NasaDataSlice


  },
  middleware: (current) => current({ thunk: false }).concat(sagaMiddleware)

});
sagaMiddleware.run(rootSaga)
export default store