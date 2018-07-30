import { FileConstants } from '../constants'
import { FileService } from '../services'
import { lostSession } from './app.action'

export function download(id) {

    function success() {
        return {
            type: FileConstants.GET_FILE_SUCCESS
        }
    }

    function failed() {
        return {
            type: FileConstants.GET_FILE_FAIL
        }
    }

    return dispatch => {
        FileService.download(id)
            .then(() => {
                dispatch(success())
            }).catch(() => {
                dispatch(lostSession())
            })
    }
}

export function upload(data, file) {
    function success() {
        return {
            type: FileConstants.POST_FILE_SUCCESS
        }
    }

    function failed() {
        return {
            type: FileConstants.POST_FILE_FAIL
        }
    }
    function request() {
        return {
            type: FileConstants.POST_FILE_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        FileService.upload(data, file)
            .then(() => {
                dispatch(success())
            }).catch(() => {
                dispatch(lostSession())
            })
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