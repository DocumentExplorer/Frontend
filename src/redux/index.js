import { combineReducers } from 'redux'
import loginReducer from './reducers/loginReducer'
import orderReducer from './reducers/orderReducer'

const RootReducer = combineReducers({
    loginResult: loginReducer,
    orders: orderReducer
})

export default RootReducer