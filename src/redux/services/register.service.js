import axios from 'axios'
import { ApiConstants } from '../constants'
import _ from 'lodash'

function register(values) {
    console.log(values)
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants}/users/register`,
            data: _.pick(values, ['username', 'password', 'role']),
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res)
            resolve()
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })

}

export const RegisterService = {
    register
}