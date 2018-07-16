import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, NavbarBrand, Navbar, NavbarNav } from 'mdbreact'
import { NavbarHOC } from './NavbarHOC.js'
import { } from '../helpers/AccountTypeChecker'

function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

const NavbarAuthenticated = (props) => (
    <Navbar color="default-color">
        <Container>
            <NavbarBrand>
                Brand
            </NavbarBrand>
            <NavbarNav right>
                <Link to="/dashboard">
                    User
                </Link>
            </NavbarNav>
        </Container>
    </Navbar>
)

const NavbarAdmin = (props) => (
    <Navbar color="default-color">
        <Container>
            <NavbarBrand>
                Brand
            </NavbarBrand>
            <NavbarNav right>
                <Link to="/dashboard">
                    Admin
                </Link>
            </NavbarNav>
        </Container>
    </Navbar>
)

const result = state => NavbarHOC(state.loginResult.auth, NavbarAuthenticated, NavbarAdmin)(state)
export default connect(mapStateToProps)(result)