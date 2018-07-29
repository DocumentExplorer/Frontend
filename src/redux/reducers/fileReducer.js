import { FileConstants } from '../constants'

export default function (state, action) {
    switch (action.type) {
        case FileConstants.GET_FILE_SUCCESS:
            return state
        case FileConstants.GET_FILE_FAIL:
            return state
        default:
            return state
    }
}