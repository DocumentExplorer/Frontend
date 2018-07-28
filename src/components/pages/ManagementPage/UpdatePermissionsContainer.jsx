import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getPermissions } from '../../../redux/actions'
import ApiHOC from '../../helpers/ApiHOC';
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

    }

    handleChange() {

    }

    componentDidMount() {
        this.props.getPermissions()
    }

    render() {
        let allow = false
        if ((this.props.permissions.requestPermissions == false) && (this.state.modalUpdate == true)) {
            console.log('dawaj')
            allow = true
        }
        return (
            <Fragment>
                <Button onClick={this.toggleModalUpdate}>Pozwolenia</Button>
                <MyModal
                    test={allow}
                    component={UpdatePermissions}
                    sumbit={this.updatePermissions}
                    sumbitText="Zmień"
                    title="Uprawnienia"
                    toggle={this.toggleModalUpdate}
                    handleChange={this.handleChange}
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

const component = connect(mapStateToProps, { getPermissions })(UpdatePermissionsContainer)
export default component