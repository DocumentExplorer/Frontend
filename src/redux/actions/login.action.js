import { LoginService } from '../services'
import { LoginConstants } from '../constants'

function login(values) {
    function success() {
        return {
            type: LoginConstants.LOGIN_SUCCESS
        }
    }
    function failed(error) {
        return {
            type: LoginConstants.LOGIN_FAIL,
            error
        }
    }

    return dispatch => {
        LoginService.login(values).then(() => {
            dispatch(success())
            //localStorage.setItem()
        }).catch((err) => {
            dispatch(failed(err))
        })
    }

}