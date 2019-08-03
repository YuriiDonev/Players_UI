import React, { Component } from 'react';

import Input from './Input.js';
import InputTitle from './InputTitle.js';
import Image from './Image.js';

import { defineValueType } from '../service/helpers/define-value-type.js';
import { isValidUrl } from '../service/helpers/is-valid-url.js';

import SubContainer from './SubContainer.js';

class Container extends Component {

  renderInputs = () => {
    const inputs = [];
    for (let key in this.props) {

      // check are values are pictures and values are valid urls
      if (this.props.inputTitle === 'picture' && isValidUrl(this.props[key])) {
        inputs.push(
          <Image
            key={key}
            url={this.props[key]}
          />
        );
      } else {

        // check are values primitives ans could be rendered in inputs with level 2
        if (this.props[key] === null || typeof this.props[key] !== 'object') {
          if (key !== 'inputTitle' && key !== 'onChange' && key !== 'constainerTitle') {
            inputs.push(
              <Input
                key={key}
                type={defineValueType(this.props[key])}
                name={key}
                value={this.props[key] || ''}
                level={'level-2'}
                onChange={this.props.onChange}
                constainerTitle={this.props.constainerTitle}
              />
            );
          }
        } else {

          // if not primitives - will pass it to containers
          inputs.push(
            <SubContainer
              key={key}
              inputTitle={key}
              {...this.props[key]}
              onChange={this.props.onChange}
              constainerTitle={this.props.constainerTitle}
            />
          );
        }

      }
    }
    return inputs;
  }

  render() {
    return (
      <div className='block'>
        <InputTitle inputTitle={this.props.inputTitle} level={'level-1 block-title'} />
        {
          this.renderInputs()
        }
      </div>
    );
  }
}


export default Container;
