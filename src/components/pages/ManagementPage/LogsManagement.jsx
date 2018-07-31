import React from 'react'
import { connect } from 'react-redux'
import { findLogs } from '../../../redux/actions'

class FindLogs extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = ({ logs }) => {
    return {
        logs
    }
}

export default connect(mapStateToProps, { findLogs })(FindLogs)