import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from 'antd/lib/input/Search';
import { Row, Col } from 'antd';
import jwtDecode from 'jwt-decode';
import localStorageService from '../../service/localStorageService';
import { SearchContext } from '../../contexts/SearchContext';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  UncontrolledTooltip,
  NavLink,
} from 'reactstrap';

function ShoppingNavbar(props) {
  const [name, setName] = useState('');

  const {
    searchTerm: [searchTerm, setSearchTerm],
  } = useContext(SearchContext);

  const logout = () => {
    console.log(props);
    localStorageService.removeToken();
    props.setRole('guest');
  };

  useEffect(() => {
    const token = localStorageService.getToken();
    if (token) {
      const user = jwtDecode(token);
      setName(user.name);
    }
  }, []);

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className='bg-white fixed-top' expand='lg'>
        <UncontrolledDropdown className='button-dropdown'>
          <DropdownToggle
            caret
            tag='a'
            data-toggle='dropdown'
            href='#pablo'
            id='navbarDropdown'
            onClick={(e) => e.preventDefault()}
          >
            <span className='button-bar'></span>
            <span className='button-bar'></span>
            <span className='button-bar'></span>
          </DropdownToggle>
          <DropdownMenu aria-labelledby='navbarDropdown'>
            <DropdownItem header>Kanin Website</DropdownItem>
            <DropdownItem href='/contact'>
              {' '}
              <i className='now-ui-icons business_badge'></i>Contact
            </DropdownItem>
            <DropdownItem href='/about'>
              {' '}
              <i className='now-ui-icons business_briefcase-24'></i>About Us
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <div style={{ width: '250px' }} className='navbar-translate'>
          <NavbarBrand to='/' tag={Link} id='navbar-brand'>
            Kanin Website
          </NavbarBrand>
          <UncontrolledTooltip target='navbar-brand'>
            Designed by Kanin
          </UncontrolledTooltip>
          <button
            onClick={() => {
              document.documentElement.classList.toggle('nav-open');
              setCollapseOpen(!collapseOpen);
            }}
            aria-expanded={collapseOpen}
            className='navbar-toggler'
          >
            <span className='navbar-toggler-bar top-bar'></span>
            <span className='navbar-toggler-bar middle-bar'></span>
            <span className='navbar-toggler-bar bottom-bar'></span>
          </button>
        </div>

        <Search
          className='searchBox'
          placeholder='input search text'
          size='large'
          onSearch={(value) => setSearchTerm(value)}
          style={{ width: '' }}
        />

        <Collapse isOpen={collapseOpen} navbar>
          <Nav expand='' className='ml-auto' id='ceva' navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color='default'
                data-toggle='dropdown'
                href=''
                id='navbarDropdownMenuLink1'
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className='now-ui-icons shopping_shop'></i>
                <p>Register/Login</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby='navbarDropdownMenuLink1' right>
                <DropdownItem to='/register' tag={Link}>
                  <i className='now-ui-icons objects_key-25'></i>
                  Register
                </DropdownItem>
                <DropdownItem to='/login' tag={Link}>
                  <i className='now-ui-icons ui-1_lock-circle-open'></i>
                  Login
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem></NavItem>
          </Nav>
        </Collapse>
        <Nav>
          <NavLink href='/history'>
            <Row>
              <Col
                style={{
                  justifyContent: 'center',
                  //   width: '200px',
                  textAlign: 'center',
                  marginTop: '3px',
                  alignContent: 'center',
                }}
              >
                <i
                  style={{
                    marginTop: '10px',
                    color: 'grey',

                    fontSize: '20px',
                  }}
                  className='now-ui-icons users_circle-08'
                ></i>
                <div style={{ color: 'grey' }}>{name}</div>
              </Col>
            </Row>
          </NavLink>
        </Nav>
        <Nav>
          <NavLink href='/cart'>
            <i
              style={{
                color: 'grey',
                fontSize: '25px',
                marginTop: '10px',
                // width: '150px',
              }}
              className='now-ui-icons shopping_cart-simple'
            ></i>
          </NavLink>
        </Nav>
        <Nav>
          <NavLink href='/login' onClick={logout}>
            <i
              style={{
                color: 'grey',
                fontSize: '25px',
                // width: '150px',
                alignContent: 'center',
                marginTop: '10px',
              }}
              className='now-ui-icons media-1_button-power'
            ></i>
          </NavLink>
        </Nav>
      </Navbar>
    </>
  );
}

export default ShoppingNavbar;
