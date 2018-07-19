import axios from 'axios'
import { ApiConstants } from '../constants'

function register(values) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants}/users/register`,
            data: values,
            headers: {
                'Authorization': localStorage.getItem('token')
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