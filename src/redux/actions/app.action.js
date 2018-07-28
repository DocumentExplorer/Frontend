import { ApiConstants } from '../constants'

export function lostSession() {
    localStorage.clear()
    return {
        type: ApiConstants.LOST_SESSION
    }
}



