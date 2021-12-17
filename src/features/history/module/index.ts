import { all, fork } from "redux-saga/effects";
import { watchCreate } from "./historySaga";

export default function* hSaga(){
    yield all([fork(watchCreate)])
}