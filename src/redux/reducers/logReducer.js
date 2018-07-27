import { LogsConstants } from '../constants'

const initState = {
    requestLogs: true
}

export default function (state = initState, action) {
    switch (action.type) {
        case LogsConstants.GET_LOGS_SUCCESS:
            return {
                ...state,
                logs: action.logs,
                requestLogs: false
            }
        case LogsConstants.GET_LOGS_REQUEST:
            return {
                ...state,
                requestLogs: true
            }
        case LogsConstants.GET_LOG_SUCCESS:
            return {
                ...state,
                log: action.log,
                requestLog: false
            }
        case LogsConstants.GET_LOG_FAIL:
            return {
                ...state,
                requestLog: false
            }
        case LogsConstants.GET_LOG_REQUEST:
            return {
                ...state,
                requestLog: true
            }
        default:
            return state
    }
}