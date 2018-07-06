

/*
 * setTimeout example
 *
 */


console.log(1,2,3,4);

setTimeout(function() {
  console.log("TIMEOUT 1");
}, 0);

Promise.resolve('Promise 2').then(console.log);


setTimeout(function() {
  console.log("TIMEOUT 2");
}, 0);

Promise.resolve('Promise 3').then(console.log);

console.log(5);



// setImmediate(function() {
//   console.log("SETIMMEDIATE 1");
// });
// setImmediate(function() {
//   console.log("SETIMMEDIATE 2");
// });

// Promise.resolve(console.log('RESOLVE'));