const fs = require("fs");

// const stacks = [[], ["P", "D", "Q", "R", "V", "B", "H", "F"], ["V", "W", "Q", "Z", "D", "L"], ["C", "P", "R", "G", "Q", "Z", "L", "H"], ["B", "V", "J", "F", "H", "D", "R"], ["C", "L", "W", "Z"], ["M", "V", "G", "T", "N", "P", "R", "J"], ["S", "B", "M", "V", "L", "R", "J"], ["J", "P", "D"],]

const stacks = [];
const stacksData = fs.readFileSync("./inputStacks.txt", {
  encoding: "utf8",
  flag: "r",
});

const dataNewLine = stacksData.split("\n");
for (let line of dataNewLine) {
  const row = [];
  for (let i = 1; i < line.length; i += 4) {
    row.push(line[i]);
  }
  stacks.push(row);
}
const instructions = [];
const instructionsData = fs.readFileSync("./inputInstructions.txt", {
  encoding: "utf8",
  flag: "r",
});
const dataSplited = instructionsData.split("\n");
for (let line of dataSplited) {
  const lineSplited = line.split(" ");
  const lineInstructions = [lineSplited[1], lineSplited[3], lineSplited[5]];
  instructions.push(lineInstructions);
}

function moveAtoB(from, to, moveStack) {
  let i = 0;
  let toMove = 0;
  //   const stackWidth = moveStack[0].length;
  //   const emptyFilled = [];
  //   emptyFilled.length = stackWidth;
  //   emptyFilled.fill(" ");
  //   moveStack.unshift(emptyFilled);

  for (let i = 0; i < 8; i++) {
    if (moveStack[i][from] != " ") {
      toMove = moveStack[i][from];
      moveStack[i][from] = " ";
      for (let temp = 1; temp < 8; temp++) {
        if (moveStack[temp][to] != " " && moveStack[temp][to - 1] == " ") {
          moveStack[temp][to] = toMove;
          break;
        }
      }
    }
  }
  return moveStack;
}

const testStack = [
  [" ", "[D]", " "],
  ["[N]", "[C]", " "],
  ["[Z]", "[M]", "[P]"],
  [" 1 ", " 2 ", " 3 "],
];

for (let inst of instructions) {
  const howMany = inst[0];
  const from = inst[1];
  const into = inst[2];
}

console.log(moveAtoB(2, 1, testStack));
// console.log(testStack[2][2])
