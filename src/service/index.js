
// service to get data from API server
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

// service to send data to API server
export const sendPlayerDataAPI = (url, data) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      resolve('Data successfully uploaded');
    }, err => {
      reject(err);
    });
  });
}
