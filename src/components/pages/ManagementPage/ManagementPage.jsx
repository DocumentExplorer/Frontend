import React from 'react'
import ApiHOC from '../../helpers/ApiHOC'
import { Container, Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'
import { connect } from 'react-redux'
import { getUsers, register, deleteUser, getLogs } from '../../../redux/actions'
import { Users } from '../../Users/Users';
import './management.css'
import { MyModal } from '../../Modal/MyModal'
import { AddUserModal } from './AddUserModal'
import { DeleteUserConfirmation } from './DeleteUserConfirmation'
import Logs from '../../Logs/Logs'
import _ from 'lodash'

class ManagementPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            addWindow: false,
            deleteWindow: false,
            username: '',
            password: '',
            role: ''
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
            addWindow: !this.state.addWindow,
            registerErrors: ''
        })
    }

    toggleDelete() {
        this.setState({
            deleteWindow: !this.state.deleteWindow
        })
    }
    handleSubmit() {
        if (this.state.username != '' && this.state.password != '' && this.state.role != '') {
            this.props.register(this.state, () => {
                this.toggleAdd()
            })
            this.setState({
                registerErrors: ''
            })
        } else {
            this.setState({
                registerErrors: 'Wszystkie pola muszą być wypełnione'
            })
        }
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



    handleSelect(role) {
        this.setState({
            role: role.value
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            registerErrors: nextProps.registerResult.error
        })
    }

    componentDidMount() {
        this.props.getUsers()
        this.props.getLogs()
    }

    render() {
        console.log('management')
        console.log(this.props.logs)
        return (
            <Container>
                <Row className="custom-row">
                    <Col>
                        <ApiHOC
                            test={this.props.users.request}
                            component={Users}
                            data={this.props.users.users}
                            addWindow={this.props.users.request}
                            deleteUser={this.deleteUser}
                            changeLocation={this.changeLocation}
                        />
                        <div style={{ height: '50px' }}>

                        </div>
                        <ApiHOC
                            test={this.props.logs.requestLogs}
                            component={Logs}
                            data={this.props.logs.logs}
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
                            message={this.state.registerErrors}
                            success={this.props.registerSuccess}
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

function mapStateToProps({ users, registerResult, logs }) {
    return {
        users,
        registerResult,
        logs
    }
}

const component = connect(mapStateToProps, { getUsers, register, deleteUser, getLogs })(ManagementPage)
export { component as ManagementPage }