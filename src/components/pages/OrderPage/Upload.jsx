import React, { Fragment } from 'react'
import Dropzone from 'react-dropzone'

export const UploadModal = ({ drop, border_color }) => (
    <Fragment>
        <Dropzone onDrop={(file) => drop(file)} className="dropzone" style={{ borderColor: border_color }}>
            <h5>Upuść tutaj swój plik</h5>
        </Dropzone>
    </Fragment>
)