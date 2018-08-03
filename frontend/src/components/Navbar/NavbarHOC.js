import React from 'react'
import AccountTypeChecker from '../helpers/AccountTypeChecker'

export const NavbarHOC = (test, Client, Admin) => props => (
    test ? <AccountTypeChecker {...props} client={Client} admin={Admin} /> : ''
)
