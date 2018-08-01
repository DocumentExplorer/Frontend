import { LackService } from '../services'
import { LackConstants } from '../constants'

export function getLacks() {

    function success(lacks) {
        return {
            type: LackConstants.GET_LACKS_SUCCESS,
            lacks
        }
    }

    function request() {
        return {
            type: LackConstants.GET_LACKS_REQUEST
        }
    }

    return dispatch => {
        LackService.getLacks()
            .then((lacks) => {
                dispatch(success(lacks))
            }).catch(() => {
                dispatch(request())
            })
    }
}