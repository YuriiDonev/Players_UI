import { GET_PLAYER } from './types.js';
import { getPlayerAPI, sendPlayerDataAPI } from '../service';


// action to get data from API server
export const getPlayer = url => async dispatch => {
  try {
    let player = await getPlayerAPI(url);
    dispatch({
      type: GET_PLAYER,
      payload: player
    });
  } catch (err) {
    console.error(err);
  }
};

// action to send data to API server
export const sendPlayer = (url, data) => async dispatch => {
  try {
    let res = await sendPlayerDataAPI(url, data);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
