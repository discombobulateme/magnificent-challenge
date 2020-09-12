const fails = 0
const successes = 0


// 1. get user input in seconds
const userIntervalCheckOption = Number(window.prompt("What is the time interval to check the server, in seconds?", ""));
// add error message and repeat prompt if not a valid number

// 2. transform user input to miliseconds

// 3. get user input from terminal to start application
// how to do it from terminal?

// 4. check server

check_server(seconds) {
  // every x seconds, check server
  const userInterval = seconds
  setInterval(seconds * 1000)

}

while (sucess == true) {
  success = check_server()
  if (success) {
    successes += 1
    console.log("server is working")
  } else {
    fails += 1
    console.log("server failed")
  }
}

console.log(`Total of successes = ${successes}, total fails = ${fails}`)

// end: user input -> stop application
// how to do it from terminal?

