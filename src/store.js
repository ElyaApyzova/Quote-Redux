import { createStore } from 'redux'
import quoteReducer from "./reducer/reducer";

const store = createStore(quoteReducer)

export default store