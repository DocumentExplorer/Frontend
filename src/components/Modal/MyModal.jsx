import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'

export const MyModal = ({ test, toggle, sumbit, sumbitText, title, component: Component, ...props }) => {
    return (
        <Modal isOpen={test} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                <Component {...props} />
            </ModalBody>
            <ModalFooter>
                <Button outline onClick={sumbit}>{sumbitText}</Button>
                <Button outline color="primary" onClick={toggle}>Zamknij</Button>
            </ModalFooter>
        </Modal>
    )
}