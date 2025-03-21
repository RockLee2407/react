import { Navbar, Container } from "react-bootstrap";

function Header() {
    return(
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Welcome to ReactJS Lab</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header