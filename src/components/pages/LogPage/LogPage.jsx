import React from 'react'
import { connect } from 'react-redux'
import { getLogById } from '../../../redux/actions'
import ApiHOC from '../../helpers/ApiHOC';
import { Log } from './Log'

class LogPage extends React.Component {
    componentDidMount() {
        const { match: { params: { id } } } = this.props
        this.props.getLogById(id)
        console.log('asd')
    }

    render() {
        console.log(this.props)
        return (
            <ApiHOC
                test={this.props.logs.requestLog}
                component={Log}
            />
        )
    }

}

const mapStateToProps = ({ logs }) => {
    return {
        logs
    }
}

const page = connect(mapStateToProps, { getLogById })(LogPage)
export { page as LogPage }