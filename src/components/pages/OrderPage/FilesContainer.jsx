import React from 'react'
import { Row } from 'mdbreact'
import { FilesList } from './Files'
import _ from 'lodash'
import { connect } from 'react-redux'
import { download, upload, toggleAdd } from '../../../redux/actions'
import { MyModal } from '../../Modal/MyModal'
import { UploadModal } from './Upload'

class FilesContainer extends React.Component {

    constructor() {
        super()
        this.download = this.download.bind(this)
        this.drop = this.drop.bind(this)
    }

    drop(file) {
        if (file[file.length - 1].type == "application/pdf") {
            console.log(file)
        }

    }

    addFile(file) {
        this.props.upload()
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
        let files = _.pick(this.state.files, ['fvkId', 'fvpId', 'cmrId', 'nipId', 'notaId', 'ppId', 'rkId', 'zkId', 'zpId'])
        console.log(this.props)
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
                    toggle={this.props.toggleAdd}
                />
                <MyModal
                    test={this.props.file.modalAddFile}
                    toggle={this.props.toggleAdd}
                    component={UploadModal}
                    title="Dodaj pliki"
                    sumbitText="Wyślij"
                    sumbit={this.addFile}
                    drop={this.drop}
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

export default connect(mapStateToProps, { download, upload, toggleAdd })(FilesContainer)