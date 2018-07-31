import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { findLogs } from '../../../redux/actions'
import { Container } from 'mdbreact'
import { FindForm, FindResult } from './LogsViewer'

class FindLogs extends React.Component {



    render() {
        return (
            <Fragment>
                <Container>
                    <FindForm />
                </Container>
                {/* <FindResult /> */}
            </Fragment>
        )
    }
}

const mapStateToProps = ({ logs }) => {
    return {
        logs
    }
}

export default connect(mapStateToProps, { findLogs })(FindLogs)