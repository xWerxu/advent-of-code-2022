const fs = require("fs");
const { format } = require("path");

// const stacks = [[], ["P", "D", "Q", "R", "V", "B", "H", "F"], ["V", "W", "Q", "Z", "D", "L"], ["C", "P", "R", "G", "Q", "Z", "L", "H"], ["B", "V", "J", "F", "H", "D", "R"], ["C", "L", "W", "Z"], ["M", "V", "G", "T", "N", "P", "R", "J"], ["S", "B", "M", "V", "L", "R", "J"], ["J", "P", "D"],]

let stacks = [];
const stacksVertical = [];
const stacksData = fs.readFileSync("./inputStacks.txt", {
  encoding: "utf8",
  flag: "r",
});

function vertical(toMutate) {
  let height = toMutate.length;
  let width = toMutate[0].length;
  const mutateArray = [];
  mutateArray.length = width;
  for (let i = 0; i < width; i++) {
    const newRow = [];
    newRow.length = height;
    mutateArray[i] = newRow;
  }

  for (let i = 0; i < width; i++) {
    for (let t = 0; t < height; t++) {
      mutateArray[i][t] = toMutate[t][i];
    }
    mutateArray[i] = mutateArray[i].reverse();

    while (mutateArray[i][mutateArray[i].length - 1] == " ") {
      mutateArray[i].pop();
    }
  }
  return mutateArray;
}

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

let testStack = [
  [" ", "[D]", " "],
  ["[N]", "[C]", " "],
  ["[Z]", "[M]", "[P]"],
  [" 1 ", " 2 ", " 3 "],
];
stacks = vertical(stacks);

for (inst of instructions) {
  let howMany = inst[0] - 1;
  let from = inst[1] - 1;
  let into = inst[2] - 1;
  for (let i = 0; i <= howMany; i++) {
    let toMove = stacks[from][stacks[from].length - 1];
    stacks[from].pop();
    stacks[into].push(toMove);
  }
}
let answer = "";
for (stack of stacks) {
  answer += stack[stack.length - 1];
}

// testStack = vertical(testStack);
console.log(stacks);
console.log(answer);
