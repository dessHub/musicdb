import './Navbar.css';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, InputGroupText, InputGroup, Input } from 'reactstrap';
import { AiOutlineSearch, AiOutlineMore } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ setSearchValue }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);

    // redirect if not home
    if (location.pathname !== '/') {
      return navigate('/');
    }
  };
  return (
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
            <Input placeholder="Search..." onChange={(e) => handleOnChange(e)} />
          </InputGroup>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

Header.propTypes = {
  setSearchValue: PropTypes.func
};

export default Header;
