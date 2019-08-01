import youtube from 'youtube-finder';
import { APIkey } from '../youtube/APIkey.js';

export const getPlayerAPI = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(async res => {
      const json = await res.json();
      resolve(json.results[0]);
    }, err => {
      reject(err);
    });
  });
}

export const getVideoFromYouTube = (keyword) => {
  return new Promise((resolve, reject) => {
    const client = youtube.createClient({ key: APIkey});
    const params = {
      part: 'snippet',
      q: keyword,
      type: 'video',
      maxResults: 1
    }
    client.search(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.items[0]);
      }
    });
  });
};
