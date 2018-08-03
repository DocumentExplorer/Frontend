import React from 'react'
import './jumbotron.css'
import { Col, Row } from 'mdbreact'

export const Jumbotron = ({ header: Header, body: Body, ...props }) => (
    <div className="jumbotron">
        <Row className="custom-row">
            <Col sm="12" md="6">
                <Header {...props} />
            </Col>
            <Col sm="12" md="6">
                <Body {...props} />
            </Col>
        </Row>
    </div>
)