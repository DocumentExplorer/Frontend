import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { findLogs } from '../../../redux/actions'
import { Container } from 'mdbreact'
import { FindForm, FindResult } from './LogsViewer'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

class FindLogs extends React.Component {

    constructor() {
        super()
        this.state = {
            logs: [],
            log: {
                event: "",
                number: "",
                clientCountry: "",
                owner1Name: "",
                username: "",
                clientIdentificationNumber: "",
                brokerCountry: "",
                brokerIdentificationNumber: "",
                invoiceNumber: ""
            }
        }
        this.changeLocation = this.changeLocation.bind(this)
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

    changeLocation(id, event) {
        console.log(event)
        if (!(_.startsWith(event, 'Usun'))) {
            this.props.history.push(`/order/${id}`)
        }

    }

    onClick() {
        let data = _.pick(this.state.log, ['event', 'number', 'clientCountry', 'owner1Name', 'username', 'clientIdentificationNumber', 'brokerCountry', 'brokerIdentificationNumber', 'invoiceNumber'])
        this.props.findLogs(data)
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
                    changeLocation={this.changeLocation}
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

export default withRouter(connect(mapStateToProps, { findLogs })(FindLogs))