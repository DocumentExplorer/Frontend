import axios from 'axios'
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken';

function getUsers() {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/users`,
            method: 'GET',
            headers: {
                'Authorization': getToken()
            }
        }).then((res) => {
            resolve(res)

        }).catch((err) => {
            console.log(err)
            reject(err)
        })
    })
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/users/delete/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': getToken()
            }
        }).then((res) => {
            resolve()
        }).catch((err) => {
            reject()
        })
    })
}

export const UserService = {
    getUsers,
    deleteUser
}