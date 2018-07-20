import { UserConstants, RegisterConstants } from '../constants'

export default function (state = { request: true, users: [] }, action) {
    switch (action.type) {
        case UserConstants.GET_USERS_SUCCESS:
            let { users } = action
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