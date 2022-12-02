const fs = require("fs");
const { default: test } = require("node:test");

function roundResult(input){
    const scoreCard = {
        X: 1, // rock
        Y: 2, // paper
        Z: 3, // scissor
        win: 6,
        draw: 3,
        lost: 0
    }

    // A : rock
    // B : paper
    // C : scissors

    // rock w: scissors l:paper
    // paper w: rock l:scissors
    // scissors w: paper l:rock


    let inputSplited = input.split(" ");
    let val1 = inputSplited[0];
    let val2 = inputSplited[1];
    // console.log(inputSplited)
    switch(val1){
        case "A":
            if(val2 == "X") return scoreCard.Z + scoreCard.lost;
            if(val2 == "Y") return scoreCard.X + scoreCard.draw;
            if(val2 == "Z") return scoreCard.Y + scoreCard.win;
            break;
        case "B":
            if(val2 == "X") return scoreCard.X + scoreCard.lost;
            if(val2 == "Y") return scoreCard.Y + scoreCard.draw;
            if(val2 == "Z") return scoreCard.Z + scoreCard.win;
            break;
        case "C":
            if(val2 == "X") return scoreCard.Y + scoreCard.lost;
            if(val2 == "Y") return scoreCard.Z + scoreCard.draw;
            if(val2 == "Z") return scoreCard.X + scoreCard.win;
            break;
                    
    }

}


fs.readFile("./input.txt","utf-8",(err, data) => {
    const dataSplited = data.split("\n");
    let score = 0;
    dataSplited.forEach((val)=>{
        // console.log(roundResult(val))
        score += roundResult(val)
    })
    console.log(score)
})


