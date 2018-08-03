import { LoginConstants } from '../../redux/constants'

export function logout() {
    return {
        type: LoginConstants.LOGOUT_SUCCESS
    }
}