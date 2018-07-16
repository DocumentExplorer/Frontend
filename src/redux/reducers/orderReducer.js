import { OrderConstants } from '../constants'

export default function (state = {}, action) {
    switch (action.type) {
        case OrderConstants.GET_ORDERS_SUCCCESS:
            return {
                data: action.data
            }
        case OrderConstants.GET_ORDERS_FAIL:
            return {
                error: action.error
            }
        case OrderConstants.GET_ORDERS_REQUEST:
            return {
                waiting: true
            }
        default:
            return state
    }
}