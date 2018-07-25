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
    function clearValidate() {
        return {
            type: RegisterConstants.CLEAR_REGISTER_VALIDATION
        }
    }
    return dispatch => {
        console.log('daw')
        RegisterService.register(values)
            .then(() => {
                console.log('utworz')
                dispatch(success())
                callback()
            }).catch(() => {
                dispatch(failed())
            })
    }
}