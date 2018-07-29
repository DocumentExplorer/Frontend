import { PermissionsConstants } from '../constants'

const initState = {
    put_permission_result: '',
    put_permission_success: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case PermissionsConstants.PUT_PERMISSIONS_SUCCESS:
            return {
                ...state,
                put_permission_result: 'Udało się zmodyfikować',
                put_permission_success: true
            }
        case PermissionsConstants.PUT_PERMISSIONS_FAIL:
            return {
                ...state,
                put_permission_result: 'Nie udało się zmodyfikować',
                put_permission_success: false
            }
        case PermissionsConstants.PUT_PERMISSIONS_REQUEST:
            return {
                ...state,
                put_permission_result: '',
                put_permission_success: false
            }
        case PermissionsConstants.GET_PERMISSIONS_SUCCESS:
            return {
                ...state,
                permissions: action.permissions,
                requestPermissions: false
            }
        case PermissionsConstants.GET_PERMISSIONS_REQUEST:
            return {
                ...state,
                requestPermissions: true
            }
        default:
            return state
    }
}