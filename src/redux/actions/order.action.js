import { OrdersService } from '../services'
import { OrdersConstants } from '../constants'
import _ from 'lodash'
import DateFormat from '../../components/helpers/DateFormat';


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
                dispatch(failed())
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
                    let converted = new DateFormat(value.time).convert()
                    value.time = converted
                })
                if(callback !== undefined){
                    callback(data)
                }
                dispatch(success(data))
            }).catch(() => {
                dispatch(failed())
            })
    }
}