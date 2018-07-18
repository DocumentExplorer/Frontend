import { LoginConstants } from '../constants'

export default function (state = { auth: false, accountType: 'admin' }, action) {
    switch (action.type) {
        case LoginConstants.LOGIN_SUCCESS:
            return {
                auth: true,
                accountType: action.role
            }
        case LoginConstants.LOGIN_FETCH:
            return {

            }
        case LoginConstants.LOGIN_FAIL:
            return { auth: false }
        default:
            return state
    }
}