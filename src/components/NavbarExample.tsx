import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const NavbarExample = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                </Nav>
                <Form className="d-flex ms-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavbarExample;