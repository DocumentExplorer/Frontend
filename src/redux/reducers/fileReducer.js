import { FileConstants } from '../constants'

const initState = {
    modalAddFile: false,
    modalDeleteFile: false,
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
            if (fileType !== undefined && fileType.length !== 1) {
                fileType = fileType.slice(0, -2)
            }
            return {
                ...state,
                modalAddFile: !state.modalAddFile,
                fileType,
                isRequired
            }
        case FileConstants.TOGGLE_DELETE_FILE:
            return {
                ...state,
                modalDeleteFile: !state.modalDeleteFile
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