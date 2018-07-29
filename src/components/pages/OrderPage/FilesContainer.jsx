import React from 'react'
import { Row } from 'mdbreact'
import { FilesList } from './Files'
import _ from 'lodash'
import { connect } from 'react-redux'
import { download } from '../../../redux/actions'

class FilesContainer extends React.Component {

    constructor() {
        super()
    }

    download(id) {
        this.props.download(id)
    }

    componentWillMount() {
        this.setState({
            files: this.props.order
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            files: nextProps.order
        })
    }

    render() {
        console.log(this.state)
        let files = _.pick(this.state.files, ['fvkId', 'fvpId', 'cmrId', 'nipId', 'notaId', 'ppId', 'rkId', 'zkId', 'zpId'])
        console.log(files)
        return (
            <Row style={{ marginBottom: '80px' }}>
                <FilesList
                    download={this.download}
                    names={['fvkId', 'fvpId', 'cmrId', 'nipId', 'notaId', 'ppId', 'rkId', 'zkId', 'zpId']}
                    files={
                        Object.keys(files).map((value) => {
                            return [value, files[value]]
                        })}
                    requires={_.pick(this.state.files, ['isFVKRequired', 'isFVPRequired', 'isCMRRequired', 'isNIPRequired',
                        'isNotaRequired', 'isPPRequired', 'isRKRequired', 'isZKRequired', 'isZPRequired'])}
                />
            </Row>
        )
    }
}

const mapStateToProps = ({ file }) => {
    return {
        file
    }
}

export default connect(mapStateToProps, { download })(FilesContainer)