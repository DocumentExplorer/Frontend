import axios from 'axios'
import { ApiConstants } from '../constants'

function getUsers() {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/users`,
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res)
            if (res) {
                resolve(res)
            }
        }).catch((err) => {
            console.log(err)
            reject(err)
        })
    })
}

export const UserService = {
    getUsers
}