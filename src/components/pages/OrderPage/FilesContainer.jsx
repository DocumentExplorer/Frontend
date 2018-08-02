import React from 'react'
import { Row } from 'mdbreact'
import { FilesList } from './Files'
import _ from 'lodash'
import { connect } from 'react-redux'
import { download, upload, deleteFile, toggleDelete, modifyOrderActualState, putRequirements } from '../../../redux/actions'
import { MyModal } from '../../Modal/MyModal'
import { UploadModal } from './Upload'
import { DeleteConfirmation } from '../ManagementPage/DeleteConfirmation';

class FilesContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            message: '',
            success: false,
            border_color: '#777777',
            modalDeleteFile: false,
            modalAddFile: false,
            fileToSend: {

            }
        }
        this.download = this.download.bind(this)
        this.drop = this.drop.bind(this)
        this.addFile = this.addFile.bind(this)
        this.toggleDelete = this.toggleDelete.bind(this)
        this.deleteFile = this.deleteFile.bind(this)
        this.onChange = this.onChange.bind(this)
        this.changeRequired = this.changeRequired.bind(this)
        this.toggleUpload = this.toggleUpload.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    drop(file) {
        if (file[file.length - 1].type == "application/pdf") {
            this.setState({
                message: 'Gotowy do przesłania',
                success: true,
                border_color: 'green',
                fileToPost: file[file.length - 1],
            })
        } else {
            this.setState({
                message: 'Zły typ pliku',
                success: false,
                border_color: 'red'
            })
        }

    }

    toggleDelete(fileType) {
        this.setState({
            file_delete_fileType: fileType,
            modalDeleteFile: !this.state.modalDeleteFile
        })
    }

    deleteFile() {
        this.props.deleteFile(this.props.order.id, this.state.file_delete_fileType, () => {
            this.props.modifyOrderActualState(this.state.files.id)
        })
        setTimeout(() => {
            this.toggleDelete()
        }, 500)
    }

    toggleUpload(fileType, isRequired) {
        if (fileType != undefined && isRequired != undefined) {
            fileType = fileType.slice(0, -2)
            this.setState({
                modalAddFile: !this.state.modalAddFile,
                fileToSend: {
                    fileType,
                    isRequired,
                }
            })
        } else {
            this.setState({
                modalAddFile: !this.state.modalAddFile,
                success: false,
                message: '',
                border_color: '#777777'
            })
        }

    }


    addFile() {

        if (this.state.success === true) {
            if (this.state.fileToSend.fileType === 'fvk') {
                if (this.state.invoiceNumber !== undefined && this.state.invoiceNumber.length > 0) {

                    this.props.upload(Object.assign(
                        this.state.fileToSend, {
                            invoiceNumber: this.state.invoiceNumber,
                            orderId: this.props.order.id
                        }), this.state.fileToPost, () => {
                            this.setState({
                                modalAddFile: false,
                                success: true,
                                message: '',
                                border_color: '#777777',
                                fileToSend: {},
                            })
                        })
                } else {
                    this.setState({
                        success: false,
                        message: 'Brak numeru faktury'
                    })
                }
            } else {
                this.props.upload(Object.assign(this.state.fileToSend, { orderId: this.props.order.id }), this.state.fileToPost, () => {
                    this.setState({
                        modalAddFile: false
                    })
                })
            }
        }
    }


    changeRequired(file, isRequired) {
        let name = isRequired[0]
        let value = isRequired[1]
        this.setState({
            files: {
                ...this.state.files,
                [name]: !value
            }
        })
        this.props.putRequirements({
            orderId: this.props.order.id,
            fileType: file,
            isRequired: !value
        })

    }
    download(fileType) {
        this.props.download(this.props.order.id, fileType)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            files: nextProps.order
        })
    }

    componentWillMount() {
        this.setState({
            files: this.props.order
        })
    }

    render() {


        let files = _.pick(this.state.files, ['fvkId', 'fvpId', 'cmrId', 'nipId', 'notaId', 'ppId', 'rkId', 'zkId', 'zpId'])
        let requires = _.pick(this.state.files, ['isFVKRequired', 'isFVPRequired', 'isCMRRequired', 'isNIPRequired',
            'isNotaRequired', 'isPPRequired', 'isRKRequired', 'isZKRequired', 'isZPRequired'])
        console.log(this.props.order)
        return (
            <Row style={{ marginBottom: '80px' }}>
                <FilesList
                    download={this.download}
                    names={['fvkId', 'fvpId', 'cmrId', 'nipId', 'notaId', 'ppId', 'rkId', 'zkId', 'zpId']}
                    files={
                        Object.keys(files).map((value) => {
                            return [value, files[value]]
                        })}
                    requires={
                        Object.keys(requires).map((value) => {
                            return [value, requires[value]]
                        })
                    }
                    permissions={this.props.permissions}
                    toggle={this.toggleUpload}
                    toggleDelete={this.toggleDelete}
                    changeRequired={this.changeRequired}
                />
                <MyModal
                    test={this.state.modalAddFile}
                    toggle={this.toggleUpload}
                    component={UploadModal}
                    title="Dodaj pliki"
                    sumbitText="Wyślij"
                    sumbit={this.addFile}
                    drop={this.drop}
                    message={this.state.message}
                    success={this.state.success}
                    border_color={this.state.border_color}
                    onChange={this.onChange}
                    fileType={this.state.fileToSend.fileType}
                />
                <MyModal
                    test={this.state.modalDeleteFile}
                    toggle={this.toggleDelete}
                    component={DeleteConfirmation}
                    title="Usuwanie"
                    sumbitText="Usuń"
                    sumbit={this.deleteFile}
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

export default connect(mapStateToProps, { download, upload, toggleDelete, deleteFile, modifyOrderActualState, putRequirements })(FilesContainer)