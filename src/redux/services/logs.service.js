import axios from "axios";
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken'
import _ from 'lodash'

export const LogsService = {
    findLogs
}

function findLogs(log) {
    if (log.invoiceNumber !== undefined) {
        log.invoiceNumber = parseInt(log.invoiceNumber)
    }
    if (log.number !== undefined) {
        log.number = parseInt(log.number)
    }
    return new Promise((resolve, reject) => {
        const logToSend = _.pickBy(log, (value, key) => {
            return value !== ""
        })
        axios({
            url: `${ApiConstants.rootURL}/logs`,
            method: 'POST',
            data: logToSend,
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data)
            resolve(res.data)
        }).catch((err) => {
            reject()
        })
    })
}

