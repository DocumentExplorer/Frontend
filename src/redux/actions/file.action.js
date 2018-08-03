import { FileConstants} from '../constants'
import { FileService} from '../services'
import { lostSession, updateActionOrder } from './app.action'


export function download(id, fileType) {

    function success() {
        return {
            type: FileConstants.GET_FILE_SUCCESS
        }
    }

    return dispatch => {
        FileService.download(id, fileType)
            .then(() => {
                dispatch(success())
            }).catch(() => {
                dispatch(lostSession())
            })
    }
}

export function upload(data, file, callback) {
    function success() {
        return {
            type: FileConstants.POST_FILE_SUCCESS
        }
    }

    return dispatch => {
        FileService.upload(data, file)
            .then(() => {
                dispatch(success())
                updateActionOrder(data.orderId, dispatch)
                callback()
            }).catch(() => {
                dispatch(lostSession())
            })
    }
}

export function toggleDelete() {
    function toggle() {
        return {
            type: FileConstants.TOGGLE_DELETE_FILE
        }
    }

    return dispatch => {
        dispatch(toggle())
    }
}

export function toggleAdd(fileType, isRequired) {
    function toggle(fileType, isRequired) {
        return {
            type: FileConstants.TOGGLE_ADD_FILE,
            fileType,
            isRequired
        }
    }
    console.log(fileType, isRequired)

    return dispatch => {
        dispatch(toggle(fileType, isRequired))
    }
}

export function deleteFile(id, fileType, callback) {
    function success() {
        return {
            type: FileConstants.DELETE_FILE_SUCCESS
        }
    }

    function failed() {
        return {
            type: FileConstants.DELETE_FILE_FAIL
        }
    }

    return dispatch => {
        FileService.deleteFile(id, fileType)
            .then(() => {
                dispatch(success())
                updateActionOrder(id, dispatch)
                callback()
            }).catch(() => {
                dispatch(failed())
            })
    }
}
