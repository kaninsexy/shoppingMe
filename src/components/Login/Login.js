import React from 'react';
// import { Row, Col, Divider, Input, Button, Form, notification } from 'antd';
import { notification } from 'antd';
import axios from '../../config/axios';
import localStorageService from '../../service/localStorageService';
import { withRouter } from 'react-router-dom';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Label,
  FormText,
  Container,
  Col,
  Row,
} from 'reactstrap';
import DropdownScrollNavbar from 'components/Navbars/DropdownScrollNavbar.js';
import Footer from 'components/Footers/Footer.js';

function Login(props) {
  const onFinish = (event) => {
    event.preventDefault();

    const body = {
      username: event.target[0].value,
      password: event.target[1].value,
    };
    axios
      .post('/user/login', body)
      .then((result) => {
        localStorageService.setToken(result.data.accessToken);
        console.log(result.data);
        props.setRole('user');
      })
      .catch((err) => {
        notification.error({
          message: 'Login fale..',
        });
      });
  };
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add('login-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('login-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);
  return (
    <>
      <DropdownScrollNavbar />
      <div className='page-header header-filter' filter-color='blue'>
        <div
          className='page-header-image'
          style={{
            backgroundImage: 'url(' + require('assets/img/login.jpg') + ')',
          }}
        ></div>
        <div className='content'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='5'>
                <Card className='card-login card-plain'>
                  <CardHeader className='text-center'>
                    <div className='logo-container'>
                      <img
                        alt='...'
                        src={require('assets/img/now-logo.png')}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={onFinish} inline>
                      <FormGroup>
                        <InputGroup
                          className={
                            'no-border input-lg' +
                            (firstFocus ? ' input-group-focus' : '')
                          }
                        >
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='now-ui-icons users_circle-08'></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            style={{ width: '270px' }}
                            placeholder='Username'
                            name='username'
                            type='email'
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>{' '}
                      <FormGroup>
                        <InputGroup
                          className={
                            'no-border input-lg' +
                            (lastFocus ? ' input-group-focus' : '')
                          }
                        >
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='now-ui-icons text_caps-small'></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            style={{ width: '270px' }}
                            placeholder='Password'
                            type='password'
                            name='password  '
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>{' '}
                      <Button
                        block
                        className='btn-round'
                        color='info'
                        size='lg'
                        type='submit'
                      >
                        Submit
                      </Button>
                    </Form>
                  </CardBody>
                  <CardFooter className='text-center'></CardFooter>
                  <div className='pull-left'>
                    <h6>
                      <a className='link footer-link' href='/register'>
                        Create Account
                      </a>
                    </h6>
                  </div>
                  <div className='pull-right'>
                    <h6>
                      <a className='link footer-link'>Need Help?</a>
                    </h6>{' '}
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default withRouter(Login);
