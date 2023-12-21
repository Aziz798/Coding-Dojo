import React from 'react';
import { css } from '@emotion/css';

const Content = (props) => {
    const {children}=props;
  return (
    <div className={css`
    height:80%;
    width:100%;
    display:flex;
    justify-content:space-around;
    
    
    `}> {children}</div>
  )
}

export default Content