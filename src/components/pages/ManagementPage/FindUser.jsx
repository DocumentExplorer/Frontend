import React from 'react'
import { Input, Row, Col } from 'mdbreact'

export const FindUserForm = ({ handleSearching, value }) => (
    <Row style={{ marginBottom: '20px', marginTop: '30px' }}>
        <Col md="6">
            <Input name="username" label="Szukaj użytkownika" onChange={(e) => handleSearching(e)} value={value} />
        </Col>
    </Row>
)