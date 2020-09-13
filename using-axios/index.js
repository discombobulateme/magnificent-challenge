// this files get the server requests
const axios = require("axios");

// 1. get user input from terminal to start application
// how to do it from terminal?
// 2. get user input in seconds
// 3. transform user input to miliseconds

// define the server check interval time
function checkServer() {
  interval = setInterval(() => {}, intervalTime);
}

async function makeHeadRequest() {
  let res = await axios.head("http://localhost:12345");

  console.log(`Status: ${res.status}`);
  console.log(`Server: ${res.headers.server}`);
  console.log(`Date: ${res.headers.date}`);
}

makeHeadRequest();
