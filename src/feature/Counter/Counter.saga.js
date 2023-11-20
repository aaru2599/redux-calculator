import {  takeLatest } from 'redux-saga/effects'
function* Counter(action){
try{
console.log("Action",action);
const result = yield 10+20
console.log("result",result);
}catch(err){
    console.log("Err",err);
}
    
}
export function* watchCounter() {
    yield takeLatest('counter/increment', Counter)
  }