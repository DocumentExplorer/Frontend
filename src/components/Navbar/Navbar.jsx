import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, NavbarBrand, Navbar, NavbarNav, NavItem, Fa, Button } from 'mdbreact'
import { NavbarHOC } from './NavbarHOC.js'
import { logout } from '../../redux/actions'


function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

const NavbarAuthenticated = (props) => (

    <Navbar color="default-color">
        <Container>
            <NavbarNav left>
                <NavItem>
                    <Link to="/dashboard">
                        <Fa icon="user" size="2x" />
                    </Link>
                </NavItem>
            </NavbarNav>
            <NavbarNav right>
                <NavItem>
                    <button type="button" className="btn btn-outline-primary waves-effect logout" onClick={props.logout}>Wyloguj</button>
                </NavItem>
            </NavbarNav>
        </Container>
    </Navbar>

)

const NavbarAdmin = (props) => (
    <Navbar color="default-color">
        <Container>
            <NavbarNav className="align" left>
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
            <NavbarNav right>
                <NavItem>
                    <button type="button" className="btn btn-outline-primary waves-effect logout" onClick={props.logout}>Wyloguj</button>
                </NavItem>
            </NavbarNav>
        </Container>
    </Navbar>
)

const result = state => NavbarHOC(state.loginResult.auth, NavbarAuthenticated, NavbarAdmin)(state)
export default connect(mapStateToProps, { logout })(result)