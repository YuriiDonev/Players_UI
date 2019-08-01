import React from 'react';

const InputTitle = props => (
  <div className={`container-title ${props.stat ? 'stat' : ''}`}>
    <div className={`square ${props.level ? props.level : 'level-1'}`}></div>
    <span className='title'>{props.title}</span>
  </div>
);

export default InputTitle;
