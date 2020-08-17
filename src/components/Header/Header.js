import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { withRouter, Link } from 'react-router-dom';
import Search from 'antd/lib/input/Search';
import { Row, Col } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import jwtDecode from 'jwt-decode';
import localStorageService from '../../service/localStorageService';
import { SearchContext } from '../../contexts/SearchContext';

function Header(props) {
  const [name, setName] = useState('');

  const {
    searchTerm: [searchTerm, setSearchTerm],
  } = useContext(SearchContext);

  const logout = () => {
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

  return (
    <Row gutter={24} className='header'>
      <Col span={2}>
        <Link to='/'>
          <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div className='logo-container'>
              <img
                style={{ width: '35px', height: '35px' }}
                alt='...'
                src={require('assets/img/now-logo.png')}
              ></img>
            </div>
          </Row>
        </Link>
      </Col>
      <Col span={16}>
        <Search
          className='searchBox'
          placeholder='input search text'
          enterButton='Search'
          size='large'
          onSearch={(value) => setSearchTerm(value)}
        />
      </Col>
      <Col span={2}>
        <Link to='/history'>
          <Row>
            <Col
              style={{
                justifyContent: 'center',
                width: '100px',
                textAlign: 'center',
                marginTop: '3px',
                alignContent: 'center',
              }}
            >
              <i
                style={{ color: 'white', fontSize: '20px' }}
                className='now-ui-icons users_circle-08'
              ></i>{' '}
              <div style={{ color: 'white' }}>{name}</div>
            </Col>
          </Row>
        </Link>
      </Col>
      <Col span={2}>
        <Link to='/cart'>
          <i
            style={{
              color: 'white',
              fontSize: '25px',
              marginTop: '10px',
            }}
            className='now-ui-icons shopping_cart-simple'
          ></i>
        </Link>
      </Col>
      <Col span={2}>
        <Link to='/login' onClick={logout}>
          <i
            style={{
              color: 'white',
              fontSize: '25px',
              alignContent: 'center',
              marginTop: '10px',
            }}
            className='now-ui-icons media-1_button-power'
          ></i>
        </Link>{' '}
      </Col>
    </Row>
  );
}

export default withRouter(Header);
