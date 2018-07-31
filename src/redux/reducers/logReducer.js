import { LogsConstants } from '../constants'

const initState = {
    requestFindLogs: true,
}

export default function (state = initState, action) {
    switch (action.type) {
        case LogsConstants.FIND_LOGS_SUCCESS:
            return {
                ...state,
                logs: action.logs,
                requestFindLogs: false
            }
        case LogsConstants.FIND_LOGS_REQUEST:
            return {
                ...state,
                requestFindLogs: true
            }
    }
}