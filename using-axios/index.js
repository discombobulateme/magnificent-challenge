// this files get the server requests
const axios = require("axios");

// define the server check interval time
function checkServer(userIntervalTime) {
  // transforms user parameter in seconds into setInterval miliseconds, as needed
  intervalTime = userIntervalTime * 1000;
  const fails = 0;
  const successes = 0;

  setInterval(() => {
    // access server response
    async function makeServerHeadRequest() {
      const res = await axios.head("http://localhost:12345");

      const serverStatus = `${res.status}`;

      console.log(`Status: ${res.status}`);
      // console.log(`Server: ${res.headers.server}`);
      // console.log(`Date: ${res.headers.date}`);

      // verify status, transform it into a message
      // output the message
      // count the response
    }
    makeServerHeadRequest();
  }, intervalTime);
}

// get user parameter from terminal to start application
// ? How do you put parameters into apps running in the terminal?
// get user input in seconds

// stops checking and end application
function stopCheckServer() {
  clearInterval(interval);
}

// end: user input -> stop application
// how to do it from terminal?
