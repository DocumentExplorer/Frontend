import { LoginConstants } from '../constants'

export default function (state = { auth: false }, action) {
    switch (action.type) {
        case LoginConstants.LOGIN_SUCCESS:
            return {
                auth: true,
                accountType: action.role
            }
        case LoginConstants.LOGIN_FETCH:
            return {
                ...state
            }
        case LoginConstants.LOGIN_FAIL:
            return { auth: false }
        case LoginConstants.LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            return {
                auth: false
            }
        case LoginConstants.LOGOUT_REQUEST:
            return {
                ...state,
                logout: true
            }
        default:
            return state
    }
}