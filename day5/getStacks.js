const fs = require("fs");

fs.readFile("inputStacks.txt", "utf8", (err, data)=>{
    const dataNewLine = data.split("\n");
    const tableHeight = dataNewLine.length;
    const tableWidth = 0;
    const lastLine = 0;
    console.log(dataNewLine)

    dataNewLine.forEach((line)=>{
        // console.log(line);

    })

})