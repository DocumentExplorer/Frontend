import { OrdersService } from '../services'
import { OrderConstants } from '../constants'


export function getOrders() {
    function success(data) {
        return {
            type: OrderConstants.GET_ORDERS_SUCCCESS,
            data
        }
    }
    function failed(err) {
        return {
            type: OrderConstants.GET_ORDERS_FAIL,
            err
        }
    }

    return dispatch => {
        OrdersService.getOrders()
            .then((data) => {
                dispatch(success(data))
            }).catch(() => {
                dispatch(failed())
            })
    }


}