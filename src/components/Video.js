import React from 'react';
import YouTube from 'react-youtube';
import { options } from '../youtube/video-options.js';

const VideoPlayer = props => (
  <div>
    <YouTube
      videoId={props.videoId}
      opts={options}
    />
  </div>
);

export default VideoPlayer;
