import { RegisterConstants, UserConstants } from '../constants'

export default function (state = {error: ''}, action) {
    switch (action.type) {
        case RegisterConstants.REGISTER_SUCCESS:
            return {
                ...state,
                newUser: action.user,
                error: '',
                request: false
            }
        case RegisterConstants.REGISTER_FAIL:
            return {
                ...state,
                error: 'Username jest już w użyciu',
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