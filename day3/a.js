const fs = require("fs");

function findAsciiValue(val) {
  let asciiValue = val.charCodeAt(0);

  if (val == val.toLowerCase()) {
    return asciiValue - 96;
  } else {
    return asciiValue - 38;
  }
}

fs.readFile("./input.txt", "utf8", (err, data) => {
  const dataSplited = data.split("\n");
  let sum = 0;
  dataSplited.forEach((line) => {
    let partA = line.substring(0, line.length / 2).split("");
    let partB = line.substring(line.length / 2, line.length).split("");

    let matchFound = partA.filter((element) => partB.includes(element));
    let match = matchFound[0];

    // console.log(
    //   `length: ${line.length} line: ${line} partA: ${partA}  partB: ${partB} match: ${match}`
    // );
    sum += findAsciiValue(match);
  });
  console.log(sum);
});
