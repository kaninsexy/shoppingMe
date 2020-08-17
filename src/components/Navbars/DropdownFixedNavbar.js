import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from 'reactstrap';

function DropdownFixedNavbar() {
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
      <Navbar className='navbar-absolute navbar-transparent' expand='lg'>
        <Container>
          <UncontrolledDropdown className='button-dropdown'>
            <DropdownToggle
              caret
              tag='a'
              data-toggle='dropdown'
              href=''
              id='navbarDropdown'
              onClick={(e) => e.preventDefault()}
            >
              <span className='button-bar'></span>
              <span className='button-bar'></span>
              <span className='button-bar'></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby='navbarDropdown'>
              <DropdownItem header>Kanin Webiste</DropdownItem>
              <DropdownItem href='/contact'>
                <i className='now-ui-icons business_badge'></i>Contact
              </DropdownItem>
              <DropdownItem href='/about'>
                <i className='now-ui-icons business_briefcase-24'></i>About Us
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className='navbar-translate'>
            <NavbarBrand to='/' tag={Link} id='navbar-brand'>
              Kanin Website
            </NavbarBrand>
            <UncontrolledTooltip target='navbar-brand'>
              Designed Kanin
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
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className='ml-auto' id='ceva' navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color='default'
                  data-toggle='dropdown'
                  href='#pablo'
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
        </Container>
      </Navbar>
    </>
  );
}

export default DropdownFixedNavbar;
