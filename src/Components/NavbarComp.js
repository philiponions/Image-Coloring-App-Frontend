import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Photo Recoloring App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={styles.navContainer}>
            <Nav.Link href="#home">Huey Gonzales</Nav.Link>   
            <div className='ml-auto'>
            <NavDropdown title="Options" style={styles.optionsContainer} id="basic-nav-dropdown">                            
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            </div>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles={
  optionsContainer: {        
  },
  navContainer: {    
    flex: 1,
    justifyContent: "space-between"
  }
}

export default NavbarComp;