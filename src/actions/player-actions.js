import { GET_PLAYER, GET_YOUTUBE_VIDEO } from './types.js';
import { getPlayerAPI, getVideoFromYouTube } from '../service';

export const getPlayer = url => async dispatch => {
  try {
    let player = await getPlayerAPI(url);
    dispatch({
      type: GET_PLAYER,
      payload: player
    });
    let video = await getVideoFromYouTube(player.name.first);
    dispatch({
      type: GET_YOUTUBE_VIDEO,
      payload: video
    });
  } catch (err) {
    console.error(err);
  }
};
