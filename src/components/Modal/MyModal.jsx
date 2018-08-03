import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Container, Row } from 'mdbreact'
import ValidationError from '../messages/ValidationError'
import Success from '../messages/Success'

export const MyModal = ({ test, toggle, sumbit, sumbitText, title, message, success, size = "md", component: Component, ...props }) => (
    <Modal isOpen={test} toggle={toggle} size={size}>
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
                    {
                        success
                            ? <Success message={message} />
                            : <ValidationError message={message} />
                    }
                </Row>
            </Container>
        </ModalFooter>
    </Modal>
)
