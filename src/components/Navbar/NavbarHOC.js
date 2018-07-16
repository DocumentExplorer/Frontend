import React from 'react'
import { AccountTypeChecker } from '../helpers/AccountTypeChecker'

export const NavbarHOC = (test, Authenticated) => props => (
    test ? <AccountTypeChecker {...props} admin={} client={Authenticated} /> : ''
)
