import { put, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import { addFailled, addSuccess } from "./CalculatorV2.Slice";


function* CalculatorV2(action) {
    try {
        console.log("Action", action);
        yield delay(3000)
        const result = +action.payload.num1 + +action.payload.num2
        console.log("result", result);
        yield put(addSuccess({ result }))
    }
    catch (err) {
        console.log("Err", err);
        yield put(addFailled())

    }
}
export function* watchCalculator() {
    yield takeLatest("calculatorV2/add", CalculatorV2)
}