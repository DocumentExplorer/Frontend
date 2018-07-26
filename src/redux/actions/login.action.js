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

    function lostSession() {
        return {
            type: LoginConstants.LOGOUT_SUCCESS
        }
    }

    return dispatch => {
        dispatch(fetched())
        LoginService.login(values).then((data) => {
            localStorage.setItem("token", data.token)
            localStorage.setItem("role", data.role)
            dispatch(success(data.role))
            console.log(data.expiry)
            setTimeout(() => {
                console.log('dawaj')
                dispatch(lostSession())
            }, data.expiry * 1000)
        }).catch((err) => {
            dispatch(failed(err))
        })
    }
}

export function logout() {

    function success() {
        return {
            type: LoginConstants.LOGOUT_SUCCESS
        }
    }

    return dispatch => {
        dispatch(success())
    }
}

export function checkLogining() {
    function success(role) {
        return {
            type: LoginConstants.LOGIN_SUCCESS,
            role
        }
    }
    return dispatch => {
        if (localStorage.getItem('token') && localStorage.getItem('role')) {
            console.log('Sprawdzam')
            dispatch(success(localStorage.getItem('role')))
        }
    }
}