import React, { Fragment } from 'react'
import Dropzone from 'react-dropzone'

export const UploadModal = ({ drop }) => (
    <Fragment>
        <Dropzone onDrop={(file) => drop(file)} className="dropzone">
            <h5>Upuść tutaj swój plik</h5>
        </Dropzone>
    </Fragment>
)