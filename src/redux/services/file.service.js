import axios from 'axios'
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken';

export const FileService = {
    download
}

function download(id) {
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/files/${id}`,
            method: 'GET',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/pdf'
            },
            responseType: 'blob'
        }).then((res) => {
            const file = new Blob(
                [res.data],
                { type: 'application/pdf' }
            )
            const fileURL = URL.createObjectURL(file)
            window.open(fileURL)
            resolve()
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}