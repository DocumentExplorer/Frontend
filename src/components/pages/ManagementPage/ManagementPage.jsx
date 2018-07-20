import React from 'react'
import ApiHOC from '../../helpers/ApiHOC'
import { Container, Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'
import { connect } from 'react-redux'
import { getUsers, register, deleteUser } from '../../../redux/actions'
import { Users } from '../../Users/Users';
import './management.css'
import { MyModal } from '../../Modal/MyModal'
import { AddUserModal } from './AddUserModal'
import { DeleteUserConfirmation } from './DeleteUserConfirmation'
import { withRouter } from 'react-router-dom'

class ManagementPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            addWindow: false,
            deleteWindow: false,
            username: '',
            password: ''
        }
        this.toggleAdd = this.toggleAdd.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.changeLocation = this.changeLocation.bind(this)
    }

    toggleAdd() {
        this.setState({
            addWindow: !this.state.addWindow
        })
    }

    toggleDelete() {
        this.setState({
            deleteWindow: !this.state.deleteWindow
        })
    }
    handleSubmit() {
        this.props.register(this.state, () => {
            this.toggleAdd()
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    deleteUser(e) {
        this.setState({
            deleteWindow: true,
            deleteId: e
        })
    }

    changeLocation(username) {
        this.props.history.push(`/users/${username}`)
    }

    handleDelete(e) {
        this.setState({
            deleteWindow: false
        })
        this.props.deleteUser(this.state.deleteId)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    handleSelect(role) {
        console.log(role)
        this.setState({
            role: role.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <Container>
                <Row className="custom-row">
                    <Col>
                        <ApiHOC
                            component={Users}
                            data={this.props.users.users}
                            addWindow={this.props.users.request}
                            deleteUser={this.deleteUser}
                            changeLocation={this.changeLocation}
                        />
                        <Button onClick={this.toggleAdd}>Dodaj użytkownika</Button>
                        <MyModal
                            test={this.state.addWindow}
                            toggle={this.toggleAdd}
                            handleChange={this.handleChange}
                            handleSelect={this.handleSelect}
                            sumbit={this.handleSubmit}
                            sumbitText={"Dodaj"}
                            component={AddUserModal}
                            title={"Tworzenie użytkownika"}
                            role={this.state.role}
                            error={this.props.registerResult.error}
                        />
                        <MyModal
                            test={this.state.deleteWindow}
                            toggle={this.toggleDelete}
                            sumbit={this.handleDelete}
                            sumbitText={"Usuń"}
                            component={DeleteUserConfirmation}
                            title={"Usuwanie użytkownika"}
                            error={''}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ users, registerResult }) {
    return {
        users,
        registerResult
    }
}

const component = connect(mapStateToProps, { getUsers, register, deleteUser })(ManagementPage)
export { component as ManagementPage }