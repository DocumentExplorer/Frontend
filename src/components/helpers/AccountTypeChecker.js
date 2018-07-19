import React from 'react'
import { connect } from 'react-redux'

const AccountTypeChecker = ({ admin: Admin, client: Client, ...rest }) => (
    rest.loginResult.accountType === 'admin'
        ? <Admin {...rest} />
        : <Client {...rest} />
)

function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

export default connect(mapStateToProps)(AccountTypeChecker)