const axios = require("axios");
// process gets a parameter in the start of the application
// || sets the default
// [] add type check to verify if user input is correct
const interval = (process.argv[2] || 1) * 1000;
// define the server check interval time


    makeServerHeadRequest();
  }, intervalTime);
}

// get user parameter from terminal to start application
// index 2 = argument -> process.argv [application = node, file = index.js, argument]
checkServer(process.argv[2]);

// end: stop application
