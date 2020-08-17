import React from 'react';
import { notification } from 'antd';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap'; // core components
import FixedTransparentNavbar from 'components/Navbars/FixedTransparentNavbar.js';
import Footer from 'components/Footers/Footer.js';

import axios from '../../config/axios';
import { withRouter } from 'react-router-dom';

const layout = {
  labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
  wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 },
};

function Register(props) {
  const onFinish = (event) => {
    const body = {
      username: event.target[0].value,
      password: event.target[1].value,
      name: event.target[2].value,
      address: event.target[3].value,
    };
    axios
      .post('user/register', body)
      .then((res) => {
        notification.success({
          message: 'Register Success',
        });
        props.history.push('/login');
      })
      .catch((err) => {
        notification.error({
          message: 'Register false',
        });
      });
  };

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add('signup-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('signup-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);

  return (
    <>
      <FixedTransparentNavbar />
      <div className='page-header header-filter' filter-color='black'>
        <div
          className='page-header-image'
          style={{
            backgroundImage: 'url(' + require('assets/img/bg18.jpg') + ')',
          }}
        ></div>
        <div className='content'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='6' lg='4'>
                <div className='info info-horizontal'>
                  <div className='icon icon-info'>
                    <i className='now-ui-icons media-2_sound-wave'></i>
                  </div>
                  <div className='description'>
                    <h5 className='info-title'>Marketing</h5>
                    <p className='description'>
                      We've created the marketing campaign of the website. It
                      was a very interesting collaboration.
                    </p>
                  </div>
                </div>
                <div className='info info-horizontal'>
                  <div className='icon icon-info'>
                    <i className='now-ui-icons media-1_button-pause'></i>
                  </div>
                  <div className='description'>
                    <h5 className='info-title'>Fully Coded in React 16</h5>
                    <p className='description'>
                      We've developed the website with React 16 and CSS3. The
                      client has access to the code using GitHub.
                    </p>
                  </div>
                </div>
                <div className='info info-horizontal'>
                  <div className='icon icon-info'>
                    <i className='now-ui-icons users_single-02'></i>
                  </div>
                  <div className='description'>
                    <h5 className='info-title'>Built Audience</h5>
                    <p className='description'>
                      There is also a Fully Customizable CMS Admin Dashboard for
                      this product.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className='mr-auto' md='6' lg='4'>
                <Card className='card-signup'>
                  <CardBody>
                    <CardTitle className='text-center' tag='h4'>
                      Register
                    </CardTitle>
                    <div className='social text-center'>
                      <Button
                        className='btn-icon btn-round mr-2'
                        color='facebook'
                      >
                        <i className='fab fa-facebook'></i>
                      </Button>
                      <Button
                        className='btn-icon btn-round mr-2'
                        color='github '
                      >
                        <i className='fab fa-github'></i>
                      </Button>
                      <Button className='btn-icon btn-round' color='google'>
                        <i className='fab fa-google'></i>
                      </Button>{' '}
                      <Button className='btn-icon btn-round' color='twitter'>
                        <i className='fab fa-twitter'></i>
                      </Button>{' '}
                      <h5 className='card-description'>Register Here</h5>
                    </div>
                    <Form onSubmit={onFinish} className='form'>
                      <FormGroup>
                        <InputGroup
                          className={firstFocus ? ' input-group-focus' : ''}
                        >
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='now-ui-icons users_circle-08'></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            style={{ width: '200px' }}
                            placeholder='Email'
                            name='username'
                            type='email'
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>{' '}
                      <FormGroup>
                        <InputGroup
                          className={lastFocus ? ' input-group-focus' : ''}
                        >
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='now-ui-icons text_caps-small'></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            style={{ width: '200px' }}
                            placeholder='Password'
                            type='password'
                            name='password  '
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>{' '}
                      <FormGroup>
                        {' '}
                        <InputGroup
                          className={firstFocus ? 'input-group-focus' : ''}
                        >
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='now-ui-icons users_circle-08'></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            style={{ width: '200px' }}
                            autoComplete='fullname'
                            placeholder='Name'
                            type='text'
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        {' '}
                        <InputGroup
                          className={lastFocus ? 'input-group-focus' : ''}
                        >
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='now-ui-icons text_caps-small'></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            style={{ width: '200px' }}
                            autoComplete='name'
                            placeholder='Address'
                            type='text'
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type='checkbox'></Input>
                          <span className='form-check-sign'></span>I agree to
                          the terms and{' '}
                          <a href='#pablo' onClick={(e) => e.preventDefault()}>
                            conditions
                          </a>
                        </Label>{' '}
                        <Button
                          block
                          className='btn-round'
                          color='info'
                          size='lg'
                          type='submit'
                        >
                          Register
                        </Button>
                      </FormGroup>
                      <CardFooter className='text-center'></CardFooter>
                    </Form>{' '}
                  </CardBody>
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

export default withRouter(Register);
