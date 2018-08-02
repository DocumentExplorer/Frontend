import { ApiConstants, OrdersConstants } from '../constants'
import { OrdersService } from '../services';

export function lostSession() {
    localStorage.clear()
    return {
        type: ApiConstants.LOST_SESSION
    }
}


export function updateActionOrder(id, dispatch) {

    function updateOrder(order) {
        console.log(order)
        return {
            type: OrdersConstants.GET_ORDER_SUCCESS,
            order
        }
    }

    OrdersService.getOrderById(id)
        .then((res) => {
            console.log('update')
            dispatch(updateOrder(res))
        }).catch(() => {
            dispatch(lostSession())
        })
}




