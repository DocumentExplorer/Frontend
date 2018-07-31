import { LogsConstants, LoginConstants } from '../constants'
import { LogsService } from '../services'
import { lostSession } from './app.action';

export function findLogs(log) {

    function success(logs) {
        return {
            type: LogsConstants.FIND_LOGS_SUCCESS,
            logs
        }
    }

    function request() {
        return {
            type: LogsConstants.FIND_LOGS_REQUEST
        }
    }

    return dispatch => {
        LogsService.findLogs(log)
            .then((logs) => {
                dispatch(success(logs))
            }).catch(() => {
                dispatch(request())
            })
    }

}

