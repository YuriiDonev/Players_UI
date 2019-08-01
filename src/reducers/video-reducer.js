import { GET_YOUTUBE_VIDEO } from '../actions/types.js';

const initialState = {
  videoId: '',
  url: ''
};

const video = (state = initialState, action) => {
  switch (action.type) {

      case GET_YOUTUBE_VIDEO: {
        return {
          videoId: action.payload.id.videoId,
          url: action.payload.snippet.thumbnails.medium.url
        };
      }

      default: {
        return state;
      }
    }
  };

export default video;
