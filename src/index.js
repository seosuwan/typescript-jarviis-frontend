import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import 'features/suggestion/style/style.scss'
//리덕스와 미들웨어 적용을 위해 필요한 모듈 불러오기
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./features/user/module/index";
import hrootReducer from "./features/history/module/index"
// import rootSaga from 'features/user/module';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import uSaga from './features/user/module/index';
import hSaga from 'features/history/module/index';
import {
  configureStore,
  combineReducers, // redux의 Reducer 의 집합과 같다.
  getDefaultMiddleware
} from "@reduxjs/toolkit";
const rReducer = combineReducers({ rootReducer, hrootReducer }) //리듀서에 유저스라는 이름으로있지만 리듀서밖에서는 유저라고부를거야!

const sagaMiddleware = createSagaMiddleware()
// function* rootSaga() {
  // yield all([uSaga(), hSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
// }
const store = createStore(
  rReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

//주의//
sagaMiddleware.run(uSaga, hSaga)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

