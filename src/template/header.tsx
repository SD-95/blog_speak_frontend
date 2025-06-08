import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>

            <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
                <Container>
                    <Navbar.Brand href="/">
                    <img src="/blog.svg" alt="Blog Icon" width="30" height="30" className="d-inline-block align-top me-2"/>Blog Speaks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarResponsive" />
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="" active>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/add">Add</Nav.Link>
                            <Nav.Link as={NavLink} to="/delete">Delete</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header