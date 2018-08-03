import { LogsConstants } from '../constants'
import { LogsService } from '../services'
import _ from 'lodash'

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
        if (log.invoiceNumber !== "") {
            log.invoiceNumber = parseInt(log.invoiceNumber)
        }
        if (log.number !== "") {
            log.number = parseInt(log.number)
        }
        const logToSend = _.pickBy(log, (value, key) => {
            return value !== ""
        })
        dispatch(request())
        LogsService.findLogs(logToSend)
            .then((logs) => {
                dispatch(success(logs))
            }).catch(() => {
                dispatch(request())
            })
    }

}

