import { RegisterConstants } from '../constants'

export default function (state = { error: '' }, action) {
    switch (action.type) {
        case RegisterConstants.REGISTER_SUCCESS:
            return {
                ...state,
                error: '',
                request: false,
                success: true
            }
        case RegisterConstants.REGISTER_FAIL:
            return {
                ...state,
                error: 'Username jest już w użyciu',
                request: false,
                success: false
            }
        case RegisterConstants.REGISTER_REQUEST:
            return {
                ...state,
                request: true,
                success: undefined
            }

        default:
            return state
    }
}