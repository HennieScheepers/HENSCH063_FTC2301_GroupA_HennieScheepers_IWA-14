firstName = 'John';
age = 35;
hobby = 'Coding';

/**
 * @param {string} parameter
*/

//added .log after console
const logTwice =  (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

//Changed hobby to hobbyLog as hobby is already a variable
function hobbyLog () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hobbyLog()