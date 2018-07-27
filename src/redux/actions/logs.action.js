import { LogsConstants, LoginConstants } from '../constants'
import { LogsService } from '../services'
import { lostSession } from './app.action';

export function getLogs() {
    function success(logs) {
        return {
            type: LogsConstants.GET_LOGS_SUCCESS,
            logs
        }
    }
    function request() {
        return {
            type: LogsConstants.GET_LOGS_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        console.log('start')
        LogsService.getLogs()
            .then((data) => {
                dispatch(success(data))
            }).catch(() => {
                dispatch(lostSession())
            })
    }
}

export function getLogById(id) {
    function success(log) {
        return {
            type: LogsConstants.GET_LOG_SUCCESS,
            log
        }
    }
    function failed() {
        return {
            type: LogsConstants.GET_LOG_FAIL
        }
    }
    function request() {
        return {
            type: LogsConstants.GET_LOG_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        LogsService.getLogById(id)
            .then((data) => {
                console.log(data)
                dispatch(success(data))
            }).catch(() => {
                dispatch(failed())
            })
    }
}