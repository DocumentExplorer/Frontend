import { OrdersService } from '../services'
import { OrdersConstants } from '../constants'
import _ from 'lodash'
import DateFormat from '../../components/helpers/DateFormat';
import { lostSession } from './app.action'

export function getOrderById(id) {
    function success(order) {

        return {
            type: OrdersConstants.GET_ORDER_SUCCESS,
            order
        }
    }

    function failed() {
        return {
            type: OrdersConstants.GET_ORDER_FAIL
        }
    }
    function request() {
        return {
            type: OrdersConstants.GET_ORDER_REQUEST
        }
    }
    return dispatch => {
        dispatch(request())
        OrdersService.getOrderById(id)
            .then((order) => {
                dispatch(success(order))
            }).catch(() => {
                dispatch(failed())
            })
    }
}

export function finding(values) {
    function success(matchOrders) {
        return {
            type: OrdersConstants.FIND_ORDERS_SUCCESS,
            matchOrders
        }
    }
    function failed() {
        return {
            type: OrdersConstants.FIND_ORDERS_FAIL
        }
    }

    function request() {
        return {
            type: OrdersConstants.FIND_ORDERS_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        const lengthOfValues = Object.keys(values).length
        OrdersService.getOrders()
            .then((data) => {
                let filtered = []
                _.forIn(data, function (item) {
                    let i = 0
                    _.forIn(item, (value, key) => {
                        for (let keyTo in values) {
                            if (key == keyTo && _.startsWith(value, values[keyTo])) {
                                i++
                                if (i == lengthOfValues) {
                                    filtered.push(item)
                                }
                            }
                        }
                    })
                });
                dispatch(success(filtered))
            }).catch((err) => {
                dispatch(lostSession())
            })
    }
}

export function getOrders(callback) {
    function success(data) {
        return {
            type: OrdersConstants.GET_ORDERS_SUCCCESS,
            data
        }
    }
    function failed(error) {
        return {
            type: OrdersConstants.GET_ORDERS_FAIL,
            error
        }
    }
    function request() {
        return {
            type: OrdersConstants.GET_ORDERS_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        OrdersService.getOrders()
            .then((data) => {
                _.forEach(data, (value, i) => {
                    let converted = new DateFormat(value.date).convert()
                    value.date = converted
                })
                if (callback !== undefined) {
                    callback(data)
                }
                dispatch(success(data))
            }).catch(() => {
                dispatch(lostSession())
            })
    }
}

export function postOrder(order, callback) {

    function success() {
        return {
            type: OrdersConstants.POST_ORDER_SUCCESS,
        }
    }
    function failed() {
        return {
            type: OrdersConstants.POST_ORDER_FAIL,
        }
    }
    function request() {
        return {
            type: OrdersConstants.POST_ORDER_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        OrdersService.postOrder(order)
            .then(() => {
                dispatch(success())
                callback()
            }).catch(() => {
                dispatch(failed())
            })
    }
}