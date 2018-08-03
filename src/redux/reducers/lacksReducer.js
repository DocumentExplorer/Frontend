import { LackConstants } from "../constants";

const initState = {
    requestLacks: true
}

export default function (state = initState, action) {
    switch (action.type) {
        case LackConstants.GET_LACKS_SUCCESS:
            return {
                ...state,
                lacks: action.lacks,
                requestLacks: false
            }
        case LackConstants.GET_LACKS_REQUEST:
            return {
                ...state,
                requestLacks: true
            }
        default:
            return state
    }
}