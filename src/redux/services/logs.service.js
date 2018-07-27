import axios from "axios";
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken'

export const LogsService = {
    getLogs,
    getLogById
}

function getLogs() {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/logs`,
            method: 'GET',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            console.log(res)
            resolve(res.data)
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

function getLogById(id) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/logs/${id}`,
            method: 'GET',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}
