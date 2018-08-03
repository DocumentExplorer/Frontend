import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getPermissions, putPermissions } from '../../../redux/actions'
import { UpdatePermissions } from './UpdatePermissions';
import { Button } from 'mdbreact'
import { MyModal } from '../../Modal/MyModal';


class UpdatePermissionsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modalUpdate: false
        }
        this.toggleModalUpdate = this.toggleModalUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updatePermissions = this.updatePermissions.bind(this)
    }

    toggleModalUpdate() {
        this.setState({
            modalUpdate: !this.state.modalUpdate
        })
    }

    updatePermissions() {
        this.props.putPermissions(this.state.permissions, () => {
            this.toggleModalUpdate()
            this.props.getPermissions()
        })

    }

    handleChange(e) {
        this.setState({
            permissions: {
                ...this.state.permissions,
                [e.target.name]: e.target.value
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            permissions: nextProps.permissions.permissions
        })
    }

    componentDidMount() {
        this.props.getPermissions()
    }

    render() {
        let allow = false
        if ((this.props.permissions.requestPermissions == false) && (this.state.modalUpdate == true)) {
            allow = true
        }
        return (
            <Fragment>
                <Button onClick={this.toggleModalUpdate}>Uprawnienia</Button>
                <MyModal
                    test={allow}
                    component={UpdatePermissions}
                    sumbit={this.updatePermissions}
                    sumbitText="Zmień"
                    title="Zmiana Uprawnień"
                    toggle={this.toggleModalUpdate}
                    handleChange={this.handleChange}
                    permissions={this.state.permissions}
                />
            </Fragment>
        )
    }
}

function mapStateToProps({ permissions }) {
    return {
        permissions
    }
}

const component = connect(mapStateToProps, { getPermissions, putPermissions })(UpdatePermissionsContainer)
export default component