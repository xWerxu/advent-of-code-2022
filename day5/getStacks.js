const fs = require("fs");

fs.readFile("inputStacks.txt", "utf8", (err, data)=>{
    const dataNewLine = data.split("\n");
    console.log(dataNewLine)
    const stacks = [];
    for(line of dataNewLine){
        const row = [];
        for(let i = 1; i < line.length; i+=4){
            row.push(line[i]);
        }
        stacks.push(row);
        console.log(line)

    }
    console.log(stacks[0][2])

})