// required to read arguments on command line
// the .slice(2) allows for reading to start at index 2, 
// which discards path to node and path to script code
const input = process.argv.slice(2);

// for...of loop to iterate over arguments, creation of num of input (command line arguments)
for (const num in input) {
  // this if statement will determine if the input are actual numbers and above 0
  // in which case it will set a timeout to log beeps (no sounds coming from computer so changed to log beeps)
  if (num !== NaN && num > 0) {
    setTimeout(() => {
      console.log('BEEP');
    }, num * 1000)
    // if not a valid number will log
  } else {
    console.log('Please enter valid number');
  }
};