import { put, takeLatest } from "redux-saga/effects";
import { getUserDetails, getUserDetailsFailed, getUserDetailsSuccess } from "./UserDetails.Slice";
import { useSelector } from "react-redux";


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
export function* getUserDetail(action) {
    console.log("action",action);
    try {
       
        const apiRequest = yield getRequest(`https://jsonplaceholder.typicode.com/users/${action.payload.id}`)
        if (!apiRequest) {
            yield put(getUserDetailsFailed())
            return;
        }
        yield put(getUserDetailsSuccess({ result: apiRequest }))

    }
    catch (err) {
        yield put(getUserDetailsFailed())
    }
}
export function* watchUserDetails() {
    yield takeLatest("userDetails/getUserDetails", getUserDetail)
    
}