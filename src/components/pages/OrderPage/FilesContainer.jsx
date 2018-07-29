import React from 'react'
import { Row } from 'mdbreact'
import { FilesList } from './Files'
import _ from 'lodash'

class FilesContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            files: {}
        }
    }

    componentDidMount() {
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
        console.log(this.props)
        return (
            <Row>
                <FilesList
                    names={['fvkId', 'fvpId', 'cmrId', 'nipId', 'notaId', 'ppId', 'rkId', 'zkId', 'zpId']}
                    files={_.pick(this.state.files, ['fvkId', 'fvpId', 'cmrId', 'nipId', 'notaId', 'ppId', 'rkId', 'zkId', 'zpId'])}
                    requires={_.pick(this.state.files, ['isFVKRequired', 'isFVPRequired', 'isCMRRequired', 'isNIPRequired',
                        'isNotaRequired', 'isPPRequired', 'isRKRequired', 'isZKRequired', 'isZPRequired'])}
                />
            </Row>
        )
    }
}

export default FilesContainer