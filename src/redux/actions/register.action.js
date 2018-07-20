import { RegisterConstants } from '../constants'
import { RegisterService } from '../services'
import { addUser } from './users.action'

export function register(values, callback) {
    function success() {
        return {
            type: RegisterConstants.REGISTER_SUCCESS
        }
    }
    function failed() {
        return {
            type: RegisterConstants.REGISTER_FAIL
        }
    }
    return dispatch => {
        RegisterService.register(values)
            .then(() => {
                dispatch(success())
                callback()
                addUser()
            }).catch(() => {
                dispatch(failed())
            })
    }
}