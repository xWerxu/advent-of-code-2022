const fs = require("fs");

function findAsciiValue(val) {
  let asciiValue = val.charCodeAt(0);

  if (val == val.toLowerCase()) {
    return asciiValue - 96;
  } else {
    return asciiValue - 38;
  }
}

function findMatch3(grA, grB, grC) {
  let matchAB = grA.filter((element) => grB.includes(element));
  let matchABC = grC.find((element) => matchAB.includes(element));
  return matchABC;
}

fs.readFile("./input.txt", "utf8", (err, data) => {
  const dataSplited = data.split("\n");
  let sum = 0;

  for (let i = 2; i < dataSplited.length; i += 3) {
    let grA = dataSplited[i].split("");
    let grB = dataSplited[i - 1].split("");
    let grC = dataSplited[i - 2].split("");

    let match3 = findMatch3(grA, grB, grC);
    sum += findAsciiValue(match3);

    // console.log(
    //   `grC: ${dataSplited[i - 2]} grB: ${dataSplited[i - 1]} grA: ${
    //     dataSplited[i]
    //   } matchAB: ${0}`
    // );
  }
  console.log(sum);
});
