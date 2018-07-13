import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, NavbarBrand, Navbar, NavbarNav } from 'mdbreact'
import { NavbarHOC } from './NavbarHOC.js'

function mapStateToProps({ loginStore }) {
    return {
        loginStore
    }
}

const NavbarAuthenticated = (props) => (
    <Navbar color="black">
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


const result = state => NavbarHOC(true, NavbarAuthenticated)(state)
export default connect(mapStateToProps)(result)