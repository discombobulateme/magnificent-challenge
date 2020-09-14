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
  } finally {
    // add a finally to make sure log is in the async line
    console.log(`Total of successes = ${successes}, total fails = ${fails}`);
  }

// [] Exporting checkServer() for unit test framework
// [] In order to do that checkServer should not be called immediately, only if (require.main === module) { (https://nodejs.org/api/modules.html#modules_accessing_the_main_module)
// [] add unit test
