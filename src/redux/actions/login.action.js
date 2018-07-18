import { LoginService } from '../services'
import { LoginConstants } from '../constants'

export function login(values) {
    function success(role) {
        return {
            type: LoginConstants.LOGIN_SUCCESS,
            role
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
        LoginService.login(values).then((data) => {
            localStorage.setItem("token", data.token)
            localStorage.setItem("role", data.role)
            dispatch(success(data.role))
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
    return dispatch => {
        if (localStorage.getItem('token') && localStorage.getItem('role')) {
            console.log('Sprawdzam')
            dispatch(success(localStorage.getItem('role')))
        }
    }
}