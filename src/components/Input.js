import React, { PureComponent } from 'react';
import { MAX_INPUT_LENGTH } from '../service/constants';

import InputTitle from './InputTitle.js';

class Input extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isModified: false
    }
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    // prevent Input updating if value has been modified already
    if (!this.state.isModified && value !== prevProps.value) {
      this.setState({ value });
    }
  }

  // store value in internal Input state, set already modified indicator to true
  onChange = (e) => {
    this.setState({ value: e.target.value, isModified: true });
  }

  render() {
    const { level, name, type, constainerTitle } = this.props;

    return (
      <div className={`input-container ${level || ''}`}>
        <InputTitle inputTitle={name} level={level} />
        <div className='input-wrapper'>
          <input
            type={type || 'text'}
            name={name || ''}
            value={this.state.value}
            maxLength={MAX_INPUT_LENGTH}
            onChange={(e) => {
              this.onChange(e);
              this.props.onChange(e, name, type, constainerTitle)
            }}
          />
        </div>
      </div>
    );
  }
}

export default Input;
