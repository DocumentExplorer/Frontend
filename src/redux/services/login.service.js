import axios from 'axios'
import { ApiConstants } from '../constants'

function login(values) {

    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/users/login`,
            method: 'POST',
            data: values
        })
            .then((res) => {
                console.log(res)
                if (res) {
                    resolve()
                }
            }).catch((err) => {
                reject('Użytkownik z tą nazwą i hasłem nie istnieje')
            })
    })
}

export const LoginService = {
    login
}