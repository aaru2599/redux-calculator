import { put, takeLatest } from "redux-saga/effects";
import {  SLICE_WATCHER, getNasaFailed, getNasaSuccess } from "./NasaData.Slice";

const getRequest = async (url) => {
    try {
        const responce = await fetch(url)
        const parsedResponce = await responce.json()
        console.log("parsedResponce", parsedResponce);
        return parsedResponce
    }
    catch (err) {
        console.log(err);
        return null
    }
}
export function* getNasaDetails() {
    try {
        const apiResponce = yield getRequest("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        if (!apiResponce) {
            yield put(getNasaFailed())
            return;
        }
        yield put(getNasaSuccess({ result: apiResponce }))

    }
    catch (err) {
        console.log(err);
        yield put(getNasaFailed())
    }
}
export function* watchGetNasaData() {
    yield takeLatest(SLICE_WATCHER, getNasaDetails)
}