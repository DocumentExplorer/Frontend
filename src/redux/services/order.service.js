import axios from 'axios'
import { getData } from '../mock/data'
import { getToken } from '../../components/helpers/getToken'
import { ApiConstants } from '../constants'

function getOrders() {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/orders`,
            method: 'GET',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject()
            console.log(err)
        })
    })
}

function postOrder(order) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/orders`,
            method: 'POST',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
            data: order
        }).then((res) => {
            resolve()
        }).catch((err) => {
            reject()
        })
    })
}

export const OrdersService = {
    getOrders,
    postOrder
}