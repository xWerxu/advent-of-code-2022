const fs = require("fs");

// const stacks = [[], ["P", "D", "Q", "R", "V", "B", "H", "F"], ["V", "W", "Q", "Z", "D", "L"], ["C", "P", "R", "G", "Q", "Z", "L", "H"], ["B", "V", "J", "F", "H", "D", "R"], ["C", "L", "W", "Z"], ["M", "V", "G", "T", "N", "P", "R", "J"], ["S", "B", "M", "V", "L", "R", "J"], ["J", "P", "D"],]



fs.readFile("./inputInstructions.txt","utf8", (err, data)=>{
    console.log(data)
})