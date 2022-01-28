import './Navbar.css';
import { Navbar, Nav, NavbarBrand, NavItem, InputGroupText, InputGroup, Input } from 'reactstrap';
import { AiOutlineSearch, AiOutlineMore } from 'react-icons/ai';

const Header = () => (
  <Navbar className="nav-container" expand="md">
    <NavbarBrand href="/" className="mr-3 navbar-brand">
      MusicDB
    </NavbarBrand>
    <AiOutlineMore />
    <Nav className="me-auto" navbar>
      <NavItem>
        <InputGroup>
          <InputGroupText>
            <AiOutlineSearch />
          </InputGroupText>
          <Input placeholder="Search..." />
        </InputGroup>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
