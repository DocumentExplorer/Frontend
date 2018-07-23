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

function getUser(username) {
    console.log(username)
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/users/username/${username}`,
            method: 'GET',
            headers: {
                'Authorization': getToken(),
            }
        }).then((res) => {
            console.log(res)
            resolve(res.data)
        }).catch((err) => {
            console.log(err)
            reject()
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

export function changePassword(data) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/users/change-password`,
            method: 'PUT',
            headers: {
                'Authorization': getToken()
            },
            data
        }).then((res) => {
            console.log(res)
            resolve()
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

export const UserService = {
    getUsers,
    deleteUser,
    getUser,
    changePassword
}