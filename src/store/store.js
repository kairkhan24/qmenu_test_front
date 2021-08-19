import {applyMiddleware, createStore} from "redux"
import {restaurantReducer} from "./reducers/restaurantReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"


export const store = createStore(restaurantReducer, composeWithDevTools(applyMiddleware(thunk)))