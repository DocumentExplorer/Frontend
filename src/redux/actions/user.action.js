import { UserService } from '../services'
import { UserConstants } from '../constants'

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
        request()
        UserService.getUsers()
            .then((res) => {
                success(res.data.users)
            }).catch((err) => {
                failed()
            })
    }

}