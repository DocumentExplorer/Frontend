import axios from 'axios'


function login(values) {
    return new Promise((resolve, reject) => {
        //axios()
        let success = true
        if (success) {
            resolve()
        } else {
            reject('Użytkownik z tą nazwą i hasłem nie istnieje')
        }
    })
}

export const LoginService = {
    login
}