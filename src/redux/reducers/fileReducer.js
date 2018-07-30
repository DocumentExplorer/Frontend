import { FileConstants } from '../constants'

const initState = {
    modalAddFile: false,
    isFileDelivered: false
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
            let { fileType, isRequired } = action
            if (fileType !== undefined) {
                fileType = fileType.slice(0, -2)
            }
            return {
                ...state,
                modalAddFile: !state.modalAddFile,
                fileType,
                isRequired
            }
        case FileConstants.DELETE_FILE_SUCCESS:
            return {
                ...state
            }
        case FileConstants.DELETE_FILE_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}