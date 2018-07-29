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
            
            resolve(res.data)
        }).catch((err) => {
            
            reject()
        })
    })
}

function putPermissions(permissions) {
    console.log(permissions)
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/permissions`,
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            data: permissions
        }).then((res) => {
            console.log(res)
            resolve()
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

