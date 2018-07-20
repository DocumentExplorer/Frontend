import { UserConstants, RegisterConstants } from '../constants'
import _ from 'lodash'

let initState = {
    request: true,
    proccessDelete: false,
    users: []
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
            console.log(_.filter(state.users, (item) => {
                return item.id !== action.id
            }))
            return {
                ...state,
                users: _.filter(state.users, (item) => {
                    return item.id !== action.id
                }),
                proccessDelete: false
            }
        default:
            return state
    }
}