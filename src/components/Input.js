import React from 'react';
import { MAX_INPUT_LENGTH } from '../service/constants';
import InputTitle from './InputTitle.js';

const Input = props => (
  <div className={`input-container ${props.level ? props.level : 'level-1'} ${props.type}`}>
    <InputTitle title={props.title} level={props.level} />
    <input
      type={props.type || 'text'}
      name={props.name}
      value={props.value}
      maxLength={MAX_INPUT_LENGTH}
      onChange={props.onChange}
      disabled={props.isDisabled || false}
    />
  </div>
);

export default Input;
