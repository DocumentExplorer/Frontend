import axios from "axios";
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken'


export const LogsService = {
    findLogs
}

function findLogs(log) {
    
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/logs`,
            method: 'POST',
            data: log,
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

