import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

const RootReducer = combineReducers({
    form: FormReducer
})

export default RootReducer