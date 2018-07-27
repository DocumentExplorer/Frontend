import { LoginConstants, ApiConstants } from '../constants'

const initState = {
    auth: false,
    loginResult: ''
}

export default function (state = initState, action) {
    switch (action.type) {
        case LoginConstants.LOGIN_SUCCESS:
            return {
                auth: true,
                accountType: action.role,
                loginResult: ''
            }
        case LoginConstants.LOGIN_FETCH:
            return {
                ...state,
                loginResult: ''
            }
        case LoginConstants.LOGIN_FAIL:
            return {
                auth: false,
                loginResult: 'Błędny login lub hasło'
            }
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
        case ApiConstants.LOST_SESSION:
            return {
                auth: false,
                loginResult: 'Twoja sesja wygasła'
            }
        default:
            return state
    }
}