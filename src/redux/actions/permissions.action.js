import { PermissionsConstants } from '../constants'
import { PermissionsService } from '../services'
import { lostSession } from './app.action'

export function getPermissions() {
    function success(permissions) {
        return {
            type: PermissionsConstants.GET_PERMISSIONS_SUCCESS,
            permissions
        }
    }

    function request() {
        return {
            type: PermissionsConstants.GET_PERMISSIONS_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        PermissionsService.getPermissions()
            .then((permissions) => {
                dispatch(success(permissions))
            }).catch(() => {
                dispatch(lostSession())
            })
    }
}

export function putPermissions(permissions, callback) {

    console.log(permissions)

    function success() {
        return {
            type: PermissionsConstants.PUT_PERMISSIONS_SUCCESS
        }
    }

    function request() {
        return {
            type: PermissionsConstants.PUT_PERMISSIONS_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        PermissionsService.putPermissions(permissions)
            .then(() => {
                dispatch(success())
                callback()
            }).catch(() => {
                dispatch(lostSession())
            })
    }
}