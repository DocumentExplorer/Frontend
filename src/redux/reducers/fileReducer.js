import { FileConstants } from '../constants'

const initState = {

}

export default function (state = initState, action) {
    switch (action.type) {
        case FileConstants.GET_FILE_SUCCESS:
            return state
        case FileConstants.GET_FILE_FAIL:
            return state
        default:
            return state
    }
}