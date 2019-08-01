import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './components/Input.js';
import InputTitle from './components/InputTitle.js';
import Image from './components/Image.js';

import { GET_PLAYER_URL } from './service/constants';
import { getPlayer as _getPlayer } from './actions/player-actions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      picture: '',
      points: '',
      rebounds: '',

      url: '',
      videoId: '',
      isVideoPlay: '',

      isFirstNameChanged: false,
      isLastNameChanged: false,
      isPointsChanged: false,
      isReboundsChanged: false
    };
    this.timerId = null;
  }

  async componentDidMount() {
    this.props._getPlayer(GET_PLAYER_URL);
    this.timerId = setInterval(() => { this.props._getPlayer(GET_PLAYER_URL);  }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { isFirstNameChanged, isLastNameChanged, isPointsChanged, isReboundsChanged, isVideoPlay } = this.state;
    const { firstName, lastName, picture, points, rebounds } = this.props.player;
    const { url, videoId } = this.props.video;
    if (!isFirstNameChanged && firstName !== prevProps.player.firstName) {
      this.setState({ firstName });
    }
    if (!isLastNameChanged && lastName !== prevProps.player.lastName) {
      this.setState({ lastName });
    }
    if (picture !== prevProps.player.picture) {
      this.setState({ picture });
    }
    if (!isPointsChanged && points !== prevProps.player.points) {
      this.setState({ points });
    }
    if (!isReboundsChanged && rebounds !== prevProps.player.rebounds) {
      this.setState({ rebounds });
    }
    if (!isVideoPlay && url !== prevProps.video.url) {
      this.setState({ url });
    }
    if (!isVideoPlay && videoId !== prevProps.video.videoId) {
      this.setState({ videoId });
    }
  }

  stopTimer = () => {
    clearInterval(this.timerId);
  }

  setInputData = (event) => {
    switch (event.target.name) {
      case 'first_name': {
        this.setState({ firstName: event.target.value, isFirstNameChanged: true }); break;
      }
      case 'last_name': {
        this.setState({ lastName: event.target.value, isLastNameChanged: true }); break;
      }
      case 'points': {
        this.setState({ points: event.target.value, isPointsChanged: true }); break;
      }
      case 'rebounds': {
        this.setState({ rebounds: event.target.value, isReboundsChanged: true }); break;
      }
      default: {
        return '';
      }
    }
  }

  playVideo = (videoId) => {
    this.setState({ isVideoPlay: videoId });
  }

  render() {

    const { firstName, lastName, picture, points, rebounds, url, videoId, isVideoPlay } = this.state;

    return (
      <section className='base-layout'>
        <div className='wrapper'>

          <InputTitle title={'Player'} level={'level-0'} />

          <div className='container'>
            <Input
              title={'First Name'}
              name={'first_name'}
              value={firstName}
              onChange={this.setInputData}
            />
            <Input
              title={'Last Name'}
              name={'last_name'}
              value={lastName}
              onChange={this.setInputData}
            />
            <Input
              title={'Image'}
              name={'image'}
              value={picture}
              onChange={this.setInputData}
              isDisabled
              level={'level-2'}
            />

            <Image picture={picture} />

            <div className='statistics-container'>
              <InputTitle title={'Statistics'} level={'level-1'} stat />
              <Input
                title={'Points'}
                name={'points'}
                value={points}
                onChange={this.setInputData}
                level={'level-2'}
                type={'number'}
              />
              <Input
                title={'Rebounds'}
                name={'rebounds'}
                value={rebounds}
                onChange={this.setInputData}
                level={'level-2'}
                type={'number'}
              />
            </div>

            <div className='statistics-container'>
              <InputTitle title={'Last Game'} level={'level-1'} stat />
              <Input
                title={'Clip'}
                name={'url_clip'}
                value={url}
                onChange={this.setInputData}
                isDisabled
                level={'level-2'}
              />
            </div>

            <Image
              picture={url}
              playVideo={this.playVideo}
              isVideoPlay={isVideoPlay}
              videoId={videoId}
            />

            <button onClick={this.stopTimer}>stop</button>

          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ player, video }) => ({
  player,
  video
});

const actions = {
  _getPlayer
};

export default connect(mapStateToProps, actions)(App);
