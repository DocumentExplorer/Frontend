import axios from 'axios'
import { getData } from '../mock/data'

function getOrders() {
    return new Promise((resolve, reject) => {
        //axios
        let success = true
        if (success) {
            resolve(getData())
        } else {
            reject('Użytkownik z tą nazwą i hasłem nie istnieje')
        }
    })
}

export const OrdersService = {
    getOrders
}