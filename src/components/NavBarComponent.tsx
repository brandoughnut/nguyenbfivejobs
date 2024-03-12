import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './styles/style.css';

function NavBarComponent() {
  return (
    <Navbar expand="lg" className='navText'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav className='m-auto'>
                <Nav.Link className='mx-3' as={Link} to='/Google'>Google</Nav.Link>
                <Nav.Link className='mx-3' as={Link} to='/Adobe'>Adobe</Nav.Link>
                <Nav.Link className='mx-3' as={Link} to='/Intel'>Intel</Nav.Link>
                <Nav.Link className='mx-3' as={Link} to='/Netflix'>Netlix</Nav.Link>
                <Nav.Link className='mx-3' as={Link} to='/Nvidia'>Nvidia</Nav.Link>
          </Nav>
        <div><a href="" className='navText' target='_blank' rel="noopener noreferrer">Additional</a></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;