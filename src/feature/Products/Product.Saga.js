import { put, takeLatest } from "redux-saga/effects";
import { productFailed, productSuccess } from "./Product.Slice";


const getRequest = async (url) => {
    try {
        const responce = await fetch(url)
        const parsedResponce = await responce.json()
        return parsedResponce
    } catch (err) {
        console.log(err);
        return null
    }
};
function* getProduct() {
    try {
        const apiResponce = yield getRequest("https://fakestoreapi.com/products")
        // console.log("apiResponce",apiResponce);
        if (!apiResponce) {
            yield put(productFailed())
        }
        yield put(productSuccess({ results: apiResponce }))

    } catch (err) {
        console.log(err);
        yield put(productFailed())
    }
}
export function* watchGetProducts(){
    yield takeLatest("productsV2/getProduct",getProduct)
}