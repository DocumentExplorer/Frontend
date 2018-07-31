import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { findLogs } from '../../../redux/actions'
import { Container } from 'mdbreact'
import { FindForm, FindResult } from './LogsViewer'
import _ from 'lodash'

class FindLogs extends React.Component {

    constructor() {
        super()
        this.state = {
            logs: [],
            log: {}
        }
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            logs: nextProps.logs.logs
        })
    }

    onChange(e) {
        this.setState({
            log: {
                ...this.state.log,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.log)
    }

    onClick() {
        let data = _.pick(this.state.log, ['event', 'number', 'clientCountry', 'owner1Name', 'username', 'clientIdentificationNumber', 'brokerCountry', 'brokerIdentificationNumber', 'invoiceNumber'])
        console.log(data)
        this.props.findLogs(data)
        this.setState({
            log: {}
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <FindForm
                        onClick={this.onClick}
                        onChange={this.onChange}
                        log={this.state.log}
                    />
                </Container>
                <FindResult
                    logs={this.state.logs}
                    request={this.props.logs.requestFinding}
                />
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