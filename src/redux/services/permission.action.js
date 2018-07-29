import axios from 'axios'
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken'

export const PermissionsService = {
    getPermissions,
    putPermissions
}

function getPermissions() {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/permissions`,
            headers: {
                'Authorization': getToken()
            },
            method: 'GET'
        }).then((res) => {
            console.log(res)
            resolve(res.data)
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

function putPermissions(permissions) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/permissions`,
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
            method: 'GET',
            data: permissions
        }).then((res) => {
            resolve()
        }).catch((err) => {
            reject()
        })
    })
}

