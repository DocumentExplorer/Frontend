import { UserConstants, RegisterConstants } from '../constants'
import _ from 'lodash'
import User from '../../components/pages/UserPage/User';

let initState = {
    request: true,
    requestUser: true,
    proccessDelete: false,
    users: [],
    put_password: ''
}

export default function (state = initState, action) {
    switch (action.type) {
        case UserConstants.GET_USERS_SUCCESS:
            let { users } = action
            return {
                ...state,
                users,
                request: false
            }
        case UserConstants.GET_USERS_FAIL:
            return {
                ...state,
                request: true
            }
        case UserConstants.GET_USERS_REQUEST:
            return {
                ...state,
                request: true
            }
        case UserConstants.DELETE_USER_SUCCESS:
            return {
                ...state,
                users: _.filter(state.users, (item) => {
                    return item.id !== action.id
                }),
                proccessDelete: false
            }
        case UserConstants.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                requestUser: false
            }
        case UserConstants.GET_USER_FAIL:
            return {
                ...state,
                err: action.err,
                requestUser: false
            }
        case UserConstants.GET_USER_REQUEST:
            return {
                ...state,
                requestUser: true
            }
        case UserConstants.PUT_PASSWORD_SUCCESS:
            return {
                ...state,
                put_password: true
            }
        case UserConstants.PUT_PASSWORD_FAIL:
            return {
                ...state,
                put_password: 'Nie udało się zmienić hasła'
            }
        default:
            return state
    }
}