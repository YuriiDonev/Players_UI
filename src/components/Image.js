import React from 'react';
import VideoPlayer from './Video.js';

const Image = props => (
  <div className='img-container'>
    {
      props.isVideoPlay ?
      <VideoPlayer videoId={props.isVideoPlay} />
      :
      <img
        src={props.picture}
        onClick={ () => {
          if (props.playVideo) {
            props.playVideo(props.videoId);
          } else {
            return;
          }
        } }
        alt=''
      />
    }
  </div>
);

export default Image;
