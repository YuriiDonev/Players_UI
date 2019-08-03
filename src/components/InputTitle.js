import React from 'react';
import _ from 'lodash';

const InputTitle = props => (
  <div className={`container-title ${props.level || ''}`}>
    <div className={`square ${props.level || ''}`}></div>
    <span className='title'>{_.capitalize(props.inputTitle)}</span>
  </div>
);

export default InputTitle;
