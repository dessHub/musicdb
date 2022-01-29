import './Navbar.css';
import { Navbar, Nav, NavItem, InputGroupText, InputGroup, Input } from 'reactstrap';
import { AiOutlineSearch, AiOutlineMore } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar className="nav-container" expand="md">
    <Link to="/" className="mr-3 navbar-brand">
      MusicDB
    </Link>
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
