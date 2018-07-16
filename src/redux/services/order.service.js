import axios from 'axios'
import { getData } from '../mock/data'

function getOrders() {
    return new Promise((resolve, reject) => {
        //axios
        setTimeout(() => {
            let success = true
            if (success) {
                resolve(getData())
            } else {
                reject('Użytkownik z tą nazwą i hasłem nie istnieje')
            }
        }, 3000)

    })
}

export const OrdersService = {
    getOrders
}