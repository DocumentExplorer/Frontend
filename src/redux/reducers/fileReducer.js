import { FileConstants } from '../constants'

const initState = {
    modalAddFile: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case FileConstants.GET_FILE_SUCCESS:
            return state
        case FileConstants.GET_FILE_FAIL:
            return state
        case FileConstants.POST_FILE_SUCCESS:
            return state
        case FileConstants.POST_FILE_FAIL:
            return state
        case FileConstants.POST_FILE_REQUEST:
            return state
        case FileConstants.TOGGLE_ADD_FILE:
            return {
                ...state,
                modalAddFile: !state.modalAddFile
            }
        default:
            return state
    }
}