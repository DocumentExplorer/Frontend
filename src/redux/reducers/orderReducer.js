import { OrdersConstants } from '../constants'
import _ from 'lodash'
import DateFormat, { convertToNumbers } from '../../components/helpers/DateFormat'

export default function (state = { choose: true }, action) {
    switch (action.type) {
        case OrdersConstants.GET_ORDERS_SUCCCESS:

            _.forEach(action.data, (value) => {
                let { day, month, year } = value.time
                const converted = convertToNumbers(day, month, year)
                value.time = converted
            })
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
                ...state,
                waiting: true
            }
        case OrdersConstants.FIND_ORDERS_SUCCESS:
            const { matchOrders } = action
            _.forEach(matchOrders, (value) => {
                const date = new DateFormat(value.time).convert()
                const converted = convertToNumbers(date.day, date.month, date.year)
                value.time = converted
            })
            return {
                ...state,
                matchOrders,
                finding: false
            }
        case OrdersConstants.FIND_ORDERS_FAIL:
            return {
                ...state,
                matchOrders: undefined,
                error: 'Nie ma takiego zlecenia',
                finding: false
            }
        case OrdersConstants.FIND_ORDERS_REQUEST:
            return {
                ...state,
                finding: true,
                choose: false
            }
        default:
            return state
    }
}