import { OrdersService } from '../services'
import { OrdersConstants, ApiConstants } from '../constants'
import _ from 'lodash'
import DateFormat from '../../components/helpers/DateFormat';
import { lostSession, updateActionOrder } from './app.action'

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
            }).catch(() => {
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
            .then((id) => {
                dispatch(success())
                callback(id)
            }).catch(() => {
                dispatch(failed())
            })
    }
}

export function deleteOrder(id, callback) {
    function success() {
        return {
            type: OrdersConstants.DELETE_ORDER_SUCCESS
        }
    }
    return dispatch => {
        OrdersService.deleteOrder(id)
            .then(() => {
                dispatch(success())
                callback()
            })
    }
}

export function putOrder(order, callback) {
    function success() {
        return {
            type: OrdersConstants.PUT_ORDER_SUCCESS
        }
    }
    function failed() {
        return {
            type: OrdersConstants.PUT_ORDER_FAIL
        }
    }
    function request() {
        return {
            type: OrdersConstants.PUT_ORDER_REQUEST
        }
    }

    return dispatch => {
        dispatch(request())
        OrdersService.putOrder(order).then(() => {
            dispatch(success())
            updateActionOrder(order.id, dispatch)
            callback()
        }).catch(() => {
            dispatch(failed())
        })
    }
}

export function modifyOrderActualState(id) {
    function success(order) {
        return {
            type: ApiConstants.MODIFY_ORDER_ACTUAL_STATE,
            order
        }
    }
    return dispatch => {
        OrdersService.getOrderById(id)
            .then((res) => {
                dispatch(success(res))
            })
    }

}

export function putRequirements(requirements) {
    function success() {
        return {
            type: OrdersConstants.PUT_REQUIREMENTS_SUCCESS
        }
    }

    return dispatch => {
        OrdersService.putRequirements(requirements).then(() => {
            dispatch(success())
        }).catch(() => {
            
        })
    }
}