import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">FakeFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Filmes</Nav.Link>
            <Nav.Link href="#link">Series</Nav.Link>
            <Nav.Link href="#actio">Favoritos</Nav.Link>            
          </Nav>
          <NavDropdown title="Usuario" id="basic-nav-dropdown" st>
                <NavDropdown.Item href="#action/3.1">Alterar Senha</NavDropdown.Item>                
                <NavDropdown.Item href="#action/3.2">Conta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sair</NavDropdown.Item>
                </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;