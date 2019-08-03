import React, { Component } from 'react';

import Input from './Input.js';
import InputTitle from './InputTitle.js';

import { defineValueType } from '../service/helpers/define-value-type.js';

class SubContainer extends Component {

  renderInputs = () => {
    const inputs = [];
    for (let key in this.props) {

      // check are values primitives ans could be rendered in inputs with level 3
      if (key !== 'inputTitle' && key !== 'onChange' && key !== 'constainerTitle') {
        inputs.push(
          <Input
            key={key}
            type={defineValueType(this.props[key])}
            name={key}
            value={this.props[key]}
            level={'level-3'}
            onChange={this.props.onChange}
            constainerTitle={this.props.constainerTitle}
          />
        );
      }
    }
    return inputs;
  }

  render() {
    return (
      <div className='block'>
        <InputTitle inputTitle={this.props.inputTitle} level={'level-2 block-title'} />
        {
          this.renderInputs()
        }
      </div>
    );
  }
}


export default SubContainer;
