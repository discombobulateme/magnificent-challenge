// this files get the server requests
const axios = require("axios");

// define the server check interval time
function checkServer(userIntervalTime) {
  // transforms user parameter in seconds into setInterval miliseconds, as needed
  intervalTime = userIntervalTime * 1000;

  setInterval(() => {
    // access server response
}

makeHeadRequest();

/*
// axios basic api
const axios = require('axios');

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://webcode.me'
    }

    let res = await axios(config)

    console.log(res.status);
}

makeRequest();
*/

// 5. listen to response, send response and count the response
const fails = 0;
const successes = 0;

function check_server(seconds) {
  const userInterval = seconds;
  setInterval(seconds * 1000);

  while (sucess == true) {
    success = check_server();
    if (success) {
      successes += 1;
      console.log("server is working");
    } else {
      fails += 1;
      console.log("server failed");
    }
  }
}

console.log(`Total of successes = ${successes}, total fails = ${fails}`);

// stops checking and end application
function stopCheckServer() {
  clearInterval(interval);
}

// end: user input -> stop application
// how to do it from terminal?
