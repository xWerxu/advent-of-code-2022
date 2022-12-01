fs = require("fs");

const file = fs.readFile("./input.txt", "utf8", (err, data) => {
  const elvesInventory = data.split("\n\n");
  //   console.log(elvesInventory);

  const caloriesList = [];
  let max = 0;
  elvesInventory.forEach((val) => {
    let caloriesSplited = val.split("\n");
    let count = 0;
    caloriesSplited.forEach((calories) => {
      count += parseInt(calories);
    });

    if (max < count) {
      max = count;
    }
    caloriesList.push(count);
  });
  console.log(caloriesList);
  console.log(`max is ${max}`);
});
