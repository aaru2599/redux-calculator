import { put, takeLatest } from "redux-saga/effects";
import { getUserFailed, getUserSuccess } from "./User.Slice";

const getRequest = async (url) => {
    try {
        const responce = await fetch(url)
        const parsedResponce = await responce.json()
        return parsedResponce
    }
    catch (err) {
        console.log(err);
        return null
    }
}
export function* getUsers() {
    try {
        const apiResponce = yield getRequest("https://jsonplaceholder.typicode.com/users")
        // console.log("apiResponce",apiResponce);
        if (!apiResponce) {
            yield put(getUserFailed())
            return ;
        }
        yield put(getUserSuccess({ result: apiResponce }))
    }
    catch (err) {
        yield put(getUserFailed())
    }
}
export function* watchGetUsers(){
    yield takeLatest("users/getUser",getUsers)
}