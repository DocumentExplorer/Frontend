import { RegisterConstants } from '../constants'
import { RegisterService } from '../services'

export function register(values) {
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
            }).catch(() => {
                dispatch(failed())
            })
    }
}