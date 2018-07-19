import { UserConstants } from '../constants/user.const'

export default function (state, action) {
    switch (action.type) {
        case UserConstants.GET_USERS_SUCCESS:
            return {
                ...state
            }
        case UserConstants.GET_USERS_FAIL:
            return {
                ...state
            }
        case UserConstants.GET_USERS_REQUEST:
            return {
                ...state
            }
        default:
            return state
    }
}