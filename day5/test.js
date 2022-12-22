// var testArray = [1,2,3,4,5,6];

// Array.prototype.mySome = function (someCallback){
//     for(let element of this)
//         if(someCallback(element)){
//             return true
//         }
//     return false
// }

// console.log(testArray.mySome((testValue) => {
//     return testValue == 5;
// }));

// console.log(testArray.mySome((testValue) => {
//     return testValue == 0;
// }));   // returns false

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}
