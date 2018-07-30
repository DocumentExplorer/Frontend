import React, { Fragment } from 'react'
import Dropzone from 'react-dropzone'
import { Input } from 'mdbreact'

export const UploadModal = ({ drop, fileType, border_color, onChange }) => (
    <Fragment>
        {
            fileType === 'fvk'
                ? <Input name="invoiceNumber" label="Numer faktury" onChange={(e) => onChange(e)} />
                : ''
        }
        <Dropzone onDrop={(file) => drop(file)} className="dropzone" style={{ borderColor: border_color }}>
            <h5>Upuść tutaj swój plik</h5>
        </Dropzone>
    </Fragment>
)