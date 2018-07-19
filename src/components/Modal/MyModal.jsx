import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'

export const MyModal = ({ test, toggle, sumbit, sumbitText, handleChange, component: Component, ...props }) => {
    return (
        <Modal isOpen={test} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <Component handleChange={handleChange} />
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>{' '}
                <Button color="primary" onClick={sumbit}>{sumbitText}</Button>
            </ModalFooter>
        </Modal>
    )
}