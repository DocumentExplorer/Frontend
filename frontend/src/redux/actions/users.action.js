import { UserService } from '../services'
import { UserConstants } from '../constants'
import { lostSession } from './app.action'

export function getUsers() {
    function success(users) {
        return {
            type: UserConstants.GET_USERS_SUCCESS,
            users
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
                dispatch(lostSession())
            })
    }
}

export function getUser(username) {
    function success(user) {
        return {
            type: UserConstants.GET_USER_SUCCESS,
            user
        }
    }

    function failed(err) {
        return {
            type: UserConstants.GET_USER_FAIL,
            err
        }
    }
    function request() {
        return {
            type: UserConstants.GET_USER_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        UserService.getUser(username)
            .then((user) => {
                dispatch(success(user))
            }).catch(() => {
                dispatch(failed({ error: 'Nie ma takiego użytkownika' }))
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

export function changePassword(id, password, callback) {
    function success() {
        return {
            type: UserConstants.PUT_PASSWORD_SUCCESS
        }
    }
    function failed() {
        return {
            type: UserConstants.PUT_PASSWORD_FAIL
        }
    }
    return dispatch => {
        UserService.changePassword({ id, password })
            .then(() => {
                dispatch(success())
                callback()
            }).catch(() => {
                dispatch(failed())
            })
    }
}

export function clearValidation() {

    return dispatch => {
        dispatch({ type: UserConstants.CLEAR_VALIDATION })
    }
}


