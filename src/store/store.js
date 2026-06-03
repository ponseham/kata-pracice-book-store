import { createStore, combineReducers } from 'redux'
import basketReducer from './reducer'

const rootReducer = combineReducers({
    basket: basketReducer,
})

const store = createStore(rootReducer)

export default store