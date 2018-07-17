import { OrdersConstants } from '../constants'

export default function (state = {}, action) {
    switch (action.type) {
        case OrdersConstants.GET_ORDERS_SUCCCESS:
            console.log(action.data)
            return {
                ...state,
                data: action.data,
                waiting: false,
                error: undefined,
                
            }
        case OrdersConstants.GET_ORDERS_FAIL:
            return {
                ...state,
                error: action.error,
                waiting: false
            }
        case OrdersConstants.GET_ORDERS_REQUEST:
            return {
                waiting: true
            }
        case OrdersConstants.FIND_ORDERS_SUCCESS:
            const { matchOrders } = action
            return {
                ...state,
                matchOrders
            }
        case OrdersConstants.FIND_ORDERS_FAIL:
            return {
                ...state,
                matchOrders: undefined,
                error: 'Nie ma takiego zlecenia'
            }
        default:
            return state
    }
}