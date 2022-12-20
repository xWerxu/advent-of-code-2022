// var cocaColaButNotMonsterBrands = ['COCA-COLA', 'FANTA', 'SPRITE', 'KROPLA BESKIDU', 'COSTA COFFEE', 'CAPPY', 'POWERADE', 'FUZETEA', 'KINLEY', 'AHA'];
// var offerBrand = String("ffff").trim();
// var isCocaColaButNotMonster = cocaColaButNotMonsterBrands.some(function (cocaColaButNotMonsterBrands) {
//     return cocaColaButNotMonsterBrands === offerBrand;
// });
// console.log(isCocaColaButNotMonster)


// function mySome(someArray, findValue){
//     someArray.forEach((value) => {
//         if(value === findValue){
//             console.log(value)
//             return true
//         }
//     })
//     return false
// }

// console.log(mySome(testArray, 4));

// console.log(mySome(testArray, 5))

// Array.prototype.mySome = function (someArray){
//     return someArray[0];
// };

// console.log(testArray.mySome())

var testArray = [1,2,3,4,5,6];

Array.prototype.mySome = function (someCallback){
    for(let element of this)
        if(someCallback(element)){
            return true
        }
    return false
}

console.log(testArray.mySome((testValue) => {
    return testValue == 5;
}));

console.log(testArray.mySome((testValue) => {
    return testValue == 0;
}));   // returns false