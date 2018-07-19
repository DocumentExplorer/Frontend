import React from 'react'
import ApiHOC from '../../helpers/ApiHOC'
import { Container, Row, Col } from 'mdbreact'
import { connect } from 'react-redux'
import { getUsers } from '../../../redux/actions'
import { Users } from '../../Users/Users';

class ManagementPage extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        console.log(this.props.users.request)
        return (
            <Container>
                <Row>
                    <Col sm="12" md="7">

                    </Col>
                    <Col md="5" sm="12">
                        <ApiHOC
                            component={Users}
                            data={this.props.users.users}
                            test={this.props.users.request}
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