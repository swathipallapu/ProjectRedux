import {createStore} from "redux"
import rootReducer from "./Service/Reducer/Example1"

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

