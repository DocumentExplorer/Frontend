import React from 'react'
import ApiHOC from '../../helpers/ApiHOC'
import { Container, Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'
import { connect } from 'react-redux'
import { getUsers } from '../../../redux/actions'
import { Users } from '../../Users/Users';
import './management.css'
import { MyModal } from '../../Modal/MyModal'
import { AddUserModal } from './AddUserModal'

class ManagementPage extends React.Component {

    constructor() {
        super()
        this.state = {
            test: false
        }
        this.toggle = this.toggle.bind(this);

    }

    componentDidMount() {
        this.props.getUsers()
    }
    deleteUser(id) {
        this.setState({

        })
    }
    toggle() {
        this.setState({
            test: !this.state.test
        })
    }
    handleChange(e) {

    }
    handleSubmit() {

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
                            deleteUser={this.deleteUser}
                        />
                        <Button onClick={this.toggle}>Dodaj użytkownika</Button>
                        <MyModal
                            test={this.state.test}
                            toggle={this.toggle}
                            handleChange={this.handleChange}
                            sumbit={this.handleSubmit}
                            sumbitText={"Dodaj"}
                            component={AddUserModal}
                        />
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