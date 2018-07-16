import { LoginConstants } from '../constants'

export default function (state = { auth: true }, action) {
    switch (action.type) {
        case LoginConstants.LOGIN_SUCCESS:
            const accountType = action.payload.accountType
            return {
                auth: true,
                user: {
                    username: 'User'
                },
                accountType
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