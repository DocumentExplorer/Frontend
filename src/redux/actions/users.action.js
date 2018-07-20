import { UserService } from '../services'
import { UserConstants } from '../constants'
import { logout } from '../../components/helpers/logoutHelper'

export function getUsers() {
    function success(users) {
        return {
            type: UserConstants.GET_USERS_SUCCESS,
            users
        }
    }

    function failed() {
        return {
            type: UserConstants.GET_USERS_FAIL
        }
    }
    function request() {
        return {
            type: UserConstants.GET_USERS_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        UserService.getUsers()
            .then((res) => {
                dispatch(success(res.data))
            }).catch((err) => {
                dispatch(logout())
                dispatch(failed())
            })
    }
}

export function deleteUser(id) {
    function success(id) {
        return {
            type: UserConstants.DELETE_USER_SUCCESS,
            id
        }
    }

    function request() {
        return {
            type: UserConstants.DELETE_USER_REQUEST
        }
    }
    return dispatch => {
        dispatch(request())
        UserService.deleteUser(id)
            .then(() => {
                dispatch(success(id))
            })
    }
}


