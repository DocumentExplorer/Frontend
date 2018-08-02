import axios from 'axios'
import { ApiConstants } from '../constants'
import { getToken } from '../../components/helpers/getToken';

export const FileService = {
    download,
    upload,
    deleteFile
}

function download(id, fileType) {
    console.log(id, fileType)
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/files/${id}/${fileType}`,
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
    if (data.invoiceNumber !== undefined) {
        data.invoiceNumber = parseInt(data.invoiceNumber)
    }
    console.log(data)
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
            axios({
                url: `${ApiConstants.rootURL}/${res.data.location}`,
                method: 'PUT',
                headers: {
                    'Authorization': getToken(),
                    'Content-Type': 'application/json'
                },
                data: data
            }).then((res) => {
                console.log(res)
                resolve()
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}

function deleteFile(id, fileType) {
    console.log(id, fileType)
    return new Promise((resolve, reject) => {
        axios({
            url: `${ApiConstants.rootURL}/files/${id}/${fileType}`,
            method: 'DELETE',
            headers: {
                'Authorization': getToken()
            }
        }).then((res) => {
            console.log(res)
            resolve()
        }).catch((err) => {
            console.log(err)
            reject()
        })
    })
}


