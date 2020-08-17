import React from 'react';
import { Result } from 'antd';
import { withRouter } from 'react-router-dom';

function BuySuccess(props) {
  setTimeout(() => props.history.push('/shopping'), 3000);
  return (
    <div>
      <Result
        status='success'
        title='Successfully Purchased!'
        subTitle='thank you for Purchased You are always welcomes'
      />
    </div>
  );
}

export default withRouter(BuySuccess);
