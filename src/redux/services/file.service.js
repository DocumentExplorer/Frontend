import axios from 'axios'
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken';

export const FileService = {
    download,
    upload
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

function upload(data, file) {
    let formData = new FormData()
    formData.append("file", file)
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/files/upload`,
            method: 'POST',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        }).then((res) => {
            console.log(res)
            resolve()
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}
