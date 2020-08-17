/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function Footer() {
  return (
    <>
      <footer className='footer'>
        <Container>
          <nav>
            <ul>
              <li>
                <a href='https://www.github.com/kaninsexy' target='_blank'>
                  Kanin Github
                </a>
              </li>
              <li>
                <a href='/about' target='_blank'>
                  About Us
                </a>
              </li>
              <li>
                <a href='' target='_blank'>
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className='copyright' id='copyright'>
            © {new Date().getFullYear()}, Designed by{' '}
            <a href='' target='_blank'>
              Kanin
            </a>
            . Coded by{' '}
            <a href='' target='_blank'>
              Creative Kanin
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
