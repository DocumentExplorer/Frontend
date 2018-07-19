import React from 'react'
import ApiHOC from '../../helpers/ApiHOC'
import { Container, Row, Col, Button } from 'mdbreact'
import { connect } from 'react-redux'
import { getUsers } from '../../../redux/actions'
import { Users } from '../../Users/Users';
import './management.css'

class ManagementPage extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        console.log(this.props.users.request)
        return (
            <Container>
                <Row className="custom-row">
                    <Col>
                        <ApiHOC
                            component={Users}
                            data={this.props.users.users}
                            test={this.props.users.request}
                        />
                        <Button>Dodaj użytkownika</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

const component = connect(mapStateToProps, { getUsers })(ManagementPage)
export { component as ManagementPage }