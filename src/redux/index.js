import { combineReducers } from '../../../../../Users/Marcin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux'
import loginReducer from './reducers/loginReducer'

const RootReducer = combineReducers({
    loginResult: loginReducer
})

export default RootReducer