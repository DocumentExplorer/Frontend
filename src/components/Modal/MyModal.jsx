import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Container, Row } from 'mdbreact'

export const MyModal = ({ test, toggle, sumbit, sumbitText, title, error, component: Component, ...props }) => {
    let danger = 'border border-danger rounded custom-error'
    if(error === '') {
        danger = 'custom-error'
    }
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
                        <span className={danger}>
                            <h5 className="text-center red-text">{error}</h5>
                        </span>
                    </Row>
                </Container>
            </ModalFooter>
        </Modal>
    )
}