import React from 'react'
import './jumbotron.css'
import { Col, Row, Container } from 'mdbreact'

export const Jumbotron = ({ style, header: Header, body: Body, ...props }) => (
    <div className="jumobtron" style={style}>
        <Container>
            <Row>
                <Col md="3">
                    <Header />
                </Col>
                <Col md="9">
                    <Body />
                </Col>
            </Row>
        </Container>
    </div>
        )