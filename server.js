// Different way to write function in JS 
   
//  function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a + b;
// }

// var add  = (a, b) =>{
//     return a+b;
// }

// var add = (a, b) => a+b;
// var result = add(4,14);
// console.log(result);

// function callback(){
//     console.log(`Nikii is calling a callback function`)
// }
// const add = function (a, b, callback){
//     var result = a+b
//      console.log(`result: `+ result); //Main fuction
//      callback();
// }
// add(3,3, callback);

// const add = function(a, b, nikii){
//     var result = a+b;
//     console.log(`result: `+ result);
//     nikii();
// }
// add(2,3,()=>{
//     console.log(`add completed`)
// })

// var fs = require(`fs`);
// var os = require(`os`);

// var user = os.userInfo();
// // console.log(user)
// console.log(user.username);

// fs.appendFile(`greeting.txt`, `Hi `+ user.username + `!\n` , ()=>{
//     console.log(`File is created..`);
// })

// const notes = require(`./notes.js`);
// console.log(`server file is available:`)

// var age = notes.age;
// var result = notes.addNumber(2,age+12)
// console.log(age);
// console.log(`the result are:` + result)

var _ = require('lodash');
var data = ["person","person", 1,2,1,2,`name`,`age`,`2`];
var filter = _.uniq(data);
console.log(filter);