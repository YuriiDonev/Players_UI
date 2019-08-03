1. Clone or download this folder.
2. npm install
3. npm start
4. go to http://localhost:3000
5. App Description:
The App will start polling and get players data from a fake API.
Relevant fields will be rendered.
Values will be pasted to inputs accordingly their types (number or string).
If value is valid url string it will be rendered in Picture block.
You can change any value and it will be stored in app state.
Every value that is an integer have buttons to raise and lower its value.
If you have changed any of input fields, it won't be updated with new data and will keep your updated value.
You can click on 'Save' button and all updated data will be send to fake API server.
To check it - you can open console and see your data.
Also you can navigate to Netwok tab and check 'http://fakerestapi.azurewebsites.net/api/Activities' request and response.
In case of success you will see status code 200 in server request block and 'Data successfully uploaded' message in console (Work with localhost, returns err with Github Pages)
