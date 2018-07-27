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
    console.log(order)
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
            console.log(res)
            resolve()
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

function getOrderById(id) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/orders/${id}`,
            method: 'GET',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

function deleteOrder(id) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/orders/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            resolve()
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

function putOrder(order) {
    console.log(order)
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/orders`,
            method: 'PUT',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
            data: order
        }).then((res) => {
            console.log(res)
            resolve(res.data)
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

export const OrdersService = {
    getOrders,
    postOrder,
    getOrderById,
    deleteOrder,
    putOrder
}