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
      if (`${res.status}` === "200") {
        console.log("success! 🥳");
      } else if (`${res.status}` === "500") {
        console.log("failed 😟");
      } else {
        console.log("that's a weird status... 🤨");
      }

      // while (successes == true) {
      //   successes = check_server();
      //   if (successes) {
      //     successes += 1;
      //     console.log("server is working");
      //   } else {
      //     fails += 1;
      //     console.log("server failed");
      //   }

      // console.log(`Total of successes = ${successes}, total fails = ${fails}`);
    }
    makeServerHeadRequest();
  }, intervalTime);
}

// get user parameter from terminal to start application
// ? How do you put parameters into apps running in the terminal?
// get user input in seconds
checkServer(5);

// stops checking and end application
// function stopCheckServer() {
//   clearInterval(intervalTime);
// }

// end: user input -> stop application
// how to do it from terminal?
