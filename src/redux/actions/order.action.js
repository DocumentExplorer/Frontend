import { OrdersService } from '../services'
import { OrdersConstants } from '../constants'
import _ from 'lodash'


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

    return dispatch => {
        OrdersService.getOrders()
            .then((data) => {
                const filtered = _.filter(data, function (item) {
                    _.forIn(item, (value, key) => {
                        _.forIn(values, (valueTo, keyTo) => {
                            if(key == keyTo && _.startsWith(value,valueTo)){
                                return item
                            }
                        })
                    })
                });
                console.log(filtered)
                dispatch(success(filtered))
            }).catch((err) => {
                dispatch(failed())
            })
    }


}

export function getOrders() {
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
                dispatch(success(data))
            }).catch(() => {
                dispatch(failed())
            })
    }
}