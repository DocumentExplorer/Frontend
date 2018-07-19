import { UserConstants } from '../constants/user.const'

export default function (state = { request: true }, action) {
    switch (action.type) {
        case UserConstants.GET_USERS_SUCCESS:
            const { users } = action
            console.log(users)
            return {
                ...state,
                users,
                request: false
            }
        case UserConstants.GET_USERS_FAIL:
            return {
                ...state,
                request: true
            }
        case UserConstants.GET_USERS_REQUEST:
            return {
                ...state,
                request: true
            }
        default:
            return state
    }
}