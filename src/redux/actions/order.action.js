import { OrdersService } from '../services'
import { OrderConstants } from '../constants'


export function getOrders() {
    function success(data) {
        return {
            type: OrderConstants.GET_ORDERS_SUCCCESS,
            data
        }
    }
    function failed(error) {
        return {
            type: OrderConstants.GET_ORDERS_FAIL,
            error
        }
    }
    function request() {
        return {
            type: OrderConstants.GET_ORDERS_REQUEST
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