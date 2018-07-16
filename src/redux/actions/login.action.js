import { LoginService } from '../services'
import { LoginConstants } from '../constants'

export function login(values) {
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

    function fetched() {
        return {
            type: LoginConstants.LOGIN_FETCH
        }
    }

    return dispatch => {
        dispatch(fetched())
        LoginService.login(values).then(() => {
            dispatch(success())
            //localStorage.setItem()
        }).catch((err) => {
            dispatch(failed(err))
        })
    }

}

export function checkLogining() {
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
        if (localStorage.getItem('token') && localStorage.getItem('user')) {
            dispatch(success())
        }
    }
}