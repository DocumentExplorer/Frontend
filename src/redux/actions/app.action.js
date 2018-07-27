import { ApiConstants } from '../constants'

export function lostSession() {
    return {
        type: ApiConstants.LOST_SESSION
    }
}



