import { ApiConstants } from '../constants'
import { OrdersService } from '../services';

export function lostSession() {
    localStorage.clear()
    return {
        type: ApiConstants.LOST_SESSION
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



