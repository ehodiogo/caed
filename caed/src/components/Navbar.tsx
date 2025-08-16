import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Image, Nav} from "react-bootstrap";

function NavbarComponent() {
    return(
        <>
                  <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
                alt="Logo da UFSM"
                src="/brasao.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
              CAED
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/formulario">Realizar Teste</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
};

export default NavbarComponent;