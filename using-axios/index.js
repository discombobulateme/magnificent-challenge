const axios = require("axios");
const process = require("process");

// define the server check interval time


    makeServerHeadRequest();
  }, intervalTime);
}

// get user parameter from terminal to start application
// index 2 = argument -> process.argv [application = node, file = index.js, argument]
checkServer(process.argv[2]);

// end: stop application
