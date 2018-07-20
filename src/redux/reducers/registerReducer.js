import { RegisterConstants } from '../constants'

export default function (state = {}, action) {
    switch (action.type) {
        case RegisterConstants.REGISTER_SUCCESS:
            return {
                ...state,
                newUser: action.user,
                error: false,
                request: false
            }
        case RegisterConstants.REGISTER_FAIL:
            return {
                ...state,
                error: true,
                request: false
            }
        case RegisterConstants.REGISTER_REQUEST:
            return {
                ...state,
                request: true
            }
        default:
            return state
    }
}