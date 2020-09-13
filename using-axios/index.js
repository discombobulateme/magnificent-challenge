// this files get the server requests
const axios = require("axios");

// define the server check interval time
function checkServer(userIntervalTime) {
  // transforms user parameter in seconds into setInterval miliseconds, as needed
  intervalTime = userIntervalTime * 1000;

  let fails = 0;
  let successes = 0;

  setInterval(() => {
    // access server response
    async function makeServerHeadRequest() {
      console.log(`Total of successes = ${successes}, total fails = ${fails}`);
    }
    makeServerHeadRequest();
  }, intervalTime);
}

// get user parameter from terminal to start application
// ? How do you put parameters into apps running in the terminal?
// get user input in seconds
checkServer(3);

// stops checking and end application
// function stopCheckServer() {
//   clearInterval(intervalTime);
// }

// end: user input -> stop application
// how to do it from terminal?
