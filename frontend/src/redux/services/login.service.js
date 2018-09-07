import axios from 'axios'
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken';

function login(values) {

    return new Promise((resolve, reject) => {

        axios({
            url: `${ApiConstants.rootURL}/users/login`,
            method: 'POST',
            data: values,
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                if (res) {
                    resolve(res.data)
                }
            }).catch((err) => {
                console.log(err)
                reject('Użytkownik z tą nazwą i hasłem nie istnieje')
            })
    })
}

function logout() {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/users/logout`,
            headers: {
                'Authorization': getToken()
            }
        }).then((res) => {
            
            if (res) {
                resolve()
            }
        }).catch((err) => {
            
            reject()
        })
    })
}

export const LoginService = {
    login,
    logout
}