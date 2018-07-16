import { combineReducers } from 'redux'
import loginReducer from './reducers/loginReducer'

const RootReducer = combineReducers({
    loginResult: loginReducer
})

export default RootReducer