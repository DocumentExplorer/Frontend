import React from 'react'
import './jumbotron.css'
import { Col, Row, Container } from 'mdbreact'

export const Jumbotron = ({ header: Header, body: Body, ...props }) => (
    <div className="jumobtron">
        <Row>
            <Col sm="12" md="6">
                <Header {...props} />
            </Col>
            <Col sm="12" md="6">
                <Body />
            </Col>
        </Row>
    </div>
)