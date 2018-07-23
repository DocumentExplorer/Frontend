import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Container, Row } from 'mdbreact'
import ValidationError from '../messages/ValidationError'

export const MyModal = ({ test, toggle, sumbit, sumbitText, title, error, component: Component, ...props }) => {
    return (
        <Modal isOpen={test} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                <Component {...props} />
            </ModalBody>
            <ModalFooter>
                <Container>
                    <Row>
                        <Button outline onClick={sumbit}>{sumbitText}</Button>
                        <Button outline color="primary" onClick={toggle}>Zamknij</Button>
                    </Row>
                    <Row>
                        <ValidationError error={error} />
                    </Row>
                </Container>
            </ModalFooter>
        </Modal>
    )
}