import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, NavbarBrand, Navbar, NavbarNav, NavItem, Fa } from 'mdbreact'
import { NavbarHOC } from './NavbarHOC.js'

function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

const NavbarAuthenticated = (props) => (
    <Navbar color="default-color">
        <Container>
            <NavbarBrand>
                <h3>Brand</h3>
            </NavbarBrand>
            <NavbarNav right>
                <Link to="/dashboard">
                    <i class="fa fa-user" aria-hidden="true"></i>
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
                <h3>Brand</h3>
            </NavbarBrand>
            <NavbarNav className="align" right>
                <NavItem>
                    <Link to="/management">
                        <Fa icon="address-book" size="2x" />
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/dashboard">
                        <Fa icon="user" size="2x" />
                    </Link>
                </NavItem>
            </NavbarNav>
        </Container>
    </Navbar>
)

const result = state => NavbarHOC(state.loginResult.auth, NavbarAuthenticated, NavbarAdmin)(state)
export default connect(mapStateToProps)(result)