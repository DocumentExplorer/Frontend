import { RegisterConstants, UserConstants } from '../constants'
import { RegisterService } from '../services'

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
            }).catch(() => {
                dispatch(failed())
            })
    }
}