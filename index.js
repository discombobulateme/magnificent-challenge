/*
Pseudo-code:

fails = 0
Successes = 0
while True:
    success = check_server()
    If success:
        Successes += 1
        Print("Check worked")
    Else:
        Fails += 1
        Print ("check failed")
    Print("total successes", successes, "total fails", fails)
*/

const fails = 0
const successes = 0

/*
1. get user input in seconds
How can user give an input?
Should I write in the HTML?

2. transform user input to miliseconds

3. check server
how to check server? reload page?


*/
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
