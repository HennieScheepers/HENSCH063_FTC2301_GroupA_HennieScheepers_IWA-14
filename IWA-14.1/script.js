firstName = 'John';
age = 35;
hobby = 'Coding';

/**
 * @param {string} parameter
*/


//                () -> parameter
const logTwice =  (parameter) => {
  //console() -> console.log
  console.log(parameter)
  console.log(parameter)
}

//Changed hobby to hobbyLog as hobby is already a variable
function hobbyLog () {
  //                 name -> firstName
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hobbyLog()