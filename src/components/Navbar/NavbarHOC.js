import React from 'react'

export const NavbarHOC = (test, Authenticated) => props => (
    test ? <Authenticated {...props} /> : ''
)
