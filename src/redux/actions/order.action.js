import { OrdersService } from '../services'
import { OrdersConstants } from '../constants'
import _ from 'lodash'


export function finding(values) {
    function success(match) {
        return {
            type: OrdersConstants.FIND_ORDERS_SUCCESS,
            match
        }
    }
    function failed() {
        return {
            type: OrdersConstants.FIND_ORDERS_FAIL
        }
    }

    return dispatch => {
        _.pickBy(values, (key) => {

        })

        OrdersService.getOrders()
            .then((data) => {
                console.log(data)
                const filtered = _.filter(data, function (item) {
                    return _.startsWith(tag, input.val());
                });
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