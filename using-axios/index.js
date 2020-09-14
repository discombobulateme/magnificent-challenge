const axios = require("axios");
// process gets a parameter in the start of the application
// || sets the default
// [] add type check to verify if user input is correct
const interval = (process.argv[2] || 1) * 1000;
// define the server check interval time


setInterval(async () => {
  // access server response
  try {
    // get just the header (return) and not the full body
    // [] add variable to the url
    await axios.head("http://localhost:12345");

    successes++;
    console.log("Success!!! 🥳");
  } catch (error) {
    console.log("Failed 😟 😢");
    fails++;
  } finally {
    // add a finally to make sure log is in the async line
    console.log(`Total of successes = ${successes}, total fails = ${fails}`);
  }
}, interval);

// [] Exporting checkServer() for unit test framework
// [] In order to do that checkServer should not be called immediately, only if (require.main === module) { (https://nodejs.org/api/modules.html#modules_accessing_the_main_module)
// [] add unit test
