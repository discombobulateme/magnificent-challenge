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

// 4. access server response

async function makeHeadRequest() {
  let res = await axios.head("http://localhost:12345");

  console.log(`Status: ${res.status}`);
  console.log(`Server: ${res.headers.server}`);
  console.log(`Date: ${res.headers.date}`);
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

