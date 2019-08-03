import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Container from './components/Container.js';
import Input from './components/Input.js';
import InputTitle from './components/InputTitle.js';

import { GET_PLAYER_URL, SEND_PLAYER_URL } from './service/constants';

import {
  getPlayer as _getPlayer,
  sendPlayer as _sendPlayer
 } from './actions/player-actions.js';

import { defineValueType } from './service/helpers/define-value-type.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.modifiedValues = [];
  }

  async componentDidMount() {
    // when component did mount to DOM get player entity from a server
    this.props._getPlayer(GET_PLAYER_URL);

    // and statr polling to get player every second
    this.timerId = setInterval(() => { this.props._getPlayer(GET_PLAYER_URL);  }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { player  } = this.props;
    if (!_.isEqual(player, prevProps.player)) {

      // copy data from server API to app state if it is differ from previous
      this.setState({ ...player });
    }
  }

  // to prevent memory leak clear timer
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // send all updated data to server API
  saveData = () => {
    console.log('UPDATED DATA: ', this.modifiedValues);
    this.props._sendPlayer(SEND_PLAYER_URL, this.modifiedValues);
  }

  // save entered manually data to app state
  setInputData = (event, key, type, constainerTitle) => {
    const values = _.filter(this.modifiedValues, val => val.level !== constainerTitle || val.key !== key);
    values.push({
      level: constainerTitle,
      key: key,
      value: event.target.value
    });
    this.modifiedValues = values;
  }

  // render player data
  renderContainers = () => {
    const containers = [];
    for (let key in this.state) {

      // check are values primitives ans could be rendered in inputs with level 1
      if (typeof this.state[key] !== 'object') {
        containers.push(
          <Input
            key={key}
            type={defineValueType(this.state[key])}
            name={key}
            value={this.state[key]}
            level={'level-0'}
            onChange={this.setInputData}
            constainerTitle={key}
          />
        );
      } else {

        // if not primitives - will pass it to containers
        containers.push(
          <Container
            key={key}
            inputTitle={key}
            {...this.state[key]}
            onChange={this.setInputData}
            constainerTitle={key}
          />
        );
      }
    }
    return containers;
  }

  render() {
    return (
      <section className='base-layout'>
        <InputTitle inputTitle={'Player'} level={''} />

        <div className='wrapper'>
          {
            this.renderContainers()
          }
          <button onClick={this.saveData}>SAVE</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  player
});

const actions = {
  _getPlayer,
  _sendPlayer
};

export default connect(mapStateToProps, actions)(App);
