import { combineReducers } from 'redux'
import loginReducer from './reducers/loginReducer'
import orderReducer from './reducers/orderReducer'
import userReducer from './reducers/userReducer'
import registerReducer from './reducers/registerReducer'
import logReducer from './reducers/logReducer'
import permissionReducer from './reducers/permissionReducer'
import fileReducer from './reducers/fileReducer'

const RootReducer = combineReducers({
    loginResult: loginReducer,
    orders: orderReducer,
    users: userReducer,
    registerResult: registerReducer,
    logs: logReducer,
    permissions: permissionReducer,
    file: fileReducer
})

export default RootReducer