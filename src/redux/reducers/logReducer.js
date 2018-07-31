import { LogsConstants } from '../constants'

const initState = {
    requestFinding: true,
}

export default function (state = initState, action) {
    switch (action.type) {
        case LogsConstants.FIND_LOGS_SUCCESS:
            return {
                ...state,
                logs: action.logs,
                requestFinding: false
            }
        case LogsConstants.FIND_LOGS_REQUEST:
            return {
                ...state,
                requestFinding: true
            }
        default:
            return state
    }
}