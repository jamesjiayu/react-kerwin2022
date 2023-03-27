import { applyMiddleware, combineReducers, createStore } from "redux"
import { cityReducer } from "./reducers/CityReducer"
import { tabbarReducer } from "./reducers/TabbarReducer"
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import { CinemasListReducer } from "./reducers/CinemasListReducer"
const reducer = combineReducers({
  cityReducer, tabbarReducer, CinemasListReducer
})
const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))

export default store