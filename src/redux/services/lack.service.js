import Axios from "axios";
import { ApiConstants} from '../constants'
import { getToken } from '../../components/helpers/getToken';

export const LackService = {
    getLacks
}

function getLacks() {
    return new Promise((resolve,reject) => {
        Axios({
            url: `${ApiConstants.rootURL}/orders/lacks`,
            method: 'GET',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/pdf'
            },
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}