import { all, fork } from "redux-saga/effects";
import { watchCounter } from "./Counter/Counter.saga";
import { watchCalculator } from "./CalculatorV2/CalculatorV2.saga";
import { watchGetProducts } from "./Products/product.saga";
import { watchGetUsers } from "./UsersData/User.saga";
import { watchGetNasaData } from "./NasaApi/NasaData.saga";
import { watchUserDetails } from "./UsersData/UserDetails/UserDetails.saga";

export default function* rootSaga(){
    yield all([fork(watchCounter),fork(watchCalculator),
        fork(watchGetProducts),fork(watchGetUsers), fork(watchGetNasaData),fork(watchUserDetails)])
}